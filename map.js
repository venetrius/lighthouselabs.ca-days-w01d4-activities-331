// solution for https://web.compass.lighthouselabs.ca/days/w01d4/activities/331

/* requirements: Implement your own version of the built-in array map function.
    the fanction has to have to arguments
    works as a following example*/

var words = ["ground", "control", "to", "major", "tom"];

console.log(
map(words, function(word) {
  return word.length;
})
);

console.log(
map(words, function(word) {
  return word.toUpperCase();
})
);


console.log(
map(words, function(word) {
  return word.split('').reverse().join('');
})
);

/* output should be :
[6, 7, 2, 5, 3]

[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]

*/


/* implementation */
