/**
 * File ini tidak perlu diubah.
 * Silahkan ubah file binary-search.js
 */

 const findIndex = require('./binary-search');

let koleksi = [1,4,9,12,24,31,44,49,50,56];
let kueri = 50;
let hasil = findIndex(koleksi, kueri)

console.log('Hasil: ', hasil);