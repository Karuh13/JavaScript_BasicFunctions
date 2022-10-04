/* Completa la función que tomando un array de strings como argumento devuelva el más
largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero. */

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(arr) {
    let longest = "";
    arr.forEach(element => {
        if (element.length > longest.length) {
            longest = element
        }
    });

    return longest
}

console.log(findLongestWord(avengers));