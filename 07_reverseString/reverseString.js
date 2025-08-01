const reverseString = function(string) {
    let arrayOne = string.split("");
    arrayOne.reverse();

    return arrayOne.join("");
};

// Do not edit below this line
module.exports = reverseString;
