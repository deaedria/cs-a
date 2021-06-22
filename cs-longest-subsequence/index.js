/**
 * File ini tidak perlu diubah.
 * Silahkan ubah file longest-subsequence.js
 */

const LongestSubsequence = require('./longest-subsequence');

let data = [35,27,13,3,12,25,45];
let subsequence = new LongestSubsequence();
let hasil = subsequence.checkArray(data);

console.log('Hasil: ', hasil);