/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */

function sleep_in(weekday, vacation) {
    if (!weekday || vacation) {
        return true;
    }
    return false;
}

function string_times(str, num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += str;
    }

    return result;
}
