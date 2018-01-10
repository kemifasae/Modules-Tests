describe("Testing the Fibonacci Function", function() {
  let fibo = require("../lib/fib");

describe("Testing a fibonacci function", function(){

    //Spec to check for 0
    it("should return 1 for 0", function() {
        expect(fibo(0)).toEqual(1);
    });

    //Spec to check for empty argument
    it("should return error for an empty argument", function() {
        expect(function(){fibo()}).toThrowError(Error);
    });

    //Spec to check for argument not to be a string
    it("should return error for a non number", function() {
        expect(function(){fibo('food')}).toThrowError(Error);
    });

    //Spec to check for argument not to be an object
    it("should return error for a non number", function() {
        expect(function(){fibo(food())}).toThrowError(Error);
    });

    //Spec to check for a -ve no
    it("should return error for a -ve no", function() {
        expect(function(){fibo(-8)}).toThrowError(Error);
    });

    //Spec to check for a correct value
    it("should return 89 for 10", function() {
        expect(fibo(10)).toEqual(89);
    });

 });
 });
