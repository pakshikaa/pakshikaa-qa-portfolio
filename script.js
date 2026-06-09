const glow = document.getElementById('cursorGlow');

window.addEventListener('pointermove', (e) => {
  document.body.style.setProperty('--mx', e.clientX + 'px');
  document.body.style.setProperty('--my', e.clientY + 'px');
  if (glow) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }
});

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn?.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('show'));
});

const navbar = document.getElementById('navbar');
const progressBar = document.getElementById('progressBar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? (window.scrollY / height) * 100 : 0;
  progressBar.style.width = progress + '%';
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('pointermove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--card-x', (e.clientX - rect.left) + 'px');
    card.style.setProperty('--card-y', (e.clientY - rect.top) + 'px');
  });
});


// Pause MERN marquee on hover for smoother UX
document.querySelectorAll('.mern-strip').forEach((strip) => {
  const track = strip.querySelector('.mern-track');
  strip.addEventListener('mouseenter', () => {
    if (track) track.style.animationPlayState = 'paused';
  });
  strip.addEventListener('mouseleave', () => {
    if (track) track.style.animationPlayState = 'running';
  });
});
