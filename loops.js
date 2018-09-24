function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    if (i ===1) {
      array.push("I am 1 stronge loop.");
    } else {
       array.push("I am ${i} strage loops.");
    }
  }
  return array;
}