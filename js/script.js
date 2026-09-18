document.addEventListener("DOMContentLoaded", () => {
    // LÓGICA DEL BUSCADOR INTELIGENTE CON REDIRECCIÓN
    const formBuscador = document.getElementById("form-buscador");
    const inputBusqueda = document.getElementById("input-busqueda");

    if (formBuscador && inputBusqueda) {
        formBuscador.addEventListener("submit", (e) => {
            e.preventDefault(); // Evita recargar la página

            const termino = inputBusqueda.value.trim().toLowerCase();

            // Evaluar según la palabra clave tipeada por el usuario
            if (termino.includes("galeria") || termino.includes("foto") || termino.includes("recuerdo")) {
                window.location.href = "galeria.html";
            } 
            else if (termino.includes("servicio") || termino.includes("curso") || termino.includes("clase") || termino.includes("taller")) {
                window.location.href = "servicios.html";
            } 
            else if (termino.includes("equipo") || termino.includes("profe") || termino.includes("personal") || termino.includes("profe")) {
                window.location.href = "nosotros/personal.html";
            } 
            else if (termino.includes("nosotros") || termino.includes("mision") || termino.includes("historia")) {
                window.location.href = "nosotros/nosotros.html";
            } 
            else if (termino.includes("contacto") || termino.includes("correo") || termino.includes("telefono") || termino.includes("whatsapp")) {
                window.location.href = "contacto.html";
            } 
            else if (termino.includes("inicio") || termino.includes("home")) {
                window.location.href = "index.html";
            } 
            else {
                alert("No encontramos resultados para '" + inputBusqueda.value + "'. Intenta buscar: servicios, contacto, galería, nosotros o equipo.");
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    // Lógica previa del menú hamburguesa...
    const btnHamburguesa = document.getElementById("btn-hamburguesa");
    const navLinks = document.getElementById("nav-links");

    if (btnHamburguesa && navLinks) {
        btnHamburguesa.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            btnHamburguesa.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
        });
    }

    // LÓGICA BOTÓN VOLVER ARRIBA
    const btnBackToTop = document.getElementById("btn-back-to-top");

    if (btnBackToTop) {
        // Mostrar/ocultar el botón al hacer scroll
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                btnBackToTop.classList.add("show");
            } else {
                btnBackToTop.classList.remove("show");
            }
        });

        // Evento clic para subir con desplazamiento suave
        btnBackToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const btnTheme = document.getElementById("btn-theme");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    // 1. Verificar si hay un tema guardado en localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        if (themeIcon) themeIcon.textContent = "☀️"; // Ícono de Sol si está de noche
    } else {
        if (themeIcon) themeIcon.textContent = "🌙"; // Ícono de Luna si está de día
    }

    // 2. Evento al hacer clic en el botón
    if (btnTheme) {
        btnTheme.addEventListener("click", () => {
            body.classList.toggle("dark-mode");

            // Guardar preferencia y cambiar el ícono según corresponda
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                themeIcon.textContent = "☀️";
            } else {
                localStorage.setItem("theme", "light");
                themeIcon.textContent = "🌙";
            }
        });
    }
});




  // 1. Reemplaza esto con tu Public Key (paso 5)
  emailjs.init("jarMHwAeFcUyeU3ug");
 
  const formulario = document.getElementById("formulario");
  const estado = document.getElementById("estado");
 
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault(); // evita que la página se recargue
 
    const datos = {
      nombre: document.getElementById("nombre").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      telefono: document.getElementById("telefono").value
    };
 
    estado.textContent = "Enviando...";
 
    // 2. Correo para ti (el admin), con el mensaje de la persona
    // Reemplaza "TU_SERVICE_ID" y "template_admin" con los tuyos (pasos 2 y 3)
    emailjs.send("monfitop-forms", "template_Empresa", datos)
      .then(function () {
 
        // 3. Correo de confirmación para la persona que llenó el formulario
        // Reemplaza "template_confirmacion" con el tuyo (paso 4)
        return emailjs.send("monfitop-forms", "template_Cliente", datos);
      })
      .then(function () {
        estado.textContent = "¡Mensaje enviado! Revisa tu correo.";
        formulario.reset();
      })
      .catch(function (error) {
        estado.textContent = "Hubo un error al enviar. Intenta de nuevo.";
        console.error(error);
      });
  });
 
