const fs = require('fs')

// importing the data from server, in this case I use the json data given by Qlue stored in data.json in the root directory
const rawData = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))

// define the convertData function
function convertData (json) {
    let head = []
    let datas = []

    // I loop every properties and keys in the paramater array index 0 then push it into head temporary variable
    for (let keys in json[0]) head.push(keys)

    // take the corresponding data from every index of array and stored in in datas temporary variable
    for (let i = 0; i < json.length; i++) {
        let temp = []
        for (let keys in json[i]) temp.push(json[i][keys])
        datas.push(temp)
    }

    return {
        "h": head,
        "d": datas
    }
}


// calling out the function
console.log(convertData(rawData))