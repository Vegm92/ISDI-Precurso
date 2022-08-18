//calculadora: 2 parametros, visualiza suma, resta, multiplicación y división.
// 3 decimales
let resultadoTotal =[];
function calculadora(num1,num2){
    let resultados = []; //store datos
    //check NAN
    if (isNaN(num1 * num2) || num1 === ' ' || num2 === ' ' || (num1 === '' && num2 === '')) { 
         return console.log("error, los datos introducidos no son números")
       }
    if (num1 === 0 ){
        let raizcua = Math.sqrt(num2);
        resultados.push(raizcua);
        console.log(`La raiz cuadrada de ${num2} es ${raizcua}`);
    }
    if (num2 === 0){
        let raizcua = Math.sqrt(num1);
        resultados.push(raizcua);
        console.log(`La raiz cuadrada de ${num1} es ${raizcua}`);
    }
    else{
    let suma = (num1 + num2);
    let resta = (num1 - num2);
    let multiplicación = (num1 * num2);
    let división = (num1 / num2).toFixed(3);
    resultados.push(`Los resultados obtenidos són: \n ${num1} + ${num2} = ${suma} \n ${num1} - ${num2} = ${resta}\n ${num1} * ${num2} = ${multiplicación}\n ${num1} / ${num2} = ${división}`);
    console.log(resultados)
    }
}
//ejemplo: 
calculadora(5,8)
/*
['Los resultados obtenidos són: 
 5 + 8 = 13 
 5 - 8 = -3
 5 * 8 = 40
 5 / 8 = 0.625']
 */
