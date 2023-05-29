document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let celular = document.getElementById("celular").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    // Validación del campo de nombre
    if (nombre.trim() === "") {
        displayErrorMessage("error-nombre", "Por favor, ingresa tu nombre");
        return; // Detener el proceso de envío del formulario
    } else {
        clearErrorMessage("error-nombre");
    }

    // Validación del campo de apellido
    if (apellido.trim() === "") {
        displayErrorMessage("error-apellido", "Por favor, ingresa tu apellido");
        return;
    } else {
        clearErrorMessage("error-apellido");
    }

    // Validación del campo de celular
    if (celular.trim() === "") {
        displayErrorMessage("error-celular", "Por favor, ingresa tu número de celular");
        return;
    } else {
        clearErrorMessage("error-celular");
    }

    // Validación del campo de correo electrónico
    if (correo.trim() === "") {
        displayErrorMessage("error-correo", "Por favor, ingresa tu correo electrónico");
        return;
    } else if (!validateEmail(correo)) {
        displayErrorMessage("error-correo", "Por favor, ingresa un correo electrónico válido");
        return;
    } else {
        clearErrorMessage("error-correo");
    }

    // Validación del campo de mensaje
    if (mensaje.trim() === "") {
        displayErrorMessage("error-mensaje", "Por favor, ingresa tu mensaje");
        return;
    } else {
        clearErrorMessage("error-mensaje");
    }


    alert("¡Formulario enviado con éxito!");

    document.getElementById("contact-form").reset();
});

// Función para mostrar un mensaje de error
function displayErrorMessage(id, message) {
    let errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

// Función para limpiar un mensaje de error
function clearErrorMessage(id) {
    let errorElement = document.getElementById(id);
    errorElement.textContent = "";
    errorElement.style.display = "none";
}

// Función para validar un correo electrónico utilizando una expresión regular
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}




function isElementVisible(a) {
    var rect = a.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );


}

function animateTitles() {
    let titles = document.querySelectorAll('.title:not(.header .title)');
    titles.forEach(function (title) {
        if (isElementVisible(title)) {
            title.classList.add('animate');
        }
    });
}

let headerTitle = document.querySelector('.header .title');
headerTitle.classList.add('animate');


window.addEventListener('scroll', animateTitles);