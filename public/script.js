const ocultarDiv = (btn, form)=>{
    btn.addEventListener('click', () => {
        form.classList.toggle('hidden')
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const mostrarGestionProductoBtn = document.getElementById('mostrarGestionProductoBtn');
    const crearProductoForm = document.getElementById('crearProductoForm');

    const mostrarGestionTiposProductosBtn = document.getElementById('mostrarGestionTiposProductosBtn');
    const gestionTiposProductos = document.getElementById('gestionTiposProductos');
    //-------------- Mostrar o Ocultar Gestión ---------------//

    ocultarDiv(mostrarGestionProductoBtn,gestionDeProductos);
    ocultarDiv(mostrarGestionTiposProductosBtn,gestionTiposProductos);
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
        //crearProductoForm.reset ()//        
    })
})



