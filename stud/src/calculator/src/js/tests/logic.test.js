
const { calc } = require('../indexTest');

describe('test', () => {
    describe("Operations", function(){
        it("sum", function(){
            assert.equal(calc(5,10,"+"),15);
        });
        it("substraction", function(){
            assert.equal(calc(10,5,"-"),5);
        });
        it("division", function(){
            assert.equal(calc(70,5,"/"),14);
        });
        it("multiplication", function(){
            assert.equal(calc(7,5,"*"),35);
        });
    });
    describe("dot", function() {
        it("sum", function () {
            assert.equal(calc(10.2,0.8,"+"), 11);
        });
    });
    describe("ZeroDivide", function() {
        it("sum", function () {
            assert.equal(calc(5,0,"/"), Infinity);
        });
    });
})

