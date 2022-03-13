let fibStart = 0;
let fibHolder = 1;

const printFibonacci = (n) => {
  switch (n) {
    case 1:
      console.log(fibStart);
      break;
    case 2:
      console.log(fibStart);
      console.log(fibHolder);
      break;
    default:
      console.log(fibStart);
      console.log(fibHolder);
      for (i = 0; i < n - 2; i++) {
        let fib;
        fib = fibStart + fibHolder;
        fibStart = fibHolder;
        fibHolder = fib;
        console.log(fib);
      }
      break;
  }
};
printFibonacci(20);
