const removeFromArray = function() {
    
    const args = [...arguments];
    let array = args[0];
    let resultArray = [];
    let indexResult = 0;
    let copy = false;
    for (let indexArray = 0; indexArray < array.length; indexArray++) {
        for (let indexDel = 1; indexDel < arguments.length; indexDel++) {
            if (array[indexArray] === arguments[indexDel]) {
                copy = false;
                break;
            }
                copy = true;
        }
        if (copy == true) {
            resultArray[indexResult] = array[indexArray];
            indexResult ++;
        }
        
    }

    console.log(resultArray);
    console.log(arguments);
    console.log(array);
    
    
    
    
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
