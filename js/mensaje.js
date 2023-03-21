const boton = document.getElementById("formulario__boton");
boton.addEventListener("click", function validar(evento) {

    evento.preventDefault();

    var nombre = document.getElementById("formulario__nombre");
    var mensaje = document.getElementById("formulario__textarea");
    if (nombre.value == "" || mensaje.value == "") {
        alert("Debes llenar todos los campos");
        
    } else {
        
        window.location.href = "../screens/enviado.html";
    }
});
