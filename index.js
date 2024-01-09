
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];
function titleCased(){
  //map to iterate over each tutorial in tutorials
  return tutorials.map(function(tutorial){
    return tutorial
    // split the tutorial to an array of words
    .split ( " ")
    // map to iterate over each word in the tutorial
    .map(function (word) {
      //word.charAt(0).toUpperCase() to capitalize the first letter of word
      //word.slice to retrieve rest of word excluding the first letter
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    //join  to join these words back into a single string with spaces between them
    .join(" ");
  });
}
const titleCasedTutorials = titleCased();
console.log(titleCasedTutorials);