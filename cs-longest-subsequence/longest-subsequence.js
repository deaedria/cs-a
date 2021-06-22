class LongestSubsequence {
    checkArray(data) {
        let lengthNow = 1
        let longestNow = 1
        let start = 0
        let end = 0
        let result = []

        for(let i=0; i<data.length-1; i++){
            if(data[i] < data[i+1]){
                lengthNow += 1
                
                if(lengthNow > longestNow){
                    longestNow = lengthNow
                    start = i + 2 - lengthNow
                    end = i + 2
                }

            }else{
                lengthNow = 1
            }
        }

        for(let i=start; i<end; i++){
            result.push(data[i])
        }
        return result
    }
}

module.exports = LongestSubsequence;