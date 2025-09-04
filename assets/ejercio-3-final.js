let carrito = {
    precioTotal: 0,
    productos: [],
    categorias: []
};

const productosDelSuper = [
    { nombre: "Queso", precio: 10, categoria: 'lacteos' },
    { nombre: "Gaseosa", precio: 5, categoria: 'bebidas' },
    { nombre: "Cerveza", precio: 20, categoria: 'bebidas' },
    { nombre: "Arroz", precio: 7, categoria: 'alimentos' },
    { nombre: "Fideos", precio: 5, categoria: 'alimentos' },
    { nombre: "Lavandina", precio: 9, categoria: 'limpieza' },
    { nombre: "Shampoo", precio: 3, categoria: 'higiene' },
    { nombre: "Jabon", precio: 4, categoria: 'higiene' },
    { nombre: "Agua", precio: 5, categoria: 'bebidas' } // Agrego Agua para el ejemplo
];

// 📌 Agregar producto al carrito
function agregarProducto(nombre, unidades) {
    // Buscar en el supermercado
    const productoSuper = productosDelSuper.find(p => p.nombre === nombre);

    if (!productoSuper) {
        console.error(`El producto "${nombre}" no se vende en el supermercado.`);
        return;
    }

    // Ver si ya existe en el carrito
    const productoCarrito = carrito.productos.find(p => p.nombre === nombre);

    if (productoCarrito) {
        productoCarrito.unidades += unidades;
    } else {
        carrito.productos.push({
            nombre: productoSuper.nombre,
            precio: productoSuper.precio,
            unidades: unidades
        });
    }

    // Actualizar precio total
    carrito.precioTotal += productoSuper.precio * unidades;

    // Actualizar categorías (sin repetición)
    if (!carrito.categorias.includes(productoSuper.categoria)) {
        carrito.categorias.push(productoSuper.categoria);
    }
}

// 📌 Eliminar producto del carrito
function eliminarProducto(nombre) {
    const index = carrito.productos.findIndex(p => p.nombre === nombre);

    if (index === -1) {
        throw new Error(`El producto "${nombre}" no existe en el carrito.`);
    }

    const producto = carrito.productos[index];

    // Restar al precioTotal
    carrito.precioTotal -= producto.precio * producto.unidades;

    // Quitar producto del array
    carrito.productos.splice(index, 1);

    // Recalcular categorías
    carrito.categorias = [...new Set(carrito.productos.map(p => {
        const prodSuper = productosDelSuper.find(s => s.nombre === p.nombre);
        return prodSuper ? prodSuper.categoria : null;
    }).filter(Boolean))];
}

// 📌 Listar categorías del carrito (sin repetición)
function categoriasDelCarrito() {
    return [...new Set(carrito.productos.map(p => {
        const prodSuper = productosDelSuper.find(s => s.nombre === p.nombre);
        return prodSuper ? prodSuper.categoria : null;
    }).filter(Boolean))];
}

// ---------------------------
// 🚀 Ejemplos de uso
agregarProducto("Agua", 2);
console.log(carrito);

agregarProducto("Agua", 1);
console.log(carrito);

agregarProducto("Queso", 1);
console.log(carrito);

console.log("Categorías del carrito:", categoriasDelCarrito());

eliminarProducto("Agua");
console.log(carrito);

/*{
  precioTotal: 10,
  productos: [ { nombre: 'Agua', precio: 5, unidades: 2 } ],
  categorias: [ 'bebidas' ]
}
{
  precioTotal: 15,
  productos: [ { nombre: 'Agua', precio: 5, unidades: 3 } ],
  categorias: [ 'bebidas' ]
}
{
  precioTotal: 25,
  productos: [
    { nombre: 'Agua', precio: 5, unidades: 3 },
    { nombre: 'Queso', precio: 10, unidades: 1 }
  ],
  categorias: [ 'bebidas', 'lacteos' ]
}
Categorías del carrito: [ 'bebidas', 'lacteos' ]
{
  precioTotal: 10,
  productos: [ { nombre: 'Queso', precio: 10, unidades: 1 } ],
  categorias: [ 'lacteos' ]
}*/