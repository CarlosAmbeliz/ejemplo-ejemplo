function mostrarHora() {
    const fechaActual = new Date();
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const horaFormateada = `${hora.toString().padStart(2,"0")}:${minutos.toString().padStart(2,"0")}`;
    document.getElementById("hora").textContent = horaFormateada;
}

// Actualiza la hora cada segundo (1000 milisegundos)
setInterval(mostrarHora, 1000);

// Muestra la hora actual al cargar la página
mostrarHora();



function abrirLogin(){
    let main = document.querySelector("#main")
    main.style.backdropFilter = "blur(7px)"
    let hora = document.querySelector("#hora")
    hora.style.opacity = "0"
    let btnLogin = document.querySelector("#btn-login")
    btnLogin.style.opacity = "0"

}


function main(){

    let loginButton = document.querySelector("#btn-login")
    loginButton.addEventListener("click", abrirLogin)

}



const elemento = document.querySelector('.rebote');
elemento.style.animation = 'reboteAnimacion 1s ease-in-out 1';
// Repetir la animación cada 5 segundos
setInterval(function () {
    elemento.style.animation = 'none'; // Detener la animación
    elemento.style.animation = 'reboteAnimacion 1s ease-in-out 1';
    setTimeout(function () {
        elemento.style.animation = 'none'; // Detener la animación
    }, 1500);
}, 3500);

main()