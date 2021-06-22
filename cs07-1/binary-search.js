class BinarySearch {
    findIndex(koleksi, kueri) {
        let m = 0
        let n = koleksi.length - 1
        let d
        let result = -1

        while (m <= n) {
            d = Math.floor((m + n) / 2)
            
            if (koleksi[d] === kueri) {
                result = d
                return result
            }
            else if (koleksi[d] > kueri) {
                n = d - 1
            } else {
                m = d + 1
            }
        }
    }


}

module.exports = BinarySearch;