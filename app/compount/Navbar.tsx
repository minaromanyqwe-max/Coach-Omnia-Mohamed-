"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../compount/ui/resizable-navbar";

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "../../components/theme-toggle";
import LanguageSwitcher from "../../components/language-switcher";

export function NavbarDemo() {
  const t = useTranslations("Navbar");
  const navItems = [
    { name: t("home"), link: "/" },
    { name: t("about"), link: "#about" },
    { name: t("stories"), link: "#Stories" },
    { name: t("reviews"), link: "#reviews" },
    { name: t("subscribe"), link: "#pricing" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50 px-2 sm:px-4 py-4 md:px-8 pointer-events-none">
      <Navbar className="mx-auto max-w-5xl rounded-2xl border border-black/10 dark:border-white/[0.06] bg-white/70 dark:bg-[#090514]/60 backdrop-blur-md transition-all duration-300 shadow-xl dark:shadow-[0_12px_40px_-15px_rgba(0,0,0,0.7)] pointer-events-auto">
        {/* Desktop Navigation */}
        <NavBody className="hidden md:flex items-center justify-between px-6 py-2.5">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-[#00c6ff] to-[#7b2ff7] bg-clip-text text-transparent tracking-wide font-sans"
          >
            Omnia
          </Link>

          {/* Nav Items */}
          <NavItems
            items={navItems}
            className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
          />

          {/* Desktop Call To Action Button & Toggles */}
          <div className="flex items-center gap-3 lg:gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="#pricing"
              className="bg-gradient-to-r from-[#00c6ff] to-[#7b2ff7] text-white hover:opacity-90 transition-all duration-200 shadow-[0_0_15px_rgba(0,198,255,0.4)] active:scale-95 text-sm font-bold px-5 py-2.5 rounded-xl block cursor-pointer"
            >
              {t("subscribe")}
            </a>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="block md:hidden w-full pointer-events-auto">
          <MobileNavHeader className="px-3 py-3 flex items-center justify-between">
            {/* Mobile Logo */}
            <Link
              href="/"
              className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-[#00c6ff] to-[#7b2ff7] bg-clip-text text-transparent tracking-wide font-sans"
            >
              Omnia
            </Link>

            {/* Toggle Button & Theme/Lang */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              <LanguageSwitcher />
              <ThemeToggle />
              <div className="text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 p-1.5 rounded-lg transition-colors cursor-pointer flex items-center justify-center">
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </div>
            </div>
          </MobileNavHeader>

          {/* Mobile Menu Content */}
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="flex flex-col gap-5 p-6 bg-white/98 dark:bg-[#090514]/98 backdrop-blur-xl border-t border-white/[0.05] shadow-2xl rounded-b-2xl pointer-events-auto"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors py-2.5 border-b border-black/[0.05] dark:border-white/[0.02]"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}

            {/* Mobile Call To Action Button */}
            <div className="flex w-full flex-col gap-4 pt-2">
              <a
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gradient-to-r from-[#00c6ff] to-[#7b2ff7] text-white hover:opacity-90 transition-all duration-200 shadow-[0_0_15px_rgba(0,198,255,0.4)] active:scale-95 text-sm font-bold px-5 py-2.5 rounded-xl block text-center cursor-pointer"
              >
                {t("subscribe")}
              </a>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}