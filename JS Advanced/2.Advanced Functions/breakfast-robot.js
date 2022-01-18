function solve(){

    const elements = {
        protein: 0,
        carb: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {

        apple : {
            carb : 1,
            flavour: 2,
            order: ['carb','flavour']
        },
        lemonade: {
            carb: 10,
            flavour: 20,
            order: ['carb', 'flavour']
        },
        burger: {
            carb: 5,
            fat: 7,
            flavour: 3,
            order: ['carb', 'fat', 'flavour']
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
            order: ['protein', 'fat', 'flavour']
        },
        turkey: {
            protein: 10,
            carb: 10,
            fat: 10,
            flavour: 10,
            order: ['protein', 'carb', 'fat', 'flavour']
        }
    }

    const operations = {
        restock,
        prepare,
        report
    }

    function restock(element, quantity){
            elements[element] += quantity;
            return 'Succsess';
    }

    function prepare(recipe ,quantity){
            const required = Object.assign({}, recipes[recipe]); 
            required.order.forEach(key =>  required[key] *= quantity);

            for(let element of required.order){
                if(elements[element]< required[element]){
                    return `Error: not enouth ${element} in stock`
                }
            }

            required.order.forEach(key =>  elements[key] -= required[key]);

            return 'Succsess'
    }

    function report(){
        return `protein=${elements.protein} carbohydrate=${elements.carb} fat=${elements.fat} flavour=${elements.flavour}`;
    }

    function manager( command){
        const tokens = command.split(' ');
        return operations[tokens[0]](tokens[1], Number(tokens[2]));

    }

    return manager;
}
 
let manager = solve(); 
console.log (manager ("restock flavour 50")); 
console.log (manager ("prepare lemonade 4")); 
    
    