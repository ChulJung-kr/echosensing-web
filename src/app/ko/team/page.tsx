"use client";

import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const leadership = [
  {
    name: "정철호",
    role: "CEO & 창업자",
    education: "한국항공대학교 항공전자공학 박사",
    background: [
      "전 KARI(한국항공우주연구원) 연구원",
      "KOMPSAT-3/5 위성 시스템 통합 책임",
      "15년 이상의 국가 위성 프로그램 경력",
      "위성 시스템 엔지니어링 및 SAR 교정 분야 전문가",
    ],
    initials: "CJ",
  },
  {
    name: "송정환",
    role: "CTO",
    education: "항공전자공학 박사 수료",
    background: [
      "전 한국해양과학기술원 연구원",
      "GOCI 위성 탑재체 교정 책임",
      "CAS300-2 지상 프로세서 개발",
      "탑재체에서 지상 시스템까지 전주기 경험",
    ],
    initials: "JS",
  },
  {
    name: "신승하",
    role: "연구소장",
    education: "경희대학교 전자공학 박사",
    background: [
      "전 UTEL 연구소장",
      "UAV 및 국방 레이더 시스템 개발",
      "한국 군사 레이더 프로젝트 전문가",
      "RF 시스템 및 안테나 설계 전문가",
    ],
    initials: "SS",
  },
];

const researchers = [
  {
    name: "황지환",
    role: "연구팀 리드",
    education: "홍익대학교 전자공학 박사",
    expertise: "반도체 및 하드웨어 엔지니어링 전문가, 전 LG전자 및 서울대학교 근무",
    initials: "JH",
  },
  {
    name: "최광호",
    role: "연구팀 리드",
    education: "항공전자공학 박사",
    expertise: "위성 항법 및 자율 항법 시스템 전문가",
    initials: "KC",
  },
  {
    name: "김보라",
    role: "연구팀 리드",
    education: "ETRI 항공전자공학 석사",
    expertise: "레이더 영상 전문가, AP 0.96 달성 선박 탐지 AI 모델 개발",
    initials: "BK",
  },
];

const capabilities = [
  "SAR 신호 처리",
  "온보드 AI / Edge Computing",
  "위성 항법",
  "반도체 설계",
  "안테나 및 RF 시스템",
  "탑재체 교정",
  "지상 시스템 엔지니어링",
  "딥러닝 / 컴퓨터 비전",
];

export default function KoTeamPage() {
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
              팀 소개
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              박사급 도메인 전문가
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              KARI, ETRI, KAIST 등 한국 최고의 위성 프로그램 출신 전문가들로 구성되어,
              SAR 신호 처리부터 온보드 AI까지 위성 시스템 전 영역을 아우릅니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            tag="리더십"
            title="경영진"
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
            tag="연구"
            title="연구팀 리더"
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
            tag="전문성"
            title="기술 역량 매트릭스"
            description="탑재체 설계부터 지상 기반 정보 전달까지, 위성 시스템 전체 수명주기를 아우르는 팀입니다."
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
              한국 위성 IOT 교정을 수행한 최초의 민간 기업
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              EchoSensing은 국가 위성 프로그램에서 궤도 시험(IOT) 교정을
              성공적으로 수행한 최초의 한국 민간 기업으로, 팀의 독보적인
              위성 시스템 엔지니어링 전문성을 입증합니다.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
