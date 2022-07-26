function obtenerUsuario() {
    var usuario = prompt("Introduce tu nombre de usuario");
    if (usuario === null) {
        obtenerUsuario();
    } else {
        document.getElementById("nombreUsuario").textContent = usuario;
    }
}

function crearCanal() {
    var nombreCanal = prompt("Nombre del canal"); // Nombre que el usuario le pone al chat
    if (nombreCanal !== null) {
        var listaCanales = document.getElementById("contenedorCanales"); // Elemento donde se van a crear los nuevos canales
        var nuevoCanal = document.createElement("div"); // Elemento que vamos a crear
        nuevoCanal.textContent = nombreCanal; // Le ponemos el nombre al div
        insertAfter(nuevoCanal, listaCanales.lastElementChild);
    }
}

function insertAfter(nuevoCanal, general) {
    general.parentNode.insertBefore(nuevoCanal, general.nextSibling);
}