const {upperCase, lowerCase} = require("./string")

describe("Testing the string module", ()=>{
    test("Should uppercase a string input", ()=>{ 
        expect(upperCase("bob")).toBe("BOB");
    });

    test("Should lowercase a sting input", ()=>{
        expect(lowerCase("BOB")).toBe("bob");
    })
});

