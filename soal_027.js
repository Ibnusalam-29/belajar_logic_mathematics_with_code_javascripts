//Menghitung total harga setelah pajak

let hargaAwal = 150000;
let persentasePajak = 40;
let hargaAkhir = 0;

let pajak = (persentasePajak / 100) * hargaAwal;
hargaAkhir = hargaAwal + pajak;

console.log(hargaAkhir);

//Menghitung total harga setelah belanja

let hargaBarang1 = 50000;
let hargaBarang2 = 75000;
let totalHarga = 0;

totalHarga = hargaBarang1 + hargaBarang2;

console.log(totalHarga);

//Menghitung total harga setelah belanja

let belanja = [20000, 35000, 15000, 40000];
let totalBelanja = 0;

totalBelanja = belanja.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(totalBelanja);