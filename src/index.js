document.addEventListener('DOMContentLoaded', function () {
  M.AutoInit();
});
document.addEventListener('DOMContentLoaded', () => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel, {
    duration: 150,
    dist: -80,
    shift: 10,
    padding: 10,
    numVisible: 5,
    indicators: true,
    noWrap: false,
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// texto animado con typed
const typed = new Typed('.typed', {
  strings: [
    '<i>Sushi</i>',
    '<i>Teppanyaki</i>',
    '<i>Gyosas</i>',
    '<i>costillas de cerdo</i>',
    '<i>alitas</i>',
    '<i>sopas</i>',
    '<i>postres</i>',
    '<i>Platos al wok</i>',
  ],

  //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: false, // Mostrar cursor palpitanto
  cursorChar: '|', // Caracter para el cursor
  contentType: 'html', // 'html' o 'null' para texto sin formato
});
