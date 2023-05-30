function mostrar(valorAMostrar) {
    alert(valorAMostrar);
}

const servicios = [
    { id: 1, nombre: "auditoria", precio: 15000 },
    { id: 2, nombre: "consultoria", precio: 20000 },
    { id: 3, nombre: "impuestos", precio: 30000 },
]


let nombreCliente = prompt("Ingrese el nombre");
let apellidoCliente = prompt("Ingrese el apellido");

if (nombreCliente == "" || apellidoCliente == "") {

    mostrar("Ingrese Nombre y Apellido completo")

} else {

    mostrar(`Bienvenido ${nombreCliente} ${apellidoCliente}`);

    let nombre = prompt("La empresa ofrece solo 3 tipos de sercivios: Auditoria, Consultoria e impuestos. Busque el precio del servicio que desea contratar").toLowerCase();

    const encontrado = servicios.find(item => item.nombre.includes(nombre));

    if (encontrado) {
        let mensaje = `
    Nombre del servicio consultado: ${encontrado.nombre}
    Precio del servicio consultado: $${encontrado.precio}
    `;

        alert(mensaje);

    } else {
        alert("Servicio no encontrado")
    };

    let numero = parseInt(prompt("Ingrese la cantidad de servicios que va a contratar. Máximo 3 servicios."));

    while (numero > 3) {

        alert("Número incorrecto");
        numero = parseInt(prompt("Ingrese el numero nuevamente"))
    }

    if (numero === 1) {

        let nombreServicioUno = prompt("Ingrese el nombre del unico Servicio contratado");

        const compraUno = servicios.find(item => item.nombre.includes(nombreServicioUno));

        if (compraUno) {
            let msj = `
            Gracias por su compra.
            El precio total es de: $${compraUno.precio}
             `;

            mostrar(msj);
        } else {
            mostrar("Servicio no encontrado")
        };
    } else if (numero === 2) {

        let nombreServicioDos1 = prompt("Ingrese el nombre del primer Servicio contratado");
        let nombreServicioDos2 = prompt("Ingrese el nombre del segundo Servicio contratado");

        const compraDos1 = servicios.find(item => item.nombre.includes(nombreServicioDos1));
        const compraDos2 = servicios.find(item => item.nombre.includes(nombreServicioDos2));

        if (compraDos1 && compraDos2) {
            let msj = `
            Gracias por su compra.
            El precio total es de $${compraDos1.precio + compraDos2.precio}
             `;

            mostrar(msj);
        } else {
            mostrar("Servicio no encontrado")
        };
    } else if (numero === 3) {

        let nombreServicioTres1 = prompt("Ingrese el nombre del primer Servicio contratado");
        let nombreServicioTres2 = prompt("Ingrese el nombre del segundo Servicio contratado");
        let nombreServicioTres3 = prompt("Ingrese el nombre del tercer Servicio contratado");

        const compraTres1 = servicios.find(item => item.nombre.includes(nombreServicioTres1));
        const compraTres2 = servicios.find(item => item.nombre.includes(nombreServicioTres2));
        const compraTres3 = servicios.find(item => item.nombre.includes(nombreServicioTres3));

        if (compraTres1 && compraTres2 && compraTres3) {
            let msj = `
            Gracias por su compra.
            El precio total es de $${compraTres1.precio + compraTres2.precio + compraTres3.precio}
             `;

             mostrar(msj);
        } else {
            mostrar("Servicio no encontrado")
        };
    }
}