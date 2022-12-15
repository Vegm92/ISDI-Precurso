import { questionPack } from "./questionPack";

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
          gameInfo.userName = prompt(wellcome)
        }
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
          ·Escribe "end" para finalizar la partida actual.`);
}

const confirmPlay= () => {
  gameInfo.userWannaPlay = confirm(`Quieres empezar a jugar ${gameInfo.userName}?`)
  return gameInfo.userWannaPlay
}

const shootQuestions = ()=> {
    for (const letter in questions) {
      if (gameInfo.actualTime + gameInfo.maxTime <= Date.now()){
        alert('EL TIEMPO HA TERMINADO!')
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