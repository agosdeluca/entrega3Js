//MOSTRAR PRODUCTOS
const contenedorTarjetas = document.getElementById("productos-container")

function crearTarjetasProductosInicio(productos) {
    productos.forEach(producto => {
        const nuevoArticulo = document.createElement("div")
        nuevoArticulo.classList = "tarjeta-producto"
        nuevoArticulo.innerHTML = `
     <img src= ${producto.img}>
     <h3>${producto.nombre}</h3>
     <p>$${producto.precio}</p>
     <button>Agregar al carrito</button>
    `
        contenedorTarjetas.appendChild(nuevoArticulo)
        nuevoArticulo.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(producto))
    })
}

crearTarjetasProductosInicio(articulos)

// AGREGAR AL CARRITO 

function agregarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("articulos"))
    if (!memoria) {
        const nuevoProducto = getNuevoProductoParaMemoria(producto)
        localStorage.setItem("articulos", JSON.stringify([nuevoProducto]))
    } else {
        const indiceProducto = memoria.findIndex(articulo => articulo.img === producto.img)
        console.log(indiceProducto)
        const nuevaMemoria = memoria
        if (indiceProducto === -1) {
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto))
        } else {
            nuevaMemoria[indiceProducto].cantidad++
        }
        localStorage.setItem("articulos", JSON.stringify(nuevaMemoria))
    }
    actualizarNumeroCarrito()
}

// LE AGREGO 1 Y LO DEVUELVO 
function getNuevoProductoParaMemoria(producto) {
    const nuevoProducto = producto
    nuevoProducto.cantidad = 1
    return nuevoProducto
}

//FUNCION PARA ACTUALIZAR EL N° DEL CARRITO 
const cuentaCarritoElement = document.getElementById("cuenta-carrito")
function actualizarNumeroCarrito() {
    const memoria = JSON.parse(localStorage.getItem("articulos"))
    const cuenta = memoria.reduce((acc, cur) => acc + cur.cantidad, 0)
    cuentaCarritoElement.innerText = cuenta
}
actualizarNumeroCarrito()

