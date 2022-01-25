function solve(input){
    let [columns, ...table] = input.map(splitLine);
    
    function convertIfNumber(x){
        return isNaN(x) ? x : Number(Number(x).toFixed(2));
    }

    function isEmptyString(x){
        return x !=="";
    }

    function splitLine(line){
        return line.split('|').filter(isEmptyString).map(x => x.trim()).map(convertIfNumber);
    }


    return JSON.stringify(table.map(entry => {
        return columns.reduce((acc, curr, index) =>{
            acc[curr] = entry[index];
            return acc;
        }, {})
    }))
}

console.log(solve(
    ['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));