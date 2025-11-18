export function getSections() {
  return Array.from(document.querySelectorAll("main section")).map(s => s.id);
}

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
