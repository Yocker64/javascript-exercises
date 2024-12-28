const repeatString = function(str, times) {
    let finalString = '';

    if (times<0) {
        return "ERROR";
    }else{
        for (let index = 0; index < times; index++) {
            finalString += str;
        }
        return finalString;
    }
    }
    

// Do not edit below this line
module.exports = repeatString;
