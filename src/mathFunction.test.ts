import {add} from "./mathFunctions"

describe('Math Functions Tests', () => {
    it('should describe the math function of adding a number', () => {
        expect(add(1, 2)).toEqual(3);
    });

});