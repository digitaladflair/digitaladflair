"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody className="bg-white/80 dark:bg-zinc-950/80 border border-zinc-200/50 dark:border-zinc-800/50 shadow-md">
        <Link href="/" className="relative z-50 flex items-center space-x-2.5">
          <div className="w-9 h-9 flex items-center justify-center shrink-0">
            <Image
              src="/favicon.svg"
              alt="Logo"
              width={36}
              height={36}
              className="rounded-full"
            />
          </div>
          <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50 tracking-tight whitespace-nowrap">
            Digital Adflair
          </span>
        </Link>

        <NavItems items={navItems} />

        <NavbarButton
          as={Link}
          href="/contact"
          variant="gradient"
          className="px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider"
        >
          Get Started
        </NavbarButton>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <Link href="/" className="relative z-50 flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <Image
                src="/favicon.svg"
                alt="Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <span className="text-base font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Digital Adflair
            </span>
          </Link>

          <MobileNavToggle
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          <div className="flex flex-col gap-4 w-full">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
                className="text-base text-zinc-600 dark:text-zinc-300 font-medium hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <NavbarButton
              as={Link}
              href="/contact"
              variant="gradient"
              onClick={() => setIsMenuOpen(false)}
              className="w-full mt-2 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-center"
            >
              Get Started
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

