const sumAll = function(start, end) {
    if (typeof start == "number" && 
        Number.isInteger(start) && 
        start > 0 &&
        typeof end == "number" && 
        Number.isInteger(end) && 
        end > 0) {
        sumArray = [];
        if (start < end) {
            for (i = start; i <= end; i++) {
                sumArray.push(i);
            }
        } else {
            for (i = end; i <= start; i++) {
                sumArray.push(i);
            }
        }
        let sum = 0;
        for (let x of sumArray) {
            sum += x;
        }
        return sum;
    } else {
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = sumAll;
