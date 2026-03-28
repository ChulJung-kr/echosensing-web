"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";

const capabilities = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Real-Time Analysis",
    description:
      "Process SAR data directly in orbit using onboard AI — eliminating ground station delays and delivering actionable intelligence in seconds.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "All-Weather, 24/7",
    description:
      "SAR penetrates clouds, darkness, and adverse weather. Monitor any location on Earth regardless of conditions — day or night, rain or shine.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Edge AI in Orbit",
    description:
      "Our onboard processor analyzes raw SAR imagery at the edge — only transmitting refined intelligence, dramatically reducing bandwidth requirements.",
  },
];

const phases = [
  {
    phase: "Phase I",
    period: "Now – 2027",
    title: "Edge AI Board",
    description:
      "SAR onboard processor with AI algorithms, integrated into existing satellite bus platforms. Powered by NVIDIA Jetson for up to 800 TOPS performance.",
    image: "/images/ai-processor.png",
  },
  {
    phase: "Phase II",
    period: "2027 – 2029",
    title: "SAR Payload & Platform",
    description:
      "Proprietary SAR payload with phased array antenna and modular satellite platform. Verified through extensive airborne SAR testing.",
    image: "/images/sar-payload.png",
  },
  {
    phase: "Phase III",
    period: "2029+",
    title: "InSAR Constellation",
    description:
      "Full InSAR satellite constellation delivering SaaS/DaaS intelligence services — ship detection, change detection, surface deformation, and DEM generation.",
    image: "/images/insar-platform.png",
  },
];

const stats = [
  { value: "2017", label: "Founded" },
  { value: "$4.9B", label: "Global SAR Market (2023)" },
  { value: "24/7", label: "All-Weather Monitoring" },
  { value: "<1s", label: "Onboard Processing" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/80" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-cyan-300 bg-cyan-400/10 rounded-full mb-6">
              Next-Generation Earth Observation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Seeing Earth.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Smarter. Faster.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            EchoSensing builds SAR satellites with onboard AI processors that
            analyze Earth data in orbit — delivering real-time intelligence
            without relying on ground stations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/technology"
              className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/25"
            >
              Explore Our Technology
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Intelligence Delayed is Intelligence{" "}
                <span className="text-red-500">Denied</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Traditional satellites capture data and transmit raw imagery to ground
                stations for processing — a pipeline that takes hours to days.
                In defense, disaster response, and critical monitoring, this delay
                can mean the difference between action and inaction.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Our Approach"
            title="Onboard Intelligence"
            description="We move the processing from ground to orbit — turning raw SAR data into actionable intelligence at the edge."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-blue-600 mb-5 group-hover:from-blue-200 group-hover:to-cyan-200 transition-colors">
                    {cap.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{cap.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{cap.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.05}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Product Roadmap */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="Roadmap"
            title="Three Phases to Market Leadership"
            description="A structured approach that balances immediate revenue generation with long-term strategic vision."
          />

          <div className="space-y-16">
            {phases.map((phase, i) => (
              <FadeIn key={phase.phase} delay={0.1}>
                <div
                  className={`flex flex-col ${
                    i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                  } gap-10 items-center`}
                >
                  <div className="flex-1">
                    <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
                      {phase.phase} &middot; {phase.period}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-4">
                      {phase.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-lg">
                      {phase.description}
                    </p>
                  </div>
                  <div className="flex-1 relative">
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to See the Future of Earth Observation?
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
              Whether you&apos;re an investor, partner, or potential customer — we&apos;d
              love to show you what onboard intelligence can do.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/25 text-lg"
            >
              Contact Us
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
