var findAvg = [1,4,7];
let avg = 0;
function average(x) {
    for (i = 0; i < x.length; i++) {
        avg += x[i];
    } return avg / x.length;
}
console.log(average(findAvg));

// function av(array){
//     sum = 0;
//     array.forEach(element => {
//         sum += element;
//     });

//     return sum/array.length;
// }

// console.log(av(findAvg));