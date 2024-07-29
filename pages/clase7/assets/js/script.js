
function funcion01() {
    var opcion01 = prompt("Seleccione una opción \n1.- Ver boleta \n2.- Pagar cuenta");

    switch (opcion01) {
        case "1":
            alert("Haga click aquí para descargar su boleta.");
            break;
        case "2":
            alert("Usted esta siendo transferido. Espere por favor...");
            break;
        default:
            alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios.")
    }
}


function funcion02() {
    var opcion02 = prompt("Seleccione una opción \n1.- Problemas con la señal \n2.- Problemas con las llamadas");

    var solicitud = prompt("A continuación escriba su solicitud");

    alert("Estimado usuario, solicitud '" + solicitud + "' ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos");
}


function funcion03() {
    var opcion03 = prompt("¡Mentel tiene una ofera comercial acorde a tus necesidades! \nPara conocer más información y ser asesorado personalmente por un ejecutivo escribe 'SI' y un ejecutivo te llamará. De lo contrario ingrese 'NO' ");

    if (opcion03 == SI){
        alert("Un ejecutivo contactará con usted");

    } else if (opcion03 == NO){
        alert("Gracias por preferir nuestros servicios")
    }
}


function funcion04() {

    var consulta = prompt("A continuación escriba su solicitud");

    alert("Estimado usuario, su consulta '" + consulta + "' ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos");
}


//MAIN

var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas")

//FUNCIONES

switch (opcion) {
    case "1":
        funcion01();
        break;

    case "2":
        funcion02();
        break;

    case "3":
        funcion03();
        break;

    case "4":
        funcion04();
        break;

    default:
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios.");
        break;
}

