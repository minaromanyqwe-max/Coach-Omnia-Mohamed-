"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export const Navbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <nav className={className}>
      {children}
    </nav>
  );
};

export const NavBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

export const NavItems = ({
  items,
  className,
}: {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {items.map((item, idx) => (
        <Link key={idx} href={item.link}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export const MobileNav = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

export const NavbarLogo = () => {
  return (
    <Link href="/" className="font-bold text-white text-xl">
      Mina
    </Link>
  );
};

export const NavbarButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button className={className}>
      {children}
    </button>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} className="text-white text-2xl">
      {isOpen ? "✖" : "☰"}
    </button>
  );
};

export const MobileNavMenu = ({
  children,
  isOpen,
  className,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};