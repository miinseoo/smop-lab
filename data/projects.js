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
    title:"포천~철원 고속도로 건설 예비타당성조사",
    agency:"Korea Development Institute (KDI)",
    desc:"Traffic demand and benefit estimation for the Pocheong-Cheolwon highway construction project." },

  { startYear:2025, period:"2025",
    title:"화성시 교통약자 이동편의 서비스 운영체계 개선",
    agency:"Hwaseong City Hall",
    desc:"Operations system improvement research for mobility services for the transportation-disadvantaged in Hwaseong City." },

  { startYear:2025, period:"2025–2026",
    title:"제6차 국도건설 5개년계획 수립 예비타당성조사 (전북·전남)",
    agency:"Korea Development Institute (KDI)",
    desc:"Demand estimation and economic analysis for 6th National Road Construction 5-Year Plan projects in Jeollabuk-do and Jeollanam-do." },

  { startYear:2025, period:"2025",
    title:"경기도 철도 환승 손실 보전비 산정",
    agency:"Gyeonggi Research Institute",
    desc:"Line-specific subsidy analysis for Gyeonggi Province railway transfer loss compensation." },

  { startYear:2025, period:"2025–2026",
    title:"지방도 98호선 광주~여주 도로건설 예비타당성조사",
    agency:"Korea Development Institute (KDI)",
    desc:"Demand and benefit estimation, economic analysis for Local Road 98 Gwangju-Yeoju construction." },

  // ── 2024 ──────────────────────────────────────────────────────
  { startYear:2024, period:"2024–2025",
    title:"창원 국가산업단지 재생사업 연결도로 확장",
    agency:"Korea Development Institute (KDI)",
    desc:"Demand, benefit, and economic analysis for bridge expansion in Changwon National Industrial Complex Regeneration Project." },

  { startYear:2024, period:"2024–2025",
    title:"통행시간 신뢰성을 고려한 대중교통 네트워크 설계",
    agency:"Korea University",
    desc:"Public transportation network optimization considering travel time reliability." },

  { startYear:2024, period:"2024",
    title:"미래 철도운영기술 개발 수요조사",
    agency:"Korea Railroad Research Institute (KRRI)",
    desc:"Technology trend and demand analysis for future railway operations technology development." },

  { startYear:2024, period:"2024–2025",
    title:"지방도 98호선 양근교 도로건설",
    agency:"Korea Development Institute (KDI)",
    desc:"Demand and benefit estimation for Local Road 98 Yanggeun Bridge Road Construction." },

  { startYear:2024, period:"2024",
    title:"경기도 도로 310호선 확장사업 타당성조사",
    agency:"Korea Local Administration Research Institute (KLAI)",
    desc:"Demand and benefit analysis for Gyeonggi Provincial Road 310 expansion project." },

  // ── 2023 ──────────────────────────────────────────────────────
  { startYear:2023, period:"2023",
    title:"머신러닝 기반 자율주행 열차 통행시간 추정 모형 고도화",
    agency:"Korea Railroad Research Institute (KRRI)",
    desc:"Enhancement of machine learning-based autonomous train travel time estimation model." },

  // ── 2022 ──────────────────────────────────────────────────────
  { startYear:2022, period:"2022",
    title:"데이터 기반 자율주행 열차 시뮬레이션",
    agency:"Korea Railroad Research Institute (KRRI)",
    desc:"Congestion and travel time analysis simulation for data-driven autonomous train operations." },

  { startYear:2022, period:"2022–2023",
    title:"Connected Highway 안전시스템",
    agency:"Korea University",
    desc:"Data analysis to modeling research for connected highway safety systems." },

  // ── 2021 ──────────────────────────────────────────────────────
  { startYear:2021, period:"2021–2026",
    title:"공유 모빌리티 서비스 플랫폼 네트워크 알고리즘 구축",
    agency:"National Research Foundation of Korea (NRF)",
    desc:"Algorithm development for O2O startup platforms — shared mobility services portal network algorithm." },

  { startYear:2021, period:"2021–2022",
    title:"COVID-19 수도권 대중교통 이용행태 변화 분석",
    agency:"Korea Transport Institute (KOTI)",
    desc:"Travel pattern analysis of post-pandemic changes in Seoul metropolitan transit use behavior." },

  { startYear:2021, period:"2021",
    title:"실시간 정차시간 예측 알고리즘 개발",
    agency:"Korea Railroad Research Institute (KRRI)",
    desc:"Congestion-based real-time dwell time prediction algorithm development." },

  // ── 2020 ──────────────────────────────────────────────────────
  { startYear:2020, period:"2020–2021",
    title:"충주시 고속국도~역세권 연결도로 타당성조사",
    agency:"Korea Local Administration Research Institute (KLAI)",
    desc:"Demand and benefit estimation for Chungju City highway-to-station connection road." },

  { startYear:2020, period:"2020",
    title:"지역 철도 역세권 접근성 분석",
    agency:"Korea Transport Institute (KOTI)",
    desc:"Regional equity-based national railway network strategy research and station accessibility analysis." },

  { startYear:2020, period:"2020–2022",
    title:"김해~밀양 고속도로 예비타당성조사",
    agency:"Korea Development Institute (KDI)",
    desc:"Traffic demand and economic analysis for Gimhae-Miryang Expressway." },

  { startYear:2020, period:"2020–2021",
    title:"전라남도 지방도 확장사업 타당성조사",
    agency:"Korea Local Administration Research Institute (KLAI)",
    desc:"Pre-feasibility study for Jeollanam-do local road expansion project." },

  { startYear:2020, period:"2020",
    title:"머신러닝 기반 열차 정차시간 예측",
    agency:"Korea Railroad Research Institute (KRRI)",
    desc:"Real-time congestion-based machine learning algorithm for train dwell time prediction." },

  { startYear:2020, period:"2020–2021",
    title:"재난 대피 및 긴급차량 경로 통합 모형",
    agency:"National Research Foundation of Korea (NRF)",
    desc:"Transit-linked personalized real-time evacuation routing model for integrated disaster evacuation and emergency vehicle routing." },

  { startYear:2020, period:"2020",
    title:"번영로 확장사업 수요 및 개선효과 추정",
    agency:"Seoul Research Institute",
    desc:"Demand and improvement effect estimation for Beoman Road expansion project." },

];
