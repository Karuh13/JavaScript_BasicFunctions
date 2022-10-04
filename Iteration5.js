/* Crea una función que reciba por parámetro un array y cuando es un valor number
 lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar
 este array para probar tu función: */

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(arr) {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) == "string") {
            sum += arr[i].length

        } else {
            sum += arr[i]
        }
    }

    return sum
}

console.log(averageWord(mixedElements));