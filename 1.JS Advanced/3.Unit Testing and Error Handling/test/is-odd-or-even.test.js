const isOddOrEven = require('../is-odd-or-even');
const assert = require('chai').assert;

describe('Test the isOddOrEven function', () => {
    it('Undefined input', () =>{
        let expectedOutput = undefined;
        let actualOutput = isOddOrEven('stringInput');
        assert.equal(actualOutput,expectedOutput);
    });

    // it('Message', () =>{
        
    // });

    // it('Message', () =>{
        
    // });
})
