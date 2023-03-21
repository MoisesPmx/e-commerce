var input = document.getElementById("cabecera__input");
var button = document.getElementById("icono__buscar");
var resultado = document.getElementById("resultado");
var clear = document.getElementById("limpiar");

clear.addEventListener("click", () => {
    resultado.innerHTML = "";
    resultado.style.display = "none";
    clear.style.display = "none";
});
var data;
fetch("http://localhost:3000/producto")
    .then((response) => response.json())
    .then((json) => (data = json));

button.addEventListener("click", () => {
    var value = input.value.toLowerCase();
    var productos = data.filter((item) =>
        item.nombre.toLowerCase().includes(value)
    );
    productos.sort((a, b) => a.precio - b.precio);

    if (productos.length > 0) {
        resultado.innerHTML = "";
        for (var producto of productos) {
            resultado.innerHTML += `${producto.nombre}, $ ${producto.precio}<br>`;
        }
    } else {
        resultado.innerHTML = `No hay resultados con ${value}`;
    }

    resultado.style.display = "block";
    clear.style.display = "block";
});
