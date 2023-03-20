const listaProductos = async () => {
    try {
    const respuesta = await fetch('http://localhost:3000/producto');
    return await respuesta.json();      
} catch(err){
    console.log('hay un error por ahí')
}}

const crearProducto = (categoria,imagen,nombre, precio, descripcion) => {
    return fetch('http://localhost:3000/producto', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({categoria,imagen,nombre,precio,descripcion, id: uuid.v4()})
        })
    } 

    const eliminarProducto = (id) => {
        console.log('eliminando -->', id)
        return fetch(`http://localhost:3000/producto/${id}`, {
            
            method: 'DELETE'
        }) 
    }

export const productoServicio = {
    listaProductos,
    crearProducto,
    eliminarProducto,
}