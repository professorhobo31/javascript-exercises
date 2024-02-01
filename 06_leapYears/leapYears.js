const leapYears = function(year) {
    if (typeof year !== "number") {
        return "ERROR"
    }
    else if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true   //century but div by 400 is LY
            }
            else {
                return false   //centuries are not LYs
            }
        }
        else {
            return true   //div by 4 not century is LY
        }
    }
    else {
        return false   //not div 4 not LY
    }
};

// Do not edit below this line
module.exports = leapYears;
