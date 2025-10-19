// 🌟 Efek Fade-in Saat Scroll
const faders = document.querySelectorAll('.fade-in, .project-card');
window.addEventListener('scroll', () => {
  faders.forEach(fader => {
    const rect = fader.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) fader.classList.add('visible');
  });
});

// 🌙 Mode Gelap / Terang
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// 📊 Animasi Progress Bar
const progressBars = document.querySelectorAll('.progress-bar span');
function animateProgress() {
  progressBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0)
      bar.style.width = bar.getAttribute('data-progress') + '%';
  });
}
window.addEventListener('scroll', animateProgress);

// 🎭 Efek Interaktif Foto Profil
const profileImg = document.getElementById('profileImg');
if (profileImg) {
  document.addEventListener('mousemove', e => {
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;
    profileImg.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });
  profileImg.addEventListener('mouseleave', () => {
    profileImg.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
}

// 🌌 Efek Partikel Bintang
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createParticles() {
  particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = body.classList.contains('dark-mode') ? '#ffffff' : '#1976d2';
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.speedX;
    p.y += p.speedY;
    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
  });
  requestAnimationFrame(drawParticles);
}

createParticles();
drawParticles();
