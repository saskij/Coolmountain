const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const header = document.getElementById("site-header");
const backToTop = document.getElementById("back-to-top");
const menuBackdrop = document.getElementById("menu-backdrop");

if (toggle && mobileMenu && menuBackdrop) {
  const openMenu = () => {
    mobileMenu.classList.remove("hidden");
    menuBackdrop.classList.remove("hidden");
    requestAnimationFrame(() => {
      mobileMenu.classList.remove("opacity-0", "-translate-y-4");
      mobileMenu.classList.add("opacity-100", "translate-y-0");
      menuBackdrop.classList.remove("opacity-0");
      menuBackdrop.classList.add("opacity-100");
    });
  };
  const closeMenu = () => {
    mobileMenu.classList.add("opacity-0", "-translate-y-4");
    mobileMenu.classList.remove("opacity-100", "translate-y-0");
    menuBackdrop.classList.remove("opacity-100");
    menuBackdrop.classList.add("opacity-0");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
      menuBackdrop.classList.add("hidden");
    }, 200);
  };
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (mobileMenu.classList.contains("hidden")) {
      openMenu();
    } else {
      closeMenu();
    }
  });
  menuBackdrop.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
      closeMenu();
    }
  });

  // Close menu when a link is clicked
  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Allow the default link behavior to happen (navigation)
      // Delay closing the menu slightly so it doesn't interfere with the click
      setTimeout(() => {
        closeMenu();
      }, 150);
    });
  });
}

const updateHeaderBackground = () => {
  if (!header) {
    return;
  }
  const smartHeader = header.dataset.smartHeader === "true";
  if (smartHeader) {
    header.classList.toggle("scrolled", window.scrollY > 50);
  } else {
    header.classList.add("scrolled");
  }
};

const updateScrollUI = () => {
  updateHeaderBackground();

  // Back to top logic
  if (backToTop) {
    if (window.scrollY >= 500) {
      backToTop.classList.remove("hidden");
      backToTop.classList.add("flex");
      requestAnimationFrame(() => {
        backToTop.classList.remove("opacity-0", "translate-y-2");
        backToTop.classList.add("opacity-100", "translate-y-0");
      });
    } else {
      backToTop.classList.add("opacity-0", "translate-y-2");
      backToTop.classList.remove("opacity-100", "translate-y-0");
      setTimeout(() => {
        backToTop.classList.add("hidden");
        backToTop.classList.remove("flex");
      }, 200);
    }
  }
};

// Reveal on scroll logic
const revealCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      // Once revealed, we don't need to observe it anymore
      observer.unobserve(entry.target);
    }
  });
};

const revealObserver = new IntersectionObserver(revealCallback, {
  root: null,
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
});

const initReveals = () => {
  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((el) => revealObserver.observe(el));
};

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

window.addEventListener("scroll", updateScrollUI);
document.addEventListener("DOMContentLoaded", () => {
  updateScrollUI();
  initReveals();
});
