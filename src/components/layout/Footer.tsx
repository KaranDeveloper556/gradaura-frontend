import { BiCode } from "react-icons/bi";
import { BsGithub, BsX } from "react-icons/bs";
import { LogoIcon } from "../../assets";
import { Link } from "react-router-dom";
import { PiGithubLogo, PiLinkedinLogo, PiXLogo } from "react-icons/pi";
import Button from "../common/Button";

const Footer = () => {
  const footerSections = [
    {
      title: "Explore",
      links: ["Talent Marketplace", "Code & Projects", "Micro-Buildathons"],
    },
    {
      title: "Company",
      links: ["Our Vision & Story", "Get in Touch", "FAQ Hub"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service"],
    },
  ];

  return (
    <footer
      id="footer-section"
      className="bg-background border-t border-border transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 py-12 border-b dark:border-slate-900 border-slate-100">
          {/* Branding Column */}
          <div className="col-span-1 md:col-span-4 flex flex-col space-y-4">
            <Link
              to={"/"}
              id="footer-logo"
              className="flex items-center space-x-2 self-start focus:outline-none cursor-pointer"
            >
              <img src={LogoIcon} alt="logo" className="w-8 h-8" />
              <span className="font-heading font-extrabold text-lg tracking-tight bg-linear-to-r from-slate-900 to-slate-800 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                Grad
                <span className="text-indigo-600 dark:text-indigo-400">
                  Aura
                </span>
              </span>
            </Link>

            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              A premium, proof-of-work professional network. Built to help
              students create functional professional identities and companies
              hire on proof.
            </p>

            <div className="flex items-center space-x-3 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 rounded-lg flex items-center justify-center dark:bg-slate-900 bg-slate-50 border dark:border-slate-800 border-slate-200 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
              >
                <PiGithubLogo className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 rounded-lg flex items-center justify-center dark:bg-slate-900 bg-slate-50 border dark:border-slate-800 border-slate-200 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
              >
                <PiLinkedinLogo className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 rounded-lg flex items-center justify-center dark:bg-slate-900 bg-slate-50 border dark:border-slate-800 border-slate-200 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
              >
                <PiXLogo className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1 md:col-span-2 flex flex-col space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  id="footer-link-talent"
                  // onClick={() => handleNavClick("explore")}
                  className="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  Talent Marketplace
                </button>
              </li>
              <li>
                <button
                  id="footer-link-projects"
                  // onClick={() => handleNavClick("projects")}
                  className="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  Code & Projects
                </button>
              </li>
              <li>
                <button
                  id="footer-link-events"
                  // onClick={() => handleNavClick("events")}
                  className="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  Micro-Buildathons
                </button>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  id="footer-link-about"
                  // onClick={() => handleNavClick("about")}
                  className="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  Our Vision & Story
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  // onClick={() => handleNavClick("contact")}
                  className="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  Get in Touch
                </button>
              </li>
              <li>
                <button
                  id="footer-link-faq"
                  // onClick={() => handleNavClick("faq")}
                  className="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  FAQ Hub
                </button>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  id="footer-link-privacy"
                  // onClick={() => handleNavClick("privacy-policy")}
                  className="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  id="footer-link-terms"
                  // onClick={() => handleNavClick("terms-of-service")}
                  className="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-span-1 md:col-span-2 flex flex-col space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
              Newsletter
            </h4>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-lg text-xs border dark:border-slate-800 border-slate-200 dark:bg-slate-900 bg-slate-50 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <Button variant="solid" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between py-6 space-y-2 md:space-y-0 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} GradAura. All rights reserved. Platform
            optimized for modern proof-of-work.
          </p>
          <p className="flex items-center space-x-1">
            <span>Built by</span>
            <Link
              to={"/"}
              className="font-semibold text-slate-700 dark:text-slate-300"
            >
              GradAura Architecture Guild
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
