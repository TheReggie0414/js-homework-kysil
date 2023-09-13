// Pythagorean theorem

const pythagorean = (a, b) => Math.sqrt(a * a + b * b);
const a = 5;
const b = 12;
const c = pythagorean(a, b);

console.log(`довжина гiпотенузи (c): ${c}`);

////////////////////////////////////////////////////////////////////////////////


// Format number in spaces

const formatNumber = (num) => {
    return num.toLocaleString();
}

console.log(formatNumber(1223.65378));

///////////////////////////////////////////////////////////////////////////////////

// Write a password generator with length n

const generatePassword = (n) => {
    const characters = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz';
    let password = '';

    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    return password;
  }



  const passwordLength = 12;
  const generatedPassword = generatePassword(passwordLength);
  console.log(generatedPassword);

///////////////////////////////////////////////////////////////////////////////////////

// Calculate percentage with n numbers after dot


const calc = (firstNum, secondNum, precision) => {
    const percentage = (secondNum * 100) / firstNum;
    return percentage.toFixed(precision);
}

console.log(calc(200, 50, 0));
console.log(calc(200, 0.14, 1));


///////////////////////////////////////////////////////////////////////////////////////

// Get integer part of number and decimal


const splitNumber = (num) => {
    const intPart = Math.floor(num);
    const decimalPart = +(num - intPart).toFixed(2) * 100;
  
    return { int: intPart, decimal: decimalPart };
  }
  

  console.log(splitNumber(2));
  console.log(splitNumber(2.34));
