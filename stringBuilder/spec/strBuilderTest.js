describe("StringBuilder Module: ", function() {
    let stringBuilder = require("../lib/strBuilder");
    let str;

  //This will be called before running each spec
  beforeEach(function() {
      str = new stringBuilder();
  });

  describe("The function", function(){

      //Spec for method chaining
      it("should support chaining methods", function() {
        str.put('First').insert(1,'trial').put('food').insert(0,'new');
        expect(str.build()).toEqual('new First trial food')
      });

      //Spec for put function
      it("put() should add a new string to the end of a string", function() {
           str.put('First');
         expect(str.build()).toEqual('First');
      });

      //Spec for insert function at a particular index
      it("insert() should insert a string at a particular index", function() {
        str.put('First').insert(1,'trial').put('food').put('added').insert(5,'just added');
        str.insert(1,'inserted')
        expect (str.build()).toEqual('First inserted trial food added just added');
      });

      //Spec for insert function with negative index
      it("insert() should throw an error when index is negative", function() {
        str.put('First').insert(1,'trial').put('food').put('added').insert(5,'just added');
        expect(function(){str.insert(-2,'Firsttrow')}).toThrowError(Error, 'impossible index');
      });

      //Spec for insert function at the end of a string
      it("insert() should append a string to the end if index is beyond", function() {
        str.put('First').put('trial').put('food')
        str.insert(6,'Good')
        expect(str.build()).toEqual('First trial food Good');
      });

      //Spec for empty function
      it("empty() should empty the entire string", function() {
        str.put('First').put('trial').put('food')
        str.empty()
        expect(str.build()).toEqual('empty string');
      });

      //Spec for isEmpty function
      it("isEmpty() should check if string is empty", function() {
        str.put('');
        expect(str.build()).toEqual('empty string')
      });

      //Spec for build function
      it("build() should return the built string", function() {
        str.put('First').insert(1,'trial').put('food').insert(0,'new');
          expect(str.build()).toEqual('new First trial food');
      });

  });
  });
