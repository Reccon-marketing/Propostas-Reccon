// Design: Editorial Elegance — Footer sóbrio
import { IMAGES } from "@/lib/constants";
import { useProposal } from "@/contexts/ProposalContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { proposal } = useProposal();

  return (
    <footer className="bg-[#0d1f30] py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top divider */}
        <div className="h-px bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + brand */}
          <div className="flex items-center gap-3">
            <img
              src={IMAGES.logo}
              alt="Reccon"
              className="h-7 w-7 object-contain opacity-80"
            />
            <span
              className="text-white/70 text-sm font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              RECCON
            </span>
          </div>

          {/* Info */}
          <p
            className="text-white/30 text-xs text-center md:text-left"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Proposta comercial confidencial — {proposal.clientName} — {currentYear}
          </p>

          {/* Copyright */}
          <p
            className="text-white/20 text-xs"
            style={{ fontFamily: "var(--font-body)" }}
          >
            &copy; {currentYear} Reccon
          </p>
        </div>
      </div>
    </footer>
  );
}
