/*
* 2025-01-29
* Cristhian Girón
*/

let nivelSeleccionado, preguntaActual, muted = localStorage.getItem("muted") === "true";
let preguntasUsadas = [], puntaje = 0;
const audio = document.getElementById("audio");
const tronido = new Audio('./music/mouse-click-290204.mp3');
const felicitaciones = new Audio('./music/kids-upbeat-274398.mp3');
const botones = document.querySelectorAll('button');
const playButton = document.getElementById("playAudio");
const info = document.getElementById("info");
const info_content = document.getElementById("info-content");
const close = document.getElementById("close");
let estado_info = false;
info_content.classList.add("hidden");


fetch('./data/preguntas.json')
  .then(response => response.json())
  .then(data => {
    preguntas = data.preguntas; // Asigna las preguntas a la variable global
  })
  .catch(error => console.error("Error cargando el archivo JSON:", error));

audio.muted = muted;
updateAudioButton();

function updateAudioButton() {
    playButton.classList.toggle("play", !muted);
    playButton.classList.toggle("pause", muted);
}

function toggleVisibility(element, show) {
    element.classList[show ? "remove" : "add"]("hidden");
}

function seleccionarNivel(nivel) {
    if (!preguntas || Object.keys(preguntas).length === 0) {
        console.error("Las preguntas aún no se han cargado.");
        return;
    }
    audio.play();
    toggleVisibility(playButton, true);
    nivelSeleccionado = nivel;
    preguntasUsadas = [];
    puntaje = 0;
    toggleVisibility(document.getElementById("inicio"), false);
    toggleVisibility(document.getElementById("juego"), true);
    siguientePregunta();
}

function siguientePregunta() {
    if (!preguntas[nivelSeleccionado]) {
        console.error("El nivel seleccionado no tiene preguntas cargadas.");
        return;
    }

    if (preguntasUsadas.length >= 5) return mostrarResultados();

    let totalPreguntas = 6;
    let preguntasContestadas = preguntasUsadas.length + 1;
    document.getElementById("n-usadas").innerText = preguntasContestadas;
    document.getElementById("n-totales").innerText = totalPreguntas - 1;
    document.getElementById("barraProgreso").style.width = (preguntasContestadas / totalPreguntas) * 100 + "%";

    const nivelPreguntas = preguntas[nivelSeleccionado];
    let index;
    do {
        index = Math.floor(Math.random() * nivelPreguntas.length);
    } while (preguntasUsadas.includes(index));

    preguntasUsadas.push(index);
    preguntaActual = nivelPreguntas[index];
    toggleVisibility(document.getElementById("atras"), true);
    toggleVisibility(document.getElementById("img-logo"), false);
    document.getElementById("pregunta").innerText = preguntaActual.pregunta;

    const img = document.getElementById("imagenPregunta");
    img.src= "";
    preguntaActual.imagen ? (img.src = preguntaActual.imagen, toggleVisibility(img, true)) : toggleVisibility(img, false);

    const opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = "";
    preguntaActual.opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.innerText = opcion;
        boton.onclick = () => verificarRespuesta(opcion);
        opcionesDiv.appendChild(boton);
    });
}

function verificarRespuesta(opcionSeleccionada) {
    const opcionesDiv = document.getElementById("opciones").children;
    tronido.play();

    const correcta = opcionSeleccionada === preguntaActual.respuesta;
    if (correcta) puntaje++;

    Array.from(opcionesDiv).forEach(boton => {
        boton.style.pointerEvents = "none";
        boton.style.position = "relative";
        if (boton.innerText === opcionSeleccionada) {
            boton.style.boxShadow = `inset 0px 0px 10px 5px rgba(${correcta ? "0, 255, 0" : "255, 0, 0"}, 0.8)`;
            const img_sms = document.createElement("img");
            img_sms.src = `./images/correcto${correcta ? "" : "1"}.png`;
            img_sms.style = "position: absolute; right: 0; top: 0; padding: 2px 5px; border-radius: 5px; height: 30px";
            boton.appendChild(img_sms);
        }
        if (boton.innerText === preguntaActual.respuesta && !correcta) {
            boton.style.boxShadow = "inset 0px 0px 10px 5px rgba(0, 255, 0, 0.8)";
            
            let angle = -10;
            let count = 0;
            const interval = setInterval(() => {
                boton.style.transform = `rotate(${angle}deg)`;
                angle = -angle;
                count++;
                if (count > 5) {
                    clearInterval(interval);
                    boton.style.transform = "rotate(0deg)";
                }
            }, 100);
            
            const img_sms = document.createElement("img");
            img_sms.src = "./images/correcto.png";
            img_sms.style = "position: absolute; right: 0; top: 0; padding: 2px 5px; border-radius: 5px; height: 30px";
            boton.appendChild(img_sms);
        }
        
    });
    setTimeout(() => {
        Array.from(opcionesDiv).forEach(boton => {
            boton.style.boxShadow = "";
            boton.style.pointerEvents = "auto";
        });
        siguientePregunta();
    }, 1500);
}

function mostrarResultados() {
    felicitaciones.play(); 
    felicitaciones.muted=muted;
    audio.pause();
    updateAudioButton();
    toggleVisibility(document.getElementById("img-logo"), false);
    toggleVisibility(document.getElementById("atras"), false);
    toggleVisibility(document.getElementById("juego"), false);
    toggleVisibility(document.getElementById("resultado"), true);
    document.getElementById("mensaje").innerText = `Tu puntaje final es: ${puntaje} de 5. ${puntaje === 5 ? "¡Excelente trabajo!" : "Sigue practicando y lo harás mejor."}`;
}

function reiniciarJuego() {
    felicitaciones.pause();
    audio.play;
    audio.muted=muted;
    updateAudioButton();
    toggleVisibility(document.getElementById("img-logo"), true);
    toggleVisibility(document.getElementById("atras"), false);
    toggleVisibility(document.getElementById("juego"), false);
    toggleVisibility(document.getElementById("resultado"), false);
    toggleVisibility(document.getElementById("inicio"), true);
}

playButton.addEventListener("click", () => {
    muted = !muted;
    localStorage.setItem("muted", muted);
    audio.muted = muted;
    felicitaciones.muted = muted;
    tronido.muted = muted;
    updateAudioButton();
});

botones.forEach(boton => boton.addEventListener('click', () => tronido.play()));

info.addEventListener("click", () => {
    estado_info = !estado_info;
    toggleVisibility(info_content, estado_info);
});

close.addEventListener("click", () => {
    estado_info = false;
    toggleVisibility(info_content, false);
});
