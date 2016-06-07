// // LEAVING SPACES IN

// $(document).ready(function() {
//   $("#main form").submit(function(event) {
//     event.preventDefault();
//
//     var phrase = $("#phrase").val();
//
//     function reverse(x) {
//       return x.split('').reverse().join('');
//     }
//
//     var phraseFlip = reverse(phrase);
//
//     function palindromeChecker(x, y) {
//       if (x === "") {
//         alert("Please enter a word or sentence")
//       } else
//       if (x === y) {
//         alert("That's a palindrome!")
//       } else {
//         alert("That's NOT a palindrome!")
//       }
//     };
//
//     palindromeChecker(phrase, phraseFlip);
//   });
// });

// TAKING OUT SPACES

$(document).ready(function() {
  $("#main form").submit(function(event) {
    event.preventDefault();

    var phrase = $("#phrase").val();
    var phraseSpaceless = phrase.split('');

    console.log(phraseSpaceless);
    // --> array is split into characters

    phraseSpaceless = phraseSpaceless.filter(function(x){
      return /\S/.test(x);
    });

    console.log(phraseSpaceless);
    // --> array is split into characters, spaces removed

    var phraseSpacelessFlip = phraseSpaceless.reverse().join('');

    console.log(phraseSpacelessFlip);
    // --> array is reversed and joined
    console.log(phraseSpaceless);
    // --> array is also reversed b/c .reverse acts upon attached array, but .join only assigns a string to the new variable

    phraseSpaceless = phraseSpaceless.reverse().join('');

    console.log(phraseSpacelessFlip);
    // --> array is unchanged
    console.log(phraseSpaceless);
    // --> array is reversed again and joined

    function palindromeChecker(x, y) {
      if (x === "") {
        alert("Please enter a word or sentence")
      } else
      if (x === y) {
        alert("That's a palindrome!")
      } else {
        alert("That's NOT a palindrome!")
      }
    };

    palindromeChecker(phraseSpaceless, phraseSpacelessFlip);
  });
});
