function sums (number) {
    let result = []
    for (let i = 1; i <= number; i++) {
        let temp = []
        let tempInt = 0
        let penambah = i

        while (tempInt !== number) {
            if (tempInt > number) {
                tempInt -= penambah 
                let index = temp.indexOf(penambah)
                temp.splice(index, 1)
                penambah--
            } else if (tempInt < number) {
                temp.push(penambah)
                tempInt += penambah
            }
            
            if (tempInt === number) result.push(temp)
        }
    }
    return result.length
}

console.log(sums(59));