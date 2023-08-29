function A000124(n) {
  if (n == 0) {
    return 1;
  }
  return A000124(n - 1) + "-" + ((n * (n + 1)) / 2 + 1);
}

// Angka di soalnya menunjukan berapa banyak kali pemotongan pancake
function pancake(n) {
  return A000124(n - 1);
}

console.log(pancake(7));
//EXPECTED
//1, 2, 4, 7, 11, 16, 22
console.log(pancake(11));
//EXPECTED
//1, 2, 4, 7, 11, 16, 22, 29, 37, 46, 56
console.log(pancake(21));
//EXPECTED
//1, 2, 4, 7, 11, 16, 22, 29, 37, 46, 56, 67, 79, 92, 106, 121, 137, 154, 172, 191, 211
