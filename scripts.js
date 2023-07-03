
function guardarDatos() {
  var usuario = document.getElementById("usuario").value;
  var correo = document.getElementById("correo").value;

  localStorage.setItem("usuario", usuario);
  localStorage.setItem("correo", correo);

  mostrarDatos();
}

// Mostrar los datos 
function mostrarDatos() {
  var usuario = localStorage.getItem("usuario");
  var correo = localStorage.getItem("correo");

  var mensaje =
    "Nombre de usuario: " + usuario + "<br>Correo electrónico: " + correo;
  document.getElementById("datos").innerHTML = mensaje;
}
