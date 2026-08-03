// ---------- Cursor glow + background parallax ----------
const glow = document.getElementById('cursorGlow');
window.addEventListener('pointermove', (e) => {
  document.body.style.setProperty('--mx', e.clientX + 'px');
  document.body.style.setProperty('--my', e.clientY + 'px');
  if (glow) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }
});

// ---------- Mobile nav ----------
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('show');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

// ---------- Navbar scroll state, progress bar, floating resume ----------
const navbar = document.getElementById('navbar');
const progressBar = document.getElementById('progressBar');
const fab = document.querySelector('.fab-resume');

const onScroll = () => {
  const y = window.scrollY;
  navbar?.classList.toggle('scrolled', y > 40);
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? (y / height) * 100 : 0;
  if (progressBar) progressBar.style.width = progress + '%';
  // show floating resume button after leaving the hero
  fab?.classList.toggle('show', y > 520);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- Reveal-on-scroll ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---------- Animated count-up stats ----------
const easeOut = t => 1 - Math.pow(1 - t, 3);
function countUp(el) {
  const target = parseInt(el.dataset.target, 10) || 0;
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();
  function frame(now) {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(easeOut(p) * target) + suffix;
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      countUp(entry.target);
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });
document.querySelectorAll('.count').forEach(el => countObserver.observe(el));

// ---------- Skill proficiency bars fill on scroll ----------
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const li = entry.target;
      li.style.setProperty('--fill', (li.dataset.level || 0) + '%');
      li.classList.add('filled');
      skillObserver.unobserve(li);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.skill-list li').forEach(li => skillObserver.observe(li));

// ---------- Placeholder live-demo links: warn instead of dead-navigating ----------
document.querySelectorAll('[data-todo="live-demo"]').forEach(a => {
  a.addEventListener('click', (e) => {
    if (a.getAttribute('href') === '#') {
      e.preventDefault();
      alert('Live demo link not set yet. Add the real URL in index.html (data-todo="live-demo").');
    }
  });
});

// ---------- Pause MERN marquee on hover ----------
document.querySelectorAll('.mern-strip').forEach((strip) => {
  const track = strip.querySelector('.mern-track');
  strip.addEventListener('mouseenter', () => { if (track) track.style.animationPlayState = 'paused'; });
  strip.addEventListener('mouseleave', () => { if (track) track.style.animationPlayState = 'running'; });
});
