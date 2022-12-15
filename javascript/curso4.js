const words = [
    "doc",
    "cedo",
    "code",
    "codo",
    "déco",
    "doce",
    "cedro",
    "cerdo",
    "credo",
    "decor",
    "codero",
    "codeso",
    "deceso",
    "decoro",
    "deseco",
    "escodo",
    "recodo",
    "record",
    "récord",
    "cerdoso",
    "cocedor",
    "codorro",
    "cordero",
    "cosedor",
    "creedor",
    "cocedero",
    "corredor",
    "creedero",
    "decoroso",
    "descocer",
    "descoser",
    "corredero",
    "corroedor",
    "crecedero",
    "descorreo",
    "descorrer",
    "escorredor",
    "socorredor",
];

const gameLetters = ["c", "o", "d", "e", "r", "s"]
const requiredLetters = gameLetters[3]
const guessedWords = []

const askForNameAndGreeting = () => {
    const name = prompt("Hello, Welcome to ISDI. Please enter your name!")
    if (!name || !isNaN(name) ){
        askForNameAndGreeting();
    } else {
    console.log(`Hello! ${name}`);
    alert(`Hi ${name.toLowerCase()} the letters for this game are: ${gameLetters.join("-")} \n 
    the required letter is ${requiredLetters} \n
    lets start!`)
    console.log(`tus letras son: ${gameLetters.join("-")}`)
}
}; // añadir condicion de espacio

const askWords = () =>{
    const myWords = prompt(`Add a new word`)
    if (myWords === null || myWords === ""){
        return askWords();
    }  
    if (!isNaN(myWords)){
        return askWords()
    }
    return myWords;
}

const checkWords = (word, wordList) =>{
    if (!word.includes(requiredLetters)){
        alert(`Debes utilizar ${requiredLetters} obligatoriamente`)
        return
    }
    if (word.length < 3){
        alert(`Debes introducir una palabra de más de 3 letras!`)
        return
    }
    if (guessedWords.includes(word)){
        alert(`Palabra ya utilizada`)
        return
    } 
    if (!wordList.includes(word)){
        alert(`Error: ${word} no es correcta.`)
        return 
    } else {
        
    }
}

const game = () => {
    askForNameAndGreeting(); 
    askWords()
    checkWords("")
}

game()
