//variable to store joke input
var jokeCategory = "";
//query variable
var queryURL = "https://icanhazdadjoke.com/search?term=";

console.log(queryURL);
//when submit button is clicked
$("#jokeInput").on("click", function(event) {
//prevent default submit  
 event.preventDefault();
 //get value from input field
  jokeCategory = $("#category")
    .val()
    .trim();
  console.log(jokeCategory);
  //if input field is empty, return
  if (jokeCategory === undefined || jokeCategory.length == 0) {
    return;
  } else {
      //build query variable with subject
    queryURL = queryURL + jokeCategory;
    $.ajax({
        //headers syntax
      headers: {
        Accept: "application/json"
      },
      url: queryURL,
      method: "GET"
    }).then(function(randomJoke) {
      console.log(randomJoke);
      //set response array 
      var jokes = randomJoke.results;
      console.log(jokes);
      //append jokes to display
      for (i = 0; i < jokes.length; i++) {
        var newJoke = $("<p>");
        newJoke.text(jokes[i].joke);
        $("#jokeGOHERE").append(newJoke);
      }
    });
  }
});
