const boton = document.getElementById("formulario__boton");
boton.addEventListener("click", function validar() {
    var nombre = document.getElementById("formulario__nombre");
    var mensaje = document.getElementById("formulario__textarea");
    if (nombre.value == "" || mensaje.value == "") {
        alert("Debes llenar todos los campos");
        
    } else {
        alert("Gracias por tu mensaje");
        //window.location.href = "../enviado.html";
    }
});
