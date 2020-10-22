module.exports = function reverse (n) {
   const str = String(Math.abs(n));
    let result = '';

    for (let i = str.length; i > 0; i--) {
        result += str[i - 1];
    }

    return Number(result);
}
