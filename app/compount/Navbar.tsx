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

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Features", link: "#features" },
    { name: "Reviews", link: "#reviews" },
    { name: "Pricing", link: "#pricing" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50 px-4 py-4 md:px-8 pointer-events-none">
      
      <Navbar className="mx-auto max-w-5xl rounded-2xl border border-white/[0.06] bg-[#090514]/40 backdrop-blur-md transition-all duration-300 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.7)] pointer-events-auto">

        {/* Desktop Navigation */}
        <NavBody className="hidden md:flex items-center justify-between px-6 py-2.5">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-[#00c6ff] to-[#7b2ff7] bg-clip-text text-transparent tracking-wide"
          >
            Omnia
          </Link>

          {/* Nav Items */}
          <NavItems
            items={navItems}
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
          />

          {/* Button */}
          <div className="flex items-center gap-4">
            <Link
              href="#pricing"
              className="bg-gradient-to-r from-[#00c6ff] to-[#7b2ff7] text-white hover:opacity-90 transition-all duration-200 shadow-[0_0_15px_rgba(0,198,255,0.4)] active:scale-95 text-sm font-bold px-5 py-2.5 rounded-xl block"
            >
              Subscribe Now
            </Link>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="block md:hidden w-full">

          <MobileNavHeader className="px-4 py-3 flex items-center justify-between">

            {/* Mobile Logo */}
            <Link
              href="/"
              className="text-2xl font-extrabold bg-gradient-to-r from-[#00c6ff] to-[#7b2ff7] bg-clip-text text-transparent tracking-wide"
            >
              Omnia
            </Link>

            {/* Toggle */}
            <div className="text-white hover:bg-white/5 p-1.5 rounded-lg transition-colors cursor-pointer flex items-center justify-center">
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() =>
                  setIsMobileMenuOpen(!isMobileMenuOpen)
                }
              />
            </div>
          </MobileNavHeader>

          {/* Mobile Menu */}
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="flex flex-col gap-5 p-6 bg-[#090514]/98 backdrop-blur-xl border-t border-white/[0.05] shadow-2xl rounded-b-2xl pointer-events-auto"
          >

            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-base font-medium text-neutral-300 hover:text-indigo-400 transition-colors py-2.5 border-b border-white/[0.02]"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}

<div className="flex w-full flex-col gap-4 pt-2">
<a 
  href="https://wa.me/201021996070" 
  target="_blank" 
  rel="noopener noreferrer"
  className="w-full text-center bg-gradient-to-r from-[#00c6ff] to-[#7b2ff7] text-white py-3 font-bold rounded-xl text-base block"
>
  Subscribe Now
</a>
</div>          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}