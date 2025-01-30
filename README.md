# Juego de Preguntas Interactivo

Este es un juego interactivo basado en preguntas de opción múltiple que permite a los usuarios seleccionar un nivel de dificultad y responder preguntas relacionadas. El juego presenta retroalimentación visual y auditiva para hacer la experiencia más atractiva y divertida. Además, contiene una barra de progreso que indica el avance del jugador en el juego.

* Date: 2025-01-29
* Author: Cristhian Girón


## Funcionalidades

- **Selección de nivel**: Los usuarios pueden elegir entre diferentes niveles de dificultad para jugar.
- **Preguntas aleatorias**: Las preguntas se presentan de manera aleatoria, y se evita que las mismas preguntas se repitan durante el juego.
- **Retroalimentación visual**: Las respuestas correctas y erróneas se indican con colores y efectos visuales.
- **Audio interactivo**: El juego incluye sonidos de fondo y efectos de sonido para mejorar la experiencia del usuario.
- **Barra de progreso**: Los jugadores pueden ver su progreso mientras responden las preguntas.

## Requisitos

Para ejecutar este juego, necesitarás tener un navegador web moderno que soporte JavaScript, ya que el juego utiliza varias funcionalidades de JavaScript para manejar la lógica del juego y los efectos visuales.

- Un servidor web local para cargar los archivos y servir los recursos como imágenes y audios (opcional, pero recomendado para evitar problemas con la carga de archivos locales).
- Un archivo de audio (`tronido.mp3`) y otro para felicitaciones (`kids-upbeat-274398.mp3`) en las rutas especificadas.

## Instalación

1. Clona este repositorio en tu máquina local:
    ```bash
    git clone https://github.com/tu-usuario/juego-preguntas.git
    ```
   
2. Abre el archivo `index.html` en tu navegador para jugar.

## Cómo jugar

1. **Selecciona un nivel**: Haz clic en el botón correspondiente para seleccionar el nivel de dificultad.
2. **Responde las preguntas**: El juego te presentará una pregunta con opciones de respuesta. Haz clic en la opción correcta.
3. **Sigue el progreso**: La barra de progreso se actualizará conforme vayas contestando las preguntas.
4. **Resultados**: Al final, recibirás tu puntaje basado en las respuestas correctas y se te mostrará un mensaje de felicitación o aliento.

## Funciones principales

- **`seleccionarNivel(nivel)`**: Cambia al nivel seleccionado y muestra las preguntas correspondientes.
- **`siguientePregunta()`**: Muestra la siguiente pregunta y sus opciones.
- **`verificarRespuesta(opcionSeleccionada)`**: Verifica si la respuesta seleccionada es correcta y actualiza el puntaje.
- **`mostrarResultados()`**: Muestra el puntaje final y un mensaje de felicitación o sugerencia para seguir practicando.
- **`reiniciarJuego()`**: Reinicia el juego, permitiendo al jugador comenzar de nuevo.

## Sonidos

El juego utiliza sonidos para mejorar la interacción:
- **`mouse-click-290204.mp3`**: Sonido de clic para las respuestas.
- **`kids-upbeat-274398.mp3`**: Sonido de felicitación al completar el juego.

## Personalización

Puedes modificar las preguntas y respuestas fácilmente en el archivo JavaScript, ajustando las preguntas dentro del arreglo `preguntas` para cada nivel de dificultad. También puedes cambiar los sonidos y las imágenes asociadas a cada pregunta.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, por favor sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una nueva rama (`git checkout -b nueva-rama`).
3. Realiza tus cambios y haz commit de ellos (`git commit -am 'Descripción de cambios'`).
4. Empuja tus cambios a tu fork (`git push origin nueva-rama`).
5. Abre un Pull Request en el repositorio original.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

---

¡Diviértete jugando y aprendiendo! 🎮
