let bombo = 0; let carta = []; let historialBombo = []
let isBingo = false, playBingo = false, nextTurn = false;
let user = "", puntuation = 1000, matches = 0, turns = 0;  

const leaderBoard = () =>{
    const board = new Map([["Maria", 500], ["Victor", 600], ["Roberto", 700], ["Anna", 800]])
    if (isBingo == true){board.set(user, puntuation)}
    const sortedLeaderBoard = new Map([...board].sort((a, b) => b[1] - a[1]));
    console.log("La tabla de puntuaciones queda de la siguiente manera: ") 
    return sortedLeaderBoard.forEach((value, key) => {console.log(`${key} => ${value} puntos!`)
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
    for (let i = 1; carta.length < 15; i++) {
        randomNum = getRandomNumber(1, 15)        
        if(carta.includes(randomNum)) { i--; randomNum = 0
        } else {carta.push(randomNum)} 
    }  
    alert(`Tu carta de juego es:\n ${getRows()} `) /* ${carta.join('  ')} */
    if(confirm("Quieres otro cartón de juego distinto?")){
        carta = [];
        return bingoCard(1,16)
    }
}

const getRows = () => { //funciona los arrays y enseña las filas, pero no funciona el switch :/
    const firstRow = new Array ( carta.slice(0, 5).join(" ")) ;
    const secondRow = new Array (carta.slice(5, 10).join(" "));
    const thirdRow = new Array (carta.slice(10, 15).join(" "));
    switch (isLineBingo) {
        case isLineBingo(firstRow):
                console.log(`Linea! primera fila`);
            break;
        case isLineBingo(secondRow):
                console.log(`Linea! segunda fila`);
            break;
        case isLineBingo(thirdRow):
                console.log(`Linea! tercera fila`);
            break;      
            default:
            break;
    }
    return [`${firstRow} \n ${secondRow} \n ${thirdRow}`];
}

const isLineBingo = (element) => { // no parece que acabe de funcionar 
    debugger;
    if (element.every(numcheck =>numcheck ==="X")){
        return true;
    }

}
function getRandomNumber(min, max){
     const number = Math.floor(Math.random() * (max - min +1)) + min;
     return number;
}

const bomboRandom = (min, max) =>{
    let pulledNumbers = 0
    do{
        pulledNumbers = getRandomNumber(1, 15);
        while (!historialBombo.includes(pulledNumbers)) {
        historialBombo.push(pulledNumbers)
        bombo = pulledNumbers;
        return alert (`Número sacado del bombo es: \n el ${pulledNumbers}`) 
        }
    }
    while (carta.length == 18)
}

const matchNumBombo = () =>{
    const index = carta.indexOf(bombo);
    
    carta.forEach(element => {
            if (element == bombo){
            carta[index] = "X"
            console.log(`Genial! El ${bombo} ésta en tu cartón de juego: \n ${getRows()}`) /* ${carta.join(' ')} */
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
    nextTurn = false
    return fareWell()
    }
}

const bingoWin = () =>{
    if(matches === 15){
        alert(`Bingo!`);
        isBingo = true;
        playBingo = false
        endBingoCard();
    }
}

const endBingoCard = () =>{
     console.log(`Genial ${user}, has completado tu cartón en ${turns} turnos, felicidades!`)
     console.log(leaderBoard())
     console.log(`Gracias por jugar ${user}!`)
     return 
}

const tutorialPuntuation = () =>{
  console.log(`La puntuación inicial es de ${puntuation} \n y por cada turno se irá restando 15puntos. \n el jugador con más puntuación, ganará.`)
}

const fareWell = () =>{
    let goodBye = `Adiós ${user}, gracias por jugar!`

    if (confirm("Confirma para salir")){
        playBingo = false
       return console.log(goodBye);
    } else{
        if (confirm("Reiniciar el juego?")){
            return initGame()
        }else {
            return console.log(goodBye); 
        }
    }

}
 
const initGame = () =>{
   wellcome();
   leaderBoard();
   switch (playBingo) {
    case true:
        tutorialPuntuation(), bingoCard(),bingo();
        break;
    case false:
        fareWell();
        break;
   }
}

const bingo = () =>{
   do{
       bomboRandom(), matchNumBombo(), bingoWin()  
    } while (nextTurn && !isBingo)   
}
initGame();