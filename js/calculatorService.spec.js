describe('Tests', function() {
    'use strict';

    describe("adding functionality", function() {
        it('should add two numbers', function() {
            var parameter1 = 9,
                parameter2 = 10,
                result;

            result = calculatorService.add(parameter1, parameter2);

            expect(result).toBe(19);
        });

        it('should throw error while adding when one is not a number', function() {
            var parameter1 = "Very nifty bad argument",
                parameter2 = 10,
                result;

            expect(function() {
                calculatorService.add(parameter1, parameter2)
            }).toThrow(new Error("Illegal argument."));
        });

        it('should throw error while adding when there is no arguments defined', function() {
            var parameter1,
                parameter2,
                result;

            expect(function() {
                calculatorService.add(parameter1, parameter2)
            }).toThrow(new Error("Illegal argument."));
        });
    });

    describe("substracting functionality", function() {
        it('should substract two numbers', function() {
            var parameter1 = 15,
                parameter2 = 10,
                result;

            result = calculatorService.substract(parameter1, parameter2);

            expect(result).toBe(5);
        });

        it('should throw error while substracting when one is not a number', function() {
            var parameter1 = "Very nifty bad argument",
                parameter2 = 10,
                result;

            expect(function() {
                calculatorService.substract(parameter1, parameter2)
            }).toThrow(new Error("Illegal argument."));
        });

        it('should throw error while substracting when there is  no arguments defined', function() {
            var parameter1,
                parameter2,
                result;

            expect(function() {
                calculatorService.substract(parameter1, parameter2)
            }).toThrow(new Error("Illegal argument."));
        });
    });

    describe("multiplying functionality", function() {
        it('should multiply two numbers', function() {
            var parameter1 = 9,
                parameter2 = 21,
                result;

            result = calculatorService.multiply(parameter1, parameter2);

            expect(result).toBe(189);
        });

        it('should throw error while multiplying when one is not a number', function() {
            var parameter1 = "Very nifty bad argument",
                parameter2 = 10,
                result;

            expect(function() {
                calculatorService.multiply(parameter1, parameter2)
            }).toThrow(new Error("Illegal argument."));
        });

        it('should throw error while multiplying when there is no arguments defined', function() {
            var parameter1,
                parameter2,
                result;

            expect(function() {
                calculatorService.multiply(parameter1, parameter2)
            }).toThrow(new Error("Illegal argument."));
        });
    });

    describe("dividing functionality", function() {
        it('should divide two numbers', function() {
            var parameter1 = 200,
                parameter2 = 5,
                result;

            result = calculatorService.divide(parameter1, parameter2);

            expect(result).toBe(40);
        });

        it('should throw error while dividing when one is not a number', function() {
            var parameter1 = "Very nifty bad argument",
                parameter2 = 10,
                result;

            expect(function() {
                calculatorService.divide(parameter1, parameter2)
            }).toThrow(new Error("Illegal argument."));
        });

        it('should throw error while dividing when there is no arguments defined', function() {
            var parameter1,
                parameter2,
                result;

            expect(function() {
                calculatorService.divide(parameter1, parameter2)
            }).toThrow(new Error("Illegal argument."));
        });
    });

    describe("factorial functionality", function() {
        it('should do a factorial', function() {
            var parameter1 = 10,
                result;

            result = calculatorService.factorial(parameter1);

            expect(result).toBe(3628800);
        });

        it('should do a factorial', function() {
            var parameter1 = 0,
                result;

            result = calculatorService.factorial(parameter1);

            expect(result).toBe(1);
        });

        it('should throw error while doing factorial when there is no number', function() {
            var parameter1 = "Very nifty bad argument",
                result;

            expect(function() {
                calculatorService.factorial(parameter1)
            }).toThrow(new Error("Illegal argument."));
        });

        it('should throw error while doing factorial when there is no argument', function() {
            var parameter1,
                result;

            expect(function() {
                calculatorService.factorial(parameter1)
            }).toThrow(new Error("Illegal argument."));
        });

        it('should throw error while doing factorial when there is a negative argument', function() {
            var parameter1 = -5,
                result;

            expect(function() {
                calculatorService.factorial(parameter1)
            }).toThrow(new Error("Illegal argument."));
        });
    });


});
