// small typewriter helper
export function typeText(el, text, speed = 80, cb) {
  if (!el) return;
  el.textContent = "";
  let i = 0;
  const t = setInterval(() => {
    el.textContent += text[i] ?? "";
    i++;
    if (i >= text.length) {
      clearInterval(t);
      if (cb) cb();
    }
  }, speed);
}
