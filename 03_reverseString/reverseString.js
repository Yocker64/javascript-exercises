const reverseString = function(str) {

    let retVal = "";
    for (let index = 0; index < str.length; index++) {
        retVal += str.charAt(str.length - index -1);
    }
    return retVal;
};

// Do not edit below this line
module.exports = reverseString;
