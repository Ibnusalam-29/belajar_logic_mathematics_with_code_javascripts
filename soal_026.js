//Menghitung Diskon dari sebuah harga

let hargaAwal = 200000;
let persentaseDiskon = 99;
let hargaAkhir = 0;

let diskon = (persentaseDiskon / 100) * hargaAwal;
hargaAkhir = hargaAwal - diskon;

console.log(hargaAkhir);