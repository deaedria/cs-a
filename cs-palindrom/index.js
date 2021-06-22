/**
 * File ini tidak perlu diubah.
 * Silahkan ubah file palindrome.js
 */

const Palindrome = require('./palindrome');

let string = 'malam';
let palindrome = new Palindrome();
let hasil = palindrome.checkWord(string);

console.log('Hasil: ', hasil);