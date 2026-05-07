// this organism serves as the global navigation header. it is now a client component to handle the local state of the mobile menu overlay.

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';

export const Header = () => {
  // state to track if the mobile menu is active
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // helper to close the menu when a link is clicked so it doesn't stay open on the new page
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="w-full px-8 py-6 flex justify-between items-center border-b border-foreground/10 relative">
      
      {/* z-50 ensures the logo stays above the mobile overlay */}
      <Link href="/" className="font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity z-50">
        portfolio.
      </Link>
      
      {/* desktop navigation (hidden on mobile) */}
      <nav className="hidden md:flex gap-8 items-center text-sm font-medium opacity-80">
        <Link href="/" className="hover:opacity-100 hover:text-primary transition-colors">projects</Link>
        <Link href="/architecture" className="hover:opacity-100 hover:text-primary transition-colors">architecture</Link>
        <Link href="/about" className="hover:opacity-100 hover:text-primary transition-colors">about</Link>
      </nav>

      {/* desktop button (hidden on mobile) */}
      <div className="hidden md:block">
        <Button variant="primary">
          get in touch
        </Button>
      </div>

      {/* mobile hamburger button */}
      <button 
        className="md:hidden z-50 flex flex-col gap-1.5"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-foreground transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* mobile menu full-screen overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          <nav className="flex flex-col items-center gap-8 text-2xl font-medium opacity-80">
            <Link href="/" onClick={closeMenu} className="hover:opacity-100 hover:text-primary transition-colors">projects</Link>
            <Link href="/architecture" onClick={closeMenu} className="hover:opacity-100 hover:text-primary transition-colors">architecture</Link>
            <Link href="/about" onClick={closeMenu} className="hover:opacity-100 hover:text-primary transition-colors">about</Link>
          </nav>
          <div onClick={closeMenu}>
            <Button variant="primary">
              get in touch
            </Button>
          </div>
        </div>
      )}
      
    </header>
  );
};