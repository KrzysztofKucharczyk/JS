'use strict';

var calculatorService = (function() {
    return {
        add: function(firstValue, secondValue) {
            if (isNaN(firstValue) || isNaN(secondValue))
                throw new Error("Illegal argument.");

            return (firstValue + secondValue);
        },
        substract: function(firstValue, secondValue) {
            if (isNaN(firstValue) || isNaN(secondValue))
                throw new Error("Illegal argument.");

            return (firstValue - secondValue);
        },
        multiply: function(firstValue, secondValue) {
            if (isNaN(firstValue) || isNaN(secondValue))
                throw new Error("Illegal argument.");

            return (firstValue * secondValue);
        },
        divide: function(firstValue, secondValue) {
            if (isNaN(firstValue) || isNaN(secondValue))
                throw new Error("Illegal argument.");

            return (firstValue / secondValue);
        },
        factorial: function(firstValue) {
            if (isNaN(firstValue) || firstValue < 0)
                throw new Error("Illegal argument.");

            var summed = 1;
            for (var i = 1; i <= firstValue; i++) {
                summed *= i;
            }
            return summed;
        }
    }
})();
