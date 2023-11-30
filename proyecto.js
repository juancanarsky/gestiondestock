function opcionIncorrecta(){
    alert("Opción incorrecta");
}

function saludoBienvenida(nombre){
    alert(`Bienvenido/a, ${nombre}`)
}

function saludoDespedida(nombre){
    alert(`Nos vemos pronto, ${nombre}`)
}

function recorrerLista(){
    productos.forEach((articulo, index) => {console.log(articulo.producto, index)})
}

function seguirAgregando(productoProducto, categoriaProducto, stockProducto, precioProducto){
    productoProducto = prompt("Ingrese el nombre del producto a agregar:");
    while (!productoProducto || !productoProducto.trim()) {
        productoProducto = prompt("No se permiten campos vacíos, por favor ingrese producto a agregar:");
        }
        categoriaProducto = prompt ("Ingrese la categoria del producto a agregar: ");
        while (!categoriaProducto || !categoriaProducto.trim()) {
            categoriaProducto = prompt("No se permiten campos vacíos, por favor ingrese la categoría del producto a agregar:");
        }
        stockProducto = +prompt ("Ingrese el stock del producto a agregar: ");
        while (!stockProducto) {
            stockProducto = +prompt("Solo se permiten números, por favor ingrese el stock del producto a agregar:");
        }
        precioProducto = +prompt ("Ingrese el precio del producto a agregar: ");
        while (!precioProducto) {
            precioProducto = +prompt("Solo se permiten números, por favor ingrese el precio del producto a agregar:");
    }
    let nuevoProducto = new Producto(productoProducto, categoriaProducto, stockProducto, precioProducto);
    return nuevoProducto
}

function buscarProducto(productos, busqueda) {
    const productoBuscado = productos.filter((item) => item.producto.toLowerCase().includes(busqueda.toLowerCase()));
    if (productoBuscado.length > 0){
    for (const producto of productoBuscado) {
        alert(
            `${producto.producto}` + '\n' +
            `${producto.categoria}` + '\n' +
            `${producto.stock}` + '\n' +
            `${producto.precio}` + '\n'
        );
    }
    }
    else{
        alert("No se encontraron productos.")
    }
}

const productos = []

productos.push(new Producto ("Coca Cola 2,25 Lts", "Bebida", 50, "$1000"));
productos.push(new Producto ("Sprite 2,25 Lts", "Bebida", 35, "$1000"));
productos.push(new Producto ("Papas Lays 40 Grs", "Comida", 112, "$640"));
productos.push(new Producto ("Conitos 3D 40 Ges", "Comida", 94, "$590"));
productos.push(new Producto ("Trapo de piso Ayudín", "Limpieza", 287, "$350"));
productos.push(new Producto ("Jabón para las manos Espadol", "Higiene", 89, "$450"));
productos.push(new Producto ("Shampoo Head and Shoulders 375 ml", "Higiene", 7, "$1499"));
productos.push(new Producto ("Juego de 6 cuchillos Tramontina", "Hogar", 26, "$8999"));
productos.push(new Producto ("Silla Gamer reclinable DxRacer", "Hogar/Gaming", 4, "$170000"));
productos.push(new Producto ("Comida para perros adultos Dog Chow 3Kg", "Mascotas", 103, "$2900"));

let opcion;
nombre = prompt ("Ingrese su nombre: ");

saludoBienvenida(nombre);

while (opcion != 6){
    opcion = +prompt ('Elija una opción:' + '\n'
    + '"1" - Lista de productos' + '\n'
    + '"2" - Agregar producto' + '\n'
    + '"3" - Eliminar producto' + '\n'
    + '"4" - Modificar producto' + '\n'
    + '"5" - Buscar producto' + '\n'
    + '"6" - Salir');

    if (opcion == 1){
        recorrerLista()
    }

    if (opcion == 2) {
        let decision = 1;
        while (decision === 1) {
            let productoProducto, categoriaProducto, stockProducto, precioProducto;
            let nuevoProducto = seguirAgregando(productoProducto, categoriaProducto, stockProducto, precioProducto);
            productos.push(new Producto(nuevoProducto.producto, nuevoProducto.categoria, nuevoProducto.stock, nuevoProducto.precio));
            console.log(nuevoProducto);
            decision = +prompt('¿Quiere agregar otro producto?' + '\n' + '"1" - Sí' + '\n' + '"2" - No');
            if (decision !== 1 && decision !== 2) {
                opcionIncorrecta();
            }}
            if (decision === 2) {
                alert('Volviendo al menú...');
        }
    }

    if (opcion == 3){
        +prompt ('"1" - Coca-Cola 2,25 lts $1000' + '\n'
        + '"2" - Sprite 2,25 lts $1000' + '\n'
        + '"3" - Fanta 2,25 lts $1000' + '\n'
        + '"4" - Lays 40 grs $700' + '\n'
        + '"5" - Conitos 3D 40grs $500' + '\n' + 'Ingrese el producto a eliminar: ');
        alert ('Aún no se puede eliminar productos');
        let decision = 0
        while(decision != 1 && decision != 2){
            decision = +prompt ('Quiere eliminar otro producto?' + '\n' + '"1" - Sí' + '\n' + '"2" - No');
            if (decision == 1){
                    alert ('Te dije que no se puede eliminar todaviaaa!!');
            }
            else if (decision == 2){
                alert ('Volviendo al menú...');
                }
            else {
                opcionIncorrecta();
            }
        }
    }

    if (opcion == 4){
        +prompt ('"1" - Coca-Cola 2,25 lts $1000' + '\n'
        + '"2" - Sprite 2,25 lts $1000' + '\n'
        + '"3" - Fanta 2,25 lts $1000' + '\n'
        + '"4" - Lays 40 grs $700' + '\n'
        + '"5" - Conitos 3D 40grs $500' + '\n' + 'Ingrese el producto a modificar: ');
        alert ('Aún no se puede modificar productos');
        let decision = 0
        while(decision != 1 && decision != 2){
            decision = +prompt ('Quiere modificar otro producto?' + '\n' + '"1" - Sí' + '\n' + '"2" - No');
            if (decision == 1){
                alert ('Te dije que no se puede modificar todaviaaa!!');
            }
            else if (decision == 2){
                alert ('Volviendo al menú...');
                }
            else {
                opcionIncorrecta();
            }
        }
    }

    if (opcion == 5) {
        let decision = 0;
        do {
            busqueda = prompt('Ingrese el producto a buscar: ');
            buscarProducto(productos, busqueda);
            decision = +prompt('Quiere buscar otro producto?\n"1" - Sí\n"2" - No');
            if (decision !== 1 && decision !== 2) {
                opcionIncorrecta();
            }
        } while (decision !== 2);
        alert('Volviendo al menú...');
    }

    if (opcion == 6){
        saludoDespedida(nombre);
    }
}
