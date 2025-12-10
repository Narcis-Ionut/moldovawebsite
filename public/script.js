// Set year only if element exists
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Handle the background video stopping before footer
function adjustBackgroundVideo() {
  const footer = document.querySelector("footer");
  const bgVideo = document.querySelector(".bg-video");

  if (footer && bgVideo) {
    // Calculate footer position from top of document
    const footerTop = footer.getBoundingClientRect().top + window.scrollY;
    const windowHeight = window.innerHeight;

    // When scrolled to footer, clip the video
    function updateVideoPosition() {
      const scrollY = window.scrollY;

      // Check if footer is in view
      if (scrollY + windowHeight > footerTop) {
        // Calculate how much of the footer is visible
        const visibleFooter = scrollY + windowHeight - footerTop;

        // Apply a clip-path to the video
        bgVideo.style.clipPath = `inset(0 0 ${visibleFooter}px 0)`;
      } else {
        // Reset clip path when footer not in view
        bgVideo.style.clipPath = "none";
      }
    }

    // Initial position check
    updateVideoPosition();

    // Update on scroll
    window.addEventListener("scroll", updateVideoPosition);

    // Update on resize
    window.addEventListener("resize", () => {
      // Recalculate footer position
      const updatedFooterTop =
        footer.getBoundingClientRect().top + window.scrollY;
      updateVideoPosition();
    });
  }
}

// Initialize once DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  adjustBackgroundVideo();

  // Initialize mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isExpanded = navMenu.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", String(isExpanded));
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });

    // Close menu when clicking a nav link
    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Initialize language toggle
  const langButtons = document.querySelectorAll(".lang-btn");

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      langButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });

      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");

      // Language switch logic handled by the IIFE below
      const lang = button.textContent.trim();
      console.log(`Switching to ${lang}`);
    });
  });
});

// Language toggle (RO ↔ RU) — updated for Astro routes
(function () {
  const btns = document.querySelectorAll(".lang-btn");
  if (!btns.length) return;

  // Map using Astro clean URLs
  const routes = [
    { ro: ["/", "/index"], ru: ["/ru", "/ru/index"] },
    { ro: ["/preturi"], ru: ["/ru/preturi"] },
    { ro: ["/contact"], ru: ["/ru/contact"] },
    { ro: ["/termeni"], ru: ["/ru/termeni"] },
    {
      ro: ["/politica-confidentialitate"],
      ru: ["/ru/politica-confidentialitate"],
    },

    // ---- Services / Blog (RO ↔ RU) ----
    { ro: ["/serviciiBlog/design-web"], ru: ["/ru/serviciiBlog/design-web"] },
    {
      ro: ["/serviciiBlog/dezvoltare-web"],
      ru: ["/ru/serviciiBlog/dezvoltare-web"],
    },
    {
      ro: ["/serviciiBlog/magazin-online"],
      ru: ["/ru/serviciiBlog/magazin-online"],
    },
    {
      ro: ["/serviciiBlog/mentenanta"],
      ru: ["/ru/serviciiBlog/mentenanta"],
    },
    {
      ro: ["/serviciiBlog/seo-on-page"],
      ru: ["/ru/serviciiBlog/seo-on-page"],
    },
  ];

  const canon = (p) => {
    p = decodeURI(p || window.location.pathname);
    if (!p.startsWith("/")) p = "/" + p;

    // Home (RO)
    if (p === "/" || p === "") return "/";

    // Normalize RU home variants: /ru, /ru/, /ru/index
    if (/^\/ru\/?(index)?$/i.test(p)) return "/ru";

    // Trim trailing slash
    if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);

    // Strip .html
    if (p.toLowerCase().endsWith(".html")) p = p.slice(0, -5);

    // Normalize explicit /index
    if (p === "/index") p = "/";

    return p;
  };

  const current = canon(window.location.pathname);
  const isRU = current === "/ru" || current.startsWith("/ru/");

  // Mark active button
  btns.forEach((b) => {
    const t = b.textContent.trim().toLowerCase(); // "ro" | "ru"
    const active = t === "ru" ? isRU : !isRU;
    b.classList.toggle("active", active);
    b.setAttribute("aria-pressed", String(active));
  });

  function counterpart(target) {
    const wantRU = target === "ru";
    for (const r of routes) {
      if (r.ro.map(canon).includes(current) && wantRU) return r.ru[0];
      if (r.ru.map(canon).includes(current) && !wantRU) return r.ro[0];
    }
    // Fallbacks
    return wantRU ? "/ru" : "/";
  }

  btns.forEach((b) =>
    b.addEventListener("click", () => {
      const target = b.textContent.trim().toLowerCase();
      const dest = counterpart(target);
      window.location.href = target === "ru" ? encodeURI(dest) : dest;
    })
  );
})();

// Chips (project type)
const chipGroup = document.querySelector(".chip-group");
const projectTypeInput = document.getElementById("project_type");
if (chipGroup && projectTypeInput) {
  chipGroup.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    chipGroup
      .querySelectorAll(".chip")
      .forEach((c) => c.setAttribute("aria-checked", "false"));
    btn.setAttribute("aria-checked", "true");
    projectTypeInput.value = btn.dataset.value;
  });
}

// Budget slider badge
const budget = document.getElementById("budget");
const badge = document.getElementById("budgetBadge");
if (budget && badge) {
  const update = () => {
    badge.textContent = "€" + budget.value;
  };
  budget.addEventListener("input", update);
  update();
}

// Progressive enhancement: AJAX submit with fallback
const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const statusEl = document.getElementById("formStatus");

// Helper: serialize form to x-www-form-urlencoded
function serialize(formEl) {
  const pairs = [];
  const formData = new FormData(formEl);
  for (const [name, value] of formData.entries()) {
    pairs.push(encodeURIComponent(name) + "=" + encodeURIComponent(value));
  }
  return pairs.join("&");
}

if (form) {
  form.addEventListener("submit", async (e) => {
    // Basic HTML5 validity first
    if (!form.checkValidity()) {
      // let the browser show native messages
      return;
    }

    // Try AJAX; if it fails, let normal submit happen
    e.preventDefault();

    // Add loading state
    submitBtn.disabled = true;
    const existing = submitBtn.querySelector(".spinner");
    if (!existing) {
      const sp = document.createElement("span");
      sp.className = "spinner";
      sp.setAttribute("aria-hidden", "true");
      submitBtn.prepend(sp);
    }
    statusEl.className = "status";
    statusEl.textContent = "Se trimite...";

    try {
      // Ensure Turnstile token is present (Cloudflare injects cf-turnstile-response)
      const tokenInput = form.querySelector(
        'input[name="cf-turnstile-response"]'
      );
      if (!tokenInput || !tokenInput.value) {
        statusEl.className = "status error";
        statusEl.textContent = "Te rugăm să confirmi verificarea anti-spam.";
        submitBtn.disabled = false;
        submitBtn.querySelector(".spinner")?.remove();
        return;
      }

      const res = await fetch(form.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: serialize(form),
      });

      if (!res.ok) throw new Error("Eroare la trimitere: " + res.status);

      // Try to parse JSON; if not JSON, still show success
      let ok = true;
      try {
        const data = await res.json();
        ok = data && (data.ok === true || data.status === "ok");
      } catch (_) {}

      if (ok) {
        statusEl.className = "status success";
        statusEl.textContent =
          "Mulțumim! Mesajul a fost trimis. Îți răspundem în scurt timp.";
        form.reset();
        // Reset chips to default
        chipGroup
          ?.querySelectorAll(".chip")
          .forEach((c, i) =>
            c.setAttribute("aria-checked", i === 0 ? "true" : "false")
          );
        if (projectTypeInput) projectTypeInput.value = "Site de prezentare";
        // Reset Turnstile
        if (window.turnstile && typeof turnstile.reset === "function") {
          const widget = document.querySelector(".cf-turnstile");
          widget && turnstile.reset(widget);
        }
      } else {
        throw new Error("Răspuns neașteptat de la server.");
      }
    } catch (err) {
      statusEl.className = "status error";
      statusEl.textContent =
        "Ne pare rău, nu am putut trimite mesajul. Încearcă din nou sau scrie la contact@moldovawebsite.md.";
      // As fallback, allow normal submit if user tries din nou
    } finally {
      submitBtn.disabled = false;
      submitBtn.querySelector(".spinner")?.remove();
    }
  });
}
