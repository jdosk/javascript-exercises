const fibonacci = function(num) {
    const arr = [];
    const number = Number(num);
    
    if (number < 0) {
        return "OOPS";
    } else if (number == 0) {
        return 0;
    }

    for (let i = 0; i < number; i++) {
        if (i < 2) {
            arr.push(1);
        } else {
            arr.push(arr[i - 2] + arr[i - 1]);
        }
    }

    return arr[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
