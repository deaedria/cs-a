class Palindrome {
    checkWord(string) {
        let teks = string.toLowerCase(string);

        for(let i=0; i<=(teks.length/2); i++){
            if(teks[i] != teks[teks.length-i-1]){
                return false
            }
        }
        return true;
    }
}

module.exports = Palindrome;