'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // or use Heroicons if preferred
import styles from '../components/Header.module.css';

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <div className={`text-2xl font-bold text-blue-600 ${styles.logo}`}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Site Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex space-x-6 text-gray-700 font-medium ${styles.navbar}`}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileOpen && (
        <div className="md:hidden bg-white shadow px-4 pb-4">
          <nav className="flex flex-col space-y-3 text-gray-700 font-medium">
            <Link href="/" onClick={() => setIsMobileOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setIsMobileOpen(false)}>Services</Link>
            <Link href="/about" onClick={() => setIsMobileOpen(false)}>About</Link>
            <Link href="/portfolio" onClick={() => setIsMobileOpen(false)}>Portfolio</Link>
            <Link href="/blog" onClick={() => setIsMobileOpen(false)}>Blog</Link>
            <Link href="/contact" onClick={() => setIsMobileOpen(false)}>Contact</Link>
            <Link href="/faq" onClick={() => setIsMobileOpen(false)}>FAQ</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
