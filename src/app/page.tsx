import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Footer } from "@/components/sections/Footer";
import { ScorePreview } from "@/components/sections/ScorePreview";

const headerData = {
  logo: {
    alt: "LuntiMeter",
    src: "/Luntimeter.svg",
    width: 150,
    height: 40,
  },
  header: {
    navbar: {
      items: [
        {
          _id: "1",
          _title: "Home",
          href: "/",
          sublinks: { items: [] },
        },
        {
          _id: "2",
          _title: "About",
          href: "/about",
          sublinks: { items: [] },
        },

        // ...existing items...
      ],
    },
    rightCtas: {
      items: [
        {
          _id: "cta-1",
          label: "Login",
          href: "/login",
          type: "outline",
        },
        {
          _id: "cta-2",
          label: "Get Started",
          href: "/signup",
          type: "primary",
        },
      ],
    },
  },
};

export default function LuntiMeterLanding() {
  return (
    <div className="min-h-screen">
      <Header logo={headerData.logo} header={headerData.header} />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <CaseStudySection />
      <TargetAudienceSection />
      <ScorePreview />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
