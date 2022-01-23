
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    const totalDigitsLow = numberOfDigits(low);
    const totalDigitsHigh = numberOfDigits(high);
    const resultSequentialDigits = [];

    for (let numberOfDigits = totalDigitsLow; numberOfDigits <= totalDigitsHigh; numberOfDigits++) {
        calculateSequentialDigits(numberOfDigits, low, high, resultSequentialDigits);
    }
    return resultSequentialDigits;
};

/**
 * @param {number} numberOfDigits
 * @param {number} low
 * @param {number} high
 * @param {number[]}resultSequentialDigits
 */
function calculateSequentialDigits(numberOfDigits, low, high, resultSequentialDigits) {

    let iterations = 9 - numberOfDigits + 1;
    let first_digit = 1;

    while (iterations-- > 0) {

        let integer = first_digit;
        let currentDigit = first_digit;
        let totalDigits = numberOfDigits - 1;

        while (totalDigits-- > 0) {
            currentDigit++;
            integer = integer * 10 + currentDigit;
        }

        if (integer > high) {
            break;
        }
        if (integer >= low) {
            resultSequentialDigits.push(integer);
        }
        first_digit++;
    }
}

/**
 * @param {number} integer
 * @return {number}
 */
function numberOfDigits(integer) {
    let count_digits = 0;
    while (integer > 0) {
        count_digits++;
        integer = Math.trunc(integer / 10);
    }
    return count_digits > 0 ? count_digits : 1;
}
