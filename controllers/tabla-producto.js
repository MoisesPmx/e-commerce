import {productoServicio} from"../service/productos.js"
const tablaProducto = (categoria, imagen, nombre, id) => {
    
    const card = document.createElement("div")
    const contenido = `
    <li class="producto__item">
    <span class="table__categoria">${categoria}</span>
    <img
        class="producto__img"
        src="${imagen}"
        alt=""
    /><span class="producto__nombre" >${nombre}</span
    >
    <div class="table__edit"><a href="editar.html?identificador=${id}"><i class="fa-solid fa-pencil"></i></a></div>
    <div class="table__trash"><i class="fa-solid fa-trash-can" data-trash id="${id}"></i></div>    
</li>`;

    card.innerHTML = contenido;
    card.dataset.id = id;
    
    const iconTrash = card.querySelector('[data-trash]')
    iconTrash.addEventListener('click', () => {
        const identificador = iconTrash.id;        
        productoServicio.eliminarProducto(identificador).then(respuesta => {
            window.location.href = "../screens/eliminado.html";
        }).catch(error => alert('Error en iconTrash'))
    }) 

    return card;    
}

const listaEliminar = document.querySelector("[data-table]");

productoServicio.listaProductos().then(valores => {
    valores.forEach(({categoria,imagen,nombre,id}) => {
        const tabla = tablaProducto(categoria,imagen,nombre,id)
        listaEliminar.appendChild(tabla)
    })
}).catch(unerror => alert('Error en TABLA'))

