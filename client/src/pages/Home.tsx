// Design: Editorial Elegance — Proposta como Revista Premium
// Colors: Navy (#162d44), Amber (#d4882a), Off-white (#f5f0eb)
// Typography: Sora (display), Source Sans 3 (body)

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ScopeSection from "@/components/ScopeSection";
import MethodologySection from "@/components/MethodologySection";
import InvestmentSection from "@/components/InvestmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ProposalProvider } from "@/contexts/ProposalContext";

interface HomeProps {
  params?: {
    slug?: string;
  };
}

export default function Home({ params }: HomeProps) {
  return (
    <ProposalProvider slug={params?.slug}>
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <IntroSection />
        <ScopeSection />
        <MethodologySection />
        <InvestmentSection />
        <ContactSection />
        <Footer />
      </div>
    </ProposalProvider>
  );
}
