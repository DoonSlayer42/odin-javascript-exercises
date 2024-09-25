const repeatString = function(string, repetition) {
    if(repetition < 0) {
        return "ERROR";
    }
    let finalString = "";
    for(let i = 0; i < repetition; i++) {
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
