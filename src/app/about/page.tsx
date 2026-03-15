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
  "KARI (Korea Aerospace Research Institute)",
  "KAIST (Korea Advanced Institute of Science & Technology)",
  "Hanwha Systems",
  "Defense Acquisition Program Administration",
  "Momentus Space",
  "Beyond Earth Ventures",
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

      {/* Airborne SAR Testing — only images 01 and 02 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Validation"
            title="Airborne SAR Testing"
            description="Our technology is validated through rigorous airborne SAR testing campaigns, proving performance before orbital deployment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[1, 2].map((n, i) => (
              <FadeIn key={n} delay={i * 0.1}>
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src={`/images/airborne-sar-0${n}.png`}
                    alt={`Airborne SAR testing ${n}`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Partnerships"
            title="Trusted Partners"
            description="We collaborate with Korea's leading aerospace and defense institutions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {partners.map((partner, i) => (
              <FadeIn key={partner} delay={i * 0.05}>
                <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 text-center">
                  <p className="text-gray-700 font-medium">{partner}</p>
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
