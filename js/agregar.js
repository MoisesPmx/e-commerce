const botonz = document.getElementById("producto__agregar");
botonz.addEventListener("click", (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById("producto__nombre");
    const precio = document.getElementById("producto__precio");
    const imagen = document.getElementById("producto__imagen");
    const descripcion = document.getElementById("producto__descripcion");
     if (imagen.valuse == "" || nombre.value == "" || precio.value == "" || descripcion.value == "") {
        alert("Debes llenar todos los campos");
       } else {
        alert('llenado correcto');
        window.location.href = "../agregado.html";
    }
});
