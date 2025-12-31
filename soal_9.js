//Cek Bilangan Prima

let n = 13;
let prima = true;

for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) prima = false;
}
console.log(prima);
