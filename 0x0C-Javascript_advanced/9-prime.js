function countPrimeNumbers() {
  let count = 0
  let prime;
  for (let i = 2; i <= 100; i++){
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

let initcount = window.performance.now();
countPrimeNumbers();
let finishcount = window.performance.now();
console.log("Execution time of printing countPrimeNumbers was" + (finishcount - initcount) + "milliseconds.");
