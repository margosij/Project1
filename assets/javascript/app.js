var randomJoke;
var jokeCategory = “Miscellaneous”;
var format = “json”;
var blacklistFlags = “nsfw”;

$.ajax({
    method: “GET”,
    url: `https://sv443.net/jokeapi/category/${jokeCategory}?blacklistFlags=${blacklistFlags}&format=${format}`,
    success: (data, status) => {
        randomJoke = JSON.parse(data);
    }
});