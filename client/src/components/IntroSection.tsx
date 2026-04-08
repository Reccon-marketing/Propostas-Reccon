// Design: Editorial Elegance — Seção introdutória com texto editorial
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { useProposal } from "@/contexts/ProposalContext";

export default function IntroSection() {
  const { ref, isInView } = useInView();
  const { proposal } = useProposal();

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#f5f0eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-10 bg-[#d4882a]" />
              <span
                className="text-[#d4882a] text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Sobre a Proposta
              </span>
            </div>

            <h2
              className="text-3xl lg:text-4xl font-bold text-[#162d44] leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {proposal.introTitle}
            </h2>

            <div
              className="space-y-4 text-[#3a4f63] text-base lg:text-lg leading-relaxed whitespace-pre-line"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <p>{proposal.introText}</p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#e0dbd4]">
              <div>
                <div
                  className="text-2xl lg:text-3xl font-bold text-[#162d44] mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  12
                </div>
                <div
                  className="text-sm text-[#4a5e70]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Frentes de atuação
                </div>
              </div>
              <div>
                <div
                  className="text-2xl lg:text-3xl font-bold text-[#162d44] mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  100%
                </div>
                <div
                  className="text-sm text-[#4a5e70]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Orientado a dados
                </div>
              </div>
              <div>
                <div
                  className="text-2xl lg:text-3xl font-bold text-[#d4882a] mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  360°
                </div>
                <div
                  className="text-sm text-[#4a5e70]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Integração completa
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={IMAGES.marketing}
                alt="Estratégia de marketing"
                className="w-full h-[400px] lg:h-[520px] object-cover"
              />
              {/* Overlay accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4882a]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
