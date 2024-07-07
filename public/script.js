const ocultarDiv = (btn, form) => {
    btn.addEventListener('click', () => {
        form.classList.toggle('hidden')
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const mostrarGestionProductoBtn = document.getElementById('mostrarGestionProductoBtn');
    const crearProductoForm = document.getElementById('crearProductoForm');
    const listarProductosbtn = document.getElementById('listarProductosbtn');
    const listaProductos = document.getElementById('listaProductos');
    const actualizarStockPorProductoBtn = document.getElementById('actualizarStockPorProductoBtn');
    const idStock = document.getElementById('idStock');
    const cantidadASumar = document.getElementById('cantidadASumar');

    //-------------- Mostrar o Ocultar Gestión ---------------//

    ocultarDiv(mostrarGestionProductoBtn, gestionDeProductos);

    //------------------------------------------Funcionalidad de Productos------------------//

    //--------------------------------Crear Los Productos-----------------//

    crearProductoForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        const formData = new FormData(crearProductoForm)
        const data = {
            descripcion: formData.get('descripcion'),
            precio: formData.get('precio'),
            cantidadStock: formData.get('cantidadStock'),
            idTipo: formData.get('idTipo'),
            rutaImagen: formData.get('rutaImagen')
        }
        const response = await fetch('/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        alert("Producto Creado Con Exito")
        crearProductoForm.reset()
    })

    //--------------------------------Listar Productos -----------------//

    listarProductosbtn.addEventListener('click', listarProductos);

    async function listarProductos() {
        const response = await fetch('/productos')
        const productos = await response.json();
        listaProductos.innerHTML = '';

        productos.forEach(producto => {
            const li = document.createElement('li')
            li.innerHTML = `
            <span>ID:${producto.idProducto}, Nombre:${producto.descripcion}, Stock:${producto.cantidadStock}, Precio:${producto.precio}, IdTipo:${producto.idTipo}, RutaImagen:${producto.rutaImagen}</span>
            `
            listaProductos.appendChild(li);
        });

    }

    //--------------------------------Actualizar stock-----------------//

    actualizarStockPorProductoBtn.addEventListener('click', async (e) => {

        e.preventDefault();
        const id = idStock.value;
        const stock = cantidadASumar.value;
        const data = { cantComprada: stock }

        const response = await fetch(`/productos/compras/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

        const result = await response.json()
        alert(result.message)
        listarProductos()

    })











})


