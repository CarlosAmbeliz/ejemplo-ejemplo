function mostrarHora() {
    const fechaActual = new Date();
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const horaFormateada = `${hora}:${minutos}`;
    document.getElementById("hora").textContent = horaFormateada;
}

// Actualiza la hora cada segundo (1000 milisegundos)
setInterval(mostrarHora, 1000);

// Muestra la hora actual al cargar la página
mostrarHora();




// Repetir la animación cada 5 segundos
setTimeout(function () {
    const elemento = document.querySelector('.rebote');
    elemento.style.animation = 'reboteAnimacion 5s ease-in-out infinite';
    setTimeout(function () {
        elemento.style.animation = 'none'; // Detener la animación
    }, 5000);
}, 2000);