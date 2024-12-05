function concatStrings(a, b) {
    return a + b;
}

function isString(value) {
    return typeof value === 'string';
}

function identifySign(num) {
    if (num > 0) {
        return 'Положительное число';
    } else if (num < 0) {
        return 'Отрицательное число';
    } else {
        return 'Ноль';
    }
}

function reverseWords(text) {
    return text.split(' ').reverse().join(' ');
}

function wordsCount(text) {
    if (!text.trim()) return 0;
    return text.split(/\s+/).length;
}

export { concatStrings, isString, identifySign, reverseWords, wordsCount };
