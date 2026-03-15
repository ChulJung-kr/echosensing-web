"use client";

import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const phases = [
  {
    phase: "Phase I",
    period: "Now – 2027",
    title: "Edge AI Board",
    subtitle: "Immediate Revenue, Zero Launch Risk",
    description:
      "Our SAR onboard processor integrates AI algorithms directly into existing satellite bus platforms. This product generates immediate revenue without requiring our own satellite launch.",
    specs: [
      "NVIDIA Jetson Orin NX: ~157 TOPS, 10-40W",
      "Future: NVIDIA Jetson AGX Thor: up to 800 TOPS",
      "Real-time SAR signal processing & target detection",
      "Ship detection AI model with AP 0.96",
    ],
    image: "/images/ai-processor.png",
  },
  {
    phase: "Phase II",
    period: "2027 – 2029",
    title: "SAR Payload & Modular Platform",
    subtitle: "High-Margin Hardware",
    description:
      "We develop our own SAR payload with phased array antenna technology and a modular satellite platform with standardized components — ready for constellation deployment.",
    specs: [
      "X-band SAR payload (airborne-tested)",
      "Slot / Phased array antenna",
      "Digital phase shifters & T/R modules",
      "Modular satellite bus architecture",
    ],
    image: "/images/sar-payload.png",
  },
  {
    phase: "Phase III",
    period: "2029+",
    title: "InSAR Constellation & SaaS/DaaS",
    subtitle: "Recurring Revenue at Scale",
    description:
      "A proprietary InSAR satellite constellation delivering subscription-based intelligence services worldwide — the ultimate goal of orbital-edge intelligence.",
    specs: [
      "Up to 20 satellites by 2035",
      "Ship detection & change detection services",
      "Surface deformation monitoring",
      "DEM generation & situation awareness",
    ],
    image: "/images/insar-platform.png",
  },
];

const applications = [
  {
    title: "Defense & National Security",
    description: "Strategic area monitoring, vessel tracking, and change detection for military and intelligence operations.",
    priority: "Primary",
  },
  {
    title: "Infrastructure Monitoring",
    description: "Continuous monitoring of bridges, dams, roads, and critical infrastructure using InSAR-based surface deformation analysis.",
    priority: "Secondary",
  },
  {
    title: "Maritime Surveillance",
    description: "Real-time ship detection and maritime domain awareness across vast ocean areas.",
    priority: "Secondary",
  },
  {
    title: "Climate & Environment",
    description: "Track deforestation, glacier movement, flood damage, and environmental changes with all-weather SAR observation.",
    priority: "Tertiary",
  },
];

const competitors = [
  { name: "ICEYE", country: "Finland", constellation: "Yes (26+)", onboardAI: "No", sarBand: "X-band" },
  { name: "Capella Space", country: "USA", constellation: "Yes (10+)", onboardAI: "No", sarBand: "X-band" },
  { name: "Umbra", country: "USA", constellation: "Yes (6+)", onboardAI: "No", sarBand: "X-band" },
  { name: "EchoSensing", country: "Korea", constellation: "2029+", onboardAI: "Yes", sarBand: "X-band" },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 rounded-full mb-6">
              Technology
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Intelligence at the Edge of Space
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Our three-phase product roadmap combines SAR imaging with onboard AI
              processing — delivering a clear path from immediate revenue to constellation-scale intelligence services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="How It Works"
            title="From Raw Signal to Real-Time Intelligence"
            description="Traditional satellites transmit raw data to ground stations. Our approach processes everything in orbit."
          />

          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { step: "01", title: "SAR Imaging", desc: "Synthetic Aperture Radar captures high-resolution imagery through clouds, at night, in any weather." },
                { step: "02", title: "Onboard AI Processing", desc: "Our edge AI processor analyzes the raw SAR data directly in orbit — detecting targets, changes, and anomalies." },
                { step: "03", title: "Intelligence Delivery", desc: "Only processed, actionable intelligence is transmitted to the ground — dramatically reducing latency and bandwidth." },
              ].map((item, i) => (
                <div key={item.step} className="relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <span className="text-5xl font-bold text-gray-100 absolute top-4 right-6">{item.step}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 text-gray-300 z-10">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Product Phases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Product Roadmap"
            title="Three Phases to Market Leadership"
          />

          <div className="space-y-24">
            {phases.map((phase, i) => (
              <FadeIn key={phase.phase}>
                <div className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase text-white bg-blue-600 rounded-full">
                        {phase.phase}
                      </span>
                      <span className="text-gray-400 text-sm">{phase.period}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                    <p className="text-blue-600 font-medium mb-4">{phase.subtitle}</p>
                    <p className="text-gray-500 leading-relaxed mb-6">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.specs.map((spec) => (
                        <li key={spec} className="flex items-start gap-2 text-gray-600 text-sm">
                          <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm">
                      <Image
                        src={phase.image}
                        alt={phase.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Applications"
            title="Who We Serve"
            description="Our technology serves critical sectors where timely, accurate Earth intelligence drives decisions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app, i) => (
              <FadeIn key={app.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{app.title}</h3>
                    <span className={`px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded-full ${
                      app.priority === "Primary"
                        ? "text-blue-600 bg-blue-50"
                        : app.priority === "Secondary"
                        ? "text-cyan-600 bg-cyan-50"
                        : "text-gray-500 bg-gray-100"
                    }`}>
                      {app.priority}
                    </span>
                  </div>
                  <p className="text-gray-500 leading-relaxed">{app.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Competitive Edge"
            title="The Only SAR Company with Onboard AI"
            description="While competitors rely on ground-based processing, EchoSensing is the only company delivering intelligence directly from orbit."
          />

          <FadeIn>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="py-4 px-6 text-gray-500 font-medium text-sm">Company</th>
                    <th className="py-4 px-6 text-gray-500 font-medium text-sm">Country</th>
                    <th className="py-4 px-6 text-gray-500 font-medium text-sm">Constellation</th>
                    <th className="py-4 px-6 text-gray-500 font-medium text-sm">Onboard AI</th>
                    <th className="py-4 px-6 text-gray-500 font-medium text-sm">SAR Band</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((c) => (
                    <tr
                      key={c.name}
                      className={`border-b border-gray-100 ${c.name === "EchoSensing" ? "bg-blue-50/50" : ""}`}
                    >
                      <td className={`py-4 px-6 font-medium ${c.name === "EchoSensing" ? "text-blue-600" : "text-gray-900"}`}>
                        {c.name}
                      </td>
                      <td className="py-4 px-6 text-gray-500">{c.country}</td>
                      <td className="py-4 px-6 text-gray-500">{c.constellation}</td>
                      <td className="py-4 px-6">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          c.onboardAI === "Yes"
                            ? "text-green-700 bg-green-100"
                            : "text-gray-400 bg-gray-100"
                        }`}>
                          {c.onboardAI}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-500">{c.sarBand}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Bus Platform */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <FadeIn className="flex-1">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 rounded-full mb-4">
                Platform Architecture
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Modular Satellite Bus</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Our modular satellite platform uses standardized components, enabling rapid
                assembly and cost-effective constellation deployment. Each bus integrates
                our Edge AI processor and is designed for compatibility with multiple
                SAR payload configurations.
              </p>
              <ul className="space-y-2">
                {[
                  "Standardized modular architecture",
                  "Compatible with multiple payload types",
                  "Integrated Edge AI processing",
                  "Designed for constellation-scale production",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn className="flex-1" delay={0.2}>
              <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                <Image
                  src="/images/bus-platform.png"
                  alt="Modular Satellite Bus Platform"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
