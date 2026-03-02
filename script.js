/* ============================================================
   UX Portfolio — Main Script
   ============================================================ */

/* ── Active Nav Link ──────────────────────────────────────── */
(function () {
  const links = document.querySelectorAll('.nav__links a, .nav__mobile a');
  const current = location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ── Mobile Navigation ────────────────────────────────────── */
const burger = document.getElementById('navBurger');
const mobileNav = document.getElementById('navMobile');

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function getFocusables(container) {
  return Array.from(container.querySelectorAll(FOCUSABLE)).filter(
    (el) => !el.hasAttribute('disabled') && el.offsetParent !== null
  );
}

function openMobileNav() {
  mobileNav.classList.add('open');
  burger.setAttribute('aria-expanded', 'true');
  burger.setAttribute('aria-label', 'Close menu');
  const focusables = getFocusables(mobileNav);
  if (focusables.length) focusables[0].focus();
  document.addEventListener('keydown', handleMobileNavKeydown);
}

function closeMobileNav() {
  mobileNav.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', 'Open menu');
  burger.focus();
  document.removeEventListener('keydown', handleMobileNavKeydown);
}

function handleMobileNavKeydown(e) {
  if (e.key === 'Escape') {
    closeMobileNav();
    return;
  }
  if (e.key !== 'Tab' || !mobileNav.classList.contains('open')) return;
  const focusables = getFocusables(mobileNav);
  if (focusables.length === 0) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey) {
    if (document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  } else {
    if (document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}

if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('open');
    if (isOpen) closeMobileNav();
    else openMobileNav();
  });

  mobileNav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => closeMobileNav());
  });
}

/* ── Scroll Reveal ────────────────────────────────────────── */
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealElements.forEach(el => observer.observe(el));
} else {
  // Fallback for older browsers
  revealElements.forEach(el => el.classList.add('visible'));
}

/* ── Contact Form (mailto fallback) ───────────────────────── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const message = document.getElementById('message')?.value || '';
    const subject = encodeURIComponent(`Portfolio Enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:whupert@gmail.com?subject=${subject}&body=${body}`;
  });
}
