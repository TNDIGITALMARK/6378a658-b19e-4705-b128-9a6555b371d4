'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const divisions = [
    { name: 'Film Studios', href: '#' },
    { name: 'Television Networks', href: '#' },
    { name: 'Music Labels', href: '#' },
    { name: 'Gaming Studios', href: '#' },
    { name: 'Streaming Platforms', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-premium border-b border-border">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-metallic rounded flex items-center justify-center shadow-cinematic">
              <span className="text-xl font-display font-black text-primary-foreground">E</span>
            </div>
            <span className="text-2xl font-display font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
              ENTERTAINMENT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/content" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              Content Universe
            </Link>
            <Link href="/investors" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              Investor Relations
            </Link>

            {/* Divisions Dropdown */}
            <div className="relative group">
              <button className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                Our Divisions
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-cinematic-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-2">
                  {divisions.map((division) => (
                    <a
                      key={division.name}
                      href={division.href}
                      className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary rounded-md transition-colors"
                    >
                      {division.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <Link href="#" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              News
            </Link>
            <Link href="#" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              Careers
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="px-6 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all shadow-cinematic hover:shadow-cinematic-md">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-cinematic-lg">
          <div className="px-6 py-6 space-y-4">
            <Link href="/" className="block text-base font-semibold text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/content" className="block text-base font-semibold text-foreground hover:text-primary transition-colors">
              Content Universe
            </Link>
            <Link href="/investors" className="block text-base font-semibold text-foreground hover:text-primary transition-colors">
              Investor Relations
            </Link>

            <div className="pt-4 border-t border-border">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Our Divisions</p>
              {divisions.map((division) => (
                <a
                  key={division.name}
                  href={division.href}
                  className="block py-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  {division.name}
                </a>
              ))}
            </div>

            <Link href="#" className="block text-base font-semibold text-foreground hover:text-primary transition-colors">
              News
            </Link>
            <Link href="#" className="block text-base font-semibold text-foreground hover:text-primary transition-colors">
              Careers
            </Link>

            <button className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all shadow-cinematic">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
