// //CLASES

// class Car {
//     motor = true;
//     type;
//     color;
//     brand;

//     constructor(type, color, brand) {
//         this.type = type;
//         this.color = color;
//         this.brand = brand;
//         this.turnOn();
//     }

//     turnOn(){
//         alert(`Brrrr!!`)
//     }

//     destroyMotor(){
//         this.motor = false
//     }
// }

// const newCar = new Car(`4x4`, "blue", "Toyota");
// const bestCar = new Car(`sub`, "red", "Mercedes");
// const worstCar = new Car(`deportivo`, "green", "Seat");

// // const arrayCars = 

class Ruleta{
    word;
    alphabet = "abcdefghijklmnopqrstuvwzyz";
    worfToGuess = [];
    usedNumbers = [];
    rounds = 0;
    won = false;
    isPlaying = true;

    constructor( word = "ajedrez") {
        this.word = word
        alert(`Hello!`)
    }

    generatedWordsToGuess(){
        for (let i = 0; i < this.word.length; i++) {
            this.generatedWordsToGuess.push({letter: this.word[i], isGuessed: false})
    }

    getRandomLetter(){
        
    }
};


new Ruleta()