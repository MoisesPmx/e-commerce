const listaProductos = async () => {
    try {
        const respuesta = await fetch("http://localhost:3000/producto");
        return await respuesta.json();
    } catch (err) {
        console.log("hay un error por ahí");
    }
};

const crearProducto = (categoria, imagen, nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            categoria,
            imagen,
            nombre,
            precio,
            descripcion,
            id: uuid.v4(),
        }),
    });
};

const eliminarProducto = (id) => {
    console.log("eliminando -->", id);
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE",
    });
};

const datosProducto = async (id) => {
    const respuesta = await fetch(`http://localhost:3000/producto/${id}`);
    return await respuesta.json();
};

const updateProducto = async (
    categoria,
    imagen,
    nombre,
    precio,
    descripcion,
    id
) => {
    try {
        const respuesta = await fetch(`http://localhost:3000/producto/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                categoria,
                imagen,
                nombre,
                precio,
                descripcion,
            }),
        });
        return respuesta;
    } catch (error) {
        return console.log(error);
    }
};

export const productoServicio = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    datosProducto,
    updateProducto,
};
