const repeatString = function( data, repetition) {

    if(!Number.isInteger(repetition) ||  repetition < 0) {
        return "ERROR";
    }

    let result = '';
    for(let i=0; i<repetition; i++) {
        result = result + data;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
