$(document).ready(function() {
  //variable used if we wanted to automate the sections built from the start function
  var jokesFromResponse = ["Fake joke 1", "Fake joke 2", "Fake joke 3"];
  //variable to help build the section class targets
  var sectionNUM = 1;
  //variable to store joke input
  var jokeCategory = "";
  //query variable
  var queryURL = "https://icanhazdadjoke.com/search?term=";
  //full query url variable
  var querysearchURL = "";
  //variable for starter subject when page loads
  var starterSubject = "dad";
  // ===========================================================================
  // // ========================================================================
  // // =====================================================================
  // // ==================================================================
  // // ===============================================================
  //
  // ===============================================================
  // ==================================================================
  // =====================================================================
  // ========================================================================
  // ===========================================================================
  //when submit button is clicked
  $("#jokeInput").on("click", function(event) {
    $(".transbox").empty();
    sectionNUM = 1;
    //prevent default submit
    event.preventDefault();
    jokeCategory = "";

    //get value from input field
    jokeCategory = $("#category")
      .val()
      .trim();
    //if input field is empty, return
    if (jokeCategory === undefined || jokeCategory.length == 0) {
      return;
    } else {
      //build query variable with subject

      icanHaz(jokeCategory);
    }
  });

  $(document).on("click", ".canHaz", function() {
    Yoda(this.innerText);
  });

  function icanHaz(subject) {
    querysearchURL = queryURL + subject;
    $.ajax({
      //headers syntax
      headers: {
        Accept: "application/json"
      },
      url: querysearchURL,
      method: "GET"
    }).then(function(randomJoke) {
      //set response array
      var jokes = randomJoke.results;
      //append jokes to display
      $("#jokesGOHERE").empty();
      for (i = 0; i < jokes.length; i++) {
        // $(".transbox").empty(); 
        // $("#tps-wrapper").empty();
        var newJoke = $("<p>");
        newJoke.addClass("canHaz text-center");
        newJoke.text(jokes[i].joke);
        $("#jokesGOHERE").append(newJoke);
      }
      
    });
  }

  //function to convert jokes to yodish

  function Yoda(jokeToConvert) {
    // API call variable
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

    //ajax call
    $.ajax(settings).then(function(response) {
      var cleanedYodish = cleanYodish(response.contents.translated);
      //target
      $("section.page" + sectionNUM + ">div>div>div>div>div>div>div").text(
        cleanedYodish
      );

      //section counter
      sectionNUM++;
    });
  }

// removes excess lines from and cleans up yodish translations
function cleanYodish(rawTranslation) {
  var extraLines = [
    "Herh Herh Herh Herh! ",
    "The dark side I sense in you! ",
    "Feel the force! ",
    "Hmmmm! ",
    "Yeesssssss! "
  ];

  for (var i = 0; i < extraLines.length; i++) {
    if (rawTranslation.includes(extraLines[i])) {
      rawTranslation = rawTranslation.replace(extraLines[i], "");
      i = -1;
    }
  }

  rawTranslation = rawTranslation.replace(/,/g, ", ");

  for (var i = 0; i < 1; i++) {
    if (rawTranslation.includes(" ’")) {
      rawTranslation = rawTranslation.replace(" ’", "'");
      i = -1;
    }
  }

  for (var i = 0; i < 1; i++) {
    if (rawTranslation.includes(' "')) {
      rawTranslation = rawTranslation.replace(' "', '"');
      i = -1;
    }
  }

  for (var i = 0; i < 1; i++) {
    if (rawTranslation.includes('""')) {
      rawTranslation = rawTranslation.replace('""', '" "');
      i = -1;
    }
  }

  for (var i = 0; i < 1; i++) {
    if (rawTranslation.includes("  ")) {
      rawTranslation = rawTranslation.replace("  ", " ");
      i = -1;
    }
  }

  for (var i = 0; i < 1; i++) {
    if (rawTranslation.includes("I ’m")) {
      rawTranslation = rawTranslation.replace("I ’m", "I'm");
      i = -1;
    }
  }

  for (var i = 0; i < 1; i++) {
    if (rawTranslation.includes("I 'm")) {
      rawTranslation = rawTranslation.replace("I 'm", "I'm");
      i = -1;
    }
  }

  for (var i = 0; i < 1; i++) {
    if (rawTranslation.includes('*"')) {
      rawTranslation = rawTranslation.replace('*"', '* "');
      i = -1;
    }
  }

  for (var i = 0; i < 1; i++) {
    if (rawTranslation.includes("dad")) {
      rawTranslation = rawTranslation.replace("dad", "Dad");
      i = -1;
    }
  }

  return rawTranslation;
}





  //tilt function
  function tilt() {
    for (var i = 0; i < 6; i++) {
      $(".main").tiltedpage_scroll({
        sectionContainer: "> section", // In case you don't want to use <section> tag, you can define your won CSS selector here
        angle: 25, // You can define the angle of the tilted section here. Change this to false if you want to disable the tilted effect. The default value is 50 degrees.
        opacity: true, // You can toggle the opacity effect with this option. The default value is true
        scale: false, // You can toggle the scaling effect here as well. The default value is true.
        outAnimation: true // In case you do not want the out animation, you can toggle this to false. The default value is true.
      });
    }
  }
  // section.page1>div>div>div>div
  function start() {
    //we set this to whatever we want, but 12 for now.
    for (i = 1; i < 6; i++) {
      var newSection = $("<section>");
      newSection.addClass("page" + i);

      var jokeBox = $("<div>");
      jokeBox.addClass("transbox");

      jokeBox.append("<p>");
      newSection.append(jokeBox);
      $(".main").append(newSection);
    }
    tilt();
  }
  // ===========================================================================
  // // ========================================================================
  // // =====================================================================
  // // ==================================================================
  // intro
  // ==================================================================
  // =====================================================================
  // ========================================================================
  // ===========================================================================
  function introScreen() {
    // $("main").empty();
    var newDiv = $("<div>");
    newDiv.addClass("starwars-demo");
    var newImg = $("<img>");
    newImg.attr("src", "assets/images/star.svg");
    newImg.attr("alt", "Stars");
    newImg.addClass("star");
    newDiv.append(newImg);
    var newImg2 = $("<img>");
    newImg2.attr("src", "assets/images/wars.svg");
    newImg2.attr("alt", "Wars");
    newImg2.addClass("wars");
    newDiv.append(newImg2);
    var newH2 = $("<h3>");
    newH2.addClass("byline text-center");
    newH2.attr("id", "byline");
    newH2.text("YODAD");
    newDiv.append(newH2);
    $(".intro").append(newDiv);
    animateIntro();
  }

  
    function animateIntro() {
      var byline = document.getElementById("byline"); // Find the H2
      var bylineText = byline.innerHTML; // Get the content of the H2
      var bylineArr = bylineText.split(""); // Split content into array
      byline.innerHTML = ""; // Empty current content
  
      var span; // Create variables to create elements
      var letter;
  
      for (i = 0; i < bylineArr.length; i++) {
        // Loop for every letter
        span = document.createElement("span"); // Create a <span> element
        letter = document.createTextNode(bylineArr[i]); // Create the letter
        if (bylineArr[i] == " ") {
          // If the letter is a space...
          byline.appendChild(letter); // ...Add the space without a span
        } else {
          span.appendChild(letter); // Add the letter to the span
          byline.appendChild(span); // Add the span to the h2
        }
      }
  }
  introScreen();

  var firstClick = false;
  $(document).keyup(function() {
    if (firstClick === false){
      $(".starwars-demo").remove();
      start();
      icanHaz(starterSubject);
      firstClick = true;
    }
  });

});
//start function builds the sections used for the tilt function

//appends starter subject dad jokes
