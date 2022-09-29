let result = [];
let promptNumbers = [];



const getNumbers = () => { 
    let givenNumbers = [];
    let number;
    do{
        number =  Number(prompt ("Añade número y pulsa aceptar para seguir añadiendo.\n Si solo añades un numero, se calculará la raiz cuadrada."));
        if (isNaN(number)){
            alert("Error, introduce únicamente números")
            return getNumbers();
        }
        if (givenNumbers.length < 1 && number === 0) {
             if(confirm("Introduce almenos un número. Si quieres salir pulsa cancelar.")){
                 return getNumbers();
             }else{ 
                despedida()
            }
            }
            if(number !== 0){ 
                givenNumbers.push(number);
            }
    }while (number !== 0)
    return givenNumbers;
}

const calcular = () => {
    let calculos = [];
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
    if(confirm("¿Quieres calcular de nuevo?")){
        return mainCalculator();
    } else {
        despedida();
    }

}
const  mostrarResultados = () => {
    debugger;

    do{
        if(promptNumbers.length < 2 && result.length > 1){
            alert(`El número introducido es: ${promptNumbers}: ${result}`)
            
        }
        if(promptNumbers.length > 1 && result.length > 1){

            alert(`Los números introducidos són: ${promptNumbers}, y los calculos realizados: ${result}`)
    
        }
    }
    while (result.length > 1) {
        
    }
    reCalcular();
}
const despedida = () =>{
   return alert(`Gracias por usar esta calculadora!`)
}

const mainCalculator = () =>{
    promptNumbers = getNumbers();
    result = calcular();
    mostrarResultados();
}
mainCalculator();
