// Statistics is a way of using math to make sense of data.
// The Javascript below will calculate the Mean, Median, Mode, Range, Variance and Standard Deviation of the given data.

// Content and Calculation for the first paragraph, MEAN:
const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;
/*
  const getMean = (array) => {
  // Condense the array in a single value (for each el in the array the accumulator((initial value is 0 as second parameter of the callback function)) will be added to the sum variable):
  const sum = array.reduce((acc, el) => {
    return acc + el, 0;
  });
  const mean = sum / array.length;
  // console.log(mean);
  return mean;
};*/

// Get Median function:
const getMedian = (array) => {
  const sorted = array.slice().sort((a, b) => a - b); // sort the list of numbers from least to greatest. The slice method creates an empty shallow array to do so.
  const median =
    array.length % 2 === 0 // Is the array of even-length? The median should be the average of the two middle indexxes.
      ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]]) //Is even? getMean is called to calculate the average. the 2 sorted method contain the two middel array indexxes.
      : sorted[Math.floor(array.length / 2)]; // is Odd? The median should be the middle index of the sorted array.
  return median;
};

// Get Mode function:
const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  });
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  );
  return mode.join(", ");
};

// get Range function:
const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
};

// Get Variance function:
const getVariance = (array) => {
  const mean = getMean(array);
  const variance =
    array.reduce((acc, el) => {
      const difference = el - mean;
      const squared = difference ** 2;
      return acc + squared;
    }, 0) / array.length;
  return variance;
};

/* Redundant Variance function's content:
  const differences = array.map((el) => el - mean);
  const squaredDifferences = differences.map((el) => el ** 2);
  */

// Get Standard Deviation function: (This is the square root of the variance)
const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  //const standardDeviation = Math.pow(variance, 1 / 2);
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
};

// The calculate function is called when the form is submitted:
const calculate = () => {
  const value = document.querySelector("#numbers").value; // find the numbers inside the inputfield
  const array = value.split(/,\s*/g); // Split the value in an array of strings
  // Create a NEW array of numbers based on the string array:
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el)); // Filter out the Not a Number (NaN) input values.
  // console.log(array);
  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);
  const variance = getVariance(numbers);
  const standardDeviation = getStandardDeviation(numbers);
  // Display the value of mean and median inside the HTML5 Element:
  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelectorAll("#mode").textContent = mode;
  document.querySelectorAll("#range").textContent = range;
  document.querySelector("#variance").textContent = variance;
  document.querySelector("#standardDeviation").textContent = standardDeviation;
};
