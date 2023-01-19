
module.exports = function towelSort (matrix) {
    let res = [];

    if (matrix === undefined) return res;

    if (matrix.length) {
        for (let i = 0; i < matrix.length; i++) {
            // strict order
            if (i % 2 === 0) {
                res.push(...matrix[i]);
            } else { // invert
                res.push(...matrix[i].sort((a, b) => b - a));
            }
        }
    }

    return res;
}
