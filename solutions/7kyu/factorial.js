function factorial(n) {
  let aux = 1;
  if (n < 0 || n > 12) {
    throw new RangeError("Parameter is not valid. Must be between 0 and 12.");
  } else {
    for (let i = 1; i <= n; i++) {
      aux *= i;
    }
  }
  return aux;
}

factorial(5);
