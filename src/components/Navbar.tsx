"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinksEn = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/technology", label: "Technology" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const navLinksKo = [
  { href: "/ko", label: "홈" },
  { href: "/ko/about", label: "소개" },
  { href: "/ko/technology", label: "기술" },
  { href: "/ko/team", label: "팀" },
  { href: "/ko/contact", label: "문의" },
];

function getAlternatePath(pathname: string): string {
  if (pathname.startsWith("/ko")) {
    // Korean -> English
    const rest = pathname.replace(/^\/ko/, "");
    return rest || "/";
  } else {
    // English -> Korean
    return "/ko" + (pathname === "/" ? "" : pathname);
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isKo = pathname.startsWith("/ko");
  const navLinks = isKo ? navLinksKo : navLinksEn;
  const alternatePath = getAlternatePath(pathname);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={isKo ? "/ko" : "/"} className="flex items-center">
            <Image
              src="/images/logo-horizontal.png"
              alt="EchoSensing"
              width={160}
              height={20}
              className="h-5 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="ml-4 pl-4 border-l border-gray-200 flex items-center gap-1 text-sm">
              <Link
                href={isKo ? alternatePath : pathname}
                className={`px-2 py-1 rounded transition-colors ${
                  !isKo
                    ? "font-bold text-gray-900"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                EN
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href={isKo ? pathname : alternatePath}
                className={`px-2 py-1 rounded transition-colors ${
                  isKo
                    ? "font-bold text-gray-900"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                KR
              </Link>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 px-4 py-2.5 text-sm">
              <Link
                href={isKo ? alternatePath : pathname}
                onClick={() => setIsOpen(false)}
                className={`px-2 py-1 rounded transition-colors ${
                  !isKo
                    ? "font-bold text-gray-900"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                EN
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href={isKo ? pathname : alternatePath}
                onClick={() => setIsOpen(false)}
                className={`px-2 py-1 rounded transition-colors ${
                  isKo
                    ? "font-bold text-gray-900"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                KR
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
