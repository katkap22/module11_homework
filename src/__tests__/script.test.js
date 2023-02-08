import {countDown} from "../script.js";

describe("test for countDown function", () => {
    const num = 5;
    const numFloat = 0.5;
    const numInvalid = -100;
    const str = "lskdfjsfl sdfsdf";
    const strEmpty = '';
    
    
    it("should work correctly with any type of input", () => {
        expect(countDown(num)).toEqual([5,4,3,2,1]);
        expect(countDown(numFloat)).toEqual([1]);
        expect(countDown(5/0)).toEqual("Введенные данные не корректны, введите целое чиcло больше 0");
        expect(countDown(Infinity)).toBe("Введенные данные не корректны, введите целое чиcло больше 0");
        expect(countDown(numInvalid)).toBe("Введенные данные не корректны, введите целое чиcло больше 0");
        expect(countDown(str)).toEqual("Введенные данные не корректны, введите целое чиcло больше 0");
        expect(countDown(strEmpty)).toEqual("Введенные данные не корректны, введите целое чиcло больше 0");
    });
});





