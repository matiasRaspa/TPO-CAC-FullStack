// Obtener referencia al formulario
const formulario = document.getElementById("contactoFormulario");

// Agregar evento de envío del formulario
formulario.addEventListener("submit", function (event) {
  // Detener el envío del formulario por defecto
  event.preventDefault();

  // Obtener valores de los campos
  const nombre = formulario.elements.name.value;
  const apellido = formulario.elements.lastName.value;
  const edad = formulario.elements.age.value;
  const sexo = formulario.elements.gender.value;
  const email = formulario.elements.email.value;
  const observaciones = formulario.elements.observaciones.value;
  const aceptoTerminos = formulario.elements.acepto.checked;

  // Validar nombre y apellido
  if (nombre === "") {
    alert("Por favor, ingresa tu nombre.");
    return;
  }

  if (apellido === "") {
    alert("Por favor, ingresa tu apellido.");
    return;
  }

  // Validar edad
  if (edad === "") {
    alert("Por favor, ingresa tu edad.");
    return;
  }

  if (isNaN(edad) || edad < 1 || edad > 120) {
    alert("Por favor, ingresa una edad válida.");
    return;
  }

  // Validar sexo
  if (sexo === "") {
    alert("Por favor, selecciona tu sexo.");
    return;
  }

  // Validar correo electrónico
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (email === "") {
    alert("Por favor, ingresa tu correo electrónico.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }

  // Validar observaciones
  if (observaciones.length > 500) {
    alert("Las observaciones no pueden exceder los 500 caracteres.");
    return;
  }

  // Validar acepto términos y condiciones
  if (!aceptoTerminos) {
    alert("Debes aceptar los términos y condiciones.");
    return;
  }

  // Mensaje si todas las validaciones pasan
  alert("¡Formulario enviado correctamente!");
  formulario.reset();
});
