/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const priceCount = numbers.length;
    if (priceCount == 0) {
        return [];
    } else if (priceCount == 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[priceCount - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((numbers: number): number => numbers * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((str) => {
        const toInt = parseInt(str, 10);
        return isNaN(toInt) ? 0 : toInt;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((str) => {
        if (str.startsWith("$")) {
            str = str.substring(1);
        }
        const toNum = parseFloat(str);
        return isNaN(toNum) ? 0 : toNum;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    //remove strings with question marks
    messages = messages.filter(
        (message: string): boolean => !message.endsWith("?"),
    );
    //check for "!" and make uppercase
    return messages.map((message) =>
        message.endsWith("!") ? message.toUpperCase() : message,
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const allColors = colors.every(
        (color: string): boolean =>
            color == "red" || color == "blue" || color == "green",
    );
    return allColors;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    //check if array is empty
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce((total: number, num: number) => total + num, 0);
    const makeStr = addends.join("+");
    return `${sum}=${makeStr}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // check if there is a negative number
    const anyNeg = values.some((value: number): boolean => value < 0);
    //if true
    if (anyNeg) {
        const firstNeg = values.findIndex(
            (value: number): boolean => value < 0,
        );
        //get sum up to the negative
        const sum = values
            .slice(0, firstNeg === -1 ? values.length : firstNeg)
            .reduce((total, num) => total + num, 0);
        //add sum in after neg
        return [
            ...values.slice(0, firstNeg + 1),
            sum,
            ...values.slice(firstNeg + 1),
        ];
        //if no negative
    } else {
        //sum everything
        const sum = values.reduce(
            (total: number, num: number) => total + num,
            0,
        );
        //add sum to end
        return [...values, sum];
    }
}
