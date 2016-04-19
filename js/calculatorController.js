'use strict';

var calculatorController = (function() {
    return {
        addNumbers: function() {
            var firstValue = parseInt(document.getElementById('firstArgument').value),
                secondValue = parseInt(document.getElementById('secondArgument').value);
            document.getElementById('result').value = calculatorService.add(firstValue, secondValue);
        },
        substractNumbers: function() {
            var firstValue = parseInt(document.getElementById('firstArgument').value),
                secondValue = parseInt(document.getElementById('secondArgument').value);
            document.getElementById('result').value = calculatorService.substract(firstValue, secondValue);
        },
        multiplyNumbers: function() {
            var firstValue = parseInt(document.getElementById('firstArgument').value),
                secondValue = parseInt(document.getElementById('secondArgument').value);
            document.getElementById('result').value = calculatorService.multiply(firstValue, secondValue);
        },
        divideNumbers: function() {
            var firstValue = parseInt(document.getElementById('firstArgument').value),
                secondValue = parseInt(document.getElementById('secondArgument').value);
            document.getElementById('result').value = calculatorService.divide(firstValue, secondValue);
        },
        factorialFromNumber: function() {
            var firstValue = parseInt(document.getElementById('firstArgument').value);
            document.getElementById('result').value = calculatorService.factorial(firstValue);
        }
    }
})();
