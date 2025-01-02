const removeFromArray = function(array, ...remove) {
    return array.filter(item => !remove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
