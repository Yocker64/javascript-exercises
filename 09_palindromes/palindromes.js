const palindromes = function (str) {

    //First lowers all the uppercase letters, then it splits the string into an array and filters that array if it is a number or a letter from the English alphabet
    let onlyLetters = str.toLowerCase().split('').filter((item)=>{
        return (item.charCodeAt(0) > 96 && item.charCodeAt(0) < 123) || (item.charCodeAt(0) > 47 && item.charCodeAt(0) < 58);
    }).join('');
    let reverse = onlyLetters.split('').reverse().join('');
    return onlyLetters === reverse;

};

// Do not edit below this line
module.exports = palindromes;
