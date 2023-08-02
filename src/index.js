module.exports = function reverse(n) {
    const reversed = parseInt(
        Math.abs(n).toString().split("").reverse().join("")
    );

    if (n < 0) {
        return reversed;
    } else {
        return reversed;
    }
};
