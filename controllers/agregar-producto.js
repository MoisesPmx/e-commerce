import { productoServicio } from "../service/productos.js";

const formAddProducto = document.querySelector("[data-form]");

formAddProducto.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const categoria = document.querySelector("[data-categoria]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    productoServicio
        .crearProducto(categoria, imagen, nombre, precio, descripcion)
        .then(() => {
            window.location.href = "agregado.html";
        })
        .catch((err) => console.log(err));
});
