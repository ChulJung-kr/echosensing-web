"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { newsArticles } from "@/data/news";

const capabilities = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "실시간 분석",
    description:
      "온보드 AI를 활용하여 SAR 데이터를 궤도에서 직접 처리하고, 지상국 지연 없이 수초 내에 실행 가능한 정보를 전달합니다.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "전천후, 24시간 관측",
    description:
      "SAR은 구름, 어둠, 악천후를 투과합니다. 주야간, 기상 조건에 관계없이 지구 어디든 모니터링할 수 있습니다.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "궤도 Edge AI",
    description:
      "온보드 프로세서가 원시 SAR 영상을 엣지에서 분석하여, 정제된 정보만 전송함으로써 대역폭 요구량을 획기적으로 줄입니다.",
  },
];

const phases = [
  {
    phase: "Phase I",
    period: "현재 – 2027",
    title: "Edge AI 보드",
    description:
      "AI 알고리즘이 통합된 SAR 온보드 프로세서로, 기존 위성 버스 플랫폼에 장착됩니다. 최대 800 TOPS 성능의 NVIDIA Jetson을 탑재합니다.",
    image: "/images/ai-processor.png",
  },
  {
    phase: "Phase II",
    period: "2027 – 2029",
    title: "SAR 탑재체 & 플랫폼",
    description:
      "온보드 프로세싱 알고리즘을 탑재한 자체 SAR 탑재체와 모듈형 위성 플랫폼을 개발합니다. 항공 SAR 시험을 통해 검증을 완료했습니다.",
    image: "/images/sar-payload.png",
  },
  {
    phase: "Phase III",
    period: "2029+",
    title: "InSAR 위성군",
    description:
      "SaaS/DaaS 기반 정보 서비스를 제공하는 InSAR 위성군을 구축합니다. 선박 탐지, 변화 탐지, 지표 변위, DEM 생성 등의 서비스를 운영합니다.",
    image: "/images/insar-platform.png",
  },
];

const stats = [
  { value: "2017", label: "설립 연도" },
  { value: "24/7", label: "전천후 모니터링" },
  { value: "<1s", label: "온보드 처리 속도" },
  { value: "$4.9B", label: "글로벌 SAR 시장 (2023)" },
];

export default function KoHomePage() {
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
              차세대 지구 관측
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            지구를 보다.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              더 스마트하게. 더 빠르게.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            EchoSensing은 온보드 AI 프로세서를 탑재한 SAR 위성을 개발하여,
            지상국에 의존하지 않고 궤도에서 직접 지구 데이터를 분석하고
            실시간 정보를 전달합니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/ko/technology"
              className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/25"
            >
              기술 알아보기
            </Link>
            <Link
              href="/ko/contact"
              className="px-8 py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              문의하기
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
                지연된 정보는{" "}
                <span className="text-red-500">정보가 아닙니다</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                기존 위성은 데이터를 촬영한 후 원시 영상을 지상국으로 전송하여
                처리합니다. 이 과정은 수 시간에서 수 일이 소요됩니다.
                국방, 재난 대응, 핵심 모니터링 분야에서 이러한 지연은
                대응과 방관의 차이를 만들 수 있습니다.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="접근 방식"
            title="온보드 인텔리전스"
            description="데이터 처리를 지상에서 궤도로 옮겨, 원시 SAR 데이터를 엣지에서 실행 가능한 정보로 변환합니다."
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
            tag="로드맵"
            title="시장 리더십을 향한 3단계 전략"
            description="즉시 수익 창출과 장기 전략 비전을 균형 있게 추진하는 체계적 접근 방식입니다."
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

      {/* Latest News */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="최신 뉴스"
            title="뉴스 & 업데이트"
            description="에코센싱의 글로벌 활동과 주요 소식을 전해드립니다."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {newsArticles.slice(0, 3).map((article, i) => (
              <FadeIn key={article.slug} delay={i * 0.1}>
                <Link href={`/ko/news/${article.slug}`}>
                  <div className="group cursor-pointer">
                    <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm group-hover:shadow-lg transition-shadow h-200">
                      <Image
                        src={article.images[0]}
                        alt={article.title.ko}
                        width={400}
                        height={200}
                        className="w-full h-200 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          article.category === "Conference" ? "text-blue-600 bg-blue-50" :
                          article.category === "Exhibition" ? "text-purple-600 bg-purple-50" :
                          "text-emerald-600 bg-emerald-50"
                        }`}>
                          {article.categoryKo}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mb-2">{article.dateLabel.ko}</p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title.ko}</h3>
                      <p className="text-gray-500 text-sm line-clamp-2">{article.summary.ko}</p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/ko/news" className="inline-block px-8 py-3.5 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
              모든 뉴스 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              지구 관측의 미래를 확인할 준비가 되셨나요?
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
              투자자, 파트너, 잠재 고객 등 누구든 환영합니다.
              온보드 인텔리전스의 가능성을 직접 보여드리겠습니다.
            </p>
            <Link
              href="/ko/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/25 text-lg"
            >
              문의하기
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
