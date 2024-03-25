// Statistics is a way of using math to make sense of data.
// The Javascript below will calculate the Mean, Median, Mode, Range, Variance and Standard Deviation of the given data.

// The calculate function called when the form is submitted:
const calculate = () => {
  // find the numbers inside the inputfield:
  const value = document.querySelector("#numbers").value;
  // Split the value in an array of strings:
  const array = value.split(/,\s*/g);
  // Create a NEW array of numbers based on the string array:
  const numbers = array
    .map((el) => {
      Number(el);
    })
    .filter((el) => !isNaN(el)); // Filter out the Not a Number (NaN) input values.
};
