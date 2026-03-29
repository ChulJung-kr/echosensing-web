"use client";

import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const milestones = [
  { year: "2017", event: "EchoSensing founded. Venture certification acquired." },
  { year: "2018", event: "Research institute established. First government R&D projects initiated." },
  { year: "2020", event: "First operating profit achieved. SAR image analysis software developed." },
  { year: "2021", event: "Advanced projects with KARI (Korea Aerospace Research Institute). Deep learning SAR detection models deployed." },
  { year: "2022", event: "Small satellite technology verification. SAR image processor development completed." },
  { year: "2023", event: "Record revenue of ~$800K. Level processor development for next-generation satellites." },
  { year: "2024", event: "Major equipment investments for production capacity. Strategic partnerships expanded." },
  { year: "2025", event: "Largest contracts secured (~$1.5M+ annual). Partnerships with Hanwha Systems and Defense Acquisition Program Administration." },
  { year: "2026", event: "W-band antenna project with major defense partners. Airborne SAR testing validated." },
];

const partners = [
  {
    name: "Momentus Space",
    flag: "🇺🇸",
    country: "USA",
    description: "Satellite bus specialist. CEO visited Korea. M500 bus compatibility co-modeling agreed.",
  },
  {
    name: "NewOrbit Space Ltd",
    flag: "🇬🇧",
    country: "UK",
    description: "VLEO satellite bus specialist. First launch planned for 2028. SAR payload test opportunity discussed.",
  },
  {
    name: "Space Inventor",
    flag: "🇩🇰",
    country: "Denmark",
    description: "European smallest bus specialist. Primary target for Phase I Edge AI Board supply.",
  },
  {
    name: "Hanwha Systems",
    flag: "🇰🇷",
    country: "Korea",
    description: "On-Board SAR signal processor (₩454M) + ground S/W (₩580M) — ₩1.034B total contracted.",
  },
  {
    name: "eGIS Korea",
    flag: "🇰🇷",
    country: "Korea",
    description: "Digital twin specialist. National mapping platform. SaaS/DaaS partnership pending.",
  },
  {
    name: "Beyond Earth Ventures",
    flag: "🇺🇸",
    country: "USA",
    description: "Patrick Beatty — Seed-Series A VC. Space Force · DARPA · NASA mentor network.",
  },
];

const marketStats = [
  { label: "Global SAR Market (2023)", value: "$4.91B" },
  { label: "Projected SAR Market (2030)", value: "$11.63B" },
  { label: "Market CAGR", value: "22%" },
  { label: "Defense SAR Segment", value: "~$2.0B" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 rounded-full mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Earth&apos;s Eyes in Space
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Founded in 2017, EchoSensing is pioneering the convergence of SAR satellite
              technology and artificial intelligence — building systems that observe,
              analyze, and act from orbit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Observe", description: "Deploy SAR satellites capable of imaging Earth through any weather condition, 24 hours a day, 365 days a year." },
              { title: "Analyze", description: "Process raw SAR data directly in orbit using our onboard AI processors — converting signals into intelligence at the edge." },
              { title: "Act", description: "Deliver real-time, actionable insights to defense agencies, infrastructure operators, and environmental monitors worldwide." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-white border border-gray-200 text-center shadow-sm">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Our Journey"
            title="Company Timeline"
            description="From a research-stage startup to a defense-grade satellite technology company."
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-200 to-transparent" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <FadeIn key={m.year} delay={i * 0.05}>
                  <div className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 border-2 border-white z-10 mt-1.5" />

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <span className="text-blue-600 font-bold text-lg">{m.year}</span>
                      <p className="text-gray-600 mt-1">{m.event}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Airborne SAR Test Success */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Technology Validation"
            title="Airborne SAR Test Success"
            description="First successful airborne test by a commercial company in Korea — sub-meter ultra-high resolution validated."
          />

          {/* Aircraft images — side by side like the reference */}
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/images/aircraft-01.jpg"
                  alt="SAR test aircraft interior with equipment"
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/images/aircraft-02.jpg"
                  alt="SAR test aircraft exterior"
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Achievement stats */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Achievement", value: "Korea\u2019s first commercial airborne test" },
                { label: "Resolution", value: "Sub-meter ultra-high resolution" },
                { label: "Algorithm", value: "Auto motion compensation applied" },
                { label: "Validation", value: "On-board SARP completed" },
              ].map((item) => (
                <div key={item.label} className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm text-center">
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">{item.label}</p>
                  <p className="text-blue-600 font-semibold text-sm leading-snug">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* SAR result images */}
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[1, 2].map((n) => (
                <div key={n} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src={`/images/airborne-sar-0${n}.png`}
                    alt={`Airborne SAR test result ${n}`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Partnerships"
            title="Strategic Partnerships"
            description="Key partners & advisors secured across the US, Europe, and Korea — eliminating cold start risk."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {partners.map((partner, i) => (
              <FadeIn key={partner.name} delay={i * 0.05}>
                <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{partner.flag}</span>
                    <div>
                      <h4 className="text-gray-900 font-semibold text-sm">{partner.name}</h4>
                      <p className="text-gray-400 text-xs">{partner.country}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{partner.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Market */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Market Opportunity"
            title="A Rapidly Growing Market"
            description="Three convergent drivers — geopolitical competition, launch cost revolution, and AI miniaturization — are creating an unprecedented opportunity."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {marketStats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="p-6 rounded-xl bg-white border border-gray-200 text-center shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Geopolitical Competition", desc: "US-China space rivalry drives defense budgets to $73B — exceeding civilian budgets for the first time." },
                { title: "Launch Cost Revolution", desc: "SpaceX reusable rockets reduce launch costs by 10x, enabling affordable constellation deployment." },
                { title: "AI Miniaturization", desc: "Edge AI processors now deliver 800+ TOPS in space-compatible form factors — enabling onboard intelligence." },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
                  <h4 className="text-gray-900 font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
