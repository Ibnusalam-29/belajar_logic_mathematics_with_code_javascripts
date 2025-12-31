//Menjumlahkan semua data di dalam array 

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum = 0;

sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);