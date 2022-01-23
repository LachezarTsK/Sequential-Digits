
import java.util.ArrayList;
import java.util.List;

public class Solution {

    public List<Integer> sequentialDigits(int low, int high) {

        int totalDigitsLow = numberOfDigits(low);
        int totalDigitsHigh = numberOfDigits(high);
        List<Integer> resultSequentialDigits = new ArrayList<>();

        for (int numberOfDigits = totalDigitsLow; numberOfDigits <= totalDigitsHigh; numberOfDigits++) {
            calculateSequentialDigits(numberOfDigits, low, high, resultSequentialDigits);
        }
        return resultSequentialDigits;
    }

    public void calculateSequentialDigits(int numberOfDigits, int low, int high, List<Integer> resultSequentialDigits) {

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
                resultSequentialDigits.add(integer);
            }
            first_digit++;
        }
    }

    public int numberOfDigits(int integer) {
        int count_digits = 0;
        while (integer > 0) {
            count_digits++;
            integer /= 10;
        }
        return count_digits > 0 ? count_digits : 1;
    }
}
