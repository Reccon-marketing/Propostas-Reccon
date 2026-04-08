// Design: Editorial Elegance — Hero com imagem de fundo e tipografia display
import { IMAGES } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useProposal } from "@/contexts/ProposalContext";

export default function HeroSection() {
  const { proposal } = useProposal();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f30]/95 via-[#162d44]/85 to-[#162d44]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="h-px w-12 bg-[#d4882a]" />
            <span
              className="text-[#d4882a] text-sm font-semibold tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Proposta Comercial
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {proposal.heroTitle}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {proposal.heroSubtitle}
          </motion.p>

          {/* Prepared by */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-3 mb-12"
          >
            <img
              src={IMAGES.logo}
              alt="Reccon"
              className="h-8 w-8 object-contain"
            />
            <span
              className="text-white/55 text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Elaborado por <strong className="text-white/75">Reccon</strong>
            </span>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#escopo"
              className="inline-flex items-center justify-center gap-3 bg-[#d4882a] text-white px-8 py-4 text-base font-semibold tracking-wide hover:bg-[#c07a24] transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Conhecer o Escopo
              <ArrowDown size={18} />
            </a>
            <a
              href="#investimento"
              className="inline-flex items-center justify-center gap-3 border border-white/20 text-white/80 px-8 py-4 text-base font-medium tracking-wide hover:bg-white/5 hover:text-white transition-all duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Ver Investimento
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="text-white/30" size={20} />
        </motion.div>
      </motion.div>

      {/* Side accent line */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#d4882a]/30 to-transparent hidden lg:block" />
    </section>
  );
}
