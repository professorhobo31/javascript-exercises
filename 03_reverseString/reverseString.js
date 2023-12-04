const reverseString = function(string) {
    const array = string.split('');
    array.reverse();
    let text = ""
    for (i=0; i<array.length; i++) {
        text += array[i];
    }
    return text
};

// Do not edit below this line
module.exports = reverseString;
