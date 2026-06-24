/* ================================================================
   GALLERY DATA FILE — SMOP Lab
   ================================================================

   사진 추가 방법:
   1. 이미지 파일을 images/ 폴더에 넣기
   2. 아래 GALLERY 배열 맨 앞(최신순)에 추가:

   {
     title:    "사진 제목",
     date:     "2025",
     category: "lab-life" | "conferences" | "field-trips" | "celebrations",
     image:    "images/갤러리사진.jpg",   // 없으면 null (placeholder 표시)
     size:     null | "wide" | "tall",
               // null  → 1×1 (기본)
               // "wide" → 가로 2칸
               // "tall" → 세로 2칸
   }

================================================================ */

const GALLERY = [

  { title:"SMOP Lab Group Photo 2025", date:"2025",
    category:"lab-life", image:null, size:"wide" },

  { title:"Award Ceremony", date:"2025",
    category:"celebrations", image:null, size:"tall" },

  { title:"Conference Presentation", date:"NeurIPS 2025",
    category:"conferences", image:null, size:null },

  { title:"Lab Dinner", date:"2025",
    category:"lab-life", image:null, size:null },

  { title:"Field Research Survey", date:"2024",
    category:"field-trips", image:null, size:"wide" },

  { title:"Graduation Celebration", date:"2024",
    category:"celebrations", image:null, size:null },

  { title:"Lab Seminar", date:"2024",
    category:"lab-life", image:null, size:null },

  { title:"International Workshop", date:"2024",
    category:"conferences", image:null, size:null },

  { title:"Lab Group Photo 2024", date:"2024",
    category:"lab-life", image:null, size:null },

];
