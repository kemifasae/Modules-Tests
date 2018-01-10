describe("Testing the Quadratic Function", function() {
  let quad = require("../lib/quad");


    describe("Correct Values", function(){

        it("should return correct values for 1,4,3", function() {
            expect(quad(1,4,3)).toEqual([-1,-3]);
        });

        it("should return correct values for 2,1,-1", function() {
            expect(quad(2,1,-1)).toEqual([0.5,-1]);
        });

        it("should return correct values for 2,6,4", function() {
            expect(quad(2,6,4)).toEqual([-1,-2]);
        });
    });

    describe("Complex Values", function(){
        it("should throw an error for values for 8,4,2", function() {
            expect(function(){quad(8,4,2)}).toThrowError(Error, 'One or both result(s) is a complex no');
        });

        it("should return correct valus for 6,2,2", function() {
            expect(function(){quad(6,2,2)}).toThrowError(Error);
        });
    });

    describe("Alphabet Values or Non-numbers", function(){
        it("should throw an error for values for a,4,2", function() {
                expect(function(){quad(a,4,2)}).toThrowError(Error);
            });

        it("should return correct valus for 6,b,2", function() {
            expect(function(){quad(6,b,2)}).toThrowError(Error);
        });

        it("should return correct valus for 6,4,c", function() {
            expect(function(){quad(6,4,c)}).toThrowError(Error);
        });

        it("should return correct valus for 6,4,c", function() {
            expect(function(){quad(6,boot(),c)}).toThrowError(Error);
        });

        it("should return correct valus for 6,4,c", function() {
            expect(function(){quad('deed',4,2)}).toThrowError(Error);
        });
    });

    describe("zero Values", function(){
        it("should throw an error for values for 0,4,2", function() {
                expect(function(){quad(0,4,2)}).toThrowError(Error);
        });

        it("should return correct valus for 6,0,2", function() {
            expect(function(){quad(6,0,2)}).toThrowError(Error);
        });
    });
});
