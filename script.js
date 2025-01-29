// Variables globales
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
            imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Common_dolphin.jpg"
        },
        {
            pregunta: "¿Qué usamos para ver?",
            opciones: ["Ojos", "Nariz", "Boca", "Orejas"],
            respuesta: "Ojos",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Human_eye_with_eyelashes.jpg"
        },
        {
            pregunta: "¿Qué necesitamos para respirar?",
            opciones: ["Agua", "Oxígeno", "Luz", "Azúcar"],
            respuesta: "Oxígeno",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/3/34/Oxygen_discharge_tube.jpg"
        },
        {
            pregunta: "¿Cuál de estos es un vegetal?",
            opciones: ["Pez", "Manzana", "Zanahoria", "Piedra"],
            respuesta: "Zanahoria",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7d/CarrotDiversityLg.jpg"
        },
        {
            pregunta: "¿Cuál de estos animales tiene caparazón?",
            opciones: ["Perro", "Gato", "Tortuga", "Caballo"],
            respuesta: "Tortuga",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/8/88/Tortoise_close_up.jpg"
        },
        {
            pregunta: "¿Qué parte del cuerpo usamos para oler?",
            opciones: ["Ojos", "Nariz", "Manos", "Orejas"],
            respuesta: "Nariz",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Human_nose.jpg"
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
            imagen: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Chicken_egg.jpg"
        },
        {
            pregunta: "¿Qué gas necesitan las plantas para la fotosíntesis?",
            opciones: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Hidrógeno"],
            respuesta: "Dióxido de carbono",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Photosynthesis_equation.svg"
        },
        {
            pregunta: "¿Cuál de estos animales es un anfibio?",
            opciones: ["Sapo", "Tiburón", "Águila", "León"],
            respuesta: "Sapo",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Common_toad_%28Bufo_bufo%29.jpg"
        },
        {
            pregunta: "¿Qué capa de la Tierra contiene agua subterránea?",
            opciones: ["Manto", "Núcleo", "Corteza", "Atmósfera"],
            respuesta: "Corteza",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Underground_water_diagram.svg"
        },
        {
            pregunta: "¿Qué tipo de energía usan las plantas para la fotosíntesis?",
            opciones: ["Química", "Solar", "Eléctrica", "Nuclear"],
            respuesta: "Solar",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Photosynthesis_in_leaves.jpg"
        },
        {
            pregunta: "¿Cuál de estos animales es un artrópodo?",
            opciones: ["Araña", "Sapo", "Pez", "Águila"],
            respuesta: "Araña",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/2/24/Spider_on_a_web.jpg"
        },
        {
            pregunta: "¿Cuál de los siguientes órganos pertenece al sistema digestivo?",
            opciones: ["Pulmones", "Estómago", "Corazón", "Cerebro"],
            respuesta: "Estómago",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Diagram_of_the_human_stomach.svg"
        },
        {
            pregunta: "¿Qué tipo de animal es una rana?",
            opciones: ["Mamífero", "Reptil", "Anfibio", "Ave"],
            respuesta: "Anfibio",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Green_frog_on_a_leaf.jpg"
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
            imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Human_homeostasis_diagram.svg"
        },
        {
            pregunta: "¿Cuál es el pH neutro del agua?",
            opciones: ["3", "7", "10", "14"],
            respuesta: "7",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3e/PH_Scale.png"
        },
        {
            pregunta: "¿Qué órgano humano produce insulina?",
            opciones: ["Hígado", "Riñón", "Páncreas", "Corazón"],
            respuesta: "Páncreas",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/3/34/Pancreas_diagram.svg"
        },
        {
            pregunta: "¿Cómo se llama la molécula que transporta la información genética?",
            opciones: ["ARN", "Proteína", "Glucosa", "Lípido"],
            respuesta: "ARN",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/8/8a/DNA_RNA_structure.svg"
        },
        {
            pregunta: "¿Qué gas se libera en la fotosíntesis?",
            opciones: ["Dióxido de carbono", "Oxígeno", "Nitrógeno", "Hidrógeno"],
            respuesta: "Oxígeno",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Leaf_closeup.jpg"
        },
        {
            pregunta: "¿Qué componente de la sangre transporta oxígeno?",
            opciones: ["Glóbulos blancos", "Plaquetas", "Glóbulos rojos", "Plasma"],
            respuesta: "Glóbulos rojos",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/4/42/Red_blood_cells.jpg"
        },
        {
            pregunta: "¿Cuál es la función principal del ADN en los seres vivos?",
            opciones: ["Producir energía", "Regular la temperatura", "Almacenar información genética", "Transportar oxígeno"],
            respuesta: "Almacenar información genética",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e4/DNA_double_helix_horizontal.png"
        },
        {
            pregunta: "¿Cuál es el órgano más grande del cuerpo humano?",
            opciones: ["Corazón", "Piel", "Hígado", "Cerebro"],
            respuesta: "Piel",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/6/64/Human_skin_structure.svg"
        }
    ]
};

let nivelSeleccionado;
let preguntasUsadas = [];
let puntaje = 0;
let preguntaActual;
const audio = document.getElementById("audio");
// Función para seleccionar el nivel
function seleccionarNivel(nivel) {
    audio.play()
    document.getElementById("playAudio").classList.remove("hidden");

    nivelSeleccionado = nivel;
    preguntasUsadas = [];
    puntaje = 0;
    document.getElementById("inicio").classList.add("hidden");
    document.getElementById("juego").classList.remove("hidden");
    siguientePregunta();
}

// Función para mostrar una nueva pregunta
function siguientePregunta() {


    if (preguntasUsadas.length >= 6) {
        mostrarResultados();
        return;
    }
    let totalPreguntas = 6; // Total de preguntas
    let preguntasContestadas = preguntasUsadas.length; // Número de preguntas contestadas
    const contestadas= document.getElementById("n-usadas");
    const totales= document.getElementById("n-totales");
    totales.innerText=totalPreguntas;
    // Función para actualizar la barra de progreso
    function actualizarProgreso() {
        contestadas.innerText=preguntasContestadas;
        preguntasContestadas++; // Incrementa el número de preguntas contestadas
        let porcentaje = (preguntasContestadas / totalPreguntas) * 100; // Calcula el porcentaje de progreso
        document.getElementById("barraProgreso").style.width = porcentaje + "%"; // Actualiza el ancho del progreso
    }

    // Llamar a la función cada vez que el usuario responda una pregunta
    // Ejemplo de llamada:
    actualizarProgreso(); // Esto se llamaría en el evento de cada respuesta

    // Seleccionar una pregunta aleatoria no usada
    const nivelPreguntas = preguntas[nivelSeleccionado];
    let index;
    do {
        index = Math.floor(Math.random() * nivelPreguntas.length);
    } while (preguntasUsadas.includes(index));

    preguntasUsadas.push(index);
    preguntaActual = nivelPreguntas[index];
    document.getElementById("atras").classList.remove("hidden");
    document.getElementById("img-logo").classList.add("hidden");
    document.getElementById("pregunta").innerText = preguntaActual.pregunta;

    const img = document.getElementById("imagenPregunta");
    if (preguntaActual.imagen) {
        img.src = preguntaActual.imagen;
        img.classList.remove("hidden");
    } else {
        img.classList.add("hidden");
    }

    // Mostrar las opciones
    const opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = "";
    preguntaActual.opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.innerText = opcion;
        boton.onclick = () => verificarRespuesta(opcion);
        opcionesDiv.appendChild(boton);
    });
}

// Función para verificar la respuesta
function verificarRespuesta(opcionSeleccionada) {
    const img = document.getElementById("imagenPregunta");
    const img_container = document.getElementById("img-base");
    const opcionesDiv = document.getElementById("opciones").children; // Obtener todos los botones de opciones


    if (opcionSeleccionada === preguntaActual.respuesta) {

        puntaje++;
        /*
        img.src = "./pngwing.com.png";
        img_container.style.boxShadow = "0 0 10px 5px rgba(0, 255, 0, 0.8)"; // Sombra neón verde
        */
        Array.from(opcionesDiv).forEach(boton => {
            boton.style.pointerEvents = "none";

            if (boton.innerText === opcionSeleccionada) {
                boton.style.boxShadow = "inset 0px 0px 10px 5px rgba(0, 255, 0, 0.8)";
                boton.style.position = "relative";
                const img_sms = document.createElement("img");
                img_sms.style.position = "absolute";
                img_sms.style.right = "0";
                img_sms.style.top = "0";
                img_sms.src = "./pngwing.com.png";
                img_sms.style.padding = "2px 5px";
                img_sms.style.borderRadius = "5px";
                img_sms.style.height = "30px";

                boton.appendChild(img_sms);
            }
        });


    } else {

        /*
        img.src = "./pngwing.com (1).png";
        img_container.style.boxShadow = "0 0 10px 5px rgba(255, 0, 0, 0.8)"; // Sombra neón roja
        */
        Array.from(opcionesDiv).forEach(boton => {
            boton.style.pointerEvents = "none";
            if (boton.innerText === opcionSeleccionada) {
                boton.style.boxShadow = "inset 0px 0px 10px 5px rgba(255, 0, 0, 0.8)";
                boton.style.position = "relative";

                // Crear el div con el mensaje
                const img_sms = document.createElement("img");
                img_sms.style.position = "absolute";
                img_sms.style.right = "0";
                img_sms.style.top = "0";
                img_sms.src = "./pngwing.com (1).png"
                img_sms.style.padding = "2px 5px";
                img_sms.style.borderRadius = "5px";
                img_sms.style.height = "30px"

                boton.appendChild(img_sms);
            }
        });

        Array.from(opcionesDiv).forEach(boton => {
            boton.style.pointerEvents = "none";
            if (boton.innerText === preguntaActual.respuesta) {

                boton.style.boxShadow = "inset 0px 0px 10px 5px rgba(0, 255, 0, 0.8)";
                // Crear el div con el mensaje
                const img_sms = document.createElement("div");
                img_sms.style.marginLeft = "10px";
                img_sms.style.color = "red";
                img_sms.style.fontSize = "14px";
                img_sms.style.display = "inline-block";
                img_sms.style.position = "absolute";
                boton.parentNode.insertBefore(img_sms, boton.nextSibling);
            }
        });
    }

    // Muestra la imagen durante 10 segundos y luego pasa a la siguiente pregunta
    setTimeout(function () {
        const img_container = document.getElementById("img-base");
        img_container.style.boxShadow = "none";
        Array.from(opcionesDiv).forEach(boton => {
            boton.style.boxShadow = "";
            boton.style.pointerEvents = "auto";
        });
        siguientePregunta();
    }, 1500); // 1500 milisegundos = 15 segundos
}



// Función para mostrar resultados
function mostrarResultados() {
    document.getElementById("img-logo").classList.remove("hidden");
    document.getElementById("atras").classList.add("hidden");
    document.getElementById("juego").classList.add("hidden");
    document.getElementById("resultado").classList.remove("hidden");
    const mensaje = puntaje === 6 ? "¡Excelente trabajo!" : "Sigue practicando y lo harás mejor.";
    document.getElementById("mensaje").innerText = `Tu puntaje final es: ${puntaje} de 6. ${mensaje}`;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    document.getElementById("img-logo").classList.remove("hidden");
    document.getElementById("atras").classList.add("hidden");
    document.getElementById("juego").classList.add("hidden");
    document.getElementById("resultado").classList.add("hidden");
    document.getElementById("inicio").classList.remove("hidden");
}



let muted = false;
// Intentar reproducir el audio automáticamente
window.addEventListener("load", () => {
    audio.play().then(() => {
        muted = true;
        console.log("El audio comenzó a reproducirse automáticamente.");
    }).catch((error) => {
        console.error("El navegador bloqueó la reproducción automática:", error);
    });
});

// Activar el sonido al hacer clic en el botón
const playButton = document.getElementById("playAudio");

playButton.addEventListener("click", () => {
    if (muted) {
        muted = false
        document.getElementById("playAudio").classList.remove("play");
        document.getElementById("playAudio").classList.add("pause");
        audio.muted = true; // Desactivar el silencio
    } else {
        muted = true
        document.getElementById("playAudio").classList.add("play");
        document.getElementById("playAudio").classList.remove("pause");
        audio.muted = false; // Desactivar el silencio
    }

});
