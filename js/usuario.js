const botonx = document.getElementById("login__submit");
botonx.addEventListener("click", () => {
    var usuario = document.getElementById("usuario").value;
    var contrasenia = document.getElementById("contrasenia").value;

    var usuarioCorrecto = "admin@mail.com";
    var contraseniaCorrecta = "1234";

    if (usuario == usuarioCorrecto && contrasenia == contraseniaCorrecta) {
        
        window.location.href = "/agregar.html";
    } else {
        alert("Usuario y/o contraseña incorrectos");
    }
});
