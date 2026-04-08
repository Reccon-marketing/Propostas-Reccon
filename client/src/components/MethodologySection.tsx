// Design: Editorial Elegance — Seção de metodologia com fundo escuro
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";
import { Zap, Eye, TrendingUp, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    step: "01",
    title: "Captação",
    description:
      "Anúncios estratégicos nas principais plataformas digitais, direcionados ao público ideal do seu escritório, gerando tráfego qualificado de potenciais clientes.",
  },
  {
    icon: Eye,
    step: "02",
    title: "Conversão",
    description:
      "Landing pages otimizadas e formulários inteligentes que transformam visitantes em leads qualificados, alimentando automaticamente o CRM com informações valiosas.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Otimização",
    description:
      "Análise contínua de dados e métricas para refinar campanhas, processos e estratégias, garantindo que cada real investido gere o máximo retorno possível.",
  },
];

export default function MethodologySection() {
  const { ref, isInView } = useInView();

  return (
    <section id="metodologia" className="relative py-24 lg:py-32 bg-[#162d44] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-[0.07]">
        <img
          src={IMAGES.crm}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
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
              Como trabalhamos
            </span>
            <span className="h-px w-10 bg-[#d4882a]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Nossa Metodologia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/55 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            O foco do tráfego pago é gerar oportunidades para o time comercial,
            compilando dados para ajustar o marketing e o processo de vendas.
          </motion.p>
        </div>

        {/* Pillars with connecting arrows */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative"
            >
              <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 p-8 lg:p-10 h-full">
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-[#d4882a] text-xs font-bold tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Etapa {pillar.step}
                  </span>
                  <div className="w-12 h-12 bg-[#d4882a]/15 flex items-center justify-center">
                    <pillar.icon className="text-[#d4882a]" size={24} />
                  </div>
                </div>

                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-white/50 text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {pillar.description}
                </p>
              </div>

              {/* Arrow between cards (desktop) */}
              {index < pillars.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 lg:-right-5 -translate-y-1/2 z-10">
                  <ArrowRight className="text-[#d4882a]/40" size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Feature image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative overflow-hidden"
        >
          <img
            src={IMAGES.analytics}
            alt="Dashboard de analytics"
            className="w-full h-[260px] sm:h-[340px] lg:h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#162d44] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4882a]" />
        </motion.div>
      </div>
    </section>
  );
}
