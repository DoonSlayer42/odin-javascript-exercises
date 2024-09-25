const removeFromArray = function(array, ...toRemove) {
    let len = array.length;
    let newArray = [];
    for(let i = 0; i < len; i++) {
        let willInclude = true; // will include array[i] if this remains true
        for(const num of toRemove) {
            if(num === array[i]) {
                willInclude = false;
                break;
            }
        }
        if(willInclude) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
