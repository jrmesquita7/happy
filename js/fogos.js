const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.zIndex = 9999;
canvas.style.pointerEvents = "none";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const particles = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createFirework(x, y) {
  const count = 100;
  for (let i = 0; i < count; i++) {
    particles.push({
      x,
      y,
      speed: random(2, 7),
      angle: random(0, Math.PI * 2),
      radius: 2,
      alpha: 1,
      decay: random(0.01, 0.02),
      color: `hsl(${Math.floor(Math.random() * 360)}, 100%, 60%)`
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, index) => {
    const vx = Math.cos(p.angle) * p.speed;
    const vy = Math.sin(p.angle) * p.speed;
    p.x += vx;
    p.y += vy;
    p.alpha -= p.decay;

    if (p.alpha <= 0) {
      particles.splice(index, 1);
    } else {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color.match(/\d+/g).join(',')},${p.alpha})`;
      ctx.fill();
    }
  });

  requestAnimationFrame(animate);
}

// Disparar fogos em intervalos no topo da página
setTimeout(() => {
  const interval = setInterval(() => {
    const x = random(canvas.width * 0.2, canvas.width * 0.8);
    const y = random(canvas.height * 0.2, canvas.height * 0.5);
    createFirework(x, y);
  }, 800);

  // Para após 6 segundos
  setTimeout(() => clearInterval(interval), 30000);
}, 500);

animate();
