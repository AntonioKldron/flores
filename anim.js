// Reloj interno para sincronizar las letras sin audio
var timeCount = 0;
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hola mi Pao 💛", time: 0 },
  { text: "Hoy el mundo cumple 25 años de tenerte en él ✨", time: 6 },
  { text: "Y yo celebro que la vida me haya llevado hasta ti 🥹", time: 13 },
  { text: "Desde que llegaste, todo tiene más sentido", time: 20 },
  { text: "Más luz, más calma, más ilusión ☀️", time: 27 },
  { text: "Contigo entendí que amar no es solo sentir…", time: 35 },
  { text: "Es decidir, cuidar, escuchar y quedarte 🤍", time: 42 },
  { text: "Gracias por tu dulzura, por tu risa y tu mirada", time: 50 },
  { text: "Por ser mi paz y también mi emoción favorita 💫", time: 58 },
  { text: "Me haces sentir mariposas incluso en los días normales 🦋", time: 66 },
  { text: "Y contigo quiero escribir cada capítulo de mi vida 📖", time: 74 },
  { text: "Con paciencia, con respeto y con amor verdadero", time: 82 },
  { text: "Que este nuevo año te regale sueños cumplidos", time: 90 },
  { text: "Metas logradas y muchos momentos felices 🎉", time: 98 },
  { text: "Y si me lo permites…", time: 106 },
  { text: "Quiero seguir siendo quien camine a tu lado 🤍", time: 112 },
  { text: "Quien te abrace en los días difíciles", time: 120 },
  { text: "Y quien celebre cada una de tus victorias 🥂", time: 128 },
  { text: "Feliz cumpleaños 25, mi niña hermosa 🎂✨", time: 136 },
  { text: "Te quiero más de lo que las palabras pueden explicar 💕", time: 144 }
];
// Animar las letras
function updateLyrics() {
  timeCount += 1; // Avanza 1 segundo cada ciclo

  var currentLine = lyricsData.find(
    (line) => timeCount >= line.time && timeCount < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1;
    var opacity = Math.min(1, (timeCount - currentLine.time) / fadeInDuration);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Ejecutar cada segundo (1000 ms)
setInterval(updateLyrics, 1000);

// Función para ocultar el título después de un tiempo
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if(titulo) {
      titulo.style.animation = "fadeOut 3s ease-in-out forwards";
      setTimeout(function () {
        titulo.style.display = "none";
      }, 3000);
  }
}

// Llama a la función después de 216 segundos
setTimeout(ocultarTitulo, 216000);