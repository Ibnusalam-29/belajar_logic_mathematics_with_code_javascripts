//Menetukan bilangan prima atau bukan

let angka = 29;
let isPrime = true;

if (angka <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(angka); i++) {
        if (angka % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? `${angka} adalah bilangan prima` : `${angka} bukan bilangan prima`);
