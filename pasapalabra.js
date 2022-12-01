const questionPack = [
    [
  {letter: "a", answer: "abducir", status: 0, question: "CON LA A.\n Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",},
  {letter: "b", answer: "bingo", status: 0, question: "CON LA B.\n Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",},
  {letter: "c", answer: "churumbel", status: 0, question: "CON LA C.\n Niño, crío, bebé",},
  {letter: "d", answer: "diarrea", status: 0, question: "CON LA D.\n Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",},
  {letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E.\n Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",},
  {letter: "f", answer: "facil", status: 0, question: "CON LA F.\n Que no requiere gran esfuerzo, capacidad o dificultad",},
  {letter: "g", answer: "galaxia", status: 0, question: "CON LA G.\n Conjunto enorme de estrellas, polvo interestelar, gases y partículas",},
  {letter: "h", answer: "harakiri", status: 0, question: "CON LA H.\n Suicidio ritual japonés por desentrañamiento",},
  {letter: "i", answer: "iglesia", status: 0, question: "CON LA I.\n Templo cristiano",},
  {letter: "j", answer: "jabali", status: 0, question: "CON LA J.\n Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",},
  {letter: "k", answer: "kamikaze", status: 0, question: "CON LA K.\n Persona que se juega la vida realizando una acción temeraria",},
  {letter: "l", answer: "licantropo", status: 0, question: "CON LA L.\n Hombre lobo",},
  {letter: "m", answer: "misantropo", status: 0, question: "CON LA M.\n Persona que huye del trato con otras personas o siente gran aversión hacia ellas",},
  {letter: "n", answer: "necedad", status: 0, question: "CON LA N.\n Demostración de poca inteligencia",},
  {letter: "ñ", answer: "senal", status: 0, question: "CONTIENE LA Ñ.\n Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",},
  {letter: "o", answer: "orco", status: 0, question: "CON LA O.\n Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",},
  {letter: "p", answer: "protoss", status: 0, question: "CON LA P.\n Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",},
  {letter: "q", answer: "queso", status: 0, question: "CON LA Q.\n Producto obtenido por la maduración de la cuajada de la leche",},
  {letter: "r", answer: "raton", status: 0, question: "CON LA R.\n Roedor" },
  {letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S.\n Comunidad salvadora de todo desarrollador informático",},
  {letter: "t", answer: "terminator", status: 0, question: "CON LA T.\n Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",},
  {letter: "u", answer: "unamuno", status: 0, question: "CON LA U.\n Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",},
  {letter: "v", answer: "vikingos", status: 0, question: "CON LA V.\n Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",},
  {letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W.\n Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",},
  {letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X.\n Toxina bacteriana utilizada en cirujía estética",},
  {letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y.\n Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",},
  {letter: "z", answer: "zen", status: 0, question: "CON LA Z.\n Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",},
],
[
  {letter: "a", answer: "ahorrar", status: 0, question: "(Empieza por A)\n Guardar dinero como previsión para necesidades futuras "},
  {letter: "b", answer: "buscar", status: 0, question: "(Empieza por B)\n Acto anterior de encontrar algo a proposito",},
  {letter: "c", answer: "chorizo", status: 0, question: "(Empieza por C)\n Coloquialmente, ratero, ladronzuelo ",},
  {letter: "d", answer: "deportar", status: 0, question: "(Empieza por D)\n Desterrar a alguien de algún lugar, por lo regular extranjero, y confinarlo allí por razones políticas o como castigo  ",},
  {letter: "e", answer: "envoltorio", status: 0, question: "(Empieza por E)\n Capa exterior que cubre natural o artificialmente una cosa",},
  {letter: "f", answer: "frenar", status: 0, question: "(Empieza por F)\n Moderar o parar el movimiento de algo  ",},
  {letter: "g", answer: "grupo", status: 0, question: "(Empieza por G)\n Pluralidad de seres o cosas que forman un conjunto ",},
  {letter: "h", answer: "huelga", status: 0, question: "(Empieza por H)\n Interrupción colectiva de la actividad laboral por parte de los trabajadores con el fin de reivindicar ciertas condiciones o manifestar una protesta",},
  {letter: "i", answer: "indignar", status: 0, question: "(Empieza por I)\n Irritar, enfadar vehementemente a alguien ",},
  {letter: "j", answer: "jubilado", status: 0, question: "(Empieza por J)\n Persona que ha dejado de trabajar y percibe una pensión ",},
  {letter: "k", answer: "koala", status: 0, question: "(Empieza por K)\n Mamífero marsupial arborícola parecido a un oso pequeño, propio delos eucaliptales australianos ",},
  {letter: "l", answer: "liberar", status: 0, question: "(Empieza por L)\n Hacer que alguien o algo quede libre, eximir a alguien de una obligación ",},
  {letter: "m", answer: "manifestacion", status: 0, question: "(Empieza por M)\n Reunión pública, generalmente al aire libre, en la que los asistentes reclaman algo o expresan su protesta por algo",},
  {letter: "n", answer: "nacionalidad", status: 0, question: "(Empieza por N)\n Estado propio de la persona nacida o naturalizada en una nación",},
  {letter: "ñ", answer: "sonar", status: 0, question: "(Contiene la Ñ)\n Representarse en la fantasía imágenes o sucesos mientras se duerme ",},
  {letter: "o", answer: "organizacion", status: 0, question: "(Empieza por O)\n Asociación de personas regulada por un conjunto de normas en función de determinados fines",},
  {letter: "p", answer: "promover", status: 0, question: "(Empieza por P)\nIniciar o impulsar una idea o proyecto procurando su logro ",},
  {letter: "q", answer: "delinquir", status: 0, question: "(Contiene la Q)\n Cometer delito ",},
  {letter: "r", answer: "reciclar", status: 0, question: "(Empieza por R)\n Someter material usado a un proceso para que se pueda volver a utilizar" },
  {letter: "s", answer: "suprimir", status: 0, question: "(Empieza por S)\n Hacer cesar, hacer desaparecer, anular ",},
  {letter: "t", answer: "tasa", status: 0, question: "(Empieza por T)\n Tributo que se impone a la utilización de ciertos servicios, o al ejercicio de ciertas actividades ",},
  {letter: "u", answer: "urgencia", status: 0, question: "(Empieza por U)\n Necesidad o falta apremiante, inmediata obligación de hacer algo",},
  {letter: "v", answer: "vivienda", status: 0, question: "(Empieza por V)\n Lugar cerrado y cubierto construido para ser habitado por personas",},
  {letter: "w", answer: "whisky", status: 0, question: "(Empieza por W)\n Licor alcóholico que se obtiene del destilado del grano de algunas plantas ",},
  {letter: "x", answer: "exaltar", status: 0, question: "(Contiene la X)\n Avivar o aumentar un sentimiento o pasión, realzar el mérito o las cualidades de alguien",},
  {letter: "y", answer: "cayuco", status: 0, question: "(Contiene la Y)\n Embarcación india de una pieza, más pequeña que la canoa, con el fondo plano, que se gobierna con el canalete",},
  {letter: "z", answer: "zoologico", status: 0, question: "(Empieza por Z)\n Lugar en que se conservan, cuidan y crían diversas especies animales con fines didácticos o de entretenimiento",},
],
[
  {letter: "a", answer: "abducir", status: 0, question: "CON LA A.\n Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",},
  {letter: "b", answer: "bingo", status: 0, question: "CON LA B.\n Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",},
  {letter: "c", answer: "churumbel", status: 0, question: "CON LA C.\n Niño, crío, bebé",},
  {letter: "d", answer: "diarrea", status: 0, question: "CON LA D.\n Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",},
  {letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E.\n Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",},
  {letter: "f", answer: "facil", status: 0, question: "CON LA F.\n Que no requiere gran esfuerzo, capacidad o dificultad",},
  {letter: "g", answer: "galaxia", status: 0, question: "CON LA G.\n Conjunto enorme de estrellas, polvo interestelar, gases y partículas",},
  {letter: "h", answer: "harakiri", status: 0, question: "CON LA H.\n Suicidio ritual japonés por desentrañamiento",},
  {letter: "i", answer: "iglesia", status: 0, question: "CON LA I.\n Templo cristiano",},
  {letter: "j", answer: "jabali", status: 0, question: "CON LA J.\n Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",},
  {letter: "k", answer: "kamikaze", status: 0, question: "CON LA K.\n Persona que se juega la vida realizando una acción temeraria",},
  {letter: "l", answer: "licantropo", status: 0, question: "CON LA L.\n Hombre lobo",},
  {letter: "m", answer: "misantropo", status: 0, question: "CON LA M.\n Persona que huye del trato con otras personas o siente gran aversión hacia ellas",},
  {letter: "n", answer: "necedad", status: 0, question: "CON LA N.\n Demostración de poca inteligencia",},
  {letter: "ñ", answer: "senal", status: 0, question: "CONTIENE LA Ñ.\n Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",},
  {letter: "o", answer: "orco", status: 0, question: "CON LA O.\n Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",},
  {letter: "p", answer: "protoss", status: 0, question: "CON LA P.\n Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",},
  {letter: "q", answer: "queso", status: 0, question: "CON LA Q.\n Producto obtenido por la maduración de la cuajada de la leche",},
  {letter: "r", answer: "raton", status: 0, question: "CON LA R.\n Roedor" },
  {letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S.\n Comunidad salvadora de todo desarrollador informático",},
  {letter: "t", answer: "terminator", status: 0, question: "CON LA T.\n Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",},
  {letter: "u", answer: "unamuno", status: 0, question: "CON LA U.\n Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",},
  {letter: "v", answer: "vikingos", status: 0, question: "CON LA V.\n Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",},
  {letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W.\n Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",},
  {letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X.\n Toxina bacteriana utilizada en cirujía estética",},
  {letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y.\n Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",},
  {letter: "z", answer: "zen", status: 0, question: "CON LA Z.\n Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",},
]
]

let questions = questionPack[Math.floor(Math.random() * 3)]
const gameInfo = {
    userName : null,
    userAnswer : '',
    userPasapalabra : 0,
    userWannaPlay : true,
    wordPlaying : 0,
    wordsAnswered : 0,
    wordsTotal : questions.length,
    maxTime : 130000,
    ranking : [
      {player : 'Mark', score : 12},
      {player : 'Julia', score : 10},
    ],
    actualTime : null
}


const userName = () => { 
    const wellcome = `Hola! Bienvenido a Pasapalabra, porfavor introduce tu nombre`
    if (gameInfo.userWannaPlay == true){
          while(gameInfo.userName == '' || gameInfo.userName == null || gameInfo.userName == undefined){
          gameInfo.userName = prompt(wellcome)}
    alert(`usuario ${gameInfo.userName}`)
    return showRules();
    }
}

const showRules = () => {
  console.clear();
  alert(`Hola ${gameInfo.userName}, a continuación se te mostrará una definición de una palabra que deberás adivinar.
  \n-Cada acierto sumará un punto.\n-El tiempo maximo de la partida són ${gameInfo.maxTime/1000} segundos.\n
  -Cuando aparezcan las definiciones: 
          ·Escribe pasapalabra si no conoces la respuesta y quieres continuar con la siguiente.
          ·Escribe "END" para finalizar la partida actual.`);
}

const confirmPlay= () => {
  gameInfo.userWannaPlay = confirm(`Quieres empezar a jugar ${gameInfo.userName}?`)
  return gameInfo.userWannaPlay
}

const shootQuestions = ()=> {
    for (const letter in questions) {
      if (gameInfo.actualTime + gameInfo.maxTime <= Date.now()){
        alert('EL TIEMPO HA TERMINADO')
            gameInfo.userWannaPlay = false
            break;
      }
      if (questions[letter].status == 0){
        userAnswer();
        if (gameInfo.userAnswer === null || gameInfo.userAnswer == `end`){
          gameInfo.userWannaPlay = false;
          break;
        }
        answerManager()
      }
      if (gameInfo.wordsAnswered == gameInfo.wordsTotal){
        break;
        }
      }
}

const startGame = () => {
  gameTimer()
  while(gameInfo.userWannaPlay == true && gameInfo.wordsAnswered !=questions.length ){
      initRound()
  }
  rankingPlayer()
}

const gameTimer = () => {
  gameInfo.actualTime = Date.now()
}

const initRound = () => {
  for ( letter in questions ){
      if (gameInfo.actualTime + gameInfo.maxTime <= Date.now()){
          alert('TIME`S UP!!');
          gameInfo.userWannaPlay = false;
          break;
      };
      if(gameInfo.wordsAnswered == gameInfo.wordsTotal){
          break;
      };
      if(questions[letter].status == 0){
          userAnswer();
          if (gameInfo.userAnswer === null || gameInfo.userAnswer == 'end'){
              gameInfo.userWannaPlay = false;
              break;
          };
          answerManager();
      }
  }
}

const userAnswer = () => {
    gameInfo.userAnswer = prompt(`${questions[letter].question}`);
    if (gameInfo.userAnswer != null){
      gameInfo.userAnswer = cleanString(gameInfo.userAnswer);
  };
};

const answerManager = () => {
  if (gameInfo.userAnswer == `pasapalabra`){
    gameInfo.userPasapalabra +=1;
    alert(`Siguiente pregunta! \n
     ${gameInfo.wordsAnswered}/${gameInfo.wordsTotal} aciertos
     \n ${gameInfo.userPasapalabra} pasapalabras`)
  } else if (gameInfo.userAnswer == questions[letter].answer){
    questions[letter].status = "succes";
    gameInfo.wordsAnswered += 1;
    alert(`Correcto! ${gameInfo.wordsAnswered}/${gameInfo.wordsTotal} aciertos`); 
  } else {
    questions[letter].status = `fail`;
    gameInfo.wordsAnswered += 1; 
    alert(`Incorrecto, la respuesta correcta es: ${questions[letter].answer}`)
  }
}

const sortQuestions = () => {
  questions = questionPack[Math.floor(Math.random() * 3)];
  return gameInfo.wordsTotal = questions.length
}

const rankingPlayer = () => {
   let count = 0;
   for (letter in questions){
    if (questions[letter].status == `succes`){
      count +=1;
    };
    questions[letter].status = 0;
   }
   gameInfo.ranking.push({player : gameInfo.userName, score: count});
};

const rankingBoard = () => {
 console.clear();
 console.log("------------------------LEADERBOARD------------------------") 
 for (players in gameInfo.ranking){
    console.log(gameInfo.ranking[players]);
  }
}

const cleanString = (string) => {
  string = string.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,"");
  return string;
}

const fareWell = () => {
  return console.log(`Gracias por utilizar ésta app`);
}

const playAgain = () => {
 confirm(`Quieres volver al inicio?`) ?
  gameInfo.userWannaPlay = true : 
  alert(`Hasta la próxima!`)
}

const main = () => {
  do{
    userName()
    if(confirmPlay()== true){
        sortQuestions()
        startGame();
        rankingBoard();
    };
    playAgain();
    }while(gameInfo.userWannaPlay == true);
};

main()