// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  let newStr = str.toLowerCase().split(" ");

  for (let i = 0; i < newStr.length; i++) {
    newStr[i] =
      newStr[i].substring(0, 1).toUpperCase() + newStr[i].substring(1);
  }

  return newStr.join(" ");
}

titleCase("I'm a little tea pot");
