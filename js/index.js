const listaProductos = () => {
    fetch('http://localhost:3000/producto')
    .then(respuesta => respuesta.json());
}
console.log(listaProductos);
const crearProducto = (imagen, nombre, producto, descripcion) => {
    return fetch('http://localhost:3000/producto', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({imagen, nombre, producto, descripcion}),
    });
};