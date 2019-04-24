function forLoop(array) {
  array = [];
  for (var i = 0; i <= 25; i++) {
    if(i === 1) {
      array.push("I am 1 strange loop.")
      return array 
    } else if (i === 0 || i <= 25) {
      array.push("I am ${i} strange loops.")
      return array
    } 
  }
}