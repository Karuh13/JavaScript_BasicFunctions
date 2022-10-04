/* Crea una función que nos devuelva el número de veces que se repite
cada una de las palabras que lo conforma. Puedes usar este array para
probar tu función: */

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
function repeatCounter(arr) {
    repetObj = {}
    for (let i = 0; i < arr.length; i++) {
        if (repetObj[arr[i]] == undefined) {
            repetObj[arr[i]] = 1;
        } else {
            repetObj[arr[i]] += 1;
        }
    }

    return repetObj
}

console.log(repeatCounter(counterWords));