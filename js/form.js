document.addEventListener("DOMContentLoaded", function() {
    const consultaForm = document.getElementById("consultaForm");

    // Cargar datos del localStorage cuando la página se carga
    const nombreInput = document.getElementById("nombre");
    const correoInput = document.getElementById("correo");
    const phoneInput = document.getElementById("phone");
    const dateInput = document.getElementById("date");
    const cantInput = document.getElementById("cant");
    const messageInput = document.getElementById("message");

    if (localStorage.getItem("consulta_nombre")) {
        nombreInput.value = localStorage.getItem("consulta_nombre");
    }

    if (localStorage.getItem("consulta_correo")) {
        correoInput.value = localStorage.getItem("consulta_correo");
    }

	if (localStorage.getItem("consulta_phone")) {
		phoneInput.value = localStorage.getItem("consulta_phone");
	}

	if (localStorage.getItem("consulta_date")) {
		dateInput.value = localStorage.getItem("consulta_date");
	}

	if (localStorage.getItem("consulta_cant")) {
		cantInput.value = localStorage.getItem("consulta_cant");
	}

    if (localStorage.getItem("consulta_message")) {
        messageInput.value = localStorage.getItem("consulta_message");
    }

    // Guardar datos en localStorage cuando se envía el formulario
    consultaForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        const nombre = nombreInput.value;
        const correo = correoInput.value;
		const phone = phoneInput.value;
		const date = dateInput.value;
		const cant = cantInput.value;
        const message = messageInput.value;

        // Guardar los datos en localStorage
        localStorage.setItem("consulta_nombre", nombre);
        localStorage.setItem("consulta_correo", correo);
		localStorage.setItem("consulta_phone", phone);
		localStorage.setItem("consulta_date", date);
		localStorage.setItem("consulta_cant", cant);
        localStorage.setItem("consulta_message", message);

        alert("¡Tu consulta ha sido enviada!");
        consultaForm.reset();
    });
});


const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
    parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});