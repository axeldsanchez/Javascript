let nombre = prompt("Ingrese el nombre");
let apellido = prompt("Ingrese el apellido");

while (nombre == "" || apellido == "") {

    alert("Ingrese Nombre y Apellido completo")
    nombre = prompt("Ingrese el nombre");
    apellido = prompt("Ingrese el apellido");

}

alert(`Bienvenido ${nombre} ${apellido}`);

let numero = parseInt(prompt("Ingrese la cantidad de servicios que va a contratar. La empresa ofrece solo 3 servicios: Auditoría, Consultoría e Impuestos. El costo de cada servicio es de $20.000"));

while (numero > 3) {

    alert("Número incorrecto");
    numero = parseInt(prompt("Ingrese el numero nuevamente"))
}

for (let i = 1; i <= numero; i++) {
    let servicio = prompt("Ingrese el nombre del servicio");
    alert(`Eligio el servicio de ${servicio}`);
}

let precio = 20000

function multiplicar(n1, n2) {
    resultado = n1 * n2;
}

multiplicar(numero, precio)
alert(`El costo total de los Servicios contratados es de $ ${resultado}`)



