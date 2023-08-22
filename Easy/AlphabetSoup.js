// using node-v14.17.6-x64.msi & mingw, etc.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ', function(input) {
  // Call your AlphabetSoup function here, passing the input
  const result = AlphabetSoup(input);
  console.log(result);

  rl.close();
});


/*
QUESTION:
Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.
*/
function AlphabetSoup(str) {
  return str.split("").sort().join("");
}

// keep this function call here
AlphabetSoup("hello world");
