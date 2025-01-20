const palindromes = function (str) {
    let splittedStr =str.toLowerCase().split('');
    console.log(splittedStr);
    
    let onlyLetters =  splittedStr.filter((item)=>{
        return (item.charCodeAt(0) > 96 && item.charCodeAt(0) < 123) || (item.charCodeAt(0) > 47 && item.charCodeAt(0) < 58);
    });
    let arrLen = onlyLetters.length;
    console.log(arrLen);
    
    for (let i = 0; i < arrLen; i++) {
        if ((onlyLetters[i] == onlyLetters[arrLen-i-1])) {
            continue;
        }else{
            return false;
        }
        
    }   
    console.log(onlyLetters);
    
    return true; 
};

// Do not edit below this line
module.exports = palindromes;
