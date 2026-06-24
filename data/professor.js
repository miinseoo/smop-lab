/* ================================================================
   PROFESSOR DATA FILE — SMOP Lab
   ================================================================
   교수님 프로필 정보를 여기서만 수정하세요.
   HTML 파일은 건드릴 필요 없습니다.
================================================================ */

const PROFESSOR = {

  /* ── 기본 정보 ──────────────────────────────────────────────── */
  name:   "Seungmo Kang",
  nameKr: "강승모",
  title:  "Professor<br>School of Civil, Environmental & Architectural Engineering<br>Korea University",
  photo:  null,   // 사진 추가 시: "images/professor.jpg"
  email:  "s_kang@korea.ac.kr",
  phone:  "+82-2-3290-4862",
  office: "신공학관, Korea University",

  /* ── Biography ──────────────────────────────────────────────
     문단 배열로 작성. 각 항목이 하나의 <p> 태그가 됩니다.
  ─────────────────────────────────────────────────────────── */
  bio: [
    `Prof. Seungmo Kang is a Professor in the School of Civil, Environmental and Architectural
     Engineering at Korea University. His research focuses on developing mathematical models
     and optimization algorithms to address challenging problems in transportation and logistics,
     with particular emphasis on improving movement efficiency through vehicle routing,
     resource allocation, and network design.`,

    `He has published extensively in leading international journals including
     <em>Transportation Research Part B</em>, <em>IEEE Transactions on Intelligent Transportation Systems</em>,
     <em>Accident Analysis and Prevention</em>, and <em>European Journal of Operational Research</em>.
     Prof. Kang currently serves as Vice President of the Korean Society of Transportation (2025–2027)
     and Associate Dean of University College at Korea University (2025–present).`,
  ],

  /* ── Research Interests ─────────────────────────────────────
     항목 추가/삭제/수정만 하면 됩니다.
  ─────────────────────────────────────────────────────────── */
  interests: [
    "Transportation Planning & Operations",
    "Logistics & Vehicle Routing",
    "Public Transit Optimization",
    "Machine Learning in Transportation",
    "Location-Based Services",
    "Sustainable Mobility Systems",
    "Transportation Safety Analysis",
    "Big Data & Travel Behavior",
  ],

  /* ── Education ──────────────────────────────────────────────
     형식: { degree, school, field, year }
  ─────────────────────────────────────────────────────────── */
  education: [
    { degree:"Ph.D.", school:"University of Illinois at Urbana-Champaign", field:"Civil Engineering", year:"2008" },
    { degree:"M.S.",  school:"Seoul National University",                  field:"Civil Engineering", year:"2000" },
    { degree:"B.S.",  school:"Seoul National University",                  field:"Civil Engineering", year:"1998" },
  ],

  /* ── Career ─────────────────────────────────────────────────
     형식: { period, role, org }
     최신순으로 작성하세요.
  ─────────────────────────────────────────────────────────── */
  career: [
    { period:"2025 – present", role:"Vice President",                   org:"Korean Society of Transportation" },
    { period:"2025 – present", role:"Associate Dean, University College", org:"Korea University" },
    { period:"2019 – present", role:"Professor",                         org:"School of Civil, Environmental & Architectural Engineering, Korea University" },
    { period:"2014 – 2019",    role:"Associate Professor",               org:"School of Civil, Environmental & Architectural Engineering, Korea University" },
    { period:"2008 – 2010",    role:"Postdoctoral Research Associate",   org:"Energy Biosciences Institute, University of Illinois at Urbana-Champaign" },
    { period:"2000 – 2003",    role:"Civil Engineering Supervisor",      org:"Republic of Korea Navy" },
  ],

  /* ── Awards & Honors ────────────────────────────────────────
     형식: { year, name, org }
     최신순으로 작성하세요.
  ─────────────────────────────────────────────────────────── */
  awards: [
    { year:"2020", name:"Certificate of Achievement",  org:"World Road Association (PIARC)" },
    { year:"2019", name:"Minister's Citation",          org:"Ministry of Land, Infrastructure and Transport, South Korea" },
    { year:"2014", name:"Best Research Paper Award",    org:"Korea Society of Transportation" },
  ],

};
