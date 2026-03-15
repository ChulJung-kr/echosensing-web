"use client";

import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const milestones = [
  { year: "2017", event: "EchoSensing 설립. 벤처기업 인증 취득." },
  { year: "2018", event: "기업부설연구소 설립. 첫 정부 R&D 과제 착수." },
  { year: "2020", event: "첫 영업이익 달성. SAR 영상 분석 소프트웨어 개발." },
  { year: "2021", event: "KARI(한국항공우주연구원) 협력 과제 수행. 딥러닝 SAR 탐지 모델 배치." },
  { year: "2022", event: "소형위성 기술 검증. SAR 영상 프로세서 개발 완료." },
  { year: "2023", event: "역대 최고 매출 약 10억원 달성. 차세대 위성용 레벨 프로세서 개발." },
  { year: "2024", event: "생산 역량 강화를 위한 주요 장비 투자. 전략적 파트너십 확대." },
  { year: "2025", event: "최대 규모 계약 확보 (연간 약 20억원 이상). Hanwha Systems 및 방위사업청과 파트너십 체결." },
  { year: "2026", event: "주요 방산 파트너와 W-band 안테나 프로젝트 수행. 항공 SAR 시험 검증 완료." },
];

const partners = [
  {
    name: "Momentus Space",
    flag: "\u{1F1FA}\u{1F1F8}",
    country: "미국",
    description: "위성 버스 전문 기업. CEO가 한국을 방문하여 M500 버스 호환 모델링에 합의.",
  },
  {
    name: "NewOrbit Space Ltd",
    flag: "\u{1F1EC}\u{1F1E7}",
    country: "영국",
    description: "VLEO 위성 버스 전문 기업. 2028년 첫 발사 예정. SAR 탑재체 시험 기회 논의.",
  },
  {
    name: "Space Inventor",
    flag: "\u{1F1E9}\u{1F1F0}",
    country: "덴마크",
    description: "유럽 초소형 버스 전문 기업. Phase I Edge AI Board 공급을 위한 주요 파트너.",
  },
  {
    name: "Hanwha Systems",
    flag: "\u{1F1F0}\u{1F1F7}",
    country: "한국",
    description: "온보드 SAR 신호 처리기 약 4.2억원 + 지상 S/W 약 5.4억원 계약 체결.",
  },
  {
    name: "eGIS Korea",
    flag: "\u{1F1F0}\u{1F1F7}",
    country: "한국",
    description: "디지털 트윈 전문 기업. 국가 매핑 플랫폼. SaaS/DaaS 파트너십 협의 중.",
  },
  {
    name: "Beyond Earth Ventures",
    flag: "\u{1F1FA}\u{1F1F8}",
    country: "미국",
    description: "Patrick Beatty — Seed-Series A VC. Space Force, DARPA, NASA 멘토 네트워크.",
  },
];

const marketStats = [
  { label: "글로벌 SAR 시장 (2023)", value: "$4.91B" },
  { label: "SAR 시장 전망 (2030)", value: "$11.63B" },
  { label: "시장 연평균 성장률", value: "22%" },
  { label: "방산 SAR 분야", value: "~$2.0B" },
];

export default function KoAboutPage() {
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
              회사 소개
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              우주에서 바라보는 지구의 눈
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              2017년에 설립된 EchoSensing은 SAR 위성 기술과 인공지능의 융합을
              선도하며, 궤도에서 관측하고, 분석하고, 행동하는 시스템을 구축하고 있습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "관측", description: "어떤 기상 조건에서도 24시간 365일 지구를 촬영할 수 있는 SAR 위성을 배치합니다." },
              { title: "분석", description: "온보드 AI 프로세서를 활용하여 원시 SAR 데이터를 궤도에서 직접 처리하고, 신호를 엣지에서 정보로 변환합니다." },
              { title: "실행", description: "전 세계 국방 기관, 인프라 운영자, 환경 모니터링 기관에 실시간 실행 가능한 정보를 전달합니다." },
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
            tag="연혁"
            title="회사 타임라인"
            description="연구 단계의 스타트업에서 방산급 위성 기술 기업으로의 여정."
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
            tag="기술 검증"
            title="항공 SAR 시험 성공"
            description="한국 민간 기업 최초의 항공 SAR 시험 성공 — 서브미터급 초고해상도 검증 완료."
          />

          {/* Aircraft images */}
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/images/aircraft-01.jpg"
                  alt="SAR 시험 항공기 내부 장비"
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/images/aircraft-02.jpg"
                  alt="SAR 시험 항공기 외부"
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
                { label: "성과", value: "한국 민간 최초 항공 SAR 시험" },
                { label: "해상도", value: "서브미터급 초고해상도" },
                { label: "알고리즘", value: "자동 모션 보상 적용" },
                { label: "검증", value: "온보드 SARP 완료" },
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
                    alt={`항공 SAR 시험 결과 ${n}`}
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
            tag="파트너십"
            title="전략적 파트너십"
            description="미국, 유럽, 한국 전역의 핵심 파트너 및 자문단 확보 — 콜드 스타트 리스크를 해소했습니다."
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
            tag="시장 기회"
            title="급성장하는 시장"
            description="지정학적 경쟁, 발사 비용 혁명, AI 소형화라는 세 가지 수렴적 동인이 전례 없는 기회를 만들고 있습니다."
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
                { title: "지정학적 경쟁", desc: "미중 우주 경쟁으로 국방 예산이 $73B에 달하며, 사상 처음으로 민간 예산을 초과했습니다." },
                { title: "발사 비용 혁명", desc: "SpaceX 재사용 로켓으로 발사 비용이 10배 절감되어, 합리적인 위성군 배치가 가능해졌습니다." },
                { title: "AI 소형화", desc: "Edge AI 프로세서가 우주 환경 호환 폼팩터에서 800+ TOPS를 구현하여, 온보드 인텔리전스가 가능해졌습니다." },
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
