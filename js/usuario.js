const botonx = document.getElementById("login__submit");
botonx.addEventListener("click", (evento) => {
    evento.preventDefault();
    var usuario = document.getElementById("usuario").value;
    var contrasenia = document.getElementById("contrasenia").value;

    var usuarioCorrecto = "admin@mail.com";
    var contraseniaCorrecta = "1111";

    if (usuario == usuarioCorrecto && contrasenia == contraseniaCorrecta) {
        window.location.href = "../screens/agregar.html";
        return true;
    } else {
        alert("Usuario y/o contraseña incorrectos");
    }
    return false;
});
