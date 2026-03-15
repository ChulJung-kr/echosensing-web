import Link from "next/link";
import Image from "next/image";

export default function Footer() {
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
              Building the next generation of SAR satellites with onboard AI — delivering real-time Earth intelligence from orbit.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Seeing Earth. Smarter. Faster.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/technology", label: "Technology" },
                { href: "/team", label: "Team" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
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
            <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="mailto:info@echosensing.com" className="hover:text-white transition-colors">
                  info@echosensing.com
                </a>
              </li>
              <li>Yongin, Gyeonggi Province</li>
              <li>Republic of Korea</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} EchoSensing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
