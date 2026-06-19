import SectionHeader from "../common/SectionHeader";
import { BenefitCard } from "..";

const Benefits = () => {
  return (
    <section
      id="benefits-section"
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full overflow-hidden"
    >
      <SectionHeader
        badge="COMMUNITY BENEFICIARIES"
        title="Symmetrical value for every"
        highlightText="Ecosystem Role"
        subtitle="Whether you are studying code, leading an enterprise team, or mentoring juniors, GradAura changes lives."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <BenefitCard
          role="Student"
          themeColor="indigo"
          title="Earn global attention purely through code."
          highlights={[
            "Bypass standard resume screening ATS filters.",
            "A verified profile validating live GitHub activity.",
            "Unlock 1-on-1 code critiques with top industry alumni.",
            "Compete in sponsored Micro-Buildathons for bounties.",
          ]}
          ctaLabel="Build Proof-of-Work"
        />

        <BenefitCard
          role="Alumni"
          themeColor="slate"
          title="Mentor authentic builders minus the spam."
          highlights={[
            "Filter out cold LinkedIn referral request spam.",
            "Only connect when student work aligns with your stack.",
            "Prominent profile badges and exclusive peer networking.",
            "Directly source talent for your own team before recruiters.",
          ]}
          ctaLabel="Join Alumni Network"
        />

        <BenefitCard
          role="Company"
          themeColor="cyan"
          title="Hire verified talent instantly on execution."
          highlights={[
            "Search-By-Code: query exact repository capabilities.",
            "Eliminate resume fraud and cut hiring times by 60%.",
            "Sponsor Bounties to attract active software architects.",
            "Plug-and-play integrations with Greenhouse, Ashby, and Lever.",
          ]}
          ctaLabel="Acquire Enterprise"
        />
      </div>
    </section>
  );
};

export default Benefits;
