// MOSTRAR ELEMENTOS DEL CARRITO
const contenedorTarjetas = document.getElementById("productos-container")
function crearTarjetasProductosInicio() {
    const productos = JSON.parse(localStorage.getItem("articulos"))
    if (productos && productos.length > 0) {
        productos.forEach((producto) => {
            const nuevoArticulo = document.createElement("div")
            nuevoArticulo.classList = "producto-carrito"
            nuevoArticulo.innerHTML = `
     <img src= ${producto.img}>
     <h3>${producto.nombre}</h3>
     <p>$${producto.precio}</p>
     <div>
     <button>➖</button>
     <span class="cantidad">${producto.cantidad}</span>
     <button>➕</button>
     </div>
    `
            contenedorTarjetas.appendChild(nuevoArticulo)
            nuevoArticulo.getElementsByTagName("button")[1].addEventListener("click", () => agregarAlCarrito())
        })
    }
}

crearTarjetasProductosInicio()