import {add, mult} from "./mathFunctions"

describe('Math Functions Tests', () => {
    it('should describe the math function of adding a number', () => {
        expect(add(1, 2)).toEqual(3);
    });
    it('should describe the math function of multiply a number', () => {
        expect(mult(2,3)).toEqual(6);
    });

});