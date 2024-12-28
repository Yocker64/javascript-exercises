const sumAll = function(firstInput, secondInput) {

    if( firstInput < 0 || secondInput < 0){
        return 'ERROR'
    }
    if( typeof firstInput != "number" || typeof secondInput != "number"){
        return 'ERROR'
    }
    
    
    if (!(Number.isInteger(firstInput) && Number.isInteger(secondInput))) {
        return 'ERROR'
    }

    if (firstInput > secondInput) {
        num2 = firstInput;
        num1 = secondInput;
    }else{
        num1 = firstInput;
        num2 = secondInput;
    }


    const TIMES_TO_REPEAT = num2 - num1;
    const FIRST_NUMBER = num1;
    let sum = 0;
    for (let index = 0; index <= TIMES_TO_REPEAT; index++) {
        sum += FIRST_NUMBER + index;
    }
    console.log(typeof num1);
  
    console.log(typeof sum);
    console.log(sum);
       
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
