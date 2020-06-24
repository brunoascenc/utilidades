var mountains = ['Everest', 'Fish Tail', 'Annapurna'];
var mountainsJapan = ['Fuji'];

var allMountains =  [...mountains, ...mountainsJapan];
console.log(allMountains);

var day = {
    breakfast: 'toast with milk',
    lunch: 'rice with chicken curry'
}

var night = {
    dinner: 'FEIJOADA RS'
}

var eatGood = {...day, ...night}
console.log(eatGood);

// Rest
var rivers = ['Sullivan', 'Sunkoshi', 'Tiete'];
var [first, ...rest] = rivers

console.log(rest) // resto do array