document.addEventListener('DOMContentLoaded', () => {
  // ── Typewriter (name only) ──────────────────────────────
  const el     = document.getElementById('typewriter');
  const cursor = document.getElementById('cursor');
  const text   = 'Ammar Alinur';
  let i = 0;

  function type() {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(type, 82);
    } else {
      setTimeout(() => { cursor.style.display = 'none'; }, 2800);
    }
  }

  type();

  // ── Scroll fade-in (staggered) ──────────────────────────
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.07}s`;
    observer.observe(el);
  });
});
