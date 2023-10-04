// Timeout

const printNumber = (num) => {
  if (num <= 5) {
    console.log(num);
    setTimeout(() => {
      printNumber(num + 1);
    }, 1000);
  }
};

printNumber(1);

// Delayed loop

const delayedLoop = () => {
  let i = 1;

  const printNumberWithDelay = () => {
    if (i <= 5) {
      console.log(i);
      i++;

      if (i <= 5) {
        setTimeout(printNumberWithDelay, 1000);
      }
    }
  };

  printNumberWithDelay();
};

delayedLoop();

// Random

const randomPromise = () => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber >= 0.5) {
      resolve(randomNumber);
    } else {
      reject(new Error("число менше 0.5"));
    }
  });
};

randomPromise()
  .then((result) => {
    console.log(`Resolved value: ${result}`);
  })
  .catch((error) => {
    console.error(`Rejected error: ${error.message}`);
  });

