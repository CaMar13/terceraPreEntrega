

const boton = document.getElementById("miBoton");

boton.addEventListener("click", function() {
    let usuario = prompt("Hola, ingresa tu nombre por favor")
    let codigoPostal = prompt("Hola" +"  "+ usuario +"  "+ "vamos a necesitar validar la zona de entrega." +"  "+ "Por favor ingresa tu código postal");

    if (codigoPostal == 1602 || codigoPostal == 1636 || codigoPostal == 1638 || codigoPostal == 1640) {
        alert(usuario +"  "+"estas dentro de la zona de entrega, ahora a elegir que probar");
    }else{
        alert(usuario +"  "+"lo sentimos no estás dentro de la zona de entrega, pero no te preocupes te esperamos todas las tardes en nuestro local.");
    }
    console.log("Fin del proceso");
});
