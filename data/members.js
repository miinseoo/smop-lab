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
    nameKr:   "[Korean Name]",
    role:     "phd",
    interest: "Research Interest: [Add here]",
    email:    "[email]@korea.ac.kr",
    photo:    null,
    links:    [],
  },

  // ── Ph.D. Course ──────────────────────────────────────────────
  {
    name:     "[Name]",
    nameKr:   "[Korean Name]",
    role:     "phdcourse",
    interest: "Research Interest: [Add here]",
    email:    "[email]@korea.ac.kr",
    photo:    null,
    links:    [],
  },

  // ── Master's Course ───────────────────────────────────────────
  {
    name:     "Minseo Park",
    nameKr:   "박민서",
    role:     "masters",
    interest: "Research Interest: [Add here]",
    email:    "miiiin@korea.ac.kr",
    photo:    null,
    links:    [
      { type: "linkedin", url: "https://www.linkedin.com" },
    ],
  },
  {
    name:     "[Name]",
    nameKr:   "[Korean Name]",
    role:     "masters",
    interest: "Research Interest: [Add here]",
    email:    "[email]@korea.ac.kr",
    photo:    null,
    links:    [],
  },
   {
    name:     "[Name]",
    nameKr:   "[Korean Name]",
    role:     "masters",
    interest: "Research Interest: [Add here]",
    email:    "[email]@korea.ac.kr",
    photo:    null,
    links:    [],
  },
   {
    name:     "[Name]",
    nameKr:   "[Korean Name]",
    role:     "masters",
    interest: "Research Interest: [Add here]",
    email:    "[email]@korea.ac.kr",
    photo:    null,
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

const ALUMNI = [
  // { name:"Name", nameKr:"한국이름", year:2024, degree:"Ph.D.", position:"Current position" },
  { name:"[Name]", nameKr:null, year:2024, degree:"Ph.D.", position:"[Current position / company]" },
  { name:"[Name]", nameKr:null, year:2023, degree:"M.S.",  position:"[Current position / company]" },
  { name:"[Name]", nameKr:null, year:2022, degree:"Ph.D.", position:"[Current position / company]" },
  { name:"[Name]", nameKr:null, year:2022, degree:"M.S.",  position:"[Current position / company]" },
];
