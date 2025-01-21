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
          imagen: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/04/18/15240513993600.jpg" 
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
          imagen: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Human_evolution.svg" 
      },
      { 
          pregunta: "¿Es el tipo de energía que proviene del Sol?", 
          opciones: ["Química", "Térmica", "Nuclear", "Solar"], 
          respuesta: "Solar", 
          imagen: "https://cdn.pixabay.com/photo/2020/04/25/18/30/solar-panels-5097994_1280.jpg" 
      },
      { 
          pregunta: "¿En qué parte de la planta ocurre la fotosíntesis?", 
          opciones: ["Raíces", "Hojas", "Tallos", "Flores"], 
          respuesta: "Hojas", 
          imagen: "https://cdn.pixabay.com/photo/2015/11/17/04/33/leaf-1044741_1280.jpg" 
      },
      { 
          pregunta: "¿Cómo se llama el proceso mediante el cual las plantas absorben agua?", 
          opciones: ["Transpiración", "Absorción", "Condensación", "Evaporación"], 
          respuesta: "Absorción", 
          imagen: "https://cdn.pixabay.com/photo/2016/05/28/12/42/spring-1424582_1280.jpg" 
      },
      { 
          pregunta: "¿En qué capa de la atmósfera se encuentra la capa de ozono?", 
          opciones: ["Troposfera", "Estratosfera", "Mesosfera", "Exosfera"], 
          respuesta: "Estratosfera", 
          imagen: "https://cdn.pixabay.com/photo/2017/12/06/08/47/ozone-3006423_1280.jpg" 
      },
      { 
          pregunta: "¿Qué tipo de energía se genera a partir del movimiento del agua?", 
          opciones: ["Energía solar", "Energía hidroeléctrica", "Energía eólica", "Energía térmica"], 
          respuesta: "Energía hidroeléctrica", 
          imagen: "https://cdn.pixabay.com/photo/2020/06/15/07/18/water-5291714_1280.jpg" 
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
          imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Water_molecule_3D_ball.png" 
      },
      { 
          pregunta: "¿Es el nombre del estudio de los genes y la herencia?", 
          opciones: ["Biología", "Química", "Genética", "Física"], 
          respuesta: "Genética", 
          imagen: "https://cdn.pixabay.com/photo/2016/06/15/12/37/dna-1459905_1280.jpg" 
      },
      { 
          pregunta: "¿Qué estructura en las células es responsable de producir energía?", 
          opciones: ["Núcleo", "Mitocondrias", "Ribosomas", "Cloroplastos"], 
          respuesta: "Mitocondrias", 
          imagen: "https://cdn.pixabay.com/photo/2019/12/04/17/28/molecule-4670321_1280.jpg" 
      },
      { 
          pregunta: "¿En qué parte de la célula se lleva a cabo la fotosíntesis?", 
          opciones: ["Citoesqueleto", "Mitocondrias", "Cloroplastos", "Núcleo"], 
          respuesta: "Cloroplastos", 
          imagen: "https://cdn.pixabay.com/photo/2016/04/25/00/23/photosynthesis-1359824_1280.jpg" 
      },
      { 
          pregunta: "¿Es el proceso que permite que los organismos se reproduzcan?", 
          opciones: ["Crecimiento", "Reproducción", "Desarrollo", "Adaptación"], 
          respuesta: "Reproducción", 
          imagen: "https://cdn.pixabay.com/photo/2019/06/14/20/57/reproduce-4281175_1280.jpg" 
      },
      { 
          pregunta: "¿Qué fenómeno natural ocurre cuando la luz pasa a través de un material diferente?", 
          opciones: ["Reflexión", "Refracción", "Difracción", "Absorción"], 
          respuesta: "Refracción", 
          imagen: "https://cdn.pixabay.com/photo/2017/05/22/18/57/prism-2331097_1280.jpg" 
      },
      { 
          pregunta: "¿Quién es conocido como el padre de la teoría de la evolución?", 
          opciones: ["Charles Darwin", "Albert Einstein", "Isaac Newton", "Galileo Galilei"], 
          respuesta: "Charles Darwin", 
          imagen: "https://cdn.pixabay.com/photo/2016/03/10/20/29/charles-darwin-1247103_1280.jpg" 
      }
  ]
};

let nivelSeleccionado;
let preguntasUsadas = [];
let puntaje = 0;
let preguntaActual;

// Función para seleccionar el nivel
function seleccionarNivel(nivel) {
  nivelSeleccionado = nivel;
  preguntasUsadas = [];
  puntaje = 0;
  document.getElementById("inicio").classList.add("hidden");
  document.getElementById("juego").classList.remove("hidden");
  siguientePregunta();
}

// Función para mostrar una nueva pregunta
function siguientePregunta() {
  if (preguntasUsadas.length >= 3) {
      mostrarResultados();
      return;
  }

  // Seleccionar una pregunta aleatoria no usada
  const nivelPreguntas = preguntas[nivelSeleccionado];
  let index;
  do {
      index = Math.floor(Math.random() * nivelPreguntas.length);
  } while (preguntasUsadas.includes(index));

  preguntasUsadas.push(index);
  preguntaActual = nivelPreguntas[index];

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

function agregarBordeNeon () {
  
  
}
// Función para verificar la respuesta
function verificarRespuesta(opcionSeleccionada) {
  const img = document.getElementById("imagenPregunta");
  const img_container = document.getElementById("img-base");
  if (opcionSeleccionada === preguntaActual.respuesta) {
      puntaje++;    
      img.src = "./pngwing.com.png";
      img_container.style.boxShadow = "0 0 10px 5px rgba(0, 255, 0, 0.8)"; // Sombra neón
      // Llamada a la función para agregar el borde neón
      agregarBordeNeon();
  } else {
      img.src = "./pngwing.com (1).png";
      img_container.style.boxShadow = "0 0 10px 5px rgba(255, 0, 0, 0.8)"; // Sombra neón
  }

  // Muestra la imagen durante 10 segundos y luego pasa a la siguiente pregunta
  setTimeout(function() {
    const img_container = document.getElementById("img-base");
    img_container.style.boxShadow = "none";  // Elimina la sombra
    siguientePregunta();
  }, 1000);  // 10000 milisegundos = 10 segundos
}


// Función para mostrar resultados
function mostrarResultados() {
  document.getElementById("juego").classList.add("hidden");
  document.getElementById("resultado").classList.remove("hidden");
  const mensaje = puntaje === 3 ? "¡Excelente trabajo!" : "Sigue practicando y lo harás mejor.";
  document.getElementById("mensaje").innerText = `Tu puntaje final es: ${puntaje} de 3. ${mensaje}`;
}

// Función para reiniciar el juego
function reiniciarJuego() {
  document.getElementById("resultado").classList.add("hidden");
  document.getElementById("inicio").classList.remove("hidden");
}

