
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
 