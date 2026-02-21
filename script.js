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

if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
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
