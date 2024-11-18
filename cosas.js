// Datos de auriculares
const data = {
  Beats: { pros: ["Buen diseño", "Gran sonido de bajos", "Fácil de usar"], cons: ["Precio elevado", "Poca duración de batería"] },
  Apple: { pros: ["Integración con iOS", "Buena calidad de sonido", "Gran soporte técnico"], cons: ["Precio alto", "Limitado a ecosistema Apple"] },
  Sony: { pros: ["Calidad de sonido superior", "Cancelación de ruido efectiva", "Buena duración de batería"], cons: ["Puede ser costoso", "Diseño voluminoso"] },
  JBL: { pros: ["Buen equilibrio calidad-precio", "Durabilidad", "Sonido potente"], cons: ["Cancelación de ruido limitada", "Calidad media de materiales"] },
  Sennheiser: { pros: ["Calidad de sonido superior", "Comodidad", "Excelente respuesta de bajos"], cons: ["Costo elevado", "Compatibilidad limitada"] },
  Xiaomi: { pros: ["Precio accesible", "Buena calidad para su gama", "Ligero"], cons: ["Cancelación de ruido básica", "Materiales de menor calidad"] },
  Samsung: { pros: ["Buena integración con Android", "Diseño ergonómico", "Buena calidad de sonido"], cons: ["Costosos", "Funcionalidades limitadas en iOS"] },
  Huawei: { pros: ["Precio competitivo", "Calidad de sonido decente", "Cancelación de ruido aceptable"], cons: ["Opciones limitadas", "Poca compatibilidad"] }
};

function compare() {
  const brand1 = document.getElementById("brand1").value;
  const brand2 = document.getElementById("brand2").value;

  document.getElementById("brand1Name").innerText = brand1;
  document.getElementById("brand2Name").innerText = brand2;

  document.getElementById("brand1Pros").innerHTML = data[brand1].pros.map(p => `<li>${p}</li>`).join("");
  document.getElementById("brand1Cons").innerHTML = data[brand1].cons.map(c => `<li>${c}</li>`).join("");
  document.getElementById("brand2Pros").innerHTML = data[brand2].pros.map(p => `<li>${p}</li>`).join("");
  document.getElementById("brand2Cons").innerHTML = data[brand2].cons.map(c => `<li>${c}</li>`).join("");
}

// Animación de estrellas
const canvas = document.getElementById("starsCanvas");
const ctx = canvas.getContext("2d");
let stars = Array(150).fill().map(() => ({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, size: Math.random() * 2 }));

function animateStars() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
    star.y += 0.5;
    if (star.y > canvas.height) star.y = 0;
  });
  requestAnimationFrame(animateStars);
}

animateStars();