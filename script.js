// Random Resolve

const randomResolve = () => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  const randomDelay = Math.floor(Math.random() * 5000) + 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber % 2 === 0) {
        resolve(randomNumber);
      } else {
        reject(new Error(`Random number ${randomNumber} is odd`));
      }
    }, randomDelay);
  });
};

randomResolve()
  .then((result) => {
    console.log(`Resolved with number Evfen: ${result}`);
  })
  .catch((error) => {
    console.error(`Rejected with error: ${error.message}`);
  });

// Promise API

const randomResolve = () => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  const randomDelay = Math.floor(Math.random() * 5000) + 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber % 2 === 0) {
        resolve(randomNumber); //
      } else {
        reject(new Error(`Random number ${randomNumber} is odd`));
      }
    }, randomDelay);
  });
};

const createPromiseArr = (n) => {
  const promises = [];

  for (let i = 0; i < n; i++) {
    promises.push(randomResolve());
  }

  return Promise.all(promises)
    .then(() => {
      console.log('🥳 Yasss');
    })
    .catch(() => {
      console.log('🫠🫡 ok');
    });
};


createPromiseArr(3);


// Async/Await


const randomResolve = () => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  const randomDelay = Math.floor(Math.random() * 5000) + 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber % 2 === 0) {
        resolve(randomNumber);
      } else {
        reject(new Error(`Random number ${randomNumber} is odd`));
      }
    }, randomDelay);
  });
};

const createPromiseArr = async (n) => {
  const promises = [];

  for (let i = 0; i < n; i++) {
    promises.push(randomResolve());
  }

  try {
    await Promise.all(promises);
    console.log('🥳 Yasss');
  } catch (error) {
    console.log('🫠🫡 ok');
  }
};

createPromiseArr(5);
