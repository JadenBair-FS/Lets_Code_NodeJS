const {addition, subtraction, multiply, divide, sqRoot, max} = require("./math")


describe("Testing the math module", () =>{
    test("should add two numbers", ()=>{
        expect(addition(1,2)).toBe(3);
    });
    test("should subtract two numbers", ()=>{
        expect(subtraction(2,1)).toBe(1);
    });
    test("should multiply two numbers", ()=>{
        expect(multiply(2,5)).toBe(10);
    });
    test("should divide two numbers", ()=>{
        expect(divide(10,2)).toBe(5);
    });
    test("should find the square root of a number", () =>{
        expect(sqRoot(4)).toBe(2);
    });
    test("should find the max of two numbers", ()=>{
        expect(max(10,20)).toBe(20);
    })
})