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

    // alert(phraseSpaceless); --> array is split into characters

    phraseSpaceless = phraseSpaceless.filter(function(x){
      return /\S/.test(x);
    });

    alert(phraseSpaceless);
    // --> array is split into characters, spaces removed

    var phraseSpacelessFlip = phraseSpaceless.reverse().join('');
    phraseSpaceless = phraseSpaceless.reverse().join('');

    alert(phraseSpacelessFlip);
    // --> array is reversed and joined
    alert(phraseSpaceless);
    // --> array is reversed twice and joined


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

    alert(phraseSpacelessFlip);
    alert(phraseSpaceless);

    palindromeChecker(phraseSpaceless, phraseSpacelessFlip);
  });
});
