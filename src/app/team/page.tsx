"use client";

import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const leadership = [
  {
    name: "Chul H. Jung",
    role: "CEO & Founder",
    education: "Ph.D. Aerospace Electronics, Korea Aerospace University",
    background: [
      "Former KARI (Korea Aerospace Research Institute) researcher",
      "KOMPSAT-3/5 satellite system integration lead",
      "National satellite program background spanning 15+ years",
      "Deep expertise in satellite systems engineering and SAR calibration",
    ],
    initials: "CJ",
  },
  {
    name: "Jung-hwan Song",
    role: "CTO",
    education: "Ph.D. (completed) Aerospace Electronics",
    background: [
      "Former Korea Ocean Research Institute",
      "GOCI satellite payload calibration lead",
      "CAS300-2 ground processor development",
      "Full-cycle payload to ground systems experience",
    ],
    initials: "JS",
  },
  {
    name: "Seung-ha Shin",
    role: "Research Director",
    education: "Ph.D. Electronics, Kyung Hee University",
    background: [
      "Former UTEL research director",
      "UAV and defense radar systems development",
      "Korean military radar projects veteran",
      "RF systems and antenna design specialist",
    ],
    initials: "SS",
  },
];

const researchers = [
  {
    name: "Ji-hwan Hwang",
    role: "Research Team Lead",
    education: "Ph.D. Electronics, Hongik University",
    expertise: "Semiconductor & hardware engineering, former LG Electronics and Seoul National University",
    initials: "JH",
  },
  {
    name: "Kwang-ho Choi",
    role: "Research Team Lead",
    education: "Ph.D. Aerospace Electronics",
    expertise: "Satellite navigation and autonomous navigation systems specialist",
    initials: "KC",
  },
  {
    name: "Bo-ra Kim",
    role: "Research Team Lead",
    education: "M.S. Aerospace Electronics, ETRI",
    expertise: "Radar imaging expert, developed ship detection AI model achieving AP 0.96",
    initials: "BK",
  },
];

const capabilities = [
  "SAR Signal Processing",
  "Onboard AI / Edge Computing",
  "Satellite Navigation",
  "Semiconductor Design",
  "Antenna & RF Systems",
  "Payload Calibration",
  "Ground Systems Engineering",
  "Deep Learning / Computer Vision",
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 rounded-full mb-6">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ph.D.-Level Domain Experts
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Our team brings deep expertise from Korea&apos;s top satellite programs — KARI, ETRI, KAIST —
              covering the full satellite system spectrum from SAR signal processing to onboard AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Leadership"
            title="Executive Team"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((person, i) => (
              <FadeIn key={person.name} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">{person.initials}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">{person.role}</p>
                  <p className="text-gray-400 text-xs mb-5">{person.education}</p>

                  <ul className="space-y-2">
                    {person.background.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-500 text-sm">
                        <svg className="w-3.5 h-3.5 text-blue-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Research"
            title="Research Team Leads"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchers.map((person, i) => (
              <FadeIn key={person.name} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mb-5">
                    <span className="text-lg font-bold text-blue-600">{person.initials}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1">{person.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-1">{person.role}</p>
                  <p className="text-gray-400 text-xs mb-4">{person.education}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{person.expertise}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Expertise"
            title="Technical Capability Matrix"
            description="Our team covers the complete satellite system lifecycle — from payload design to ground-based intelligence delivery."
          />

          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {capabilities.map((cap, i) => (
              <FadeIn key={cap} delay={i * 0.05}>
                <span className="px-5 py-2.5 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default">
                  {cap}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiator */}
      <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-6">
              First Private Company to Perform IOT Calibration on Korean Satellites
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              EchoSensing is the first private Korean company to successfully perform
              In-Orbit Test (IOT) calibration on national satellite programs — a distinction
              that demonstrates our team&apos;s unmatched expertise in satellite systems engineering.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
