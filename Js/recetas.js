class Producto {
    constructor(nombre, marca, precio, stock) {
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Producto("Receta Veggie", "Ensalada de brócoli, zanahoria y nueces", 800, 2)
const producto2 = new Producto("Receta Pastas", "Fideos con espinacas, cubos de jamón y ajos tiernos", 1200, 3)
const producto3 = new Producto("Receta Pollo", "Pollo al Curry", 1500, 7)
const producto4 = new Producto("Receta Pollo", "Pollo Relleno", 1400, 6)
const producto5 = new Producto("Receta Cerdo", "Presa de cerdo ibérico al Pedro Ximénez", 3000, 5)
const producto6 = new Producto("Receta Carne", " Solomillo de ternera en salsa de vino tinto", 1200, 2)
const producto7 = new Producto("Receta Pastas", "Fettuccine estilo ramen", 1800, 9)
const producto8 = new Producto("Receta Veggie", "Buñuelos de acelga al horno", 16000, 12)

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8]

const botonCarrito = document.getElementById("carrito")
const divProductos = document.getElementById("divProductos")

productos.forEach((producto, indice) => {
    divProductos.innerHTML += `
            <div class="card border-secondary mb-3" id="producto${indice}" style="max-width: 18rem; margin:12px; padding:12
            px;">
                <div class="card-header">${producto.nombre}</div>
                    <div class="card-body">
                        <h4 class="card-title">${producto.marca}</h4>
                        <p class="card-text">$${producto.precio}</p>
                        <p class="card-text">Unidades:  ${producto.stock}</p>
                        <button class="btn btn-secondary"><i class="fas fa-cart-plus"></i></button>
                    </div>
            </div>
        `
})

productos.forEach((producto, indice) => {
    document.getElementById(`producto${indice}`).lastElementChild.lastElementChild.addEventListener('click', () => {
        Toastify({
            text: "Producto agregado al carrito",
            duration: 3000,
            //destination: "https://github.com/apvarun/toastify-js",
            //newWindow: false,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to bottom left,#bdc3c7, #2c3e50)",
            },
            onClick: function () {
                console.log("Diste click")
            } // Callback after click
        }).showToast();
    })
})

botonCarrito.addEventListener('click', () => {
    Swal.fire({
        title: 'Carrito',
        showCancelButton: true,
        cancelButtonText: 'Seguir comprando',
        confirmButtonText: 'Finalizar compra',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Compra finalizada', '', 'success')
        }
    })
})