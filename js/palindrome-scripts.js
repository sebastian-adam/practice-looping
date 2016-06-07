$(document).ready(function() {
  $("#main form").submit(function(event) {
    event.preventDefault();

    var phrase = $("#phrase").val();

    function reverse(x) {
      return x.split('').reverse().join('');
    }

    var phraseFlip =  reverse(phrase);

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

    palindromeChecker(phrase, phraseFlip);
  });
});
