// When Page loads
$(document).ready(function() {
    // variable to help build the section class targets
    var sectionNUM = 1;
    // variable to store joke input
    var jokeCategory = "";
    // first part of query variable
    var queryURL = "https://icanhazdadjoke.com/search?term=";
    // full query url variable will be stored here
    var querysearchURL = "";
    // variable for starter subject when page loads
    var starterSubject = "dad";
    // variable for play/pause function
    var status = "play";
    // audio variables
    var thememusic = new Audio("./assets/audio/theme.ogg");
    thememusic.loop = true;
    var jediTheme = new Audio("./assets/audio/Jedi.mp3");
    jediTheme.currentTime = 78;
    // Show loading animation.
    var yodaGiggle = new Audio("./assets/audio/yodalaugh.mp3");
    
    var playPromise = thememusic.play();
  
    if (playPromise !== undefined) {
      playPromise
        .then(_ => {
          // Automatic playback started!
          // Show playing UI.
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }
    // when submit button is clicked
    $("#jokeInput").on("click", function(event) {
      // empty Yoda translated box element
      $(".transbox").empty();
      sectionNUM = 1;
      // prevent default submit
      event.preventDefault();
      // reset joke category
      jokeCategory = "";
  
      // get value from input field
      jokeCategory = $("#category")
        .val()
        .trim();
      // if input field is empty, return
      if (jokeCategory === undefined || jokeCategory.length === 0) {
        return;
      } else {
        // source icanhaz api with joke category
        icanHaz(jokeCategory);
      }
    });
    // icanHaz AJAX function
    function icanHaz(subject) {
      // build complete query string
      querysearchURL = queryURL + subject;
      $.ajax({
        // headers syntax
        headers: {
          Accept: "application/json"
        },
        url: querysearchURL,
        method: "GET"
      }).then(function(randomJoke) {
        // set response array
        var jokes = randomJoke.results;
        // empty joke element
        $("#jokesGOHERE").empty();
        // for length of response object
        for (var i = 0; i < jokes.length; i++) {
          // var to store <p> element
          var newJoke = $("<p>");
          // add class to <p> element
          newJoke.addClass("canHaz text-center");
          // add joke text to <p> element
          newJoke.text(jokes[i].joke);
          // append joke to joke area
          $("#jokesGOHERE").append(newJoke);
        }
      });
    }
    // set event listener on untranslated jokes
    $(document).on("click", ".canHaz", function() {
      yodaGiggle.play();
      Yoda(this.innerText);
    });
  
    // function to convert jokes to yodish
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
        //target
        $("section.page" + sectionNUM + ">div>div>div>div>div>div>div").text(
          response.contents.translated
        );
        //section counter
        sectionNUM++;
      });
    }
    // tilt scroll function
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
  
    //function to build tilt screen elements
    function start() {
      thememusic.pause();
      jediTheme.play();
      // we set this to whatever we want, but 5 for now.
      for (var i = 1; i < 6; i++) {
        // variable to store new section element
        var newSection = $("<section>");
        // add class to section element
        newSection.addClass("page" + i);
        // variable to store new div element
        var jokeBox = $("<div>");
        // add class to div element
        jokeBox.addClass("transbox");
        // append <p> element to div element
        jokeBox.append("<p>");
        // append div element to
        newSection.append(jokeBox);
        $(".main").append(newSection);
      }
      // when finished, start tilt function
      tilt();
    }
    // ===========================================================================
    // // ========================================================================
    // // =====================================================================
    // // ==================================================================
    // Intro Animation
    // ==================================================================
    // =====================================================================
    // ========================================================================
    // ===========================================================================
    // function to build intro Html
    function introScreen() {
      thememusic.play()
      // variable to store new div
      var newDiv = $("<div>");
      // add class to new div
      newDiv.addClass("starwars");
      // variable to store new image element
      var newImg = $("<img>");
      // add image a source to image element
      newImg.attr("src", "assets/images/star.svg");
      // add alt property to imaage element
      newImg.attr("alt", "Stars");
      // add class to image element
      newImg.addClass("star");
      // add image element to new div
      newDiv.append(newImg);
      // variable to store new image element
      var newImg2 = $("<img>");
      // add source to image element
      newImg2.attr("src", "assets/images/wars.svg");
      // add alt property to image element
      newImg2.attr("alt", "Wars");
      // add class to image element
      newImg2.addClass("wars");
      // add image to div element
      newDiv.append(newImg2);
      // variable to store h3 element
      var newH2 = $("<h3>");
      // add class to h3 element
      newH2.addClass("byline text-center");
      // add ID to h3 element
      newH2.attr("id", "byline");
      // Byline text in intro
      newH2.text("YODAD");
      // add h3 to div
      newDiv.append(newH2);
      // variable to store h5 element
      var newH5 = $("<h5>");
      // add class to h5 element
      newH5.addClass("text-center startHere");
      // add ID to h5 element
      newH5.attr("id", "start");
      // set text to h5 element
      newH5.text("Click here to start");
      // add h5 to new div element
      newDiv.append(newH5);
      // add new div to intro div
      $(".intro").append(newDiv);
      // call animate intro function
      // thememusic.play();
      animateIntro();
    }
  
    // function to animate byline on intro screen
    function animateIntro() {
      var byline = document.getElementById("byline"); // Find the H2
      var bylineText = byline.innerHTML; // Get the content of the H2
      var bylineArr = bylineText.split(""); // Split content into array
      byline.innerHTML = ""; // Empty current content
  
      var span; // Create variables to create elements
      var letter;
  
      for (var i = 0; i < bylineArr.length; i++) {
        // Loop for every letter
        span = document.createElement("span"); // Create a <span> element
        letter = document.createTextNode(bylineArr[i]); // Create the letter
        if (bylineArr[i] === " ") {
          // If the letter is a space...
          byline.appendChild(letter); // ...Add the space without a span
        } else {
          span.appendChild(letter); // Add the letter to the span
          byline.appendChild(span); // Add the span to the h2
        }
      }
    }
  
    // start intro animation
    introScreen();
    // add event listener on intro screen
    
    $(".startHere").on("click", function() {
      // remove intro screen elements
      $(".starwars").remove();
      // call start function to create section elements
      start();
      // populate navbar with dad jokes on load.
      icanHaz(starterSubject);
    });
  });
  