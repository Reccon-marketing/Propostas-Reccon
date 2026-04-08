// Design: Editorial Elegance — CTA final com imagem de fundo
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { useProposal } from "@/contexts/ProposalContext";

export default function ContactSection() {
  const { ref, isInView } = useInView();
  const { proposal } = useProposal();

  return (
    <section id="contato" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.consulting}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f30]/93 via-[#162d44]/88 to-[#162d44]/70" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: CTA text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="h-px w-10 bg-[#d4882a]" />
              <span
                className="text-[#d4882a] text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Próximos Passos
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Pronto para transformar
              <br />
              seus <span className="text-[#d4882a]">resultados</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/60 text-lg leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Estamos prontos para iniciar a implementação do plano de marketing
              da {proposal.clientName.split(" |")[0]}. Entre em contato para alinharmos os próximos
              passos e dar início a essa parceria.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={`mailto:${proposal.contactEmail}`}
                className="inline-flex items-center justify-center gap-3 bg-[#d4882a] text-white px-8 py-4 text-base font-semibold tracking-wide hover:bg-[#c07a24] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Entrar em Contato
                <ArrowRight size={18} />
              </a>
              <a
                href="#escopo"
                className="inline-flex items-center justify-center gap-3 border border-white/20 text-white/75 px-8 py-4 text-base font-medium tracking-wide hover:bg-white/5 hover:text-white transition-all duration-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Rever o Escopo
              </a>
            </motion.div>
          </div>

          {/* Right: Summary card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 p-10">
              <h3
                className="text-white text-lg font-bold mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Resumo da Proposta
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/50 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                    Cliente
                  </span>
                  <span className="text-white text-sm font-medium text-right max-w-[150px] truncate" style={{ fontFamily: "var(--font-body)" }}>
                    {proposal.clientName}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/50 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                    Serviço
                  </span>
                  <span className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                    Marketing Digital
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/50 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                    Frentes de atuação
                  </span>
                  <span className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                    5 itens
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/50 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                    Vigência mínima
                  </span>
                  <span className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                    6 meses
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-[#d4882a]/15 border border-[#d4882a]/30 p-4 flex justify-between items-center">
                  <span className="flex flex-col text-[#d4882a]">
                    <span className="text-[10px] uppercase font-bold tracking-wider mb-1">Pacote Recomendado</span>
                    <span className="text-sm font-semibold truncate pr-2 max-w-[140px]" style={{ fontFamily: "var(--font-body)" }}>
                      {proposal.packages[2]?.name || "Pacote Completo"}
                    </span>
                  </span>
                  <span className="text-[#d4882a] text-lg font-bold flex-shrink-0" style={{ fontFamily: "var(--font-display)" }}>
                    R${proposal.packages[2]?.price || "3.500"}/mês
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
