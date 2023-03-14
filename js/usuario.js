const botonx = document.getElementById("login__submit");
botonx.addEventListener("click", (evento) => {
    evento.preventDefault();
    var usuario = document.getElementById("usuario").value;
    var contrasenia = document.getElementById("contrasenia").value;

    var usuarioCorrecto = "a@mail.com";
    var contraseniaCorrecta = "1234";

    if (usuario == usuarioCorrecto && contrasenia == contraseniaCorrecta) {
        window.location.href = "../agregar.html";
        return true;
    } else {
        alert("Usuario y/o contraseña incorrectos");
    }
    return false;
});
