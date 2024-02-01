const reverseString = function(string) {
    const array = string.split('');
    array.reverse();
    let text = ""
    for (i=0; i<array.length; i++) {
        text += array[i];
    }
    return text
};

reverseString("Pablito clavo un clavito")
