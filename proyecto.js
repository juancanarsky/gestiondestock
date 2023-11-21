function opcionIncorrecta(){
    alert("Opción incorrecta");
}

function saludoBienvenida(nombre){
    alert(`Bienvenido/a, ${nombre}`)
}

function saludoDespedida(nombre){
    alert(`Nos vemos pronto, ${nombre}`)
}

nombre = prompt ("Ingrese su nombre: ")

saludoBienvenida(nombre)

let opcion;
while (opcion != 5){
    opcion = +prompt ('Elija una opción:' + '\n'
    + '"1" - Lista de productos' + '\n'
    + '"2" - Agregar producto' + '\n'
    + '"3" - Eliminar producto' + '\n'
    + '"4" - Modificar producto' + '\n'
    + '"5" - Salir');

    if (opcion == 1){
        alert ('Coca-Cola 2,25 lts $1000' + '\n'
        + 'Sprite 2,25 lts $1000' + '\n'
        + 'Fanta 2,25 lts $1000' + '\n'
        + 'Lays 40 grs $700' + '\n'
        + 'Conitos 3D 40grs $500');
    }

    if (opcion == 2){
        prompt ("Ingrese el producto a agregar: ");
        alert ('Aún no se puede agregar productos');
        let decision = 0
        while(decision != 1 && decision != 2){
            decision = +prompt ('Quiere agregar otro producto?' + '\n' + '"1" - Sí' + '\n' + '"2" - No');
            if (decision == 1){
                    alert ('Te dije que no se puede agregar todaviaaa!!');
            }
            else if (decision ==2){
                    alert ('Gran decisión, como dije antes, no se puede agregar nada todavía.');
            }
            else {
                opcionIncorrecta();
                }
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
                    alert ('Gran decisión, como dije antes, no se puede eliminar nada todavía.');
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
        alert ('Aún no se puede modificar productos')
        let decision = 0
        while(decision != 1 && decision != 2){
            decision = +prompt ('Quiere modificar otro producto?' + '\n' + '"1" - Sí' + '\n' + '"2" - No');
            if (decision == 1){
                    alert ('Te dije que no se puede modificar todaviaaa!!');
            }
            else if (decision == 2){
                    alert ('Gran decisión, como dije antes, no se puede modificar nada todavía.');
                }
            else {
                opcionIncorrecta();
            }
        }
    }

    if (opcion == 5){
        saludoDespedida(nombre);
    }
}
