const city = require('./pcaa')
const { writeFile } = require('./utils');
let syd = {}
function changJson() {
    for (const citykey in city) {
        for (const key in city[citykey]) {
            if (!Object.hasOwnProperty.call(syd, key)) {
                syd[key] = city[citykey][key]
            }
        }
    }
}
changJson()
// console.log(syd);
writeFile('SYD.json', syd)