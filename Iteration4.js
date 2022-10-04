/* Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += numbers[i]    
    }
     
    return sum / arr.length
}

console.log(average(numbers))