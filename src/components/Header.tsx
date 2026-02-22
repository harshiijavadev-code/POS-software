import { useState } from 'react';
import { CTAButton } from './CTAButton';

const navLinks = [
  { label: 'Home', href: '#home' },
  {
    label: 'Products',
    href: '#products',
    dropdown: true,
  },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <span
              className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center"
              aria-hidden
            >
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </span>
            <span className="font-bold text-gray-900 text-lg">Norcross Tech</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <button
                    type="button"
                    className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1"
                    aria-expanded={productsOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {productsOpen && (
                    <div className="absolute top-full left-0 mt-1 py-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100">
                      <a
                        href="#products"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-t-lg"
                      >
                        All Products
                      </a>
                      <a
                        href="#products"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-b-lg"
                      >
                        Integrations
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 font-medium"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="hidden md:block">
            <CTAButton href="#contact">Get Started</CTAButton>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 px-4">
                <CTAButton href="#contact" className="w-full justify-center">
                  Get Started
                </CTAButton>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
