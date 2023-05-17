function mostrar(valorAMostrar) {
    alert(valorAMostrar);
}

function solicitarAlUsuario(loSolicitado) {
    return prompt("Por favor ingresá: " + loSolicitado);
}

const ProductoOne = {
    name: "productName",
    price: 20000,
};

const ProductoTwo = {
    name: "productName",
    price: 20000,
};

const ProductoThree = {
    name: "productName",
    price: 20000,
};

const Compra = {
    productoOne: {},
    productoTwo: {},
    productoThree: {},
    finalPrice: 0,

    calculateFinalPrice: function () {
        this.finalPrice = parseInt(this.productoOne.price) + parseInt(this.productoTwo.price) + parseInt(this.productoThree.price);
    },

    showTicket: function () {
        this.calculateFinalPrice();
        mostrar("El costo total de los Servicios contratados es de $" + this.finalPrice);
    },
};

let nombre = prompt("Ingrese el nombre");
let apellido = prompt("Ingrese el apellido");

if (nombre == "" || apellido == "") {

    alert("Ingrese Nombre y Apellido completo")

} else {

    alert(`Bienvenido ${nombre} ${apellido}`);

    let numero = parseInt(prompt("Ingrese la cantidad de servicios que va a contratar. La empresa ofrece solo 3 servicios: Auditoría, Consultoría e Impuestos. El costo de cada servicio es de $20.000"));

    while (numero > 3) {

        alert("Número incorrecto");
        numero = parseInt(prompt("Ingrese el numero nuevamente"))
    }

    let nombreProductoUno = solicitarAlUsuario("el nombre del primer Servicio");
    let nombreProductoDos = solicitarAlUsuario("el nombre del segundo Servicio");
    let nombreProductoTres = solicitarAlUsuario("el nombre del segundo Servicio");
    
    ProductoOne.name = nombreProductoUno;
    Compra.productoOne = ProductoOne;
    
    ProductoTwo.name = nombreProductoDos;
    Compra.productoTwo = ProductoTwo;
    
    ProductoThree.name = nombreProductoTres;
    Compra.productoThree = ProductoThree;
    
    
    Compra.showTicket();
}