//cek angka palindrome (angka yang jika dibalik tetap sama)

let angka = 12321;
let strAngka = angka.toString();
let reversedStrAngka = strAngka.split('').reverse().join('');

if (strAngka === reversedStrAngka) {
    console.log(angka + " adalah angka palindrome");
} else {
    console.log(angka + " bukan angka palindrome");
}