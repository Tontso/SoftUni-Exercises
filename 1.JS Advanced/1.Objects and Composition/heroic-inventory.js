function solve(input){
    result = [];
    while(input.length){
        let hero = input.shift();
        let [name, level, items] = hero.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        result.push({name, level, items})
    } 
    
    return JSON.stringify(result);
}

console.log(solve(
    ['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));