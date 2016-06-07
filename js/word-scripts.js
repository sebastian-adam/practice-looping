// // USING REGULAR EXPRESSIONS

// $(document).ready(function() {
//   $("#main form").submit(function(event) {
//   event.preventDefault();
//
//     var word = $("input#word").val().replace(/[aeoiu]/ig,"-");
//     var endArray = [];
//
//     alert(word);
//   });
// });


// // NOT USING REGULAR EXPRESSIONS (STRING METHOD)
//
// $(document).ready(function() {
//   $("#main form").submit(function(event) {
//   event.preventDefault();
//
//     var word = $("input#word").val();
//     var vowels = "aeiouAEIOU";
//
//     for (var i = 0; i < word.length; i++) {
//       if (vowels.indexOf(word[i]) > -1) {
//         word = word.replace(word[i], "-");
//       }
//     }
//
//     alert(word);
//   });
// });
//

// NOT USING REGULAR EXPRESSIONS (ARRAY METHOD)

$(document).ready(function() {
  $("#main form").submit(function(event) {
  event.preventDefault();

    $("p").empty();

    var word = $("input#word").val().toLowerCase().split("");
    var outputArray;

    for (var i = 0; i < word.length; i++) {
      if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
        $("#output").append("-");
      } else {
        $("#output").append(word[i]);
      }
    }

    var form = document.getElementById("myForm");
    form.reset();
  });
});
