// --- Footer.js -----> src/components/Footer/Footer.js
import "./Footer.css";
const template = () => `
<h2><span>With 💘 to </span> Neoland</h2>
`;

export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};