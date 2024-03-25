// Statistics is a way of using math to make sense of data.
// The Javascript below will calculate the Mean, Median, Mode, Range, Variance and Standard Deviation of the given data.

// Content and Calculation for the first paragraph, MEAN:
const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;
/*{
  // Condense the array in a single value (for each el in the array the accumulator((initial value is 0 as second parameter of the callback function)) will be added to the sum variable):
  const sum = array.reduce((acc, el) => {
    return acc + el, 0;
  });
  const mean = sum / array.length;
  // console.log(mean);
  return mean;
};*/

// The calculate function called when the form is submitted:
const calculate = () => {
  // find the numbers inside the inputfield:
  const value = document.querySelector("#numbers").value;
  // Split the value in an array of strings:
  const array = value.split(/,\s*/g);
  // Create a NEW array of numbers based on the string array:
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el)); // Filter out the Not a Number (NaN) input values.
  // console.log(array);
  const mean = getMean(numbers);
  // Display the value of meaan inside the #mean HTML5 Element:
  document.querySelector("#mean").textContent = mean;
};
