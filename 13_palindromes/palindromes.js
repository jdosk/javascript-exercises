const palindromes = function (word) {
    const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reverseWord = cleaned.split("").reverse().join("");
    return cleaned === reverseWord;
};

// Do not edit below this line
module.exports = palindromes;
