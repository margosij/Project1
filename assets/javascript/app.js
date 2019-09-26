$(document).ready(function() {

  var jokesFromResponse = ["Fake joke 1", "Fake joke 2", "Fake joke 3"];

  //variable to store joke input
  var jokeCategory = "";
  //query variable
  var queryURL = "https://icanhazdadjoke.com/search?term=";
  var querysearchURL = "";

  console.log(queryURL);
  //when submit button is clicked
  $("#jokeInput").on("click", function(event) {
    //prevent default submit
    event.preventDefault();
    jokeCategory = "";
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
      querysearchURL = queryURL + jokeCategory;
      $.ajax({
        //headers syntax
        headers: {
          Accept: "application/json"
        },
        url: querysearchURL,
        method: "GET"
      }).then(function(randomJoke) {
        console.log(randomJoke);
        //set response array
        var jokes = randomJoke.results;
        console.log(jokes);
        //append jokes to display
        $("#jokesGOHERE").empty();
        for (i = 0; i < jokes.length; i++) {
          var newJoke = $("<p>");
          newJoke.addClass("canHaz");
          newJoke.text(jokes[i].joke);
          
          $("#jokesGOHERE").append(newJoke);
        }
        $(".canHaz").on('click', function () {
          console.log(this);
        $(".canHaz").on('click', function (){
          Yoda(this.innerText);
        }
        )
      });
    }
  });

  //function to convert jokes to yodish

  function Yoda (jokeToConvert){
    var settings = {
      async: true,
      crossDomain: true,
      url: "https://yodish.p.rapidapi.com/yoda.json?text=" + jokeToConvert,
      method: "POST",
      headers: {
        "x-rapidapi-host": "yodish.p.rapidapi.com",
        "x-rapidapi-key": "fb879fbebfmshcbd242949b0a033p1fb2d3jsn50e42ce8f359",
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {}
    };
  
    $.ajax(settings).done(function(response) {
      console.log(response);
    });
  }
//tilt function
  function tilt() {

    for (var i = 0; i < jokesFromResponse.length; i++) {
      $(".main").tiltedpage_scroll({
        sectionContainer: "> section", // In case you don't want to use <section> tag, you can define your won CSS selector here
        angle: 50, // You can define the angle of the tilted section here. Change this to false if you want to disable the tilted effect. The default value is 50 degrees.
        opacity: true, // You can toggle the opacity effect with this option. The default value is true
        scale: true, // You can toggle the scaling effect here as well. The default value is true.
        outAnimation: true // In case you do not want the out animation, you can toggle this to false. The defaul value is true.
      });
    }
  }

  function start() {
    //we set this to whatever we want, but 12 for now.
    for (i = 1; i < 13; i++) {
      var newSection = $("<section>");
      newSection.addClass("page" + i);

      $(".main").append(newSection);
    }
    tilt();
  }
  //start function builds the sections used for the tilt function
  start();
});
