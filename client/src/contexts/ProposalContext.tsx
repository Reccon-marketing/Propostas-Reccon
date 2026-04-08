import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { PACKAGES as DEFAULT_PACKAGES, CLIENT_NAME as DEFAULT_CLIENT_NAME } from "../lib/constants";

// Função nativa robusta para ler TSV (Tab-Separated Values) gerado pelo Google Sheets
// O TSV é imune a vírgulas no meio do texto.
function parseTSV(tsvText: string) {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentCell = '';
  let inQuotes = false;

  for (let i = 0; i < tsvText.length; i++) {
    const char = tsvText[i];
    const nextChar = tsvText[i + 1];

    if (inQuotes) {
      if (char === '"' && nextChar === '"') {
        currentCell += '"';
        i++; // Pula o próximo quote escapado
      } else if (char === '"') {
        inQuotes = false;
      } else {
        currentCell += char;
      }
    } else {
      if (char === '"' && currentCell === '') {
        inQuotes = true;
      } else if (char === '\t') {
        currentRow.push(currentCell);
        currentCell = '';
      } else if (char === '\r' && nextChar === '\n') {
        currentRow.push(currentCell);
        rows.push(currentRow);
        currentRow = [];
        currentCell = '';
        i++; // Pula o \n
      } else if (char === '\n') {
        currentRow.push(currentCell);
        rows.push(currentRow);
        currentRow = [];
        currentCell = '';
      } else {
        currentCell += char;
      }
    }
  }
  if (currentCell !== '' || currentRow.length > 0) {
    currentRow.push(currentCell);
    rows.push(currentRow);
  }
  
  if (rows.length < 2) return [];

  const headers = rows[0].map(h => h.trim());
  const result: any[] = [];
  
  for (let i = 1; i < rows.length; i++) {
    const rowObj: any = {};
    let emptyCount = 0;
    headers.forEach((header, index) => {
      rowObj[header] = rows[i][index] ? rows[i][index].trim() : "";
      if (!rowObj[header]) emptyCount++;
    });
    // Ignora linhas totalmente vazias
    if (emptyCount < headers.length) {
      result.push(rowObj);
    }
  }
  return result;
}

// Formato dos dados extraídos do Google Sheets
export interface ProposalData {
  clientName: string;
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introText: string;
  contactEmail: string;
  packages: typeof DEFAULT_PACKAGES;
}

const DEFAULT_PROPOSAL: ProposalData = {
  clientName: DEFAULT_CLIENT_NAME,
  heroTitle: "Marketing digital",
  heroSubtitle: `Estratégias validadas para atrair clientes qualificados para o escritório da ${DEFAULT_CLIENT_NAME}. Nossa metodologia integra tráfego pago, CRM inteligente e uma presença digital que gera autoridade e confiança.`,
  introTitle: "O Cenário Ideal para o Crescimento do Seu Escritório",
  introText: "Entendemos que o seu objetivo é atrair clientes de alto valor. O mercado jurídico digital exige posicionamento preciso e inteligência na captação de leads, e nossa proposta foca em não apenas atrair, mas qualificar e converter potenciais clientes em consultas reais.",
  contactEmail: "contato@reccon.com.br",
  packages: DEFAULT_PACKAGES
};

interface ProposalContextType {
  proposal: ProposalData;
  isLoading: boolean;
  error: string | null;
}

const ProposalContext = createContext<ProposalContextType>({
  proposal: DEFAULT_PROPOSAL,
  isLoading: false,
  error: null,
});

// URL DO GOOGLE SHEETS (PUBLISHED TSV) - O CLIENTE DEVERÁ INSERIR AQUI
// Basta colar a URL do TSV Público entre as aspas abaixo:
export const GOOGLE_SHEETS_TSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQkYCgZXaTresWQhGRi0nhze9jkXVvxkglcINjVO188hknkHlYymBGRqBF3wIuWNX9q5MQP9wzxPBL4/pub?output=tsv";

export function ProposalProvider({ children, slug }: { children: ReactNode, slug?: string }) {
  const [proposal, setProposal] = useState<ProposalData>(DEFAULT_PROPOSAL);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Modo Código Local: Não usar o Google Sheets. Carregar instantaneamente a proposta montada nas constantes.
    setProposal(DEFAULT_PROPOSAL);
    setIsLoading(false);
  }, [slug]);

  return (
    <ProposalContext.Provider value={{ proposal, isLoading, error }}>
      {children}
    </ProposalContext.Provider>
  );
}

export function useProposal() {
  return useContext(ProposalContext);
}
