function fib(n) {
  if (n == 1) {
    return [0]
  }
  while (n > 2) {
    var rec = fib(n - 1)
    rec.push(rec[n - 2] + rec[n - 3])
    return rec
  }
  return [0, 1]
}
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(8))