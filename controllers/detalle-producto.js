import { productoServicio } from "../service/productos.js";

const detalles = document.querySelector("[data-detail]");

const infoProducto = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("identificador");

    if (id === null) {
        window.location.href = "../screens/error.html";
    }

    const nombre = document.querySelector("[data-nombre]");    
    const imagen = document.querySelector("[data-imagen]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");
    

    productoServicio.datosProducto(id).then((producto) => {
       
        nombre.innerHTML = producto.nombre;
        imagen.src = producto.imagen;
        precio.innerHTML = "$ " + producto.precio;
        descripcion.innerHTML = producto.descripcion;

    });   
};

infoProducto();

