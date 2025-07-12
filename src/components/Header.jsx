'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../components/Header.module.css'; 

export default function Header() {
  return (
    <header className="w-full shadow bg-white">
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

        
        <nav className={`space-x-6 text-gray-700 font-medium ${styles.navbar}`}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
      </div>
      
    </header>
  );
}
