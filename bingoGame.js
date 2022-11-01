let bombo = 0;
let user = "";
let carta = [];
let turnos = 0; 
let isBingo = false;
let puntuation = 1000;
let matches = 0; 

const wellcome = () =>{
    user = prompt(`Hola! Por favor introduce tu nombre`)
    while (user === null || user === undefined || user.match(/\d+/) || user === "") {
        alert("Debes introducir un nombre válido")
        user = prompt("Introduce tu nombre.")
    }
    return alert(`Saludos ${user}!`)
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
        turnos ++;
        puntuation -= 25;
        console.log(`turnos realizados: ${turnos} y tu puntuacion es: ${puntuation}`)
        bingo();
    } else {
    alert("Gracias por jugar!")
    return;
    }
}

const bingoWin = () =>{
    if(matches === 15){
        debugger;
        alert(`Bingo!`);
        isBingo = true;

        return isBingo;
    }
}

const endBingoCard = () =>{
     console.log(`Has completado tu cartón en ${turnos} turnos, felicidades!`)
     console.log(`Gracias por jugar ${user}!`)
     return 
}

const initGame = () =>{
    while (!isBingo) {
        wellcome();
        bingoCard(1,16);
        bingo();
        
    }
}

const bingo = () => {
   /*  do{
        linea();
        bomboRandom();
        númeroMatch();
    }
    while (isBingo === false){
        fincarton();
    } 
     */


}

initGame();





// DANI BORRAR

// const matrix = Array(5).fill().map(() => new Array(4).fill(0));

