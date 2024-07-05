// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.

const CheckNumber = number => {
  if (Number.isInteger(number)) console.log(`${number} is an integer`);
  else throw new Error(`${number} is not an integer`);
};

// CheckNumber(5);
// CheckNumber("Prabin");
// CheckNumber(3.25);

try {
  CheckNumber(5);
  CheckNumber(3.25);
  CheckNumber("Prabin");
} catch (error) {
  console.error(error.message);
}
