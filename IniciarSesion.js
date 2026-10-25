// Oculta he inicia
document.addEventListener("DOMContentLoaded", function () {
});
function ocultarTodasVistas() {
    document.getElementById('vistaLogin').classList.add('d-none');
    document.getElementById('vistaRecuperar').classList.add('d-none');
    document.getElementById('vistaExitoRecuperar').classList.add('d-none');
    document.getElementById('vistaRegistro').classList.add('d-none');
}
function mostrarLogin(event) {
    if (event) event.preventDefault();
    ocultarTodasVistas();
    document.getElementById('vistaLogin').classList.remove('d-none');
}


function mostrarRecuperar(event) {
    if (event) event.preventDefault();
    ocultarTodasVistas();
    document.getElementById('vistaRecuperar').classList.remove('d-none');
}


function mostrarRegistro(event) {
    if (event) event.preventDefault();
    ocultarTodasVistas();
    document.getElementById('vistaRegistro').classList.remove('d-none');
}
function procesarRecuperacion(event) {
    event.preventDefault();
    ocultarTodasVistas();
    document.getElementById('vistaExitoRecuperar').classList.remove('d-none');
}
function finalizarRestablecimiento(event) {
    event.preventDefault();
    alert('¡Contraseña actualizada con éxito!');
    mostrarLogin(event);
}


function procesarRegistro(event) {
    event.preventDefault();
    alert('¡Cuenta creada con éxito!');
    mostrarLogin(event);
}