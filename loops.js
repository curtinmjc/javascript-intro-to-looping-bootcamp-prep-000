function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    if (i ===1) {
      array.push("I am ${i} strage loops");
    }
    array.push("I am ${i} strage loops");
  }
  return array;
}