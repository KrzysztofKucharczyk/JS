'use strict';


var router = (function() {

    var homePage = document.getElementById('homePage'),
        calculatorPage = document.getElementById('calculator'),
        requestPage = document.getElementById('request');

    return {
        showHomePage: function() {
            homePage.style.display = 'block';
            requestPage.style.display = 'none';
            calculatorPage.style.display = 'none';
        },
        showCalculatorPage: function() {
            homePage.style.display = 'none';
            requestPage.style.display = 'none';
            calculatorPage.style.display = 'block';
        },
        showRequestPage: function() {
            homePage.style.display = 'none';
            requestPage.style.display = 'block';
            calculatorPage.style.display = 'none';
        }
    };

})();

//router.showHomePage();
