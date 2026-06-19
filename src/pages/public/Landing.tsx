import {
  BenefitsSection,
  ComparisonSection,
  CTA,
  FAQOverviewSection,
  FeaturesOverviewSection,
  HowItWorksSection,
  LandingHeroSection,
  ProblemSection,
  SocialProofMarqueeSection,
  StatSection,
} from "../../components";

const Landing = () => {
  return (
    <main>
      <LandingHeroSection />
      <SocialProofMarqueeSection />
      <ProblemSection />
      <ComparisonSection />
      <FeaturesOverviewSection />
      <HowItWorksSection />
      <BenefitsSection />
      <StatSection />
      <FAQOverviewSection />
      <CTA />
    </main>
  );
};

export default Landing;
