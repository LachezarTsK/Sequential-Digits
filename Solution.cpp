
#include<vector>
using namespace std;

class Solution {
    
public:

    vector<int> sequentialDigits(int low, int high) {
        int totalDigitsLow = numberOfDigits(low);
        int totalDigitsHigh = numberOfDigits(high);
        vector<int> resultSequentialDigits;

        for (int numberOfDigits = totalDigitsLow; numberOfDigits <= totalDigitsHigh; numberOfDigits++) {
            calculateSequentialDigits(numberOfDigits, low, high, resultSequentialDigits);
        }
        return resultSequentialDigits;
    }

    void calculateSequentialDigits(int numberOfDigits, int low, int high, vector<int>& resultSequentialDigits) {

        int iterations = 9 - numberOfDigits + 1;
        int first_digit = 1;

        while (iterations-- > 0) {

            int integer = first_digit;
            int currentDigit = first_digit;
            int totalDigits = numberOfDigits - 1;

            while (totalDigits-- > 0) {
                currentDigit++;
                integer = integer * 10 + currentDigit;
            }

            if (integer > high) {
                break;
            }
            if (integer >= low) {
                resultSequentialDigits.push_back(integer);
            }
            first_digit++;
        }
    }

    int numberOfDigits(int integer) {
        int count_digits = 0;
        while (integer > 0) {
            count_digits++;
            integer /= 10;
        }
        return count_digits > 0 ? count_digits : 1;
    }
};
