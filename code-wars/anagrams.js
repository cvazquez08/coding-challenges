// ************************************************************************************
// https://www.codewars.com/kata/587e18b97a25e865530000d8
// An anagram is a word, phrase, or sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

// Given an array of words write a method that will return the total number of different anagrams inside that array. You can only count once the anagram between 2 words. For instance, in the previous example we show "angel" and "glean" as anagrams, but you don't have to count the opposite between "glean" and "angel".

// Some examples:

// There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
// There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
// **************************************************************************************


//my solution

function anagramCounter (wordsArray) {
  let counter = 0;
    
  for(let i = 0; i < wordsArray.length; i++) {
     for(let k = i + 1; k < wordsArray.length; k++) {
        if(wordsArray[i].split('').sort().join('') === wordsArray[k].split('').sort().join('')){
          counter++;
        }
     }
   }
    return counter;
  }