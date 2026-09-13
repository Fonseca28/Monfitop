const imagenes = document.getElementById("carrusel-imagenes");
  const totalImagenes = imagenes.children.length;
  const btnIzquierda = document.getElementById("btn-izquierda");
  const btnDerecha = document.getElementById("btn-derecha");
 
  let indiceActual = 0;
 
  function actualizarCarrusel() {
    // sin CSS de transición, la imagen simplemente se muestra u oculta
    for (let i = 0; i < totalImagenes; i++) {
      imagenes.children[i].style.display = (i === indiceActual) ? "block" : "none";
    }
  }
 
  function moverCarrusel(direccion) {
    indiceActual += direccion;
    if (indiceActual < 0) indiceActual = totalImagenes - 1;
    if (indiceActual >= totalImagenes) indiceActual = 0;
    actualizarCarrusel();
  }
 
  btnIzquierda.addEventListener("click", () => moverCarrusel(-1));
  btnDerecha.addEventListener("click", () => moverCarrusel(1));
 
  setInterval(() => moverCarrusel(1), 4000);
 
  actualizarCarrusel(); // muestra solo la primera imagen al cargar