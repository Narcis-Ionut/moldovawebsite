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

// Contact form enhancements
const contactForm = document.getElementById("contactForm");
const chipGroup = document.querySelector(".dev-chip-group, .chip-group");
const projectTypeInput = document.getElementById("project_type");
const budget = document.getElementById("budget");
const badge = document.getElementById("budgetBadge");

if (chipGroup && projectTypeInput) {
  const chips = [...chipGroup.querySelectorAll(".dev-chip, .chip")];

  chips.forEach((chip, index) => {
    chip.setAttribute(
      "aria-checked",
      chip.classList.contains("active") || index === 0 ? "true" : "false"
    );
  });

  chipGroup.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const button = target.closest(".dev-chip, .chip");
    if (!button || !chipGroup.contains(button)) return;

    chips.forEach((chip) => {
      chip.classList.remove("active");
      chip.setAttribute("aria-checked", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-checked", "true");
    projectTypeInput.value = button.dataset.value || "";
  });
}

function updateBudgetBadge() {
  if (budget && badge) badge.textContent = `€${budget.value}`;
}

budget?.addEventListener("input", updateBudgetBadge);
updateBudgetBadge();

if (contactForm instanceof HTMLFormElement) {
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const statusElement = document.getElementById("formStatus");
  const locale =
    contactForm.querySelector('input[name="lang"]')?.value === "ru"
      ? "ru"
      : "ro";
  const initialProjectType = projectTypeInput?.value || "";

  const copy =
    locale === "ru"
      ? {
          pending: "Отправляем...",
          captcha: "Подтвердите, пожалуйста, что вы не робот.",
          success:
            "Спасибо! Сообщение отправлено. Мы ответим в ближайшее время.",
          error:
            "Не удалось отправить сообщение. Попробуйте ещё раз или напишите на contact@chisinauweb.com.",
        }
      : {
          pending: "Se trimite...",
          captcha: "Te rugăm să confirmi verificarea anti-spam.",
          success:
            "Mulțumim! Mesajul a fost trimis. Îți răspundem în scurt timp.",
          error:
            "Nu am putut trimite mesajul. Încearcă din nou sau scrie la contact@chisinauweb.com.",
        };

  function setStatus(state, message) {
    if (!statusElement) return;
    statusElement.className = `dev-form-help dev-form-status is-${state}`;
    statusElement.textContent = message;
  }

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    if (!(submitButton instanceof HTMLButtonElement)) return;

    const tokenInput = contactForm.querySelector(
      'input[name="cf-turnstile-response"]'
    );
    if (!(tokenInput instanceof HTMLInputElement) || !tokenInput.value) {
      setStatus("error", copy.captcha);
      return;
    }

    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    setStatus("pending", copy.pending);

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.ok !== true) {
        throw new Error(`Contact request failed: ${response.status}`);
      }

      setStatus("success", copy.success);
      contactForm.reset();

      if (chipGroup && projectTypeInput) {
        const chips = [...chipGroup.querySelectorAll(".dev-chip, .chip")];
        chips.forEach((chip, index) => {
          chip.classList.toggle("active", index === 0);
          chip.setAttribute("aria-checked", index === 0 ? "true" : "false");
        });
        projectTypeInput.value = initialProjectType;
      }

      updateBudgetBadge();
      if (window.turnstile && typeof window.turnstile.reset === "function") {
        window.turnstile.reset();
      }
    } catch (error) {
      console.error("Contact form submission failed", error);
      setStatus("error", copy.error);
      if (window.turnstile && typeof window.turnstile.reset === "function") {
        window.turnstile.reset();
      }
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
    }
  });
}
