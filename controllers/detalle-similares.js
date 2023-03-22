import { productoServicio } from "../service/productos.js";
const nuevoProducto = (categoria, imagen, nombre, precio, id) => {
    const card = document.createElement("div");
    const contenido = `
    <li class="producto__item" ${categoria}>
    <img
        class="producto__img"
        src="${imagen}"
        alt=""
    /><span class="producto__nombre">${nombre}</span
    ><span class="producto__precio">$ ${precio}</span
    ><a href="../screens/detalles.html?identificador=${id}" class="producto__link"
        ><span class="producto__link"
            >Ver Producto</span
        ></a
    >
</li>`;

    card.innerHTML = contenido;
    card.dataset.id = id;

    return card;
};

const pastel = document.querySelector("[data-similares]");
const bebida = document.querySelector("[data-similares]");
const variedad = document.querySelector("[data-similares]");

/* productoServicio
    .listaProductos()
    .then((valores) => {
        let contador = 0;
        valores.forEach(({ categoria, imagen, nombre, precio, id }) => {
            const nuevaTarjeta = nuevoProducto(
                categoria,
                imagen,
                nombre,
                precio,
                id
            );
            if (
                categoria === "pastel" ||
                categoria === "bebida" ||
                categoria === "variedad"
            ) {
                if (contador < 6) {
                    if (categoria === "pastel") {
                        pastel.appendChild(nuevaTarjeta);
                        contador++;
                    }
                    if (categoria === "bebida") {
                        bebida.appendChild(nuevaTarjeta);
                        contador++;
                    }
                    if (categoria === "variedad") {
                        variedad.appendChild(nuevaTarjeta);
                        contador++;
                    }
                }
            }
        });
    })
    .catch((unerror) => alert("ocurrio un error")); */


function aleatorio (array) {
    const indice = Math.floor(Math.random() * array.length);    
    return array[indice];
}

let pasteles = [];
let bebidas = [];
let otros = [];

productoServicio
    .listaProductos()
    .then((valores) => {
        valores.forEach(({ categoria, imagen, nombre, precio, id }) => {
            if (categoria === "pastel") {
                pasteles.push({ categoria, imagen, nombre, precio, id });
            } else if (categoria === "bebida") {
                bebidas.push({ categoria, imagen, nombre, precio, id });
            } else if (categoria === "variedad") {
                otros.push({
                    categoria,
                    imagen,
                    nombre,
                    precio,
                    id
                });
            }
        });
        for (let i = 0; i < 2; i++) {
            const productoPastel = aleatorio (pasteles);
            const nuevaTarjetaPastel = nuevoProducto(
                productoPastel.categoria,
                productoPastel.imagen,
                productoPastel.nombre,
                productoPastel.precio,
                productoPastel.id
            );
            pastel.appendChild(nuevaTarjetaPastel);

            const productoBebida = aleatorio(bebidas);
            const nuevaTarjetaBebida = nuevoProducto(
                productoBebida.categoria,
                productoBebida.imagen,
                productoBebida.nombre,
                productoBebida.precio,
                productoBebida.id
            );
            bebida.appendChild(nuevaTarjetaBebida);

            const productoVariedad = aleatorio(otros);
            const nuevaTarjetaVariedad = nuevoProducto(
                productoVariedad.categoria,
                productoVariedad.imagen,
                productoVariedad.nombre,
                productoVariedad.precio,
                productoVariedad.id
            );
            variedad.appendChild(nuevaTarjetaVariedad);
        }
    })
    .catch((unerror) => alert("ocurrio un error"));
