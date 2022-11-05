let bombo = 0;
let user = "";
let carta = [];
let turns = 0; 
let isBingo = false;
let playBingo = false;
let nextTurn = false;
let puntuation = 1000;
let matches = 0; 

const leaderBoard = () =>{
    const board = new Map([
        ["Maria", 500],
        ["Victor", 600],
        ["Roberto", 700],
        ["Anna", 800]
    ])
    const sortedLeaderBoard = new Map([...board].sort((a, b) => b[1] - a[1]));
    console.log("La tabla de puntuaciones queda de la siguiente manera: ")
    sortedLeaderBoard.forEach((value, key) => {
        console.log(`${key} => ${value} puntos!`)
      })

}

const wellcome = () =>{
    user = prompt(`Hola! Por favor introduce tu nombre`)
    while (user === null || user === undefined || user.match(/\d+/) || user === "") {
        alert("Debes introducir un nombre válido")
        user = prompt("Introduce tu nombre.")
    }
    alert(`Saludos ${user}!`)
    if (confirm("Quieres jugar al bingo?")){
        console.log("Iniciando bingo...");
        playBingo = true;
        return 
    } else {
        confirm("Quieres salir?")
        fareWell();
        return 
    }
     
}

const bingoCard = () =>{
    let randomNum = 0
    for (let i = 1; carta.length < 17; i++) {
        randomNum = getRandomNumber(1, 16)        
        if(carta.includes(randomNum)) { i--; randomNum = 0
        } else {
            carta.push(randomNum)
            if (i % 5 === 0){
                carta.push(" \n")
            }
        }
        
    }    
    console.log(carta)
    alert(`Tu carta de juego es:\n ${carta.join(' ')}`)
    if(confirm("Quieres otro cartón de juego distinto?")){
        carta = [];
        bingoCard(1,16)
        return
    }
}

function getRandomNumber(min, max){
     const number = Math.floor(Math.random() * (max - min +1)) + min;
     return number;
}

const bomboRandom = (min, max) =>{
    let pulledNumbers = [];
    do{
        bombo = getRandomNumber(1, 16);
        while (!pulledNumbers.includes(bombo)) {
        pulledNumbers.push(bombo)
        return alert (`Número sacado del bombo es: \n el ${bombo}`) 
        }
    }
    while (carta.length == 18){

        console.log("bye");
    }
}

const matchNumBombo = () =>{
    const index = carta.indexOf(bombo);
    
    carta.forEach(element => {
            if (element == bombo){
            carta[index] = "X"
            console.log(`Genial! El ${bombo} ésta en tu cartón de juego: \n ${carta.join(' ')}`)
            matches ++;

            if (carta.every(element =>{
                element === "X"
                return bingoWin();
            }));
            }
        if (index === -1){
            return console.log(`Lástima! \n el número ${bombo} no está en tu carta`)
            }
        });
       if(!isBingo){
           newTurn();    
    }
}

const newTurn = () =>{

    let seguir = confirm("¿Quieres sacar otra bola?")
    if (seguir){
        turns ++;
        puntuation -= 15;
        console.log(`turnos realizados: ${turns} y tu puntuacion es: ${puntuation}`)
        nextTurn = true;
    } else {
    alert("Gracias por jugar!")
    return;
    }
}

const bingoWin = () =>{
    if(matches === 15){
        alert(`Bingo!`);
        isBingo = true;
        board.set 

        return endBingoCard();
    }
}

const endBingoCard = () =>{
     console.log(`Genial ${user}, has completado tu cartón en ${turns} turnos, felicidades!`)
     console.log(`La tabla de clasificación queda de la siguiente manera: `)
     console.log(`Gracias por jugar ${user}!`)
     return 
}

const tutorialPuntuation = () =>{
    console.log(`La puntuación inicial es de ${puntuation} \n y por cada turno se irá restando 15puntos. \n el jugador con más puntuación, ganará.`)
}

const fareWell = () =>{
    let goodBye = alert("Adiós, gracias por jugar!")

    if (confirm("Confirma para salir")){
       return goodBye;
    } else{
        if (confirm("Reiniciar el juego?")){
            return initGame()
        }else {
            return goodBye; 
        }
    }

}

const initGame = () =>{
    debugger;
   wellcome();
   leaderBoard();
   switch (playBingo) {
    case true:
        tutorialPuntuation(),   bingoCard(), bingo()
        break;
    case false:
        fareWell();
    default: 
        leaderBoard();
        break;
   }
}

const bingo = () =>{
   do{
       bomboRandom(), matchNumBombo(), bingoWin()  
} while (nextTurn && !isBingo) {
    
}
   
}

initGame();





// DANI BORRAR

// const matrix = Array(5).fill().map(() => new Array(4).fill(0));

