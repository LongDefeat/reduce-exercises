/* --------extractValue---------*/
// Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.
const arr = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];

function extractValue(arrObj, key) {
  return arrObj.reduce(function (accum, nextValue) {
    accum.push(nextValue[key]);
    return accum;
  }, []);
}

/* --------vowelCount---------*/
// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

function vowelCount(str) {
  const vowels = "aeiou";

  str.split("").reduce(function (accum, next) {
    let lowerCase = next.toLowerCase();
    if (vowels.indexOf(lowerCase) !== -1) {
      if (accum[lowerCase]) {
        accum[lowerCase]++;
      } else {
        accum[lowerCase];
      }
    }
    return accum;
  }, {});
}

/* --------addKeyAndValue---------*/
// Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

function addKeyAndValue(arr, key, value) {
  return (
    arr.reduce(function (accum, nextValue, index) {
      accum[index][key] = value;
      return accum;
    }),
    arr
  );
}

/* --------addKeyAndValue---------*/
// Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray.
function partition(arr, callback) {
  return arr.reduce(
    function (accum, nextValue) {
      if (callback(nextValue)) {
        accum[0].push(nextValue);
      } else {
        accum[1].push(nextValue);
      }
      return accum;
    },
    [[], []]
  );
}

const numbers = [1, 2, 3, 4, 5];

let mapNumbers = numbers.map(function (num) {
  return num * num;
});

console.log(mapNumbers);
