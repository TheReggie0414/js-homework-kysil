// Get days in year

const getDaysInYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return 366;
    } else {
        return 365;
    }
};

console.log(getDaysInYear(2021));
console.log(getDaysInYear(2020));




// Get day of a year

const getDayNumber = (date) => {
    const [year, month, day] = date.split('-').map(Number);
    const startDate = new Date(year, 0, 1);
    const currentDate = new Date(year, month - 1, day);
    const dayNumber = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000)) + 1;
    return dayNumber;
};

console.log(getDayNumber("2023-01-12"));
console.log(getDayNumber("2023-02-26"));



//   Get fiscal quarters

const getQuarters = (date) => {
    const [year, month] = date.split('-').map(Number);
    const quarters = ["I", "II", "III", "IV"];
    const quarter = quarters[Math.floor((month - 1) / 3)];
    return `${date} is ${quarter} quarter`;
};


console.log(getQuarters("2023-02-26"));