const pizzUni = require('../pizza-place');
const {assert, expect} = require('chai');

describe('pizza place tests', function() {
    describe('makeAnOrder tests', function() {

        it('Should return message when pizza is ordered', ()=>{
            let order = {
                orderedPizza: 'Special'
            }
            expect(pizzUni.makeAnOrder(order)).to.equal('You just ordered Special')
        });

        it('Should return message when pizza is ordered', ()=>{
            let order = {
                orderedPizza: 'Special',
                orderedDrink: 'Coca-Cola'
            }
            expect(pizzUni.makeAnOrder(order)).to.equal('You just ordered Special and Coca-Cola.')
        });

        it('Should throw when there is not ordered pizza', ()=>{
            let order = {};
            expect( () => pizzUni.makeAnOrder(oreder).to.throw());
        });

        it('Should throw when there is not ordered pizza but there is ordered drink', ()=>{
            let order = {
                orderedDrink: 'Coca-Cola'
            }
            expect( () => pizzUni.makeAnOrder(oreder).to.throw());
        });

        it('Should throw when there is not order', ()=>{
            expect( () => pizzUni.makeAnOrder().to.throw());
        });

    });


    describe('getRemainingWork tests', function() {
        it('Should return message that sign all pizzas are ready(case: one pizza)', ()=>{
            let statusArr = [
                {pizzaName: 'Special', status:'ready'},
            ];
            expect(pizzUni.getRemainingWork(statusArr)).to.equal('All orders are complete!');
        });

        it('Should return message that sign all pizzas are ready(case: two pizzas)', ()=>{
            let statusArr = [
                {pizzaName: 'Special', status:'ready'},
                {pizzaName: 'Greek', status:'ready'},
            ];
            expect(pizzUni.getRemainingWork(statusArr)).to.equal('All orders are complete!');
        });

        it('Should return message that sign Greek pizza is not ready', ()=>{
            let statusArr = [
                {pizzaName: 'Special', status:'ready'},
                {pizzaName: 'Greek', status:'preparing'},
            ];
            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`The following pizzas are still preparing: Greek.`);
        });

        it('Should return message that sign Greek,Margarita pizza is not ready', ()=>{
            let statusArr = [
                {pizzaName: 'Special', status:'ready'},
                {pizzaName: 'Greek', status:'preparing'},
                {pizzaName: 'Margarita', status:'preparing'},
            ];
            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`The following pizzas are still preparing: Greek, Margarita.`);
        });
    });


    describe('orderType tests', function() {
        it('Should return total sum when typeOfOrder is Delivery', ()=>{
            let totalSum = 10;
            let typeOfOrder = 'Delivery';
            expect(pizzUni.orderType(totalSum, typeOfOrder)).to.equal(totalSum);
        });

        it('Should return total sum when typeOfOrder is Carry Out', ()=>{
            let totalSum = 10;
            let typeOfOrder = 'Carry Out';
            expect(pizzUni.orderType(totalSum, typeOfOrder)).to.be.equal(9);
        });
    });

});
