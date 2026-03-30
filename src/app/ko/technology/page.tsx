"use client";

import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const phases = [
  {
    phase: "Phase I",
    period: "현재 – 2027",
    title: "Edge AI 보드",
    subtitle: "즉시 수익 창출, 발사 리스크 제로",
    description:
      "AI 알고리즘이 통합된 SAR 온보드 프로세서로, 기존 위성 버스 플랫폼에 장착됩니다. 자체 위성 발사 없이도 즉시 수익을 창출할 수 있는 제품입니다.",
    specs: [
      "NVIDIA Jetson Orin NX: ~157 TOPS, 10-40W",
      "향후: NVIDIA Jetson AGX Thor: 최대 800 TOPS",
      "실시간 SAR 신호 처리 및 표적 탐지",
      "AP 0.96의 선박 탐지 AI 모델",
    ],
    image: "/images/ai-processor.png",
  },
  {
    phase: "Phase II",
    period: "2027 – 2029",
    title: "SAR 탑재체 & 모듈형 플랫폼",
    subtitle: "고수익 하드웨어",
    description:
      "위상배열 안테나 기술이 적용된 자체 SAR 탑재체와 표준화된 부품의 모듈형 위성 플랫폼을 개발합니다. 위성군 배치에 최적화된 설계입니다.",
    specs: [
      "X-band SAR 탑재체 (항공 시험 완료)",
      "슬롯 / 위상배열 안테나",
      "디지털 위상 변환기 및 T/R 모듈",
      "모듈형 위성 버스 아키텍처",
    ],
    image: "/images/sar-payload.png",
  },
  {
    phase: "Phase III",
    period: "2029+",
    title: "InSAR 위성군 & SaaS/DaaS",
    subtitle: "대규모 반복 수익",
    description:
      "전 세계에 구독 기반 정보 서비스를 제공하는 자체 InSAR 위성군을 구축합니다. 궤도 엣지 인텔리전스의 궁극적 목표입니다.",
    specs: [
      "2035년까지 최대 20기 위성 운용",
      "선박 탐지 및 변화 탐지 서비스",
      "지표 변위 모니터링",
      "DEM 생성 및 상황 인식",
    ],
    image: "/images/insar-platform.png",
  },
];

const applications = [
  {
    title: "국방 및 안보",
    description: "전략 지역 모니터링, 함정 추적, 군사 및 정보 작전을 위한 변화 탐지.",
    priority: "Primary",
    priorityLabel: "핵심",
  },
  {
    title: "인프라 모니터링",
    description: "InSAR 기반 지표 변위 분석을 활용한 교량, 댐, 도로 및 핵심 인프라의 상시 모니터링.",
    priority: "Secondary",
    priorityLabel: "주요",
  },
  {
    title: "해양 감시",
    description: "광활한 해역에서의 실시간 선박 탐지 및 해양 상황 인식.",
    priority: "Secondary",
    priorityLabel: "주요",
  },
  {
    title: "기후 및 환경",
    description: "전천후 SAR 관측으로 산림 벌채, 빙하 이동, 홍수 피해, 환경 변화를 추적합니다.",
    priority: "Tertiary",
    priorityLabel: "부가",
  },
];

const competitors = [
  { name: "ICEYE", country: "핀란드", constellation: "운용 중 (26+)", onboardAI: "No", sarBand: "X-band" },
  { name: "Capella Space", country: "미국", constellation: "운용 중 (10+)", onboardAI: "No", sarBand: "X-band" },
  { name: "Umbra", country: "미국", constellation: "운용 중 (6+)", onboardAI: "No", sarBand: "X-band" },
  { name: "EchoSensing", country: "한국", constellation: "2029+", onboardAI: "Yes", sarBand: "X-band" },
];

export default function KoTechnologyPage() {
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
              기술
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              우주 엣지에서의 인텔리전스
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              3단계 제품 로드맵을 통해 SAR 영상과 온보드 AI 처리를 결합하여,
              즉시 수익 창출부터 위성군 규모의 정보 서비스까지 명확한 경로를 제시합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="작동 원리"
            title="원시 신호에서 실시간 정보까지"
            description="기존 위성은 원시 데이터를 지상국으로 전송합니다. 우리의 접근 방식은 모든 처리를 궤도에서 수행합니다."
          />

          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { step: "01", title: "SAR 촬영", desc: "합성개구레이더(SAR)가 구름 속, 야간, 어떤 기상 조건에서도 고해상도 영상을 촬영합니다." },
                { step: "02", title: "온보드 AI 처리", desc: "Edge AI 프로세서가 원시 SAR 데이터를 궤도에서 직접 분석하여 표적, 변화, 이상을 탐지합니다." },
                { step: "03", title: "정보 전달", desc: "처리된 실행 가능한 정보만 지상으로 전송되어, 지연 시간과 대역폭을 획기적으로 줄입니다." },
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
            tag="제품 로드맵"
            title="시장 리더십을 향한 3단계 전략"
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
            tag="활용 분야"
            title="서비스 대상"
            description="적시에 정확한 지구 정보가 의사결정을 좌우하는 핵심 분야에 기술을 제공합니다."
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
                      {app.priorityLabel}
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
            tag="경쟁 우위"
            title="온보드 AI를 갖춘 유일한 SAR 기업"
            description="경쟁사들이 지상 기반 처리에 의존하는 반면, EchoSensing은 궤도에서 직접 정보를 전달하는 유일한 기업입니다."
          />

          <FadeIn>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="py-4 px-6 text-gray-500 font-medium text-sm">기업</th>
                    <th className="py-4 px-6 text-gray-500 font-medium text-sm">국가</th>
                    <th className="py-4 px-6 text-gray-500 font-medium text-sm">위성군</th>
                    <th className="py-4 px-6 text-gray-500 font-medium text-sm">온보드 AI</th>
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
                          {c.onboardAI === "Yes" ? "Yes" : "No"}
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
                플랫폼 아키텍처
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">모듈형 위성 버스</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                에코센싱은 Momentus(미국)와 파트너십을 통해 실적이 검증된 모듈형 위성
                버스 플랫폼을 활용합니다. M500 버스 호환 공동 모델링 합의를 기반으로,
                에코센싱의 Edge AI 프로세서와 SAR 탑재체를 Momentus 하드웨어에 직접
                통합하여 — 자체 버스 개발 없이 안정적인 위성 플랫폼을 확보했습니다.
              </p>
              <ul className="space-y-2">
                {[
                  "Momentus 실적 검증 버스 플랫폼 기반",
                  "M500 버스 호환 공동 모델링 합의 완료",
                  "에코센싱 Edge AI 프로세서 온보드 통합",
                  "위성군 규모 배치 준비 완료",
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
                  alt="모듈형 위성 버스 플랫폼"
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
