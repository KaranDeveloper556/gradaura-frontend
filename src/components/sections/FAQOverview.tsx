import { PiTagChevron } from "react-icons/pi";
import SectionHeader from "../../components/common/SectionHeader";
import { AccordionItem } from "../../components";
import { useState } from "react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Student" | "Alumni" | "Company" | "Platform";
}

const faqs: FAQItem[] = [
  // Student Questions (5)
  {
    id: "faq1",
    question:
      "How is GradAura different from traditional platforms like LinkedIn or a standard resume?",
    answer:
      "GradAura replaces text resume claims with practical proof-of-work. Instead of writing lists of skills, students host repositories, log code contributions, present live demos, and interact with verified alumni who review their architectural decisions.",
    category: "Student",
  },
  {
    id: "faq2",
    question: 'What is the "Visibility Score" and how is it calculated?',
    answer:
      "The Visibility Score is a dynamic metric ranging from 1 to 100. It measures the robustness of your identity based on verified factors: GitHub code frequencies, peer-reviewed project architectures, active problem-solving stats, and constructive community contributions.",
    category: "Student",
  },
  {
    id: "faq3",
    question:
      "Do I need deep open-source contributions to start getting noticed?",
    answer:
      "Not at all. You can start by uploading simple, cleanly documented academic projects or single-purpose prototypes. GradAura provides pathways to slowly refine your projects through local alumni code reviews and work feedback.",
    category: "Student",
  },
  {
    id: "faq4",
    question: "Can I import my existing activity from other platforms?",
    answer:
      "Yes! GradAura natively integrates with GitHub, LeetCode, Bechance, and Kaggle to construct a composite chart of your professional learning energy.",
    category: "Student",
  },
  {
    id: "faq5",
    question: "Is it free for students to browse and apply for opportunities?",
    answer:
      "GradAura is 100% free for students. Our goal is to democratize professional placement of talented builders, regardless of university reputation.",
    category: "Student",
  },

  // Alumni Questions (5)
  {
    id: "faq6",
    question: "How much time do alumni need to commit to the network?",
    answer:
      "Alumni involvement is self-paced. You can simply review projects, speak at workshops, or opt-in to answer specific tech stack questions. You can customize your schedule to prevent notification spam.",
    category: "Alumni",
  },
  {
    id: "faq7",
    question: "How does GradAura prevent spam from students seeking referrals?",
    answer:
      "Unlike other platforms, clients cannot copy-paste mass referral requests. A student can only request feedback or referrals if their project stack matches your work profile and their Visibility Score meets your threshold.",
    category: "Alumni",
  },
  {
    id: "faq8",
    question: "Can I refer students directly through the platform?",
    answer:
      "Yes, alumni can generate digital proof-of-referral tokens which students can showcase on their profile, indicating an industry-validated claim.",
    category: "Alumni",
  },
  {
    id: "faq9",
    question: "Are there rewards for active alumnus mentors?",
    answer:
      "Active alumni mentors receive prominent profile badges, invites to private builder events, and networking access with other industry leaders.",
    category: "Alumni",
  },
  {
    id: "faq10",
    question: "Can I use GradAura to source interns for my own team?",
    answer:
      "Absolutely. Many of our alumni utilize their peer-reviews to find talented juniors for their current teams before official company recruiters step in.",
    category: "Alumni",
  },

  // Company Questions (5)
  {
    id: "faq11",
    question:
      "How do we discover candidates on GradAura without relying on resumes?",
    answer:
      "Companies use the Explore Talent and Project marketplaces. You can filter by specific skill combos (e.g. Rust + WebAssembly), minimum peer-verified scores, and specific tech stack deployment examples.",
    category: "Company",
  },
  {
    id: "faq12",
    question: "How are candidate profiles verified?",
    answer:
      "Every candidate profile on GradAura represents active, verified links. Repos, code submissions, live URLs, and peer reviews are checked cryptographically or verified manually by senior alumni mentors.",
    category: "Company",
  },
  {
    id: "faq13",
    question: "Can we post traditional job listings?",
    answer:
      'We support "Build-A-Thons" and "Active Bounties" rather than generic text bulletins. This attracts developers who want to show what they can build to qualify for roles, dramatically improving talent matching.',
    category: "Company",
  },
  {
    id: "faq14",
    question: "What tier plans do you have for companies?",
    answer:
      "GradAura provides a Standard free tier to explore and direct-message student developers, and a Premium Enterprise tier containing custom filter engines, advanced API checks, and dedicated showcase pipelines.",
    category: "Company",
  },
  {
    id: "faq15",
    question: "How is the hiring pipeline integrated with our ATS?",
    answer:
      "GradAura supports plug-in integrations with popular applicant tracking systems like Greenhouse, Lever, and Ashby, forwarding candidate projects and rankings instantly.",
    category: "Company",
  },

  // Platform Questions (5)
  {
    id: "faq16",
    question: "Who can register on GradAura?",
    answer:
      "Any student currently enrolled in higher education, verified alumni working in any registered industry, or company hiring coordinators with corporate credentials.",
    category: "Platform",
  },
  {
    id: "faq17",
    question: "How is student data protected?",
    answer:
      "Privacy is our top priority. Code, data telemetry, and profiles are only made public upon explicit permission of the owner. You can opt-out of search indexing at any time.",
    category: "Platform",
  },
  {
    id: "faq18",
    question:
      "Do you support non-technical branches, such as design or product management?",
    answer:
      "Yes! Business analysis, strategic design, UI/UX, and marketing majors are supported on GradAura through high-fidelity portfolios, Figma walk-throughs, and active campaign mockups.",
    category: "Platform",
  },
  {
    id: "faq19",
    question: "What is the long-term vision of GradAura?",
    answer:
      "We want to align professional entry entirely with execution. By rendering resume inflating obsolete, we seek a global market where talent from anywhere can get hired purely for their output.",
    category: "Platform",
  },
  {
    id: "faq20",
    question: "How do I start a GradAura student guild at my college?",
    answer:
      "Please use our Contact page or register to host an Event. Our developer relations team will provide resources, hoodies, and support structures to get your local build chapter started.",
    category: "Platform",
  },
];

const FAQOverview = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section
      id="faq-preview"
      className="border-t dark:border-slate-900 border-slate-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full overflow-hidden"
    >
      <SectionHeader
        badge="COMMON INQUIRIES"
        title="Frequently Asked"
        highlightText="Questions"
        subtitle="Get quick insights into our verification score logic, database integrity, and candidate privacy."
      />

      <div className="w-full max-w-4xl mx-auto">
        <div className="rounded-2xl border dark:border-slate-800 border-slate-200 dark:bg-slate-900/20 bg-white p-5 md:p-8 shadow-sm">
          <div className="divide-y dark:divide-slate-900 divide-slate-100">
            {faqs.slice(0, 5).map((item, idx) => (
              <AccordionItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === idx}
                onToggle={() => handleToggle(idx)}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            //   onClick={}
            className="px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider dark:bg-slate-900 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950 dark:hover:text-indigo-400 text-slate-600 dark:text-slate-300 border dark:border-slate-800 border-slate-200 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Read All 20+ FAQs</span>
            <PiTagChevron className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQOverview;
