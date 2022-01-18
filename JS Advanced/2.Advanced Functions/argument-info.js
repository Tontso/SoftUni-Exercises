function solve(){

    let argsType = {};

    for (const element of arguments) {
        const type = typeof element;
        console.log(`${type}: ${element}`);
        if(argsType[type] === undefined){
            argsType[type] = 0;
        }
        argsType[type]++;
    }

    return Object
    .entries(argsType)
    .sort((a,b) => b[1] - a[1])
    .forEach(e => console.log(`${e[0]} = ${e[1]}`));
}

solve('cat', 42, function () { console.log('Hello world!'); });