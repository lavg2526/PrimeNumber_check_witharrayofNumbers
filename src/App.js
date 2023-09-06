let number = [43, 51, 37, 4, 5];
let prime = [];

const checkPrime = (num) => {
  for (j = 0; j < num.length; j++) {
    console.log(num[j]);
    for (i = 2; i <= Math.sqrt(num[j]); i++) {
      console.log(i);
      if (num[j] % i !== 0) {
        console.log(num[j]);
        prime.push(num[j]);
      }
    }
  }
  let rdup = [...new Set(prime)];
  console.log(rdup);
  return rdup;
};
checkPrime(number);
