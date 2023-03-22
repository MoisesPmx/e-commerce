import {productoServicio} from"../service/productos.js"
const tablaProducto = ( imagen, nombre,descripcion, id) => {
    
    const card = document.createElement("div")
    const contenido = `
    <div class="descripcion__contenedor" data-detail>
    <div class="descripcion__uno">
        <img
            src="${imagen}"
            alt=""
            class="descripcion__img"
            data-imagen
        />
    </div>
    <div class="descripcion__dos">
        <span class="descripcion__nombre descripcion__item" data-nombre
            >${nombre}</span
        >
        <span class="descripcion__precio descripcion__item" data-precio
            >${precio}</span
        >
        <span class="descripcion__texto descripcion__item" data-descripcion>
        ${descripcion}
        </span>
    </div>
</div>`;

    card.innerHTML = contenido;
    card.dataset.id = id;
    
   

    return card;    
}



