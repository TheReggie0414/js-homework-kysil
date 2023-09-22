// Factorial recursion


const factorial = (initialNumber) => {
    if (initialNumber === 0) {
        return 1;
    } else {
        return initialNumber * factorial(initialNumber - 1);
    }
};

const result = factorial(5);
console.log(result);


// Fibonacci recursion

const fib = (n) => {
    if (n === 1) {
        return [1];
    } else if (n === 2) {
        return [1, 1];
    } else {
        const prevSeq = fib(n - 1);
        const nextNumber = prevSeq[prevSeq.length - 1] + prevSeq[prevSeq.length - 2];
        return [...prevSeq, nextNumber];
    }
};

const length = 5;
const sequence = fib(length);

console.log(sequence.join(' '));


// Read List


const list = {
    title: "lesson-1",
    next: {
        title: "lesson-2",
        next: {
            title: "lesson-3",
            next: {
                title: "lesson-4",
                next: {
                    title: "lesson-5",
                    next: null,
                },
            },
        },
    },
};

const readList = (list) => {
    if (list) {
        console.log(list.title);
        readList(list.next);
    }
};

readList(list);


// Deep Copy (optional)

// const arr = [
//     1,
//     "string",
//     null,
//     undefined,
//     { a: 15, b: 10, c: [1, 2, 3, { a: 4 }], d: undefined, e: true },
//     true,
//     false,
//   ];
  
//   const deepCopy = (arr) => {const deepCopy = (obj) => {
//   if (obj ===}
