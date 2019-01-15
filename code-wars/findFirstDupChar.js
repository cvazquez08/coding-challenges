function firstDup(arr){
  // set empty object to count each letter
  let counts = {};
 
  // split string into array
  let tokens = arr.split('')
 
  // loop through array
  for(let i = 0; i < tokens.length; i++){
    // var for each position in array
    let letters = tokens[i]
    // if variable isnt in object, place in object with value of 1
    if(counts[letters] === undefined){
      counts[letters] = 1;
    } else {
    // first value that is not included in object is dup
     return letters
    }
  }
 
 }
 
 firstDup("abbcda")