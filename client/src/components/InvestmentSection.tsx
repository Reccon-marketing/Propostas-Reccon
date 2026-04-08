// Design: Editorial Elegance — Seção de investimento com 3 pacotes
// Destaque no pacote Performance Total (mais caro) para induzir a escolha
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { Check, X, AlertCircle, Calendar, Star, Crown } from "lucide-react";
import { PACKAGES as CONSTANT_PACKAGES } from "@/lib/constants";
import { useProposal } from "@/contexts/ProposalContext";

function PackageCard({
  pkg,
  index,
}: {
  pkg: (typeof CONSTANT_PACKAGES)[number];
  index: number;
}) {
  const { ref, isInView } = useInView();
  const isHighlighted = pkg.highlighted;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
      className={`relative flex flex-col ${
        isHighlighted ? "lg:-mt-4 lg:mb-4" : ""
      }`}
    >
      {/* Recommended badge */}
      {isHighlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-[#d4882a] text-white px-5 py-1.5 text-xs font-bold tracking-wider uppercase flex items-center gap-2">
            <Crown size={14} />
            Recomendado
          </div>
        </div>
      )}

      <div
        className={`flex flex-col h-full overflow-hidden transition-shadow duration-300 ${
          isHighlighted
            ? "bg-white shadow-xl border-2 border-[#d4882a] ring-1 ring-[#d4882a]/20"
            : "bg-white shadow-sm border border-[#e8e3dc] hover:shadow-md"
        }`}
      >
        {/* Header */}
        <div
          className={`px-6 lg:px-8 pt-8 pb-6 text-center ${
            isHighlighted ? "bg-[#162d44]" : "bg-[#f5f0eb]"
          }`}
        >
          <p
            className={`text-xs font-semibold tracking-[0.15em] uppercase mb-2 ${
              isHighlighted ? "text-[#d4882a]" : "text-[#4a5e70]"
            }`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {pkg.subtitle}
          </p>
          <h3
            className={`text-2xl font-bold mb-4 ${
              isHighlighted ? "text-white" : "text-[#162d44]"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {pkg.name}
          </h3>
          <div className="flex items-baseline justify-center gap-1">
            <span
              className={`text-4xl lg:text-5xl font-extrabold ${
                isHighlighted ? "text-[#d4882a]" : "text-[#162d44]"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              R${pkg.price}
            </span>
            <span
              className={`text-base font-medium ${
                isHighlighted ? "text-white/50" : "text-[#4a5e70]"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              /mês
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="px-6 lg:px-8 py-5 border-b border-[#e8e3dc]">
          <p
            className="text-[#4a5e70] text-sm leading-relaxed text-center"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {pkg.description}
          </p>
        </div>

        {/* Includes */}
        <div className="px-6 lg:px-8 py-6 flex-1">
          <p
            className="text-[#162d44] text-xs font-bold tracking-wide uppercase mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Incluso
          </p>
          <div className="space-y-2.5 mb-6">
            {pkg.includes.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <Check className="text-[#d4882a] mt-0.5 flex-shrink-0" size={16} />
                <span
                  className="text-[#3a4f63] text-sm leading-snug"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Not includes */}
          {pkg.notIncludes.length > 0 && (
            <>
              <p
                className="text-[#162d44] text-xs font-bold tracking-wide uppercase mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Não incluso
              </p>
              <div className="space-y-2.5">
                {pkg.notIncludes.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <X className="text-[#b0a89e] mt-0.5 flex-shrink-0" size={16} />
                    <span
                      className="text-[#b0a89e] text-sm leading-snug line-through"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* CTA */}
        <div className="px-6 lg:px-8 pb-8">
          <a
            href="#contato"
            className={`block w-full text-center py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200 ${
              isHighlighted
                ? "bg-[#d4882a] text-white hover:bg-[#c07a24]"
                : "border-2 border-[#162d44] text-[#162d44] hover:bg-[#162d44] hover:text-white"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {isHighlighted ? "Escolher Domínio" : `Escolher ${pkg.name}`}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function InvestmentSection() {
  const { ref, isInView } = useInView();
  const { proposal } = useProposal();

  return (
    <section id="investimento" className="py-24 lg:py-32 bg-[#f5f0eb]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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
              Investimento
            </span>
            <span className="h-px w-10 bg-[#d4882a]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl lg:text-5xl font-bold text-[#162d44] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Seu Plano de Atendimento
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#4a5e70] text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Uma proposta objetiva e completa, desenhada especialmente para o seu negócio.
          </motion.p>
        </div>

        {/* Package — grid centered */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
            {proposal.packages.map((pkg, index) => (
              <PackageCard key={pkg.id} pkg={pkg} index={index} />
            ))}
          </div>
        </div>

        {/* Important note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3 bg-white p-5 border border-[#e8e3dc]">
              <Calendar className="text-[#162d44] mt-0.5 flex-shrink-0" size={20} />
              <div>
                <p
                  className="text-[#162d44] text-sm font-semibold mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Vigência Mínima
                </p>
                <p
                  className="text-[#4a5e70] text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  6 meses de contrato
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-5 border border-[#e8e3dc]">
              <Star className="text-[#162d44] mt-0.5 flex-shrink-0" size={20} />
              <div>
                <p
                  className="text-[#162d44] text-sm font-semibold mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Transparência Total
                </p>
                <p
                  className="text-[#4a5e70] text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Relatórios semanais e mensais, além de acesso às métricas
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-[#d4882a] bg-[#d4882a]/5 p-5">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-[#d4882a] mt-0.5 flex-shrink-0" size={20} />
              <div>
                <p
                  className="text-[#162d44] text-sm font-semibold mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Infraestrutura de Terceiros
                </p>
                <div
                  className="text-[#4a5e70] text-sm leading-relaxed space-y-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <p>
                    <strong className="text-[#162d44]">Investimento em Anúncios:</strong> Todo gasto em anúncios (Meta Ads, Google Ads) é de responsabilidade financeira exclusiva do cliente, pago diretamente nas plataformas.
                  </p>
                  <p>
                    <strong className="text-[#162d44]">Ferramentas de CRM:</strong> A contratação das ferramentas de CRM são exclusivamente por parte do cliente. A agência se responsabiliza estritamente pela configuração avançada, implementação e otimização destas plataformas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
