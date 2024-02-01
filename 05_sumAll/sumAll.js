const sumAll = function(number1, number2) {
let sum = 0
    if (number1 < 0 || number2 < 0) {
        sum = "ERROR"
    }
    else if (typeof number1 !== "number" || typeof number2 !== "number"){
        sum = "ERROR"
    }
    else if (number1 < number2) {
        for (i = number1; i < number2 + 1; i++) {
            sum = sum + i;        
        }
    }
    else if (number2 < number1) {
        for (i = number2; i < number1 + 1; i++) {
            sum = sum + i;
        }
    }
    else {
        sum = 'ERROR'
    }
return sum
};

//sumAll(5,3)

// Do not edit below this line
module.exports = sumAll;
