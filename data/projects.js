/* ================================================================
   PROJECTS DATA FILE — SMOP Lab
   ================================================================

   새 프로젝트 추가 방법:
   PROJECTS 배열 맨 앞(최신순)에 아래 형식으로 추가하세요.

   {
     title:      "프로젝트 제목",
     agency:     "발주처 / 기관명",
     desc:       "프로젝트 설명 (영문)",
     period:     "2025–2026",   // "YYYY" 또는 "YYYY–YYYY"
                                // 종료 연도가 현재 연도 이상이면 자동으로 Ongoing 표시
     startYear:  2025,          // 연도 그룹핑 기준 (period 시작 연도)
   }

================================================================ */

const PROJECTS = [

  // ── 2025 ──────────────────────────────────────────────────────
  { startYear:2025, period:"2025–2026",
    title:"포천-철원 고속도로 건설사업 예비타당성조사 교통수요 및 편익추정",
    agency:"한국개발연구원 (KDI)",
    desc:"Traffic demand and benefit estimation for the Pocheong-Cheolwon highway construction project." },

  { startYear:2025, period:"2025",
    title:"화성시 교통약자 이동서비스 운영체계 개선방안 연구 용역",
    agency:"화성시청",
    desc:"Operations system improvement research for mobility services for the transportation-disadvantaged in Hwaseong City." },

  { startYear:2025, period:"2025–2026",
    title:"제6차 국도·국지도 건설 5개년 계획안 일괄 예비타당성조사 전라북도, 전라남도 사업의 수요 추정 및 경제성 분석",
    agency:"한국개발연구원 (KDI)",
    desc:"Demand estimation and economic analysis for 6th National Road Construction 5-Year Plan projects in Jeollabuk-do and Jeollanam-do." },

  { startYear:2025, period:"2025",
    title:"경기도 철도 노선별 환승손실보조금 추정 용역",
    agency:"경기연구원",
    desc:"Line-specific subsidy analysis for Gyeonggi Province railway transfer loss compensation." },

  { startYear:2025, period:"2025–2026",
    title:"국지도 98호선 광주건업-여주상품 도로건설공사 타당성재조사의 수요 추정 및 경제성 분석",
    agency:"한국개발연구원 (KDI)",
    desc:"Demand and benefit estimation, economic analysis for Local Road 98 Gwangju-Yeoju construction." },

  // ── 2024 ──────────────────────────────────────────────────────
  { startYear:2024, period:"2024–2025",
    title:"창원국가산업단지 재생사업(봉암교 확장) 타당성재조사의 수요 및 편익 추정, 경제성 분석",
    agency:"한국개발연구원 (KDI)",
    desc:"Demand, benefit, and economic analysis for bridge expansion in Changwon National Industrial Complex Regeneration Project." },

  { startYear:2024, period:"2024–2025",
    title:"Travel Time Reliability를 고려한 대중교통 노선망 설계",
    agency:"고려대학교",
    desc:"Public transportation network optimization considering travel time reliability." },

  { startYear:2024, period:"2024",
    title:"미래 철도 운영 기술 개발 동향 및 기술 수요 조사 용역",
    agency:"한국철도기술연구원 (KRRI)",
    desc:"Technology trend and demand analysis for future railway operations technology development." },

  { startYear:2024, period:"2024–2025",
    title:"국지도 98노선 양근대교 도로건설공사 타당성재조사의 수요 추정 및 편익 산정",
    agency:"한국개발연구원 (KDI)",
    desc:"Demand and benefit estimation for Local Road 98 Yanggeun Bridge Road Construction." },

  { startYear:2024, period:"2024",
    title:"경기 지방도 310호선 발산-수면 도로확포장공사 타당성 조사 수요 및 편익 추정",
    agency:"한국지방행정연구원 (KLAI)",
    desc:"Demand and benefit analysis for Gyeonggi Provincial Road 310 expansion project." },

  // ── 2023 ──────────────────────────────────────────────────────
  { startYear:2023, period:"2023",
    title:"기계학습 기반 자율주행열차 통행시간 추정 모형 고도화",
    agency:"한국철도기술연구원 (KRRI)",
    desc:"Enhancement of machine learning-based autonomous train travel time estimation model." },

  // ── 2022 ──────────────────────────────────────────────────────
  { startYear:2022, period:"2022",
    title:"데이터 기반 자율주행 열차 혼잡 및 통행시간 분석 시뮬레이션 구현",
    agency:"한국철도기술연구원 (KRRI)",
    desc:"Congestion and travel time analysis simulation for data-driven autonomous train operations." },

  { startYear:2022, period:"2022–2023",
    title:"Towards safer connected highway systems: From data analysis to modeling",
    agency:"고려대학교",
    desc:"Data analysis to modeling research for connected highway safety systems." },

  // ── 2021 ──────────────────────────────────────────────────────
  { startYear:2021, period:"2021–2026",
    title:"다양한 O2O 기반 공유 모빌리티 서비스 스타트업을 위한 포털 네트워크 알고리즘 웨어하우스 구축",
    agency:"한국연구재단 (NRF)",
    desc:"Algorithm development for O2O startup platforms — shared mobility services portal network algorithm." },

  { startYear:2021, period:"2021–2022",
    title:"코로나 19 수도권 대중교통 통행행태 변화분석",
    agency:"한국교통연구원 (KOTI)",
    desc:"Travel pattern analysis of post-pandemic changes in Seoul metropolitan transit use behavior." },

  { startYear:2021, period:"2021",
    title:"혼잡정보 기반 실시간 정차시간 예측 알고리즘 개발",
    agency:"한국철도기술연구원 (KRRI)",
    desc:"Congestion-based real-time dwell time prediction algorithm development." },

  // ── 2020 ──────────────────────────────────────────────────────
  { startYear:2020, period:"2020–2021",
    title:"충북 충주시 충청내륙고속화도로-충주역 간 연결사업 타당성 조사 수요 및 편의 추정",
    agency:"한국지방행정연구원 (KLAI)",
    desc:"Demand and benefit estimation for Chungju City highway-to-station connection road." },

  { startYear:2020, period:"2020",
    title:"지역 형평성 기반의 국가철도망 구축 및 운영전략 중 지역별 철도역 접근시간 분석 연구",
    agency:"한국교통연구원 (KOTI)",
    desc:"Regional equity-based national railway network strategy research and station accessibility analysis." },

  { startYear:2020, period:"2020–2022",
    title:"김해-밀양 고속도로 신설사업 예비타당성조사 교통수요추정 및 경제성 분석",
    agency:"한국개발연구원 (KDI)",
    desc:"Traffic demand and economic analysis for Gimhae-Miryang Expressway." },

  { startYear:2020, period:"2020–2021",
    title:"전남 원화-효산 간 지방도 확포장공사 타당성재조사",
    agency:"한국지방행정연구원 (KLAI)",
    desc:"Pre-feasibility study for Jeollanam-do local road expansion project." },

  { startYear:2020, period:"2020",
    title:"실시간 혼잡도 기반 열차 정차시간 예측을 위한 기계학습 알고리즘 개발",
    agency:"한국철도기술연구원 (KRRI)",
    desc:"Real-time congestion-based machine learning algorithm for train dwell time prediction." },

  { startYear:2020, period:"2020–2021",
    title:"대중교통과 연계된 개인 맞춤형 실시간 재난 대피 경로 안내 및 긴급 구호차량 배치 최적화 통합 모형 개발",
    agency:"한국연구재단 (NRF)",
    desc:"Transit-linked personalized real-time evacuation routing model for integrated disaster evacuation and emergency vehicle routing." },

  { startYear:2020, period:"2020",
    title:"범안로 확장 사업 수요 및 개선효과 추정 연구",
    agency:"서울연구원",
    desc:"Demand and improvement effect estimation for Beoman Road expansion project." },

];
