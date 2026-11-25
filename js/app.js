/* Umar Butt Handwriting — site scripts (shared across all pages)
   © 2026 Mohd Umar Butt · MIT for site code, font under OFL-1.1 */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ---------- Icon sprite (decorative; text labels carry meaning) ---------- */
  const SPRITE = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
    <symbol id="i-github" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></symbol>
    <symbol id="i-instagram" viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none"/></symbol>
    <symbol id="i-facebook" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></symbol>
    <symbol id="i-linkedin" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v2a6 6 0 0 1 6-2z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></symbol>
    <symbol id="i-youtube" viewBox="0 0 24 24"><rect x="2" y="5.5" width="20" height="13" rx="3.5"/><path d="M10 9.2l5 2.8-5 2.8z" fill="currentColor" stroke="none"/></symbol>
    <symbol id="i-orcid" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><text x="12" y="16" font-size="10" font-weight="700" font-family="Inter,sans-serif" text-anchor="middle" fill="currentColor" stroke="none">iD</text></symbol>
    <symbol id="i-coffee" viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><path d="M6 1v3M10 1v3M14 1v3"/></symbol>
    <symbol id="i-heart" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></symbol>
    <symbol id="i-download" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></symbol>
    <symbol id="i-copy" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></symbol>
    <symbol id="i-check" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></symbol>
    <symbol id="i-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></symbol>
    <symbol id="i-moon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></symbol>
    <symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></symbol>
    <symbol id="i-x" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></symbol>
    <symbol id="i-external" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></symbol>
    <symbol id="i-arrow" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></symbol>
    <symbol id="i-zap" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></symbol>
    <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></symbol>
    <symbol id="i-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></symbol>
    <symbol id="i-code" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></symbol>
    <symbol id="i-book" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></symbol>
    <symbol id="i-user" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></symbol>
    <symbol id="i-type" viewBox="0 0 24 24"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></symbol>
    <symbol id="i-star" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></symbol>
  </svg>`;
  document.body.insertAdjacentHTML("afterbegin", SPRITE);

  /* ---------- Theme ---------- */
  const root = document.documentElement;
  const themeBtn = $("#theme-toggle");
  function setTheme(t) {
    root.setAttribute("data-theme", t);
    try { localStorage.setItem("ubh-theme", t); } catch (e) {}
    if (themeBtn) {
      themeBtn.setAttribute("aria-pressed", String(t === "paper"));
      const use = $("#theme-icon-use");
      if (use) use.setAttribute("href", t === "paper" ? "#i-moon" : "#i-sun");
    }
  }
  setTheme(root.getAttribute("data-theme") || "ink");
  if (themeBtn) themeBtn.addEventListener("click", () =>
    setTheme(root.getAttribute("data-theme") === "paper" ? "ink" : "paper"));

  /* ---------- Mobile nav ---------- */
  const nav = $("#site-nav"), navBtn = $("#nav-toggle");
  if (nav && navBtn) {
    navBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      navBtn.setAttribute("aria-expanded", String(open));
      const use = navBtn.querySelector("use");
      if (use) use.setAttribute("href", open ? "#i-x" : "#i-menu");
    });
    nav.addEventListener("click", e => { if (e.target.tagName === "A") nav.classList.remove("open"); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") nav.classList.remove("open"); });
  }

  /* ---------- Footer year ---------- */
  const yr = $("#year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Toast ---------- */
  function toast(msg) {
    let t = $("#toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status");
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove("show"), 2200);
  }

  /* ---------- Clipboard ---------- */
  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); return true; }
    catch (e) {
      const ta = document.createElement("textarea");
      ta.value = text; ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta); ta.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (_) {}
      ta.remove(); return ok;
    }
  }
  $$("[data-copy], [data-copy-text]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const sel = btn.getAttribute("data-copy");
      const target = sel ? $(sel) : null;
      const text = (target ? target.textContent : btn.getAttribute("data-copy-text") || "").trim();
      const ok = await copyText(text);
      toast(ok ? "Copied to clipboard ✓" : "Copy failed — select manually");
      const label = btn.querySelector("span"), use = btn.querySelector("use");
      if (ok && label) {
        const old = label.textContent;
        label.textContent = "Copied!"; btn.classList.add("copied");
        if (use) use.setAttribute("href", "#i-check");
        setTimeout(() => {
          label.textContent = old; btn.classList.remove("copied");
          if (use) use.setAttribute("href", "#i-copy");
        }, 1800);
      }
    });
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = $$(".reveal");
  if (revealEls.length && "IntersectionObserver" in window &&
      !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("in"));
  }

  /* ---------- Hero rotating specimen ---------- */
  const rot = $("#hero-rotator");
  if (rot && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const phrases = ["Hello, world.", "Stay curious.", "Dream. Build. Ship.", "Made with love.", "Written by hand."];
    let i = 0;
    setInterval(() => {
      rot.classList.add("fade");
      setTimeout(() => {
        i = (i + 1) % phrases.length;
        rot.textContent = phrases[i];
        rot.classList.remove("fade");
      }, 460);
    }, 4000);
  }

  /* ---------- Font load status ---------- */
  const status = $("#font-status");
  if (status && document.fonts) {
    document.fonts.load('32px "Umar Butt Handwriting"').then(() => {
      const ok = document.fonts.check('32px "Umar Butt Handwriting"');
      status.textContent = ok ? "● Font loaded" : "● Using fallback";
      status.classList.add(ok ? "ok" : "warn");
    }).catch(() => {
      status.textContent = "● Using fallback";
      status.classList.add("warn");
    });
  }

  /* ---------- Live type tester ---------- */
  const preview = $("#tt-preview");
  if (preview) {
    const input = $("#tt-text"), size = $("#tt-size"), spacing = $("#tt-spacing"), leading = $("#tt-leading");
    const sizeVal = $("#tt-size-val"), spacingVal = $("#tt-spacing-val"), leadingVal = $("#tt-leading-val");
    const readout = $("#tt-readout"), cssOut = $("#tt-css"), stage = $("#tt-stage");
    const FALLBACK = "The quick brown fox jumps over the lazy dog.";
    const state = { size: 64, spacing: 0, leading: 1.35, align: "left" };

    function render() {
      const text = input.value;
      preview.textContent = text || FALLBACK;
      preview.classList.toggle("ghost", !text.trim());
      preview.style.fontSize = state.size + "px";
      preview.style.letterSpacing = state.spacing + "px";
      preview.style.lineHeight = state.leading;
      preview.style.textAlign = state.align;
      preview.style.justifyContent =
        state.align === "center" ? "center" : state.align === "right" ? "flex-end" : "flex-start";
      sizeVal.textContent = state.size + "px";
      spacingVal.textContent = state.spacing + "px";
      leadingVal.textContent = state.leading;
      readout.textContent = `${state.size}px / ${state.leading} · ${state.spacing}px`;
      cssOut.textContent =
`/* Umar Butt Handwriting — Regular 400 */
.handwriting {
  font-family: "Umar Butt Handwriting", cursive;
  font-size: ${state.size}px;
  line-height: ${state.leading};
  letter-spacing: ${state.spacing}px;
  text-align: ${state.align};
}`;
    }

    input.addEventListener("input", render);
    size.addEventListener("input", () => { state.size = +size.value; render(); });
    spacing.addEventListener("input", () => { state.spacing = +spacing.value; render(); });
    leading.addEventListener("input", () => { state.leading = +leading.value; render(); });

    $$("#tt-align button").forEach(b => b.addEventListener("click", () => {
      state.align = b.dataset.align;
      $$("#tt-align button").forEach(x => {
        x.classList.toggle("active", x === b);
        x.setAttribute("aria-pressed", String(x === b));
      });
      render();
    }));
    $$("#tt-stage-seg button").forEach(b => b.addEventListener("click", () => {
      stage.classList.toggle("stage-paper", b.dataset.stage === "paper");
      stage.classList.toggle("stage-ink", b.dataset.stage === "ink");
      $$("#tt-stage-seg button").forEach(x => {
        x.classList.toggle("active", x === b);
        x.setAttribute("aria-pressed", String(x === b));
      });
    }));
    $$("[data-sample]").forEach(b => b.addEventListener("click", () => {
      input.value = b.dataset.sample; render();
    }));
    $("#tt-copy-text").addEventListener("click", async () => {
      const ok = await copyText(preview.textContent);
      toast(ok ? "Text copied ✓" : "Copy failed");
    });
    $("#tt-reset").addEventListener("click", () => {
      input.value = FALLBACK;
      size.value = 64; spacing.value = 0; leading.value = 1.35;
      Object.assign(state, { size: 64, spacing: 0, leading: 1.35, align: "left" });
      $$("#tt-align button").forEach(x => x.classList.toggle("active", x.dataset.align === "left"));
      render();
      toast("Preview reset");
    });
    render();
  }

  /* ---------- Glyph grid ---------- */
  const grid = $("#glyph-grid");
  if (grid) {
    const chars = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;!?&@()-'"`;
    const frag = document.createDocumentFragment();
    for (const ch of chars) {
      const b = document.createElement("button");
      b.type = "button"; b.className = "glyph"; b.textContent = ch;
      b.title = "U+" + ch.codePointAt(0).toString(16).toUpperCase().padStart(4, "0");
      b.setAttribute("aria-label", "Insert character " + ch);
      b.addEventListener("click", () => {
        const input = $("#tt-text");
        if (input) {
          input.value += ch;
          input.dispatchEvent(new Event("input"));
          toast(`Added “${ch}” to the preview`);
        }
      });
      frag.appendChild(b);
    }
    grid.appendChild(frag);
  }

  /* ---------- Docs scrollspy ---------- */
  const toc = $(".toc");
  if (toc && "IntersectionObserver" in window) {
    const links = $$(".toc a");
    const map = new Map(links.map(a => [a.getAttribute("href").slice(1), a]));
    const spy = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting && map.has(en.target.id)) {
          links.forEach(a => a.classList.remove("active"));
          map.get(en.target.id).classList.add("active");
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    $$(".doc-section").forEach(s => spy.observe(s));
  }
})();