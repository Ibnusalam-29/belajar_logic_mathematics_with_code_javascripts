//Menetukan deret Fibonacci hingga n (misal deret a, b, c dst, caranya a + b, b + c, c + d dst)

let n = 20;
let fib = [0, 1];

for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

console.log(fib);