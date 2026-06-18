import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BiChevronDown, BiMenu, BiX, BiMoon, BiSun } from "react-icons/bi";
import { GiSparkles } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import { useTheme } from "../../hook/useTheme";
import { NavLink, useMatch } from "react-router-dom";
import { LogoIcon } from "../../assets";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const primaryNavItems = [
    { label: "Explore", slug: "/" },
    { label: "Features", slug: "/features" },
    { label: "Projects", slug: "/projects" },
    { label: "Events", slug: "/events" },
  ];
  const secondaryNavItems = [
    { label: "About", slug: "/about" },
    { label: "FAQ", slug: "/faq" },
    { label: "Contact", slug: "/contact" },
  ];

  const navItems = [...primaryNavItems, ...secondaryNavItems];
  const aboutMatch = useMatch("/about");
  const faqMatch = useMatch("/faq");
  const contactMatch = useMatch("/contact");
  const moreIsActive = !!(aboutMatch || faqMatch || contactMatch);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "dark:bg-[#020617]/80 bg-white/80 backdrop-blur-md py-3 dark:border-slate-800/80 border-slate-200/80 shadow-sm"
          : "bg-transparent py-5 dark:border-gray-700 border-gray-300"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <NavLink
            to="/"
            id="nav-logo"
            className="flex items-center space-x-2.5 group focus:outline-none cursor-pointer"
          >
            <img src={LogoIcon} alt="logo" className="w-9 h-9" />
            <span className="font-heading font-extrabold text-xl tracking-tight bg-linear-to-r from-slate-900 to-slate-800 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              Grad
              <span className="text-indigo-600 dark:text-indigo-400">Aura</span>
            </span>
          </NavLink>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center space-x-1 relative">
            {primaryNavItems.map((item) => (
              <NavLink
                key={item.slug}
                id={`nav-${item.slug}`}
                to={item.slug}
                end={item.slug === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-indigo-50/50 dark:bg-indigo-950/30 rounded-lg -z-10 border border-indigo-100/30 dark:border-indigo-900/10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* MORE DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setMoreDropdownOpen(true)}
              onMouseLeave={() => setMoreDropdownOpen(false)}
            >
              <button
                id="nav-more-btn"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer flex items-center gap-1 focus:outline-none ${
                  moreIsActive
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                }`}
              >
                <span>More</span>
                <BiChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${moreDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {moreDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-1 w-44 rounded-xl shadow-lg bg-white dark:bg-[#070b1a] border border-slate-200/80 dark:border-slate-800/80 py-1.5 z-50 text-left"
                  >
                    {secondaryNavItems.map((item) => (
                      // ✅ Was <button> — now NavLink with isActive
                      <NavLink
                        key={item.slug}
                        id={`nav-${item.slug}`}
                        to={item.slug}
                        className={(isActive) =>
                          `block w-full text-left px-4 py-2 text-sm font-medium transition-colors cursor-pointer hover:bg-slate-50 dark:hover:bg-[#121833]/60 ${
                            isActive
                              ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/20"
                              : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                          }`
                        }
                        onClick={() => setMoreDropdownOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CONTROLS & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-indigo-400 dark:hover:bg-slate-900/60 transition-colors focus:outline-none cursor-pointer"
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <BiSun className="w-4 h-4" />
              ) : (
                <BiMoon className="w-4 h-4" />
              )}
            </button>

            <button
              id="nav-join-btn"
              className="px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide uppercase bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white shadow-sm flex items-center gap-1.5 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Get Started</span>
              <GiSparkles className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              id="theme-toggle-mobile"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none cursor-pointer"
            >
              {isDark ? (
                <BiSun className="w-4 h-4" />
              ) : (
                <BiMoon className="w-4 h-4" />
              )}
            </button>

            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? (
                <BiX className="w-6 h-6" />
              ) : (
                <BiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t dark:border-slate-800 border-slate-200 dark:bg-[#020617] bg-white"
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5">
              {navItems.map((item) => (
                // ✅ Was <button> — now NavLink with isActive
                <NavLink
                  key={item.slug}
                  id={`mobile-nav-${item.slug}`}
                  to={item.slug}
                  end={item.slug === "/"}
                  className={({ isActive }) =>
                    `block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/60"
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-4 border-t dark:border-slate-900 border-slate-100 px-4">
                <button
                  id="mobile-nav-cta"
                  className="w-full text-center px-4 py-3 rounded-xl text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Get Started</span>
                  <BsArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
