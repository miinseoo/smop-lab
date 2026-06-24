/* ================================================================
   PUBLICATIONS DATA FILE — SMOP Lab
   ================================================================

   새 논문 추가하는 방법:
   아래 PUBLICATIONS 배열 맨 앞(최신순)에 객체를 추가하세요.

   형식:
   {
     title:    "논문 제목",
     authors:  ["저자1", "저자2", "Kang, Seungmo"],
               // ※ "Kang, Seungmo" 는 자동으로 bold 처리됨
     venue:    "저널명 · Vol. XX, pp. XX–XX",
     year:     2026,          // 출판 연도 (그룹핑 기준)
     yearLabel:"2026",        // 화면에 표시할 연도 (예: "2016–2017")
     accepted: true,          // true 이면 venue에 "Accepted" 표시
     tags:     ["International Journal", "SCI"],
               // 태그 종류: "International Journal" | "Domestic Journal"
               //           "SCI" | "SSCI" | "Conference" | "Book Chapter" | "Patent"
     type:     "journal",     // "journal" | "conference" | "book-chapter" | "patent" | "domestic"
     id:       "1",           // 번호 (1, 2, 3 ... 또는 "BC1", "P1" 등)
   }

   Book Chapter 예시:
   { id:"BC1", title:"...", authors:[...], venue:"...", year:2019, yearLabel:"Book Chapters", type:"book-chapter", tags:["Book Chapter"] }

   Patent 예시:
   { id:"P1", title:"...", authors:[...], venue:"Registration No. ...", year:2022, yearLabel:"Patents", type:"patent", tags:["Patent"] }

================================================================ */

const PUBLICATIONS = [

  // ── 2026 ──────────────────────────────────────────────────────
  { id:"1", year:2026, yearLabel:"2026",
    title:"Pickup and Delivery Problem with Synchronous and Asynchronous Transshipment for Q-Commerce Delivery",
    authors:["Park, Hyun", "Park, Hyuncheol", "Kang, Seungmo"],
    venue:"Transportation Research Record", accepted:true,
    tags:["International Journal","SCI"], type:"journal" },

  { id:"2", year:2026, yearLabel:"2026",
    title:"Diffusion process-based model for Network Trajectory Propagation",
    authors:["Sleiman, Wissam","Haque, Mohaiminul","Amin, Mohammad Saiful","Beigi, Pedram","Khoueiry, Michel","Kang, Seungmo","Hamdar, Samer"],
    venue:"IEEE Transactions on Intelligent Transportation Systems", accepted:true,
    tags:["International Journal","SCI"], type:"journal" },

  // ── 2025 ──────────────────────────────────────────────────────
  { id:"3", year:2025, yearLabel:"2025",
    title:"BO4Mob: Bayesian Optimization Benchmarks for High-Dimensional Urban Mobility Problem",
    authors:["Ryu, Seunghee","Kwon, Donghoon","Choi, Seongjin","Deshwal, Aryan","Kang, Seungmo","Osorio, Carolina"],
    venue:"NeurIPS 2025",
    tags:["Conference"], type:"conference" },

  { id:"4", year:2025, yearLabel:"2025",
    title:"Optimizing shelter locations for bus evacuation",
    authors:["Woo, Seong-Jong","Kang, Seungmo"],
    venue:"IET Intelligent Transport Systems · Vol. 19, Issue 1, e70020",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"5", year:2025, yearLabel:"2025",
    title:"Multiobjective Transit Network Design with Travel Time Reliability",
    authors:["Park, Su Jin","Kang, Seungmo"],
    venue:"IEEE Access · Vol. 13, pp. 47938–47954",
    tags:["International Journal","SCI"], type:"journal" },

  // ── 2024 ──────────────────────────────────────────────────────
  { id:"6", year:2024, yearLabel:"2024",
    title:"Development of Optimal Real-Time Metro Operation Strategy",
    authors:["Oh, Yoonseok","Kwak, Ho-Chan","Kang, Seungmo"],
    venue:"IET Intelligent Transport Systems · Vol. 18, Issue 12, pp. 2440–2458",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"7", year:2024, yearLabel:"2024",
    title:"Differential Dynamics of Transit Use Resilience During COVID-19",
    authors:["Choi, Won Gyun","Ryu, Seunghee","Jung, Paul H.","Kang, Seungmo"],
    venue:"IEEE Access · Vol. 12, pp. 8721–8743",
    tags:["International Journal","SCI"], type:"journal" },

  // ── 2022 ──────────────────────────────────────────────────────
  { id:"8", year:2022, yearLabel:"2022",
    title:"Multi-objective Approach to Transit Network Design with Variable Demand",
    authors:["Park, Su Jin","Kang, Seungmo","Byon, Young-Ji","Kho, Seung-Young"],
    venue:"Journal of Advanced Transportation · Vol. 2022, Article ID 5887985",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"9", year:2022, yearLabel:"2022",
    title:"Rebalancing Docked Bicycle Sharing System",
    authors:["Seo, Young-Hyun","Kim, Dong-Kyu","Kang, Seungmo","Byon, Young-Ji","Kho, Seung-Young"],
    venue:"Journal of Advanced Transportation · Vol. 2022, Article ID 2780711",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"10", year:2022, yearLabel:"2022",
    title:"토지이용패턴과 사회경제지표가 지하철 수요 변화에 미치는 영향",
    authors:["민하루","서영현","강승모"],
    venue:"한국철도학회 논문집 · Vol. 25, No. 5, pp. 386–397",
    tags:["Domestic Journal"], type:"domestic" },

  // ── 2021 ──────────────────────────────────────────────────────
  { id:"11", year:2021, yearLabel:"2021",
    title:"Urban Transit Network Optimization under Variable Demand",
    authors:["Almasi, Mohammad Hadi","Oh, Yoonseok","Sadollah, Ali","Byon, Young-Ji","Kang, Seungmo"],
    venue:"International Journal of Sustainable Transportation · Vol. 15, Issue 5, pp. 386–406",
    tags:["International Journal","SSCI"], type:"journal" },

  { id:"12", year:2021, yearLabel:"2021",
    title:"역사 선택 확률 기반 고속철도 통행배정 알고리즘 개발",
    authors:["서영현","송지영","곽호찬","유승희","강승모"],
    venue:"한국철도학회 논문집 · Vol. 24, No. 9, pp. 818–827",
    tags:["Domestic Journal"], type:"domestic" },

  // ── 2020 ──────────────────────────────────────────────────────
  { id:"13", year:2020, yearLabel:"2020",
    title:"Investigation of Effects of Inherent Variation on Urban Travel Speed Prediction",
    authors:["Park, Ho-Chul","Kang, Seungmo","Kho, Seung-Young","Kim, Dong-Kyu"],
    venue:"ASCE Journal of Transportation Engineering, Part A · Vol. 146, Issue 5, 04020027",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"14", year:2020, yearLabel:"2020",
    title:"Dwell Time Estimation using Real-Time Train Operation",
    authors:["Oh, Yoonseok","Byon, Young-Ji","Song, Ji Young","Kwak, Ho-Chan","Kang, Seungmo"],
    venue:"Applied Sciences · Vol. 10, Issue 2, No. 476",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"15", year:2020, yearLabel:"2020",
    title:"An Optimal Screening Method of Hotspot Identification",
    authors:["Lee, Jinwoo","Chung, Koohong","Papakonstantinou, Ilia","Kang, Seungmo","Kim, Dong-Kyu"],
    venue:"Accident Analysis and Prevention · Vol. 135, Article 105357",
    tags:["International Journal","SCI"], type:"journal" },

  // ── 2019 ──────────────────────────────────────────────────────
  { id:"16", year:2019, yearLabel:"2019",
    title:"Enhanced Application of Principal Component Analysis in Machine Learning",
    authors:["Choi, Yoon-Young","Shon, Heeseung","Byon, Young-Ji","Kim, Dong-Kyu","Kang, Seungmo"],
    venue:"Applied Sciences · Vol. 9, Issue 10, No. 2149",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"17", year:2019, yearLabel:"2019",
    title:"도시철도 장치고장 사고 감소에 따른 사회적 편익 산정 방안",
    authors:["배현근","곽호찬","최윤영","오윤석","강승모"],
    venue:"한국도시철도학회논문집 · Vol. 7, No. 2, pp. 255–263",
    tags:["Domestic Journal"], type:"domestic" },

  { id:"18", year:2019, yearLabel:"2019",
    title:"철도사고 감소를 통한 지체시간 감소 및 신뢰성 향상 편익 산정 기법",
    authors:["최윤영","배현근","강승모","송지영"],
    venue:"한국철도학회 논문집 · Vol. 22, No. 4, pp. 336–347",
    tags:["Domestic Journal"], type:"domestic" },

  { id:"19", year:2019, yearLabel:"2019",
    title:"휴업손해비용과 위자료를 반영한 철도 교통사고비용 개선에 관한 연구",
    authors:["김진주","최윤영","강승모","이인묵"],
    venue:"한국철도학회 논문집 · Vol. 22, No. 1, pp. 90–100",
    tags:["Domestic Journal"], type:"domestic" },

  // ── 2018 ──────────────────────────────────────────────────────
  { id:"20", year:2018, yearLabel:"2018",
    title:"Optimal Coordination Strategy for Integrated Multimodal Transit",
    authors:["Almasi, Mohammad Hadi","Sadollah, Ali","Oh, Yoonseok","Kim, Dong-Kyu","Kang, Seungmo"],
    venue:"Sustainability · Vol. 10, Issue 3, No. 734",
    tags:["International Journal","SCI"], type:"journal" },

  // ── 2016–2017 ─────────────────────────────────────────────────
  { id:"21", year:2017, yearLabel:"2016–2017",
    title:"Evaluating the Impact of Sudden Collapse of Major Freeway Connectors",
    authors:["Oh, Yoonseok","Chung, Koohong","Kim, Cheolsun","Park, Shin Hyoung","Kang, Seungmo"],
    venue:"Applied Sciences · Vol. 7, Issue 7, No. 726 · 2017",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"22", year:2016, yearLabel:"2016–2017",
    title:"Meta-Heuristic Approaches for High-Demand Facility Locations",
    authors:["Hwang, Taesung","Lee, Minho","Lee, Chungwon","Kang, Seungmo"],
    venue:"Journal of Environmental Engineering and Landscape Management · Vol. 24, Issue 4, pp. 233–244 · 2016",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"23", year:2016, yearLabel:"2016–2017",
    title:"Evaluating and Addressing Regression to the Mean Phenomenon",
    authors:["Lee, Jinwoo","Chung, Koohong","Kang, Seungmo"],
    venue:"Accident Analysis and Prevention · Vol. 97, pp. 49–56 · 2016",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"24", year:2016, yearLabel:"2016–2017",
    title:"Optimization of Improved Intermodal Transit Model",
    authors:["Almasi, Mohammad Hadi","Sadollah, Ali","Kang, Seungmo","Karim, Mohamed Rehan"],
    venue:"Sustainability · Vol. 8, Issue 6, No. 537 · 2016",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"25", year:2016, yearLabel:"2016–2017",
    title:"Dynamically Determining the Toll Plaza Capacity",
    authors:["Kim, Cheolsun","Kim, Dong-Kyu","Kho, Seung-Young","Kang, Seungmo","Chung, Koohong"],
    venue:"Applied Sciences · Vol. 6, Issue 3, No. 87 · 2016",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"26", year:2016, yearLabel:"2016–2017",
    title:"Measurement of Desirable Minimum One-Way Bike Lane Width",
    authors:["Lee, Chungwon","Shin, Hee Cheol","Kang, Seungmo","Lee, Jung-Beom"],
    venue:"KSCE Journal of Civil Engineering · Vol. 20, Issue 2, pp. 881–889 · 2016",
    tags:["International Journal","SCI"], type:"journal" },

  // ── 2013–2015 ─────────────────────────────────────────────────
  { id:"27", year:2015, yearLabel:"2013–2015",
    title:"Spatial Analysis Methods for Identifying Hazardous Locations",
    authors:["Park, Shin Hyoung","Jang, Kitae","Kim, Dong-Kyu","Kho, Seung-Young","Kang, Seungmo"],
    venue:"Scientia Iranica · Vol. 22, No. 4, pp. 1594–1603 · 2015",
    tags:["International Journal"], type:"journal" },

  { id:"28", year:2015, yearLabel:"2013–2015",
    title:"Network Forensic Evidence Generation and Verification Scheme",
    authors:["Kim, Hyungseok","Kim, Eunjin","Kang, Seungmo","Kim, Huy Kang"],
    venue:"Telecommunication Systems · Vol. 60, Issue 2, pp. 261–273 · 2015",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"29", year:2013, yearLabel:"2013–2015",
    title:"Evaluation of Pedestrian Safety: Pedestrian Crash Hot Spots",
    authors:["Jang, Kitae","Park, Shin Hyoung","Kang, Sanghyeok","Song, Ki Han","Kang, Seungmo","Chung, Sungbong"],
    venue:"Transportation Research Record · No. 2393, pp. 104–116 · 2013",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"30", year:2013, yearLabel:"2013–2015",
    title:"Impact of Traffic States on Freeway Crash Involvement Rates",
    authors:["Yeo, Hwasoo","Jang, Kitae","Skabardonis, Alexander","Kang, Seungmo"],
    venue:"Accident Analysis and Prevention · Vol. 50, pp. 713–723 · 2013",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"31", year:2013, yearLabel:"2013–2015",
    title:"지역간 철도의 노선계획 최적화 모형",
    authors:["오동규","고승영","강승모"],
    venue:"대한교통학회지 · Vol. 31, No. 2, pp. 80–89 · 2013",
    tags:["Domestic Journal"], type:"domestic" },

  // ── 2008–2012 ─────────────────────────────────────────────────
  { id:"32", year:2011, yearLabel:"2008–2012",
    title:"Adaptive Dynamic Programming Approach to Multi-Purpose Location-Based Concierge Service",
    authors:["Kang, Seungmo","Kim, Tschangho John"],
    venue:"IET Intelligent Transport Systems · Vol. 5, Issue 4, pp. 277–285 · 2011",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"33", year:2011, yearLabel:"2008–2012",
    title:"The Traveling Purchaser Problem with Stochastic Prices",
    authors:["Kang, Seungmo","Ouyang, Yanfeng"],
    venue:"European Journal of Operational Research · Vol. 209, Issue 3, pp. 265–272 · 2011",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"34", year:2011, yearLabel:"2008–2012",
    title:"Biofuel Refinery Location and Supply Chain Planning",
    authors:["Bai, Yun","Hwang, Taesung","Kang, Seungmo","Ouyang, Yanfeng"],
    venue:"Transportation Research Part B · Vol. 45, Issue 1, pp. 162–175 · 2011",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"35", year:2011, yearLabel:"2008–2012",
    title:"A Heuristic Approach to Railroad Track Maintenance Scheduling",
    authors:["Peng, Fan","Kang, Seungmo","Li, Xiaopeng","Ouyang, Yanfeng","Somani, Kamalesh","Acharya, Dharma"],
    venue:"Computer-Aided Civil and Infrastructure Engineering · Vol. 26, Issue 2, pp. 129–145 · 2011",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"36", year:2008, yearLabel:"2008–2012",
    title:"Optimal Operations of Transportation Fleet for Unloading Activities",
    authors:["Kang, Seungmo","Medina, Juan C.","Ouyang, Yanfeng"],
    venue:"Transportation Research Part B · Vol. 42, Issue 10, pp. 970–984 · 2008",
    tags:["International Journal","SCI"], type:"journal" },

  { id:"37", year:2000, yearLabel:"2008–2012",
    title:"Conjugate Gradient 법을 이용한 경로기반 통행배정 알고리즘의 구축",
    authors:["강승모","권용석","박창호"],
    venue:"대한교통학회지 · Vol. 18, No. 5, pp. 99–107 · 2000",
    tags:["Domestic Journal"], type:"domestic" },

  // ── Book Chapters ──────────────────────────────────────────────
  { id:"BC1", year:2019, yearLabel:"Book Chapters",
    title:"Macroscopic Fundamental Diagram Validation for Collision Formation",
    authors:["Silverstein, Claire E.","Hamdar, Samer H.","Kang, Seungmo","Jang, Kitae"],
    venue:"Traffic and Granular Flow '17 · Springer, pp. 107–116 · 2019",
    tags:["Book Chapter"], type:"book-chapter" },

  { id:"BC2", year:2009, yearLabel:"Book Chapters",
    title:"Optimizing the Biofuel Infrastructure: Transportation Networks and Biorefinery Locations",
    authors:["Kang, Seungmo","Önal, Hayri","Ouyang, Yanfeng","Scheffran, Jürgen","Tursun, Ü. Deniz"],
    venue:"Handbook of Bioenergy Economics and Policy · Springer, pp. 151–173 · 2009",
    tags:["Book Chapter"], type:"book-chapter" },

  { id:"BC3", year:2007, yearLabel:"Book Chapters",
    title:"Location-Based Services: Enabling Technologies and a Concierge Service Model",
    authors:["Kang, Seungmo","Kim, Tschangho John","Jang, Sung-Gheel"],
    venue:"Societies and Cities in the Age of Instant Access · Springer, pp. 227–239 · 2007",
    tags:["Book Chapter"], type:"book-chapter" },

  // ── Patents ────────────────────────────────────────────────────
  { id:"P1", year:2022, yearLabel:"Patents",
    title:"재난 시 교통수단 별 대피 경로 산출 방법",
    authors:["박수진","강승모","서영현"],
    venue:"Registration No. 1024679720000 · Filed 2021-01-20, Registered 2022-11-14",
    tags:["Patent"], type:"patent" },

  { id:"P2", year:2024, yearLabel:"Patents",
    title:"도로혼잡과 수요변화를 고려한 대중교통의 노선망 구축 방법",
    authors:["박수진","강승모","우성종"],
    venue:"Registration No. 1027060640000 · Filed 2021-12-13, Registered 2024-09-09",
    tags:["Patent"], type:"patent" },

  { id:"P3", year:2024, yearLabel:"Patents",
    title:"실시간 수요 및 사용자 선호도를 고려한 모빌리티 서비스 방법",
    authors:["박수진","강승모","박현철","박현"],
    venue:"Filed 2024-02-29 (pending)",
    tags:["Patent"], type:"patent" },

  { id:"P4", year:2024, yearLabel:"Patents",
    title:"대중교통과 무인 비행체를 결합한 물품 배송 최적화 방법 및 시스템",
    authors:["박수진","강승모","유승희","권동훈"],
    venue:"Filed 2024-03-27 (pending)",
    tags:["Patent"], type:"patent" },

];
