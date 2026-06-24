/* ================================================================
   FOOTER COMPONENT — SMOP Lab
   ================================================================

   ✏️  푸터 수정 방법:
   ─────────────────────────────────────────────────────────────
   ▸ 연락처 변경 (이메일/전화/주소) → 아래 FOOTER 객체 수정
   ▸ 저작권 연도 변경              → year 값 수정
   ▸ 메뉴 링크 추가/삭제           → COL1 / COL2 배열 수정
     (nav에 새 페이지 추가할 때 여기도 같이 추가하세요)

   ⚠️  이 파일 외에는 수정 불필요
================================================================ */

const FOOTER = {
  brand:   "SMOP Lab",
  tagline: "Smart Mobility Operations and Planning Laboratory<br>Korea University, Seoul, Korea",

  // ── 연락처 수정 ──────────────────────────────────────────────
  email:   "s_kang@korea.ac.kr",
  phone:   "+82-2-3290-4862",
  address: "신공학관, Korea University, Seoul",

  // ── 저작권 연도 ──────────────────────────────────────────────
  year: 2025,
};

// ── 푸터 하단 링크 컬럼 (nav와 동기화 유지) ──────────────────────
const FOOTER_COL1 = [
  { label: "Home",         key: "" },
  { label: "Professor",    key: "professor" },
  { label: "Members",      key: "members" },
  { label: "Publications", key: "publications" },
];
const FOOTER_COL2 = [
  { label: "Projects", key: "projects" },
  { label: "Gallery",  key: "gallery" },
  { label: "Contact",  key: "contact" },
];

// ── 아래는 수정하지 마세요 ──────────────────────────────────────

(function () {
  const knownKeys = ["professor","members","publications","projects","gallery","contact"];
  const lastSeg = window.location.pathname.replace(/\/$/, "").split("/").pop() || "";
  const prefix = knownKeys.includes(lastSeg) ? "../" : "";

  const link = ({ label, key }) =>
    `<li><a href="${prefix}${key}${key ? "/" : "./"}">${label}</a></li>`;

  document.getElementById("footer-root").innerHTML = `
    <footer>
      <div class="footer-inner">
        <div>
          <p class="footer-brand">${FOOTER.brand}</p>
          <p class="footer-tagline">${FOOTER.tagline}</p>
          <p class="footer-info">
            <a href="mailto:${FOOTER.email}">${FOOTER.email}</a><br>
            ${FOOTER.phone}<br>
            ${FOOTER.address}
          </p>
        </div>
        <div class="footer-col">
          <h4>Pages</h4>
          <ul>${FOOTER_COL1.map(link).join("")}</ul>
        </div>
        <div class="footer-col">
          <h4>&nbsp;</h4>
          <ul>${FOOTER_COL2.map(link).join("")}</ul>
        </div>
      </div>
      <p class="footer-copy">© ${FOOTER.year} SMOP Lab · Korea University. All rights reserved.</p>
    </footer>`;
})();
