document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector("form");
  const mensaje = document.getElementById("mensaje-estado");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(formulario);

    fetch(formulario.action, {
      method: formulario.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          mostrarMensaje("Formulario enviado correctamente", "exito");
          formulario.reset();
        } else {
          throw new Error("Error en el envío");
        }
      })
      .catch(() => {
        mostrarMensaje("No se pudo enviar el formulario", "error");
      });
  });

  function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = tipo === "exito" 
        ? "mensaje-formulario mensaje-exito" 
        : "mensaje-formulario mensaje-error";
    mensaje.style.display = "block";

    setTimeout(() => {
      mensaje.style.display = "none";
    }, 5000);
  }
});
