// Referencias a elementos
const botonTexto = document.getElementById("botonTexto");
const botonColor = document.getElementById("botonColor");
const texto = document.getElementById("texto");

// Guardar el texto original
const textoOriginal = texto.innerText;
const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. 
Suspendisse potenti. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. 
Integer feugiat scelerisque varius morbi enim nunc faucibus.`;

// Estado de toggle
let mostrandoLorem = false;

// 1. Alternar entre texto original y Lorem Ipsum
botonTexto.addEventListener("click", () => {
  if (mostrandoLorem) {
    texto.innerText = textoOriginal;
  } else {
    texto.innerText = loremIpsum;
  }
  mostrandoLorem = !mostrandoLorem; // invertimos estado
});

// 2. Lista de estilos de color (background + texto)
const colores = [
  { bg: "bg-light", text: "text-dark" },
  { bg: "bg-primary", text: "text-white" },
  { bg: "bg-success", text: "text-white" },
  { bg: "bg-dark", text: "text-light" },
  { bg: "bg-warning", text: "text-dark" }
];

let indiceColor = 0;

// Añadir transición suave al body
document.body.style.transition = "background-color 0.8s ease, color 0.8s ease";

botonColor.addEventListener("click", () => {
  // Quitar clases anteriores
  document.body.className = "";

  // Obtener el estilo actual
  const colorActual = colores[indiceColor];

  // Aplicar clases al body
  document.body.classList.add(colorActual.bg, colorActual.text);

  // Avanzar al siguiente color
  indiceColor = (indiceColor + 1) % colores.length;
});
