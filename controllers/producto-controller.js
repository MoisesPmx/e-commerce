import {productoServicio} from"../service/productos.js"
const nuevoProducto = (categoria,imagen, nombre, precio, id) => {
    const card = document.createElement("div")
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
}

const pastel = document.querySelector("[data-pastel],[data-todo]");
const bebida = document.querySelector("[data-bebidas],[data-todo]");
const variedad = document.querySelector("[data-variedad],[data-todo]");

productoServicio.listaProductos().then(valores => {
    valores.forEach(({categoria,imagen,nombre,precio,id}) => {
        const nuevaTarjeta = nuevoProducto(categoria,imagen,nombre,precio,id)
        if (categoria === "pastel") {
            pastel.appendChild(nuevaTarjeta);
          } else if (categoria === "bebida") {
            bebida.appendChild(nuevaTarjeta);
          } else if (categoria === "variedad") {
            variedad.appendChild(nuevaTarjeta);
          }           
    })
}).catch(unerror => alert('ocurrio un error'))

