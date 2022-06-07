const getSumTwoMin = require('./index');

describe('correct results', () => {
    test("positive numbers", () => {
        const actual = getSumTwoMin([1,2,5,12,22,567,123125,6512,244,4,7]);
        const toBe = 3;

        expect(actual).toBe(toBe);
      });
    
    test("negative numbers", () => {
    const actual = getSumTwoMin([-1,-2,-5,-12,-22,-567,-123125,-6512,-244,-4,-7]);
    const toBe = -129637;

    expect(actual).toBe(toBe);
    });

    test("mixed numbers", () => {
    const actual = getSumTwoMin([-1,2,-5,-12,22,0,567,123125,6512,-244,4,-7]);
    const toBe = -256;

    expect(actual).toBe(toBe);
    });

});

describe('result when count array less 2', () => {

    const NOT_ENOUGH_ARGUMENT = 'array must contains two or more numbers';

    test("one count positive", () => {
        const actual = getSumTwoMin([1]);
        const expected = NOT_ENOUGH_ARGUMENT;

        expect(actual).toBe(expected);
  
    });

    test("one count negative", () => {
        const actual = getSumTwoMin([-1]);
        const expected = NOT_ENOUGH_ARGUMENT;

        expect(actual).toBe(expected);
    });

    test("one count zero", () => {
        const actual = getSumTwoMin([0]);
        const expected = NOT_ENOUGH_ARGUMENT;

        expect(actual).toBe(expected);
    });

    test("empty array", () => {
        const actual = getSumTwoMin([]);
        const expected = NOT_ENOUGH_ARGUMENT;

        expect(actual).toBe(expected);
    });
});

describe('variable type is not array', () => {

    const NOT_VARIBLE = 'variable is not array';

    test("argument is empty ", () => {
        const actual = getSumTwoMin();
        const expected = NOT_VARIBLE;

        expect(actual).toBe(expected);
    });
    test("argument is string", () => {
        const actual = getSumTwoMin(123);
        const expected = NOT_VARIBLE;

        expect(actual).toBe(expected);
    });
    test("argument is number", () => {
        const actual = getSumTwoMin(234);
        const expected = NOT_VARIBLE;

        expect(actual).toBe(expected);
    });
});

