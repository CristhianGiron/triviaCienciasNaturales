/*
* 2025-01-29
* Cristhian Girón
*/
const preguntas = {
    1: [
        {
            pregunta: "¿Es el planeta donde vivimos?",
            opciones: ["Marte", "Júpiter", "Tierra", "Venus"],
            respuesta: "Tierra",
            imagen: "https://cdn.pixabay.com/photo/2020/11/22/14/58/earth-5766860_1280.png"
        },
        {
            pregunta: "¿Es un mamífero que vuela?",
            opciones: ["Águila", "Murciélago", "Pato", "Pelícano"],
            respuesta: "Murciélago",
            imagen: "https://www.creativefabrica.com/wp-content/uploads/2023/08/01/Cute-Bat-Graphic-75952710-1.png"
        },
        {
            pregunta: "¿Es el proceso mediante el cual las plantas producen su alimento?",
            opciones: ["Respiración", "Fotosíntesis", "Evaporación", "Condensación"],
            respuesta: "Fotosíntesis",
            imagen: "https://images.edrawsoft.com/articles/photosynthesis-diagram/photosynthesis.jpg"
        },
        {
            pregunta: "¿Es el satélite natural de la Tierra?",
            opciones: ["Marte", "Sol", "Luna", "Estrella"],
            respuesta: "Luna",
            imagen: "https://resizer.glanacion.com/resizer/v2/este-es-el-dia-en-que-se-podra-ver-la-luna-llena-6VBUCQZ4NFCCXOXUKT6GZAU7LQ.jpg?auth=ae4cefbbbcb5fa5e51ac53801200fec01fcdc38f87d4143b21107df2b0cc9723&width=1280&height=854&quality=70&smart=true"
        },
        {
            pregunta: "¿Es el mayor mamífero marino?",
            opciones: ["Delfín", "Ballena", "Tiburón", "Orca"],
            respuesta: "Ballena",
            imagen: "https://conexion.puce.edu.ec/wp-content/uploads/2022/10/Ballena-saltando-1024x675.jpg"
        },
        {
            pregunta: "¿Cuál es el órgano encargado de bombear la sangre en el cuerpo humano?",
            opciones: ["Cerebro", "Estómago", "Corazón", "Pulmones"],
            respuesta: "Corazón",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqfoRgmUa5kacdta1Gbu5VqUl8XDEMHUZGOA&s"
        },
        {
            pregunta: "¿Cuál es la fuente primaria de energía para la mayoría de los organismos?",
            opciones: ["Luz", "Agua", "Tierra", "Sol"],
            respuesta: "Sol",
            imagen: "https://www.muyinteresante.com/wp-content/uploads/sites/5/2023/05/11/645ca2cb29f8b.jpeg?resize=1024,574"
        },
        {
            pregunta: "¿Cómo se llama el proceso por el cual el agua se transforma en vapor?",
            opciones: ["Condensación", "Evaporación", "Filtración", "Fusión"],
            respuesta: "Evaporación",
            imagen: "https://www.shutterstock.com/image-vector/hydrology-concept-illustration-water-cycle-260nw-2383441989.jpg"
        },
        {
            pregunta: "¿Qué tipo de animal es el delfín?",
            opciones: ["Reptil", "Aves", "Mamífero", "Peces"],
            respuesta: "Mamífero",
            imagen: "https://content.nationalgeographic.com.es/medio/2024/03/14/istock_f9ffc5ff_1442686499_240314112404_800x800.jpg"
        },
        //Nuevas
        {
            pregunta: "¿Cuál de estos animales vive en el agua?",
            opciones: ["Gato", "Delfín", "Perro", "Gallina"],
            respuesta: "Delfín",
            imagen: "https://www.dolphindiscovery.com.mx/src/about/dolphins/About__Swim_WithDolphins.jpg"
        },
        {
            pregunta: "¿Qué usamos para ver?",
            opciones: ["Ojos", "Nariz", "Boca", "Orejas"],
            respuesta: "Ojos",
            imagen: "https://ntcespana.es/wp-content/uploads/2022/12/estrcutura-ojos.jpg"
        },
        {
            pregunta: "¿Qué necesitamos para respirar?",
            opciones: ["Agua", "Oxígeno", "Luz", "Azúcar"],
            respuesta: "Oxígeno",
            imagen: "https://saludconlupa.com/media/images/oxigeno-medicinal.width-640.format-webp.webp"
        },
        {
            pregunta: "¿Cuál de estos es un vegetal?",
            opciones: ["Pez", "Manzana", "Zanahoria", "Piedra"],
            respuesta: "Zanahoria",
            imagen: "https://fotografias.atresmedia.com/clipping/cmsimages02/2017/02/16/43B23810-3277-4068-B6E5-5A20DA1AD560/64.jpg"
        },
        {
            pregunta: "¿Cuál de estos animales tiene caparazón?",
            opciones: ["Perro", "Gato", "Tortuga", "Caballo"],
            respuesta: "Tortuga",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmyTRzeSgZkBN41iqwnjzVPhTubEVo34HKQ&s"
        },
        {
            pregunta: "¿Qué parte del cuerpo usamos para oler?",
            opciones: ["Ojos", "Nariz", "Manos", "Orejas"],
            respuesta: "Nariz",
            imagen: "https://granadaotorrino.com/wp-content/uploads/2015/01/106429956-330x200.jpg"
        },
        {
            pregunta: "¿Cuál de estos es un animal herbívoro?",
            opciones: ["León", "Tigre", "Elefante", "Águila"],
            respuesta: "Elefante",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg"
        },
        {
            pregunta: "¿Qué planeta es conocido como el planeta azul?",
            opciones: ["Marte", "Venus", "Tierra", "Júpiter"],
            respuesta: "Tierra",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
        }
    ],
    2: [
        {
            pregunta: "¿Es el gas más abundante en la atmósfera terrestre?",
            opciones: ["Oxígeno", "Nitrógeno", "Hidrógeno", "Helio"],
            respuesta: "Nitrógeno",
            imagen: "https://i0.wp.com/municipiosur.com/wp-content/uploads/2020/05/20200511_223251.png?fit=515%2C386&ssl=1"
        },
        {
            pregunta: "¿Es el órgano principal del sistema nervioso central?",
            opciones: ["Corazón", "Hígado", "Cerebro", "Pulmones"],
            respuesta: "Cerebro",
            imagen: "https://img.freepik.com/psd-gratis/ilustracion-contorno-cerebro_23-2150761752.jpg"
        },
        {
            pregunta: "¿Es la capa de la atmósfera donde ocurre el clima?",
            opciones: ["Estratosfera", "Mesosfera", "Troposfera", "Exosfera"],
            respuesta: "Troposfera",
            imagen: "https://cdn0.uncomo.com/es/posts/2/3/9/que_es_la_troposfera_y_sus_caracteristicas_51932_orig.jpg"
        },
        {
            pregunta: "¿Es el nombre científico del ser humano?",
            opciones: ["Homo sapiens", "Homo erectus", "Homo habilis", "Homo neanderthalensis"],
            respuesta: "Homo sapiens",
            imagen: "https://c.files.bbci.co.uk/A0E0/production/_109448114_zambezi3.png"
        },
        {
            pregunta: "¿Es el tipo de energía que proviene del Sol?",
            opciones: ["Química", "Térmica", "Nuclear", "Solar"],
            respuesta: "Solar",
            imagen: "https://enercitysa.com/oavyrdix/2022/07/inclinacion-panel-solar.jpg"
        },
        {
            pregunta: "¿En qué parte de la planta ocurre la fotosíntesis?",
            opciones: ["Raíces", "Hojas", "Tallos", "Flores"],
            respuesta: "Hojas",
            imagen: "https://strapi.morfologiavegetal.info/uploads/small_Platanus_hispani_030_viveza_89041d6719.jpg"
        },
        {
            pregunta: "¿Cómo se llama el proceso mediante el cual las plantas absorben agua?",
            opciones: ["Transpiración", "Absorción", "Condensación", "Evaporación"],
            respuesta: "Absorción",
            imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgte5UowhJclyQ5N2A5sF2THEK_FxN8O1YjtvnHmipb_hveg4y-kSbS3laxUFEDk-_Xd9MGGGRAv3pDTtwF6LaBcOOi3-xFHHbutORDjB5pOdut2pExUHZn3mYV8_eEaS1r-nrQ4dbWNTR9/s1600/ESScience5_A1_Q1-4.jpg"
        },
        {
            pregunta: "¿En qué capa de la atmósfera se encuentra la capa de ozono?",
            opciones: ["Troposfera", "Estratosfera", "Mesosfera", "Exosfera"],
            respuesta: "Estratosfera",
            imagen: "https://media.istockphoto.com/id/621992042/es/vector/la-principal-capas-ambiente-de-la-tierra.jpg?s=612x612&w=0&k=20&c=4AhmmJMuCKk6-fbvTKMMvSUrqvIMk6qbI2CvH_M3K6o="
        },
        {
            pregunta: "¿Qué tipo de energía se genera a partir del movimiento del agua?",
            opciones: ["Energía solar", "Energía hidroeléctrica", "Energía eólica", "Energía térmica"],
            respuesta: "Energía hidroeléctrica",
            imagen: "https://blogs.iadb.org/energia/wp-content/uploads/sites/16/2023/02/shutterstock_1997751206.jpg"
        },
        //Nuevas
        {
            pregunta: "¿Qué animal pone huevos?",
            opciones: ["Perro", "Gato", "Gallina", "Caballo"],
            respuesta: "Gallina",
            imagen: "https://estaticos-cdn.prensaiberica.es/clip/7bc8788b-e5a0-4f21-977a-32f965e6bf4f_16-9-discover-aspect-ratio_640w_0_x832y412.webp"
        },
        {
            pregunta: "¿Qué gas necesitan las plantas para la fotosíntesis?",
            opciones: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Hidrógeno"],
            respuesta: "Dióxido de carbono",
            imagen: "https://concepto.de/wp-content/uploads/2018/04/co2-min-e1523637201853.jpg"
        },
        {
            pregunta: "¿Cuál de estos animales es un anfibio?",
            opciones: ["Sapo", "Tiburón", "Águila", "León"],
            respuesta: "Sapo",
            imagen: "https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-ranas-dibujadas-mano_23-2151268621.jpg"
        },
        {
            pregunta: "¿Qué capa de la Tierra contiene agua subterránea?",
            opciones: ["Manto", "Núcleo", "Corteza", "Atmósfera"],
            respuesta: "Corteza",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Afiche_de_la_Tierra.svg/350px-Afiche_de_la_Tierra.svg.png"
        },
        {
            pregunta: "¿Qué tipo de energía usan las plantas para la fotosíntesis?",
            opciones: ["Química", "Solar", "Eléctrica", "Nuclear"],
            respuesta: "Solar",
            imagen: "https://pcfb.gumlet.io/images/articles/large-plant-in-sunlight.png?s=841cfb1b5736705af959eca35d7b5aed"
        },
        {
            pregunta: "¿Cuál de estos animales es un artrópodo?",
            opciones: ["Araña", "Sapo", "Pez", "Águila"],
            respuesta: "Araña",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtWzEDi1oRLs1DHcYL-Y6upVI-GmTEC8qGUg&s"
        },
        {
            pregunta: "¿Cuál de los siguientes órganos pertenece al sistema digestivo?",
            opciones: ["Pulmones", "Estómago", "Corazón", "Cerebro"],
            respuesta: "Estómago",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Skrand%C5%BEio_sandara_esp.png/220px-Skrand%C5%BEio_sandara_esp.png"
        },
        {
            pregunta: "¿Qué tipo de animal es una rana?",
            opciones: ["Mamífero", "Reptil", "Anfibio", "Ave"],
            respuesta: "Anfibio",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Litoria_phyllochroa.JPG/220px-Litoria_phyllochroa.JPG"
        }
    ],
    3: [
        {
            pregunta: "¿Es el proceso mediante el cual las células obtienen energía?",
            opciones: ["Fotosíntesis", "Respiración celular", "Fermentación", "Oxidación"],
            respuesta: "Respiración celular",
            imagen: "https://conceptodefinicion.de/wp-content/uploads/2022/11/celula_animal_10.jpg"
        },
        {
            pregunta: "¿Nombre del fenómeno por el cual la luz se descompone al pasar por un prisma?",
            opciones: ["Reflexión", "Dispersión", "Difracción", "Refracción"],
            respuesta: "Dispersión",
            imagen: "https://cards.algoreducation.com/_next/image?url=https%3A%2F%2Ffiles.algoreducation.com%2Fproduction-ts%2F__S3__ac5c1aed-7062-48ef-9b10-74952becdb3e&w=3840&q=75"
        },
        {
            pregunta: "¿Es el nombre del reino al que pertenecen los hongos?",
            opciones: ["Plantae", "Fungi", "Animalia", "Protista"],
            respuesta: "Fungi",
            imagen: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2015/08/Rhodotus-palmatus.jpg?fit=1214%2C883&quality=50&strip=all&ssl=1"
        },
        {
            pregunta: "¿Es el tipo de enlace que une los átomos de una molécula de agua?",
            opciones: ["Iónico", "Metálico", "Covalente", "Puente de hidrógeno"],
            respuesta: "Covalente",
            imagen: "https://concepto.de/wp-content/uploads/2018/08/enlace-covalente-simple-e1535458209730.jpg"
        },
        {
            pregunta: "¿Es el nombre del estudio de los genes y la herencia?",
            opciones: ["Biología", "Química", "Genética", "Física"],
            respuesta: "Genética",
            imagen: "https://www.ibbiotech.com/uploads/imagenes/paginas/galeria/201507/galeria-que-es-la-genetica.jpg"
        },
        {
            pregunta: "¿Qué estructura en las células es responsable de producir energía?",
            opciones: ["Núcleo", "Mitocondrias", "Ribosomas", "Cloroplastos"],
            respuesta: "Mitocondrias",
            imagen: "https://genotipia.com/wp-content/uploads/2024/05/mitocondria-canva.jpg"
        },
        {
            pregunta: "¿En qué parte de la célula se lleva a cabo la fotosíntesis?",
            opciones: ["Citoesqueleto", "Mitocondrias", "Cloroplastos", "Núcleo"],
            respuesta: "Cloroplastos",
            imagen: "https://s1.significados.com/foto/cloroplastos-21_bg.jpg?class=article"
        },
        {
            pregunta: "¿Es el proceso que permite que los organismos se reproduzcan?",
            opciones: ["Crecimiento", "Reproducción", "Desarrollo", "Adaptación"],
            respuesta: "Reproducción",
            imagen: "https://oceanomedicina.com/wp-content/uploads/2020/09/Complicaciones-en-la-reproduccion-causas-y-medidas-preventivas-2.jpg"
        },
        {
            pregunta: "¿Qué fenómeno natural ocurre cuando la luz pasa a través de un material diferente?",
            opciones: ["Reflexión", "Refracción", "Difracción", "Absorción"],
            respuesta: "Refracción",
            imagen: "https://www.dzoom.org.es/wp-content/uploads/2020/01/fototip-refraccion-1-734x413.png"
        },
        {
            pregunta: "¿Quién es conocido como el padre de la teoría de la evolución?",
            opciones: ["Charles Darwin", "Albert Einstein", "Isaac Newton", "Galileo Galilei"],
            respuesta: "Charles Darwin",
            imagen: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/0D35/production/_120718330_gettyimages-1306714436.jpg.webp"
        },
        //Nuevas
        {
            pregunta: "¿Qué es la homeostasis en los seres vivos?",
            opciones: ["El proceso de digestión", "El mantenimiento del equilibrio interno", "La reproducción celular", "La función del ADN"],
            respuesta: "El mantenimiento del equilibrio interno",
            imagen: "https://portalacademico.cch.unam.mx/alumno/biologia1/unidad2/homeostasis"
        },
        {
            pregunta: "¿Cuál es el pH neutro del agua?",
            opciones: ["3", "7", "10", "14"],
            respuesta: "7",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ83N9kYUpwMvZBCiqPYLhCakhN5wo27jL8RA&s"
        },
        {
            pregunta: "¿Qué órgano humano produce insulina?",
            opciones: ["Hígado", "Riñón", "Páncreas", "Corazón"],
            respuesta: "Páncreas",
            imagen: "https://www.barnaclinic.com/blog/cirugia-del-pancreas/wp-content/uploads/sites/5/cancer-de-pancreas.jpg"
        },
        {
            pregunta: "¿Cómo se llama la molécula que transporta la información genética?",
            opciones: ["ARN", "Proteína", "Glucosa", "Lípido"],
            respuesta: "ARN",
            imagen: "https://images.theconversation.com/files/373201/original/file-20201206-23-mw8h41.jpg?ixlib=rb-4.1.0&rect=7%2C598%2C4985%2C2492&q=45&auto=format&w=1356&h=668&fit=crop"
        },
        {
            pregunta: "¿Qué gas se libera en la fotosíntesis?",
            opciones: ["Dióxido de carbono", "Oxígeno", "Nitrógeno", "Hidrógeno"],
            respuesta: "Oxígeno",
            imagen: "https://www.appyweb.es/diccionario/wp-content/uploads/2024/03/Oxigeno.jpg"
        },
        {
            pregunta: "¿Qué componente de la sangre transporta oxígeno?",
            opciones: ["Glóbulos blancos", "Plaquetas", "Glóbulos rojos", "Plasma"],
            respuesta: "Glóbulos rojos",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWU3kFjbnXL0PQqpZycV5XT85Pyz5IYu6pnQ&s"
        },
        {
            pregunta: "¿Cuál es la función principal del ADN en los seres vivos?",
            opciones: ["Producir energía", "Regular la temperatura", "Almacenar información genética", "Transportar oxígeno"],
            respuesta: "Almacenar información genética",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7WmJ7Wgi3vPNga_kfiQsZRRYjIhQjmONcV3PxPyExpY_m1FWQelcYABnCVBHQ4cpz1g&usqp=CAU"
        },
        {
            pregunta: "¿Cuál es el órgano más grande del cuerpo humano?",
            opciones: ["Corazón", "Piel", "Hígado", "Cerebro"],
            respuesta: "Piel",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Anatomy_The_Skin_-_NCI_Visuals_Online_esp.jpg/290px-Anatomy_The_Skin_-_NCI_Visuals_Online_esp.jpg"
        }
    ]
};

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
            
            let angle = -10; // Inicia en -10 grados
            let count = 0;
            const interval = setInterval(() => {
                boton.style.transform = `rotate(${angle}deg)`;
                angle = -angle; // Alterna entre -10 y 10 grados
                count++;
                if (count > 5) { // Repite 5 veces
                    clearInterval(interval);
                    boton.style.transform = "rotate(0deg)"; // Vuelve a su estado normal
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
