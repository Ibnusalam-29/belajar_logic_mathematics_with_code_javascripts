//Hitung banyak huruf dalam sebuah kata

let kata = "javascript";
let jumlahHuruf = kata.length;

console.log(jumlahHuruf);

//Hitung banyak huruf dalam sebuah kalimat

let kalimat = "Saya belajar javascript";
let jumlahHurufKalimat = kalimat.replace(/ /g, "").length;

console.log(jumlahHurufKalimat);

//Hitung banyak huruf vokal dalam sebuah kalimat

let kalimatVokal = "Saya belajar javascript";
let vokal = kalimatVokal.match(/[aeiou]/gi);
let jumlahVokal = vokal ? vokal.length : 0;

console.log(jumlahVokal);

//Hitung banyak huruf konsonan dalam sebuah kalimat

let kalimatKonsonan = "Saya belajar javascript";
let konsonan = kalimatKonsonan.match(/[bcdfghjklmnpqrstvwxyz]/gi);
let jumlahKonsonan = konsonan ? konsonan.length : 0;

console.log(jumlahKonsonan);