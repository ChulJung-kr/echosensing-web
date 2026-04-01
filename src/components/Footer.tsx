"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isKo = pathname.startsWith("/ko");

  const navLinks = isKo
    ? [
        { href: "/ko/about", label: "소개" },
        { href: "/ko/news", label: "뉴스" },
        { href: "/ko/technology", label: "기술" },
        { href: "/ko/team", label: "팀" },
        { href: "/ko/contact", label: "문의" },
      ]
    : [
        { href: "/about", label: "About" },
        { href: "/news", label: "News" },
        { href: "/technology", label: "Technology" },
        { href: "/team", label: "Team" },
        { href: "/contact", label: "Contact" },
      ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/logo-horizontal.png"
                alt="EchoSensing"
                width={180}
                height={24}
                className="h-6 w-auto invert brightness-200"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {isKo
                ? "온보드 AI를 탑재한 차세대 SAR 위성을 개발하여, 궤도에서 실시간 지구 정보를 전달합니다."
                : "Building the next generation of SAR satellites with onboard AI — delivering real-time Earth intelligence from orbit."}
            </p>
            <p className="text-gray-500 text-sm mt-4">
              {isKo
                ? "지구를 보다. 더 스마트하게. 더 빠르게."
                : "Seeing Earth. Smarter. Faster."}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              {isKo ? "회사" : "Company"}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              {isKo ? "연락처" : "Contact"}
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="mailto:info@echosensing.com" className="hover:text-white transition-colors">
                  info@echosensing.com
                </a>
              </li>
              <li>{isKo ? "경기도 용인시 수지구 포은대로59번길 40" : "40, Poeun-daero 59beon-gil, Suji-gu"}</li>
              <li>{isKo ? "16864" : "Yongin-si, Gyeonggi-do 16864, Korea"}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} EchoSensing.{" "}
            {isKo ? "All rights reserved." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
