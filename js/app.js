const preview = document.getElementById("previewText");
const size = document.getElementById("size");
const sizeValue = document.getElementById("sizeValue");
const toast = document.getElementById("toast");
const reset = document.getElementById("reset");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.__toast);
  window.__toast = setTimeout(() => toast.classList.remove("show"), 1600);
}

size.addEventListener("input", () => {
  preview.style.fontSize = `${size.value}px`;
  sizeValue.textContent = `${size.value}px`;
});

reset.addEventListener("click", () => {
  preview.value = "Hello, this is Umar Butt Handwriting.";
  size.value = 64;
  preview.style.fontSize = "64px";
  sizeValue.textContent = "64px";
});

const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,!?&@#%+-=/()[]{}";
const grid = document.getElementById("glyphGrid");
for (const char of glyphs) {
  const cell = document.createElement("div");
  cell.className = "glyph";
  cell.innerHTML = `<span>${char}</span><small>${char}</small>`;
  grid.appendChild(cell);
}

const CDN = "https://cdn.jsdelivr.net/gh/mohdumarbutt/umar-butt-handwriting@v1.0.0/fonts/UmarButtHandwriting-Regular.woff2";
const css = `@font-face {
  font-family: "Umar Butt Handwriting";
  src: url("${CDN}") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

.my-handwriting {
  font-family: "Umar Butt Handwriting", cursive;
}`;

document.getElementById("code").textContent = css;

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("Copied to clipboard");
  } catch {
    showToast("Copy failed — select the code manually");
  }
}
document.getElementById("copyCode").addEventListener("click", () => copyText(css));
document.getElementById("copyCss").addEventListener("click", () => copyText(css));
