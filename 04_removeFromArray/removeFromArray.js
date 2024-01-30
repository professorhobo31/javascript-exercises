const removeFromArray = function(inputArray, input1 = "", input2 = "", input3 = "", input4 = "") {
var array = inputArray.filter((x) => x !== input1)
var array = array.filter((x) => x !== input2)
var array = array.filter((x) => x !== input3)
var array = array.filter((x) => x !== input4)
return array
}
// Do not edit below this line
module.exports = removeFromArray;