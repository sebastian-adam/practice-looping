$(document).ready(function() {
  $("#main form").submit(function(event) {
  event.preventDefault();

    var countTo = parseInt($("input#count-to").val());
    var countBy = parseInt($("input#count-by").val());
    var endArray = [];
    var total = 0;

    for (var index = countBy; index <= countTo; index += countBy) {
      endArray.push(index);
    };
    endArray.toString();

    endArray.forEach(function(integer) {
      $("#answer").append(integer + ", ");
    });

    // Remove extra characters from <p>
    var text = $("p").text();
    text = text.slice(0,-2);
    $("p").text(text);
  });
});
