describe ("My fizzBuzz function", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });
    
    describe ("Returns number, fizz, buzz or fizzbuzz", function() {
        // Specs are defined by calling the global Jasmine function it
        it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(fizzBuzz).toBeDefined();
        });
        
        it("should return fizz when called as fizzBuzz(9)", function() {
            var result = fizzBuzz(9)
            expect(result).toBe("Fizz");
        });
        
        it("should return buzz when called as fizzBuzz(5)", function() {
            var result = fizzBuzz(5)
            expect(result).toBe("Buzz");
        });
        
        it("should return fizzbuzz when called as fizzBuzz(15)", function() {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });
        
        it("should return number when called as fizzBuzz(2) as the number isnt divisible by 3 or 5", function() {
            var result = fizzBuzz(2)
            expect(result).toBe(2);
        });
        
    });
});