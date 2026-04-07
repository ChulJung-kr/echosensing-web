export interface NewsArticle {
  slug: string;
  date: string;
  dateLabel: { en: string; ko: string };
  category: "Conference" | "Exhibition" | "Contract";
  categoryKo: string;
  title: { en: string; ko: string };
  summary: { en: string; ko: string };
  location: { en: string; ko: string };
  images: string[];
  content: {
    en: string[];
    ko: string[];
  };
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "space-pioneer-mimo-sar-2026",
    date: "2026-04",
    dateLabel: { en: "April 2026", ko: "2026년 4월" },
    category: "Contract",
    categoryKo: "계약",
    title: {
      en: "EchoSensing Selected for Korea's Space Pioneer Program — MIMO SAR Digital Beamforming Technology Development",
      ko: "에코센싱, 국가 스페이스파이오니어 사업 참여기업 선정 — MIMO SAR 디지털 빔포밍 기술 개발",
    },
    summary: {
      en: "Selected as a participating company in the national Space Pioneer Program for MIMO-based high-resolution wide-area SAR payload digital beamforming technology development. Responsible for SAR signal processing algorithm development.",
      ko: "스페이스파이오니어 사업의 MIMO 기반 고해상도 광역 SAR 탑재체용 디지털 빔포밍 기술 개발 과제에 참여기업으로 선정. SAR 신호처리 알고리즘 개발 담당.",
    },
    location: { en: "Korea", ko: "한국" },
    images: ["/images/news/space-pioneer-2026-01.webp"],
    content: {
      en: [
        "EchoSensing has been selected as a participating company in the national Space Pioneer Program (스페이스파이오니어사업), joining a consortium tasked with developing MIMO-based high-resolution wide-area SAR payload digital beamforming technology.",
        "The Space Pioneer Program is a 10-year national R&D initiative (2021–2030) led by the Korea AeroSpace Administration (KASA), aimed at developing 16 key space technologies across launch vehicles, satellite platforms, and satellite payloads. The program brings together industry, academia, and government research institutes in consortium-based partnerships, with the goal of achieving self-sufficiency in critical space technologies.",
        "Within this project, EchoSensing is responsible for SAR signal processing algorithm development — a role that directly leverages the company's core expertise. EchoSensing's team has accumulated deep experience in SAR signal processing through participation in Korea's national satellite programs, including KOMPSAT-5, CAS300-2, and CAS500-5.",
        "MIMO (Multiple-Input Multiple-Output) SAR represents a next-generation approach to satellite radar imaging, enabling both high resolution and wide-area coverage simultaneously — capabilities that are traditionally in a trade-off relationship. Digital beamforming is the key enabler of this technology, allowing flexible and efficient use of radar signals to achieve performance levels not possible with conventional SAR architectures.",
        "This selection reinforces EchoSensing's position in Korea's satellite SAR ecosystem and adds a government-backed R&D program to the company's growing portfolio of national and commercial projects.",
      ],
      ko: [
        "에코센싱이 우주항공청(KASA) 주관 스페이스파이오니어 사업의 '다중입력 다중출력(MIMO) 고해상도 광역 SAR 탑재체용 디지털 빔포밍 기술' 개발 과제에 참여기업으로 선정되었습니다.",
        "스페이스파이오니어 사업은 2021년부터 2030년까지 10년간 발사체, 위성본체, 위성탑재체 3개 분야의 16개 국가우주중점기술을 개발하는 국가 R&D 프로그램입니다. 산·학·연 컨소시엄을 구성하여 산업체 중심으로 핵심 우주기술의 국산화와 자립을 추진하고 있습니다.",
        "에코센싱은 이번 과제에서 SAR 신호처리 알고리즘 개발을 담당합니다. 이는 에코센싱의 핵심 역량과 직결되는 역할입니다. 에코센싱 팀은 다목적실용위성5호(KOMPSAT-5), 차세대소형위성2호(CAS300-2), 차세대중형위성5호(CAS500-5) 등 국가 위성 프로그램에 참여하며 SAR 신호처리 분야에서 깊은 경험을 축적해 왔습니다.",
        "MIMO SAR는 차세대 위성 레이더 영상 기술로, 기존 SAR 시스템에서 상충 관계에 있던 고해상도와 광역 관측을 동시에 구현할 수 있는 접근 방식입니다. 디지털 빔포밍은 이를 가능하게 하는 핵심 기술로, 레이더 신호를 유연하고 효율적으로 활용하여 기존 SAR 구조에서는 달성하기 어려운 성능을 실현합니다.",
        "이번 선정은 국내 위성 SAR 생태계에서 에코센싱의 위상을 재확인하는 것이며, 국가 R&D와 상용 프로젝트를 아우르는 에코센싱의 사업 포트폴리오를 한층 강화합니다.",
      ],
    },
  },
  {
    slug: "momentus-seoul-partnership-2026",
    date: "2026-03",
    dateLabel: { en: "March 2026", ko: "2026년 3월" },
    category: "Conference",
    categoryKo: "파트너십",
    title: {
      en: "EchoSensing and Momentus Deepen SAR Satellite Collaboration at Seoul Meeting",
      ko: "에코센싱-Momentus, 서울 미팅에서 SAR 위성 협력 구체화",
    },
    summary: {
      en: "Momentus CEO John Rood visited Seoul for a strategic face-to-face meeting. Collaboration framework established, roadmap agreed, and joint satellite-sensor modeling initiated.",
      ko: "Momentus CEO John Rood 서울 방문. 협력 프레임워크 수립, 단계적 협력 로드맵 합의, 위성-센서 공동 모델링 착수.",
    },
    location: { en: "Seoul, South Korea", ko: "대한민국 서울" },
    images: ["/images/news/momentus-seoul-2026-01.webp"],
    content: {
      en: [
        "EchoSensing CEO Dr. Chul-Ho Jung and Momentus Space CEO John Rood held a strategic face-to-face meeting in Seoul in March 2026. The meeting built on a relationship initiated at SmallSat Symposium 2026 in Silicon Valley, where EchoSensing first engaged with Momentus in February.",
        "The meeting confirmed strong technical synergy between the two companies. EchoSensing brings SAR payload and onboard AI processing expertise — including flight-proven airborne SAR systems and an AI processor capable of reducing data delivery time from approximately 12 hours to 20 minutes. Momentus brings satellite bus manufacturing capability backed by two years of flight heritage across three missions, with a fourth mission launched from Vandenberg carrying payloads for U.S. Department of Defense and NASA.",
        "Rood described Momentus's design philosophy as focused on reliability and manufacturability rather than high-cost, space-only components. This approach aligns directly with EchoSensing's strategy of adapting proven industrial-grade AI hardware for space applications.",
        "The two companies agreed on a structured collaboration roadmap: a formal framework enabling technical exchange, initial payload design sharing, joint satellite-sensor modeling and optimization by Momentus, component-level space qualification on upcoming Momentus missions, and an integrated satellite system targeting first launch in the 2029–2030 timeframe.",
        "Drawing on his experience as former Head of International Business at Lockheed Martin, Rood expressed strong openness to performing work in Korea, citing the KAI FA-50 program as a model for effective local partnerships.",
        "The discussion also covered Momentus's planned optical communications data relay satellite, which could support EchoSensing's constellation by reducing data latency, along with high-power orbital capabilities and elliptical orbit options extending dwell time over areas of interest.",
      ],
      ko: [
        "에코센싱 정철호 대표와 Momentus Space의 John Rood CEO가 2026년 3월 서울에서 전략적 대면 미팅을 진행했습니다. 이번 미팅은 2월 실리콘밸리 SmallSat Symposium에서의 첫 만남을 기반으로 성사되었습니다.",
        "미팅을 통해 양사의 기술적 시너지가 구체적으로 확인되었습니다. 에코센싱은 SAR 탑재체와 온보드 AI 프로세싱 전문성(데이터 전달 시간 약 12시간 → 20분 단축)을, Momentus는 3기 미션 2년간의 비행 실적을 기반으로 한 위성 버스 제조 역량을 보유하고 있으며, 4번째 미션은 미 국방부 및 NASA 페이로드를 탑재하여 Vandenberg에서 발사되었습니다.",
        "Rood CEO는 Momentus의 설계 철학이 고비용 우주 전용 부품 대신 성숙한 산업용 부품을 우주에서 생존할 수 있도록 패키징하는 방식임을 설명했습니다. 이는 검증된 산업용 AI 하드웨어를 우주에 적용하는 에코센싱의 전략과 동일한 맥락입니다.",
        "양사는 단계적 협력 로드맵에 합의했습니다. 공식 협력 프레임워크를 통한 체계적 기술 교류, 페이로드 초기 설계 공유, Momentus의 위성-센서 통합 모델링 및 설계 최적화, 기존 미션을 활용한 핵심 부품 궤도 검증, 그리고 2029~2030년 첫 위성 발사를 목표로 한 통합 시스템 구축입니다.",
        "Rood CEO는 Lockheed Martin 국제사업 총괄 경험을 바탕으로, 한국 내 작업 수행에 개방적 입장을 밝혔습니다. KAI FA-50 프로그램을 효과적인 현지 파트너십의 모범 사례로 언급했습니다.",
        "미팅에서는 Momentus의 광통신 데이터 중계 위성 계획도 논의되었으며, 에코센싱 군집위성의 데이터 지연 단축과 고전력 궤도 운용, 관심 지역 체류 시간 확대를 위한 타원 궤도 옵션이 함께 검토되었습니다.",
      ],
    },
  },
  {
    slug: "smallsat-symposium-2026",
    date: "2026-02",
    dateLabel: { en: "February 2026", ko: "2026년 2월" },
    category: "Conference",
    categoryKo: "컨퍼런스",
    title: {
      en: "EchoSensing Builds Strategic Partnerships at SmallSat Symposium 2026 in Silicon Valley",
      ko: "에코센싱, SmallSat Symposium 2026 Silicon Valley에서 전략적 파트너십 구축",
    },
    summary: {
      en: "Nine strategic business meetings across five countries. Partnerships with Momentus, SSTL, and Space Inventor. Momentus CEO follow-up meeting in Seoul.",
      ko: "5개국 9건의 전략적 비즈니스 미팅 진행. Momentus, SSTL, Space Inventor 등 위성 버스 제조사와 협의. Momentus CEO 서울 후속 미팅으로 이어짐.",
    },
    location: { en: "Silicon Valley, California, USA", ko: "미국 캘리포니아 실리콘밸리" },
    images: ["/images/news/smallsat-symposium-2026-01.webp", "/images/news/smallsat-symposium-2026-02.webp"],
    content: {
      en: [
        "EchoSensing participated in SmallSat Symposium 2026, the world's premier small satellite business event held annually in Silicon Valley. Over four days, EchoSensing CEO Dr. Chul-Ho Jung held nine strategic business meetings with satellite companies, ground system developers, investors, and NewSpace enterprises from the United States, United Kingdom, Denmark, Germany, and France.",
        "EchoSensing engaged with three satellite bus manufacturers: Momentus (USA) discussed the Vigoride platform and orbital transfer capabilities; SSTL (UK) shared their multi-band SAR experience across X, S, and C-band; Space Inventor (Denmark) presented their vertically integrated manufacturing approach.",
        "At the symposium, CEO Dr. Chul-Ho Jung also met with Dr. John Lee — a former NASA senior executive who was recruited as the inaugural Director of Space & Aviation Missions at Korea's newly established space agency KASA, where he led the R&D foundation for the country's space program. They discussed the trajectory of Korea's space sector — noting increased government commitment, growing private-sector participation, and expanding global partnerships. It was a timely exchange that reinforced the environment EchoSensing is building for: running AI onboard SAR satellites to deliver Earth observation data faster, right from orbit.",
        "Patrick Beatty of Beyond Earth Ventures reviewed EchoSensing's IR materials and offered guidance on business model positioning, investor communications, and US market entry strategy.",
        "The connections made at SmallSat Symposium led directly to a significant follow-up: Momentus CEO John Rood visited Seoul in March 2026 for a strategic partnership meeting, where the two companies agreed on a concrete collaboration roadmap including joint satellite-sensor modeling.",
      ],
      ko: [
        "에코센싱은 매년 실리콘밸리에서 개최되는 세계 최대 소형위성 비즈니스 행사인 SmallSat Symposium 2026에 참가했습니다. 정철호 대표는 4일간 미국, 영국, 덴마크, 독일, 프랑스 등 5개국의 위성 기업, 지상 시스템 개발사, 투자사, 뉴스페이스 기업과 총 9건의 전략적 비즈니스 미팅을 진행했습니다.",
        "SAR 위성 임무를 위해 세 곳의 위성 버스 제조사와 개별 협의를 진행했습니다. Momentus(미국)와 Vigoride 플랫폼 및 궤도 이동 서비스를, SSTL(영국)과 다중 밴드 SAR 경험을, Space Inventor(덴마크)와 수직통합 제조 방식을 논의했습니다.",
        "심포지엄에서 정철호 대표는 NASA 고위직 출신으로 대한민국 우주항공청(KASA) 초대 우주항공임무본부장을 역임하며 한국 우주산업의 R&D 기반을 구축한 존리(John Lee) 박사와 만남을 가졌습니다. 한국 우주 산업의 방향에 대해 의견을 나누었으며, 정부의 투자 확대, 민간 참여 증가, 글로벌 파트너십 확장이라는 공통된 전망을 확인했습니다. 이는 에코센싱이 지향하는 사업 환경 — SAR 위성에 AI를 탑재하여 궤도에서 직접 지구관측 데이터를 신속하게 제공하는 것 — 과 정확히 맞닿아 있는 대화였습니다.",
        "Beyond Earth Ventures의 Patrick Beatty가 에코센싱의 IR 자료를 검토하고, 비즈니스 모델 포지셔닝, 투자자 커뮤니케이션, 미국 시장 진입 전략에 대한 가이드를 제공했습니다.",
        "SmallSat Symposium에서의 인연은 곧바로 구체적 성과로 이어졌습니다. 2026년 3월 Momentus CEO John Rood가 서울을 방문하여 전략적 파트너십 미팅을 진행했으며, 위성-센서 공동 모델링을 포함한 협력 로드맵에 합의했습니다.",
      ],
    },
  },
  {
    slug: "space-summit-2026-singapore",
    date: "2026-02",
    dateLabel: { en: "February 2026", ko: "2026년 2월" },
    category: "Conference",
    categoryKo: "컨퍼런스",
    title: {
      en: "EchoSensing Expands Global Partnerships at Space Summit 2026 Singapore",
      ko: "에코센싱, Space Summit 2026 Singapore에서 글로벌 파트너십 확대",
    },
    summary: {
      en: "Nine focused business meetings across five countries. SAR payload integration with HEX20, investment discussions with Australian firm, AWS cloud HPC collaboration.",
      ko: "5개국 9건의 집중 비즈니스 미팅. HEX20 SAR 페이로드 탑재 논의, 호주 투자사와 기술 차별성 심층 논의, AWS 클라우드 HPC 협력.",
    },
    location: { en: "Singapore", ko: "싱가포르" },
    images: ["/images/news/space-summit-2026-01.webp", "/images/news/space-summit-2026-02.webp", "/images/news/space-summit-2026-03.webp"],
    content: {
      en: [
        "EchoSensing participated in Space Summit 2026, one of the Asia-Pacific region's premier space industry business events, held in Singapore on February 2–3, 2026.",
        "Over two days, EchoSensing CEO Dr. Chul-Ho Jung conducted nine focused business meetings with satellite manufacturers, data analytics companies, investors, and consulting firms from five countries — including the United States, France, India, Australia, and Singapore.",
        "EchoSensing engaged with HEX20, an Indian microsatellite manufacturer, to discuss SAR payload integration. Discussions also advanced with a French multi-sensor data company on SAR-AIS fusion for maritime surveillance.",
        "A meeting with AWS's space industry team explored cloud-based HPC support for accelerating onboard AI processing development. Meetings with space cybersecurity specialists from the US opened pathways for joint proposals on government RFIs.",
      ],
      ko: [
        "에코센싱은 아시아-태평양 지역 대표 우주산업 비즈니스 행사인 Space Summit 2026에 참가했습니다. 2026년 2월 2~3일 싱가포르에서 개최되었습니다.",
        "정철호 대표는 이틀간 미국, 프랑스, 인도, 호주, 싱가포르 등 5개국의 위성 제조사, 데이터 분석 기업, 투자사, 컨설팅 기관과 총 9건의 집중 비즈니스 미팅을 진행했습니다.",
        "인도 마이크로위성 제조사 HEX20과 SAR 페이로드 탑재를 논의했으며, 프랑스 다중센서 데이터 기업과는 해양감시 분야의 SAR-AIS 융합 협력을 진전시켰습니다.",
        "AWS 우주산업팀과 온보드 AI 프로세싱 개발 가속화를 위한 클라우드 기반 HPC 지원을 논의했으며, 미국 우주 사이버보안 전문가들과의 미팅을 통해 정부 RFI 공동 제안의 경로를 마련했습니다.",
      ],
    },
  },
  {
    slug: "nihonbashi-space-week-2025",
    date: "2025-11",
    dateLabel: { en: "November 2025", ko: "2025년 11월" },
    category: "Exhibition",
    categoryKo: "전시",
    title: {
      en: "EchoSensing Engages with Japan's Space Ecosystem at Nihonbashi Space Week 2025",
      ko: "에코센싱, Nihonbashi Space Week 2025에서 일본 우주 생태계와 교류",
    },
    summary: {
      en: "Meetings with Unibap (Sweden), Japan Space Systems, and Synspective. Strengthening ties with Japan's SAR satellite community ahead of APSAR 2027 Korea.",
      ko: "Unibap(스웨덴) Dennis Elgaard, Japan Space Systems Sam Claydon, Synspective Dr. Budhaditya Pyne과 만남. 일본 SAR 커뮤니티 관계 강화.",
    },
    location: { en: "Nihonbashi, Tokyo, Japan", ko: "일본 도쿄 니혼바시" },
    images: ["/images/news/nihonbashi-2025-01.webp", "/images/news/nihonbashi-2025-02.webp", "/images/news/nihonbashi-2025-03.webp"],
    content: {
      en: [
        "EchoSensing participated in Nihonbashi Space Week 2025, Japan's flagship space industry exhibition held in the Nihonbashi district of Tokyo — the hub of Japan's growing space startup ecosystem.",
        "The event brought together satellite companies, SAR specialists, remote sensing firms, and space technology providers. Companies including Synspective and PASCO showcased their latest capabilities.",
        "EchoSensing CEO Dr. Chul-Ho Jung met with Dennis Elgaard, Sales Director at Unibap (Sweden) — a key partner for onboard AI hardware — and Sam Claydon of Japan Space Systems. The event also provided an opportunity to connect with Dr. Budhaditya Pyne of Synspective.",
        "With APSAR 2027 coming to Korea, EchoSensing looks forward to continued collaboration with partners across the Japanese space ecosystem.",
      ],
      ko: [
        "에코센싱은 일본 우주 스타트업의 허브인 도쿄 니혼바시에서 개최된 Nihonbashi Space Week 2025에 참가했습니다.",
        "이번 행사에는 위성 기업, SAR 전문기업, 원격탐사 기업, 우주 기술 제공업체가 모여 기술 전시와 비즈니스 미팅을 진행했습니다. Synspective, PASCO 등이 최신 역량을 선보였습니다.",
        "정철호 대표는 에코센싱의 온보드 AI 하드웨어 핵심 파트너인 Unibap(스웨덴)의 Dennis Elgaard 영업이사, Japan Space Systems의 Sam Claydon과 만남을 가졌습니다. 또한 Synspective의 Dr. Budhaditya Pyne과 교류했습니다.",
        "APSAR 2027 한국 개최를 앞두고, 에코센싱은 일본 우주 생태계 파트너들과의 지속적인 협력을 기대합니다.",
      ],
    },
  },
  {
    slug: "apsar-2025",
    date: "2025-10",
    dateLabel: { en: "October 2025", ko: "2025년 10월" },
    category: "Conference",
    categoryKo: "컨퍼런스",
    title: {
      en: "EchoSensing at APSAR 2025: Co-chairing APSAR 2027 Korea and Strengthening the Asia-Pacific SAR Network",
      ko: "에코센싱, APSAR 2025 참가 — APSAR 2027 Korea 공동의장 및 아시아-태평양 SAR 네트워크 강화",
    },
    summary: {
      en: "APSAR 2027 Korea announced. CEO Dr. Jung appointed Co-Chair. Meetings with MetaSensing, Synspective, DLR, and leading Korean universities.",
      ko: "APSAR 2027 한국 개최 발표. 정철호 대표 공동의장 선임. MetaSensing, Synspective, DLR, SNU, 연세대 연구진과 교류.",
    },
    location: { en: "Matsue, Shimane, Japan", ko: "일본 시마네현 마쓰에" },
    images: ["/images/news/apsar-2025-01.webp", "/images/news/apsar-2025-02.webp", "/images/news/apsar-2025-03.webp"],
    content: {
      en: [
        "EchoSensing participated in the 9th Asia-Pacific Conference on Synthetic Aperture Radar (APSAR 2025), held in Matsue, Shimane, Japan. APSAR is the region's foremost academic and industry conference dedicated to SAR technology.",
        "A highlight was the announcement that APSAR 2027 will be held in Korea. EchoSensing CEO Dr. Chul-Ho Jung, serving as Co-Chair of APSAR 2027, presented Korea's hosting vision under the theme \"Establishing a Sustainable SAR Cooperation Framework in the Asia-Pacific.\"",
        "Dr. Jung met with Dr. Adriano Meta, CEO of MetaSensing, and engaged with researchers from Synspective (Japan), DLR (Germany), Seoul National University, and Yonsei University.",
        "These connections reinforce EchoSensing's growing network across the SAR research and industry landscape.",
      ],
      ko: [
        "에코센싱은 제9회 아시아-태평양 합성개구레이더 학회(APSAR 2025)에 참가했습니다. 일본 시마네현 마쓰에에서 개최된 APSAR는 SAR 기술 분야 아시아-태평양 지역 최대 학술·산업 행사입니다.",
        "이번 학회에서 APSAR 2027이 한국에서 개최되는 것이 발표되었습니다. 정철호 대표는 APSAR 2027 공동의장(Co-Chair)으로서 \"아시아-태평양 지역의 지속 가능한 SAR 협력 프레임워크 구축\"을 주제로 한국의 비전을 발표했습니다.",
        "MetaSensing의 Dr. Adriano Meta 대표와 만남을 가졌고, Synspective(일본), DLR(독일), 서울대학교, 연세대학교 등의 연구자·엔지니어와 교류했습니다.",
        "이러한 교류는 에코센싱의 SAR 연구·산업 네트워크를 한층 강화하는 계기가 되었습니다.",
      ],
    },
  },
  {
    slug: "wsbw-2025",
    date: "2025-09",
    dateLabel: { en: "September 2025", ko: "2025년 9월" },
    category: "Conference",
    categoryKo: "컨퍼런스",
    title: {
      en: "EchoSensing Gains Global Market Insights at World Space Business Week 2025",
      ko: "에코센싱, World Space Business Week 2025에서 글로벌 시장 인사이트 확보",
    },
    summary: {
      en: "Attended 16 sessions. Global EO data market at $3.3B with defense accounting for 40-50%. Space VC investment recovering at $3.1B in Q2 2025.",
      ko: "16개 세션 참석. EO 데이터 시장 $3.3B, 방산 40-50% 비중 확인. 2025 Q2 VC 투자 $3.1B 회복세. 에코센싱 기술 방향 글로벌 정합성 확인.",
    },
    location: { en: "Europe", ko: "유럽" },
    images: ["/images/news/wsbw-2025-01.webp", "/images/news/wsbw-2025-02.webp", "/images/news/wsbw-2025-03.webp"],
    content: {
      en: [
        "EchoSensing participated in World Space Business Week (WSBW) 2025, the premier annual business event for the global space industry organized by Novaspace.",
        "CEO Dr. Chul-Ho Jung attended 16 sessions spanning Earth observation, SAR technology, small satellite manufacturing, venture capital, and space finance. The global EO data market stands at $3.3 billion, with defense and security accounting for 40–50%.",
        "The \"From Payload to Mission Providers\" session was particularly relevant — the panel examined how traditional payload companies are evolving into end-to-end mission providers, aligned with EchoSensing's own strategy.",
        "Space venture capital showed signs of recovery, with Q2 2025 investment reaching $3.1 billion. WSBW 2025 confirmed that EchoSensing's SAR + onboard AI direction is well aligned with the global market.",
      ],
      ko: [
        "에코센싱은 Novaspace가 주관하는 글로벌 우주산업 대표 비즈니스 행사인 World Space Business Week(WSBW) 2025에 참가했습니다.",
        "정철호 대표는 지구관측, SAR 기술, 소형위성 제조, 벤처캐피털, 우주 금융 등 16개 세션에 참석했습니다. 글로벌 EO 데이터 시장은 33억 달러 규모이며, 방위·안보 분야가 40~50%를 차지합니다.",
        "\"From Payload to Mission Providers\" 세션에서는 기존 탑재체 중심 기업들이 end-to-end 미션 제공자로 전환하는 흐름이 확인되었으며, 이는 에코센싱의 전략과 일치합니다.",
        "우주 분야 VC 투자도 회복세를 보여 2025년 2분기 31억 달러를 기록했습니다. WSBW 2025는 에코센싱의 SAR + 온보드 AI 기술 방향이 글로벌 시장과 정확히 맞닿아 있음을 재확인했습니다.",
      ],
    },
  },
  {
    slug: "hanwha-systems-contract-2025",
    date: "2025",
    dateLabel: { en: "2025", ko: "2025년" },
    category: "Contract",
    categoryKo: "계약",
    title: {
      en: "EchoSensing Secures ₩1.034 Billion Contract with Hanwha Systems",
      ko: "에코센싱, 한화시스템과 SAR 프로세싱 기술 개발 계약 10.34억원 체결",
    },
    summary: {
      en: "Combined contract valued at ₩1.034 billion for SAR processing technology development. Core technology validated by Tier-1 defense industry customer.",
      ko: "온보드 SAR 신호 처리기 4.54억원 + 지상 S/W 5.80억원. Tier-1 방산 고객에 의한 핵심 기술 검증. NDA 체결로 심층 기술 협력 기반 마련.",
    },
    location: { en: "Korea", ko: "한국" },
    images: ["/images/news/hanwha-contract-2025-01.webp"],
    content: {
      en: [
        "EchoSensing has secured a combined contract valued at ₩1.034 billion (approximately $770K) with Hanwha Systems, one of Korea's leading defense and ICT companies, for the development of SAR processing technology.",
        "This contract represents a significant milestone, demonstrating that EchoSensing's core technology — real-time SAR data processing — has been validated by a Tier-1 defense industry customer.",
        "EchoSensing and Hanwha Systems have also established a non-disclosure agreement (NDA) to support deeper technical collaboration.",
        "The contract validates EchoSensing's position at the intersection of SAR technology and AI — enabling faster, more efficient Earth observation by reducing dependence on ground station infrastructure.",
      ],
      ko: [
        "에코센싱은 대한민국 대표 방산·ICT 기업인 한화시스템과 SAR 프로세싱 기술 개발 관련 총 10.34억원 규모의 계약을 체결했습니다.",
        "이번 계약은 에코센싱의 핵심 기술인 실시간 SAR 데이터 처리 기술이 국내 Tier-1 방산 고객에 의해 검증되었음을 보여주는 의미 있는 성과입니다.",
        "양사는 비밀유지협약(NDA)을 체결하여 보다 심층적인 기술 협력의 기반을 마련했습니다.",
        "이번 계약은 SAR 기술과 AI의 결합이라는 에코센싱의 기술적 포지셔닝을 입증합니다. 지상국 인프라 의존도를 낮추고 보다 빠르고 효율적인 지구관측을 실현하는 기술입니다.",
      ],
    },
  },
  {
    slug: "smallsat-conference-2025-utah",
    date: "2025-08",
    dateLabel: { en: "August 2025", ko: "2025년 8월" },
    category: "Conference",
    categoryKo: "컨퍼런스",
    title: {
      en: "EchoSensing Attends the 39th Annual Small Satellite Conference in Utah",
      ko: "에코센싱, 제39회 Small Satellite Conference 참가 (미국 유타)",
    },
    summary: {
      en: "Attended one of the longest-running global small satellite gatherings. Engaged with the small satellite ecosystem, laying groundwork for 2026 partnerships.",
      ko: "유타주립대학교에서 개최된 글로벌 소형위성 학회 참가. 소형위성 생태계 전반의 기업·기관과 교류. 2026년 후속 행사 참가 기반 마련.",
    },
    location: { en: "Utah State University, Logan, Utah, USA", ko: "미국 유타주 로건, 유타주립대학교" },
    images: ["/images/news/smallsat-utah-2025-01.webp", "/images/news/smallsat-utah-2025-02.webp"],
    content: {
      en: [
        "EchoSensing attended the 39th Annual Small Satellite Conference, one of the longest-running and most recognized gatherings in the global small satellite community, held at Utah State University in August 2025.",
        "The conference brought together satellite developers, researchers, government agencies, and industry leaders from around the world, featuring extensive networking programs across the value chain.",
        "EchoSensing CEO Dr. Chul-Ho Jung participated as an exhibitor, engaging with companies and institutions across the small satellite ecosystem. SAR payloads with onboard AI processing drew interest from organizations exploring next-generation Earth observation capabilities.",
        "The conference served as an important stepping stone for EchoSensing's global outreach, with connections leading to deeper engagements at subsequent industry events in early 2026.",
      ],
      ko: [
        "에코센싱은 전 세계 소형위성 분야에서 가장 오래된 역사를 가진 행사인 제39회 Small Satellite Conference에 참가했습니다. 2025년 8월 유타주립대학교에서 개최되었습니다.",
        "각국의 위성 개발사, 연구기관, 정부 기관, 산업체가 모여 기술 교류와 네트워킹을 진행했으며, 위성 버스 제조사부터 발사 서비스, 페이로드 개발사까지 폭넓은 참여가 이루어졌습니다.",
        "정철호 대표는 전시 참관 및 네트워킹에 참여하여 소형위성 생태계 전반의 기업·기관과 교류했습니다. SAR 페이로드와 온보드 AI 프로세싱 기술에 대해 긍정적 반응을 확인했습니다.",
        "이번 행사에서 구축한 네트워크는 2026년 초 후속 산업 행사들에서의 본격적인 파트너십 논의로 이어지는 계기가 되었습니다.",
      ],
    },
  },
];
