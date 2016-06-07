// // WITHOUT RECURSION --THIS CODE WORKS FOR "0" B/C 1*(EMPTY ARRAY)=1
//
// $(document).ready(function() {
//   $("#main form").submit(function(event) {
//     event.preventDefault();
//
//     var number = parseInt($("#factorial").val());
//     var newArray = [];
//
//     for (var i = 0; i < number; i++) {
//       newArray.push(number - i);
//     }
//     alert(newArray);
//     var total = 1;
//     for (var i = 0; i < number; i++) {
//       total *= newArray[i];
//     }
//
//     alert(total);
//
//   });
// });



// WITHOUT RECURSION

$(document).ready(function() {
  $("#main form").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("#factorial").val());

    function factorial(i) {
      // If the number is less than 0, reject it.
      if (i < 0) {
          return -1;
      }
      // If the number is 0, its factorial is 1.
      else if (i == 0) {
          return 1;
      }
      // Otherwise, call this recursive procedure again.
      // ex. i=5 :: return (5 * factorial(5-1) == (5 * factorial(4)) ==> (5 * (4 *factorial(4-1))) == (5 * (4 * factorial(3))) ...
      else {
          return (i * factorial(i - 1));
      }
    }

    var total = factorial(number);
    alert(total);
  });
});
