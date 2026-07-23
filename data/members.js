/* ================================================================
   MEMBERS DATA FILE — SMOP Lab
   ================================================================

   현재 멤버 추가 방법 (CURRENT_MEMBERS):
   {
     name:     "English Name",
     nameKr:   "한국어 이름",
     role:     "postdoc" | "phd" | "phdcourse" | "masters" | "undergrad",
     interest: "Research Interest: ...",
     email:    "email@korea.ac.kr",
     photo:    "images/members/파일명.jpg",  // 없으면 null
     links: [
       // 개인 홈페이지/SNS 링크 목록. 없으면 [] 또는 항목 삭제
       // type: "linkedin" | "github" | "googlescholar" | "website"
       { type: "linkedin", url: "https://linkedin.com/in/username" },
       { type: "github",   url: "https://github.com/username" },
       { type: "googlescholar", url: "https://scholar.google.com/..." },
       { type: "website",  url: "https://개인홈페이지.com" },
     ],
   }

   졸업생 추가 방법 (ALUMNI):
   {
     name:     "Name",
     nameKr:   "한국어 이름",   // 없으면 null
     year:     2024,            // 졸업 연도
     degree:   "Ph.D." | "M.S." | "B.S.",
     position: "현재 소속 / 직위",
     photo:    "images/members/파일명.jpg",  // 없으면 null
   }

================================================================ */

const CURRENT_MEMBERS = [

  // ── Postdoctoral Researchers ───────────────────────────────────
  {
    name:     "[Name]",
    nameKr:   "[Korean Name]",
    role:     "postdoc",
    interest: "Research Interest: [Add here]",
    email:    "[email]@korea.ac.kr",
    photo:    null,
    links:    [],
  },

  // ── Ph.D. Candidates ──────────────────────────────────────────
  {
    name:     "[Name]",
    nameKr:   "[Korean Name]",
    role:     "phd",
    interest: "Research Interest: [Add here]",
    email:    "[email]@korea.ac.kr",
    photo:    null,
    links:    [],
  },
  {
    name:     "[Name]",
    nameKr:   "[Korean Name]",
    role:     "phd",
    interest: "Research Interest: [Add here]",
    email:    "[email]@korea.ac.kr",
    photo:    null,
    links:    [],
  },
     {
    name:     "[Name]",
    nameKr:   "박현철",
    role:     "phd",
    interest: "Research Interest: [Add here]",
    email:    "[email]@korea.ac.kr",
    photo:    null,
    links:    [],
  },
     {
    name:     "Junhee Lee",
    nameKr:   "이준희",
    role:     "phd",
    interest: "Research Interest: Transportation Planning, Public Transportation, Accelerated Rail Transit Operation & Optimization",
    email:    "jhlee0789@korea.ac.kr",
    photo:    null,
    links:    [],
  },
     {
    name:     "Taisung Woo",
    nameKr:   "우태성",
    role:     "phd",
    interest: "Research Interest: [Add here]",
    email:    "[email]@korea.ac.kr",
    photo:    null,
    links:    [],
  },
     {
    name:     "Seunghee Ryu",
    nameKr:   "유승희",
    role:     "phd",
    interest: "Research Interest: Mobility Data Intelligence, Public Transportation, Intelligent Transportation Systems, Optimization",
    email:    "seunghee38@korea.ac.kr",
    photo:    null,
    links:    [],
  },
     {
    name:     "Wongyun Choi",
    nameKr:   "최원균",
    role:     "phd",
    interest: "Research Interest: Public Transport Planning, Sustainable Transportation, International Development Cooperation",
    email:    "hippotimbo@korea.ac.kr",
    photo:    null,
    links:    [],
  },
     {
    name:     "Donghoon Kwon",
    nameKr:   "권동훈",
    role:     "phd",
    interest: "Research Interest: Traffic Simulation, Urban Mobility",
    email:    "fermathooni88@korea.ac.kr",
    photo:    null,
    links:    [],
  },
     {
    name:     "Sanghyeok Kang",
    nameKr:   "강상혁",
    role:     "phd",
    interest: "Research Interest: Transportation Planning, Optimization, Public Transportation",
    email:    "kssh9071@korea.ac.kr",
    photo:    null,
    links:    [],
  },

  // ── Ph.D. Course ──────────────────────────────────────────────
  {
    name:     "Hyeontae Lim",
    nameKr:   "임현태",
    role:     "phdcourse",
    interest: "Research Interest: [Add here]",
    email:    "jameslht@korea.ac.kr",
    photo:    null,
    links:    [],
  },

  // ── Master's Course ───────────────────────────────────────────
  {
    name:     "Eunbit Oh",
    nameKr:   "오은빛",
    role:     "masters",
    interest: "Research Interest: Locations & Routing Optimization, Data Analysis",
    email:    "1004oeb@korea.ac.kr",
    photo:    "images/members/current/오은빛_250117.jpg",
    links:    [],
  },
  {
    name:     "Doyeon Kim",
    nameKr:   "김도연",
    role:     "masters",
    interest: "Research Interest: Location optimization with gis",
    email:    "dodo171709@gmail.com",
    photo:    "images/members/current/김도연_250325.jpg",
    links:    [],
  },
  {
    name:     "Joowan Kim",
    nameKr:   "김주완",
    role:     "masters",
    interest: "Research Interest: Transportation Planning & Optimization, Data Analysis",
    email:    "kj010622@korea.ac.kr",
    photo:    "images/members/current/김주완_250117.jpg",
    links:    [],
  },
  {
    name:     "Minseo Park",
    nameKr:   "박민서",
    role:     "masters",
    interest: "Research Interest: [Add here]",
    email:    "miinseo324@korea.ac.kr",
    photo:    "images/members/current/박민서_260310.jpg",
    links:    [],
  },

  // ── Undergraduate Researchers ──────────────────────────────────
  {
    name:     "[Name]",
    nameKr:   "[Korean Name]",
    role:     "undergrad",
    interest: "Research Interest: [Add here]",
    email:    "[email]@korea.ac.kr",
    photo:    null,
    links:    [],
  },

];

