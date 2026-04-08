// Design: Editorial Elegance — Escopo como timeline editorial alternada
import { TRAFFIC_SCOPE_ITEMS, SOCIAL_SCOPE_ITEMS } from "@/lib/constants";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import {
  Settings,
  Target,
  Users,
  Layout,
  Database,
  Link,
  BarChart3,
  LineChart,
  Image,
  Video,
  CalendarDays,
  Search,
  Megaphone,
  Share2,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Settings,
  Target,
  Users,
  Layout,
  Database,
  Link,
  BarChart3,
  LineChart,
  Image,
  Video,
  CalendarDays,
  Search,
};

type ScopeItem = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

function ScopeCard({
  item,
  index,
}: {
  item: ScopeItem;
  index: number;
}) {
  const { ref, isInView } = useInView();
  const Icon = iconMap[item.icon] || Settings;
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Mobile card */}
      <div className="lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative pl-12"
        >
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[#e0dbd4]" />
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="absolute left-[10px] top-6 w-3 h-3 bg-[#d4882a] rounded-full ring-4 ring-[#f5f0eb]"
          />
          <div className="bg-white p-6 shadow-sm border border-[#e8e3dc]">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-3xl font-extrabold text-[#162d44]/10 leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.number}
              </span>
              <div className="w-10 h-10 bg-[#162d44] flex items-center justify-center flex-shrink-0">
                <Icon className="text-[#d4882a]" size={18} />
              </div>
            </div>
            <h3
              className="text-lg font-bold text-[#162d44] mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item.title}
            </h3>
            <p
              className="text-[#4a5e70] text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {item.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Desktop card — alternating layout */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-[1fr_60px_1fr] items-start">
          {/* Left column */}
          <div className={isEven ? "pr-8" : ""}>
            {isEven && (
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 shadow-sm border border-[#e8e3dc] hover:shadow-md transition-shadow duration-300 ml-auto"
                style={{ maxWidth: "500px" }}
              >
                <div className="flex items-center gap-4 mb-4 justify-end">
                  <span
                    className="text-4xl font-extrabold text-[#162d44]/10 leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.number}
                  </span>
                  <div className="w-11 h-11 bg-[#162d44] flex items-center justify-center flex-shrink-0">
                    <Icon className="text-[#d4882a]" size={20} />
                  </div>
                </div>
                <h3
                  className="text-xl font-bold text-[#162d44] mb-3 text-right"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#4a5e70] text-base leading-relaxed text-right"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.description}
                </p>
              </motion.div>
            )}
          </div>

          {/* Center timeline */}
          <div className="flex flex-col items-center relative">
            <div className="w-px bg-[#e0dbd4] flex-1 min-h-[40px]" />
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="w-4 h-4 bg-[#d4882a] rounded-full ring-4 ring-[#f5f0eb] my-2 flex-shrink-0"
            />
            <div className="w-px bg-[#e0dbd4] flex-1 min-h-[40px]" />
          </div>

          {/* Right column */}
          <div className={!isEven ? "pl-8" : ""}>
            {!isEven && (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 shadow-sm border border-[#e8e3dc] hover:shadow-md transition-shadow duration-300"
                style={{ maxWidth: "500px" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="text-4xl font-extrabold text-[#162d44]/10 leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.number}
                  </span>
                  <div className="w-11 h-11 bg-[#162d44] flex items-center justify-center flex-shrink-0">
                    <Icon className="text-[#d4882a]" size={20} />
                  </div>
                </div>
                <h3
                  className="text-xl font-bold text-[#162d44] mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#4a5e70] text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionDivider({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 my-12 lg:my-16"
    >
      <div className="h-px flex-1 bg-[#d4882a]/20" />
      <div className="flex items-center gap-3 bg-[#162d44] px-6 py-3">
        <Icon className="text-[#d4882a]" size={20} />
        <span
          className="text-white text-sm font-bold tracking-wide uppercase"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {label}
        </span>
      </div>
      <div className="h-px flex-1 bg-[#d4882a]/20" />
    </motion.div>
  );
}

export default function ScopeSection() {
  const { ref: headerRef, isInView: headerVisible } = useInView();

  return (
    <section id="escopo" className="py-24 lg:py-32 bg-[#f5f0eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="h-px w-10 bg-[#d4882a]" />
            <span
              className="text-[#d4882a] text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              O que faremos
            </span>
            <span className="h-px w-10 bg-[#d4882a]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl lg:text-5xl font-bold text-[#162d44] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Escopo do Projeto
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#4a5e70] text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Cada etapa foi planejada para construir um ecossistema digital integrado,
            da captação de leads à conversão em vendas e fortalecimento da marca.
          </motion.p>
        </div>

        {/* Seção principal de escopo */}
        {TRAFFIC_SCOPE_ITEMS.length > 0 && (
          <>
            {SOCIAL_SCOPE_ITEMS.length > 0 && (
              <SectionDivider icon={Megaphone} label="Tráfego Pago" />
            )}

            <div className="space-y-6 lg:space-y-0">
              {TRAFFIC_SCOPE_ITEMS.map((item, index) => (
                <ScopeCard key={`traffic-${item.number}`} item={item} index={index} />
              ))}
            </div>
          </>
        )}

        {/* Social Media Section — só exibida se houver itens */}
        {SOCIAL_SCOPE_ITEMS.length > 0 && (
          <>
            <SectionDivider icon={Share2} label="Social Media" />

            <div className="space-y-6 lg:space-y-0">
              {SOCIAL_SCOPE_ITEMS.map((item, index) => (
                <ScopeCard key={`social-${item.number}`} item={item} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
