const data = {
  Beats: {
    pros: ["Buen diseño", "Gran sonido de bajos", "Fácil de usar"],
    cons: ["Precio elevado", "Poca duración de batería"]
  },
  Apple: {
    pros: ["Integración con iOS", "Buena calidad de sonido", "Gran soporte técnico"],
    cons: ["Precio alto", "Limitado a ecosistema Apple"]
  },
  Sony: {
    pros: ["Calidad de sonido superior", "Cancelación de ruido efectiva", "Buena duración de batería"],
    cons: ["Puede ser costoso", "Diseño voluminoso"]
  },
  JBL: {
    pros: ["Buen equilibrio calidad-precio", "Durabilidad", "Sonido potente"],
    cons: ["Cancelación de ruido limitada", "Calidad media de materiales"]
  },
  Sennheiser: {
    pros: ["Calidad de sonido superior", "Comodidad", "Excelente respuesta de bajos"],
    cons: ["Costo elevado", "Compatibilidad limitada con algunos dispositivos"]
  },
  Xiaomi: {
    pros: ["Precio accesible", "Buena calidad para su gama", "Ligero"],
    cons: ["Cancelación de ruido básica", "Materiales de menor calidad"]
  },
  Samsung: {
    pros: ["Buena integración con Android", "Diseño ergonómico", "Buena calidad de sonido"],
    cons: ["Costosos", "Funcionalidades limitadas en iOS"]
  },
  Huawei: {
    pros: ["Precio competitivo", "Calidad de sonido decente", "Cancelación de ruido aceptable"],
    cons: ["Opciones limitadas de personalización", "Poca compatibilidad fuera de Android"]
  }
};

function compare() {
  const brand1 = document.getElementById("brand1").value;
  const brand2 = document.getElementById("brand2").value;

  document.getElementById("brand1Name").innerText = brand1;
  document.getElementById("brand2Name").innerText = brand2;

  const brand1Pros = document.getElementById("brand1Pros");
  const brand1Cons = document.getElementById("brand1Cons");
  const brand2Pros = document.getElementById("brand2Pros");
  const brand2Cons = document.getElementById("brand2Cons");

  // Limpia las listas
  brand1Pros.innerHTML = "<li>Pros</li>";
  brand1Cons.innerHTML = "<li>Contras</li>";
  brand2Pros.innerHTML = "<li>Pros</li>";
  brand2Cons.innerHTML = "<li>Contras</li>";

  // Llena las listas con pros y cons de la marca 1
  data[brand1].pros.forEach(pro => {
    const li = document.createElement("li");
    li.textContent = pro;
    brand1Pros.appendChild(li);
  });
  data[brand1].cons.forEach(con => {
    const li = document.createElement("li");
    li.textContent = con;
    brand1Cons.appendChild(li);
  });

  // Llena las listas con pros y cons de la marca 2
  data[brand2].pros.forEach(pro => {
    const li = document.createElement("li");
    li.textContent = pro;
    brand2Pros.appendChild(li);
  });
  data[brand2].cons.forEach(con => {
    const li = document.createElement("li");
    li.textContent = con;
    brand2Cons.appendChild(li);
  });
}