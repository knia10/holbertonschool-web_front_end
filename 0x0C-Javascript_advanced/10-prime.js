function countPrimeNumbers() {
  let count = 0
  let prime;
  for (let i = 2; i <= 100; i++) {
    prime = true;
    let raiz = Math.sqrt(i);
    for (let j = 2; i <= raiz; j++) {
      if (i % j == 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      count += 1;
    }
  }
  console.log(count);
  return count;
}

let initcount = performance.now();
let time = 0
while (time < 100) {
  countPrimeNumbers();
  time++
}
let finishcount = performance.now();
console.log("Execution time of calculating prime numbers 100 times was " + (finishcount - initcount) + " milliseconds.");
