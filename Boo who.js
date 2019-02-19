// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

// First Solution to pass
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (typeof bool === "boolean") {
    return true;
  } else {
    return false;
  }
}

// Refractored solution
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof bool === "boolean";
}
