document.addEventListener('DOMContentLoaded', () => {

  /* Mobile sidebar toggle
  ------------------------------------------------------ */
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menu-toggle');

  menuToggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('#side-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* Highlight current section in nav
  ------------------------------------------------------ */
  const navLinks = document.querySelectorAll('#side-nav a');
  const sections = document.querySelectorAll('main > section[id]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach((section) => observer.observe(section));

  /* Only one interest card open at a time
  ------------------------------------------------------ */
  const interestCards = document.querySelectorAll('.interest-card');
  interestCards.forEach((card) => {
    card.addEventListener('toggle', () => {
      if (!card.open) return;
      interestCards.forEach((other) => {
        if (other !== card) other.open = false;
      });
    });
  });

});
