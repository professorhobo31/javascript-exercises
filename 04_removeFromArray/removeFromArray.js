const removeFromArray = function(inputArray, number = "", number2 = "", number3 = "") {
    if (number2 == "") {
        const arrayLength = inputArray.length
        // array.splice(number - 1, 1)
        delete inputArray[number - 1]
        let array = inputArray.filter(Boolean)
        return array
    }
    if (number3 == "") {
        // const arrayLength = inputArray.length
        // array.splice(number - 1, 1)
        // array.splice(number2 - 1, 1)
        delete inputArray[number - 1]
        delete inputArray[number2 - 1]
        let array = inputArray.filter(Boolean)
        return array
    }

};

// Do not edit below this line
module.exports = removeFromArray;
