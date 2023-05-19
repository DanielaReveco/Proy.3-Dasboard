import cargarPeliculas from "./assets/js/movie.js";

let pagina = 1;

if (window.location.href.includes("graficos")) {
  cargarPeliculas(pagina);
} else {
  const btnAnterior = document.getElementById("btnAnterior");
  const btnSiguiente = document.getElementById("btnSiguiente");

  btnSiguiente.addEventListener("click", () => {
    if (pagina < 1000) {
      pagina += 1;
      cargarPeliculas(pagina, "tarjetas");
    }
  });

  btnAnterior.addEventListener("click", () => {
    if (pagina > 1) {
      pagina -= 1;
      cargarPeliculas(pagina, "tarjetas");
    }
  });

  cargarPeliculas(pagina, "tarjetas");
}
