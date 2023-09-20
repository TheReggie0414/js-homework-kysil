// Create arr method


const obj = {
    from: 1,
    to: 10,
};

const createArr = function () {
    const arr = [];
    for (let i = this.from; i <= this.to; i++) {
        arr.push(i);
    }
    this.arr = arr;
};

createArr.call(obj);

console.log(obj.arr);

//   Calculator

const calculator = {
    result: 0,
    sum: function (num) {
        this.result += num;
        return this;
    },
    sub: function (num) {
        this.result -= num;
        return this;
    },
    mul: function (num) {
        this.result *= num;
        return this;
    },
    div: function (num) {
        if (num === 0) {
            console.log("Дiлити на нуль неможна");
            return this;
        }
        this.result /= num;
        return this;
    },
};

const result = calculator.sum(2).sum(2).mul(4).result;

console.log(result);
