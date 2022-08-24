let resultados = [];
let promptNumbers = [];



const getNumbers = () => { //pide ingresar un numero hasta que el usuario añada un valor Null o 0
    let givenNumbers = [];
    let number;
    do{
        number =  Number(prompt ("Introduce los números a calcular. Para calcular la raíz cuadrada, añade un solo número."));
        if (isNaN(number)){
            alert("Error, introduce únicamente números")
            return getNumbers();
        }
        if (givenNumbers.length < 1 && number === 0) {
             alert("Introduce almenos un número");
            return getNumbers();
            }
            if(number !== 0){ //evita pushear 0 cuando +prompt traduce Null a 0.
                givenNumbers.push(number);
            }
    }while (number !== 0)
    return givenNumbers;
}

const calcular = () => {
    let calculos = [];
debugger;
    if(promptNumbers.length < 2){
        const raizCuadrada = Math.sqrt(promptNumbers[0]);
        calculos.push(`Solo se calculará su raiz cuadrada: ${raizCuadrada.toFixed(3).replace(/[.,]000$/, "")}`);
        return calculos;
    } else {
     
    const suma = promptNumbers.reduce((sum, num) => sum + num);
    const resta = promptNumbers.reduce((rest, num) => rest - num);
    const multiplicación = promptNumbers.reduce((mult, num) => mult * num);
    const división = promptNumbers.reduce((div, num) => div / num); 
    
    calculos.push(`suma: ${suma.toFixed(3).replace(/[.,]000$/, "")}, resta: ${resta.toFixed(3).replace(/[.,]000$/, "")},
    multiplicación: ${multiplicación.toFixed(3).replace(/[.,]000$/, "")}, división: ${división.toFixed(3).replace(/[.,]000$/, "")}`); //replace cambia los decimales por un espacio si no se usan
    return calculos;   
        
    }
}
const reCalcular = () => {
    if(confirm("¿Quieres introducir nuevos números?")){
        return getNumbers();
    } 

}
const  mostrarResultados = () => {
    if(promptNumbers.length < 2){
        alert(`El número introducido es: ${promptNumbers}: ${resultados}`)
        
    }else {
        alert(`Los números introducidos són: ${promptNumbers}, y los calculos realizados: ${resultados}`)

    }
}


promptNumbers = getNumbers();
resultados = calcular();
mostrarResultados();
reCalcular();
