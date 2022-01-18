function solve(input, sortType){
    const sorting = {
        asc: (a,b) => (a - b),
        desc : (a, b) => (b - a),
    }
    return input.sort(sorting[sortType]);
}


console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));