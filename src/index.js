module.exports = function reverse (n) {
    if (n < 0) return Number(String(n).split('').slice(1).reverse().join(''))
  return Number(String(n).split('').reverse().join(''))
}
