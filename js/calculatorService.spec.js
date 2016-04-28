describe('Tests', function() {
    'use strict';

    describe('adding functionality', function() {
        it('should add two numbers', function() {
            // given
            var parameter1 = 9,
                parameter2 = 10,
                result;

            // when
            result = calculatorService.add(parameter1, parameter2);

            // then
            expect(result).toBe(19);
        });

        it('should throw error while adding when one is not a number', function() {
            // given
            var parameter1 = "Very nifty bad argument",
                parameter2 = 10,
                result;

            // when then
            expect(function() {
                calculatorService.add(parameter1, parameter2)
            }).toThrow(new Error("Illegal argument."));
        });

        it('should throw error while adding when there is no arguments defined', function() {
            // given
            var parameter1,
                parameter2,
                result;

            // when then
            expect(function() {
                calculatorService.add(parameter1, parameter2)
            }).toThrow(new Error("Illegal argument."));
        });
    });

    describe('substracting functionality', function() {
        it('should substract two numbers', function() {
            // given
            var parameter1 = 15,
                parameter2 = 10,
                result;

            // when
            result = calculatorService.substract(parameter1, parameter2);

            // then
            expect(result).toBe(5);
        });

        it('should throw error while substracting when one is not a number', function() {
            // given
            var parameter1 = "Very nifty bad argument",
                parameter2 = 10,
                result;

            // when then
            expect(function() {
                calculatorService.substract(parameter1, parameter2)
            }).toThrow(new Error("Illegal argument."));
        });

        it('should throw error while substracting when there is  no arguments defined', function() {
            // given
            var parameter1,
                parameter2,
                result;

            // when then
            expect(function() {
                calculatorService.substract(parameter1, parameter2)
            }).toThrow(new Error("Illegal argument."));
        });
    });

    describe('multiplying functionality', function() {
        it('should multiply two numbers', function() {
            // given
            var parameter1 = 9,
                parameter2 = 21,
                result;

            // when
            result = calculatorService.multiply(parameter1, parameter2);

            // then
            expect(result).toBe(189);
        });

        it('should throw error while multiplying when one is not a number', function() {
            // given
            var parameter1 = "Very nifty bad argument",
                parameter2 = 10,
                result;

            // when then
            expect(function() {
                calculatorService.multiply(parameter1, parameter2)
            }).toThrow(new Error("Illegal argument."));
        });

        it('should throw error while multiplying when there is no arguments defined', function() {
            // given
            var parameter1,
                parameter2,
                result;

            // when then
            expect(function() {
                calculatorService.multiply(parameter1, parameter2)
            }).toThrow(new Error("Illegal argument."));
        });
    });

    describe('dividing functionality', function() {
        it('should divide two numbers', function() {
            // given
            var parameter1 = 200,
                parameter2 = 5,
                result;

            // when
            result = calculatorService.divide(parameter1, parameter2);

            // then
            expect(result).toBe(40);
        });

        it('should throw error while dividing when one is not a number', function() {
            // given
            var parameter1 = "Very nifty bad argument",
                parameter2 = 10,
                result;

            // when then
            expect(function() {
                calculatorService.divide(parameter1, parameter2)
            }).toThrow(new Error("Illegal argument."));
        });

        it('should throw error while dividing when there is no arguments defined', function() {
            // given
            var parameter1,
                parameter2,
                result;

            // when then
            expect(function() {
                calculatorService.divide(parameter1, parameter2)
            }).toThrow(new Error("Illegal argument."));
        });
    });

    describe('factorial functionality', function() {
        it('should do a factorial', function() {
            // given
            var parameter1 = 10,
                result;

            // when
            result = calculatorService.factorial(parameter1);

            // then
            expect(result).toBe(3628800);
        });

        it('should do a factorial', function() {
            // given
            var parameter1 = 0,
                result;

            // when
            result = calculatorService.factorial(parameter1);

            // then
            expect(result).toBe(1);
        });

        it('should throw error while doing factorial when there is no number', function() {
            // given
            var parameter1 = "Very nifty bad argument",
                result;

            // when then
            expect(function() {
                calculatorService.factorial(parameter1)
            }).toThrow(new Error("Illegal argument."));
        });

        it('should throw error while doing factorial when there is no argument', function() {
            // given
            var parameter1,
                result;

            // when then
            expect(function() {
                calculatorService.factorial(parameter1)
            }).toThrow(new Error("Illegal argument."));
        });

        it('should throw error while doing factorial when there is a negative argument', function() {
            // given
            var parameter1 = -5,
                result;

            // when then
            expect(function() {
                calculatorService.factorial(parameter1)
            }).toThrow(new Error("Illegal argument."));
        });
    });


});
