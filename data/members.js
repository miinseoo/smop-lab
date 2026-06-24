/* ================================================================
   MEMBERS DATA FILE — SMOP Lab
   ================================================================

   현재 멤버 추가 방법 (CURRENT_MEMBERS):
   {
     name:     "English Name",
     nameKr:   "한국어 이름",
     role:     "postdoc" | "phd" | "masters" | "undergrad",
     interest: "Research Interest: ...",
     email:    "email@korea.ac.kr",
     photo:    "images/members/파일명.jpg",  // 없으면 null
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
  },

  // ── Ph.D. Candidates ──────────────────────────────────────────
  {
    name:     "[Name]",
    nameKr:   "[Korean Name]",
    role:     "phd",
    interest: "Research Interest: [Add here]",
    email:    "[email]@korea.ac.kr",
    photo:    null,
  },
  {
    name:     "[Name]",
    nameKr:   "[Korean Name]",
    role:     "phd",
    interest: "Research Interest: [Add here]",
    email:    "[email]@korea.ac.kr",
    photo:    null,
  },

  // ── Master's Students ─────────────────────────────────────────
  {
    name:     "Minseo Park",
    nameKr:   "박민서",
    role:     "masters",
    interest: "Research Interest: [Add here]",
    email:    "miiiin@korea.ac.kr",
    photo:    null,
  },
  {
    name:     "[Name]",
    nameKr:   "[Korean Name]",
    role:     "masters",
    interest: "Research Interest: [Add here]",
    email:    "[email]@korea.ac.kr",
    photo:    null,
  },

  // ── Undergraduate Researchers ──────────────────────────────────
  {
    name:     "[Name]",
    nameKr:   "[Korean Name]",
    role:     "undergrad",
    interest: "Research Interest: [Add here]",
    email:    "[email]@korea.ac.kr",
    photo:    null,
  },

];

const ALUMNI = [
  // { name:"Name", nameKr:"한국이름", year:2024, degree:"Ph.D.", position:"Current position" },
  { name:"[Name]", nameKr:null, year:2024, degree:"Ph.D.", position:"[Current position / company]" },
  { name:"[Name]", nameKr:null, year:2023, degree:"M.S.",  position:"[Current position / company]" },
  { name:"[Name]", nameKr:null, year:2022, degree:"Ph.D.", position:"[Current position / company]" },
  { name:"[Name]", nameKr:null, year:2022, degree:"M.S.",  position:"[Current position / company]" },
];
