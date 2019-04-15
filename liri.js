// Reads and sets any environment variables with the dotenv package
require("dotenv").config();

//Global Variables
var request = require("request");
var fs = require("fs");
var moment = require("moment");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2]; 
var entry = process.argv.slice(3);

UserInputs(command, entry);

//User Input
function UserInputs (command, entry){
    switch (command) {
    case "concert-this":
        showConcertInfo(entry);
        break;
    case "spotify-this-song":
        showSongInfo(entry);
        break;
    case "movie-this":
        showMovieInfo(entry);
        break;
    case "do-what-it-says":
        showSomeInfo();
        break;
    default: 
        console.log("\n==================\nPlease enter of the following options followed by your search terms:\n\nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says\n==================")
    }
}

//Bands in Town

//TODO: 
    // Fix error in concerts where date isn't returned from API in proper format. Happens sometimes. 
    // Fix error where bands with more than one word in the name doesn't return expected data.

    // In README.md, fix portion that doesn't display as block of code in bash format.

function showConcertInfo(entry){
    var queryUrl = "https://rest.bandsintown.com/artists/" + entry + "/events?app_id=codingbootcamp";
    request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
        var concerts = JSON.parse(body);
        // Logs data to console and appends to log.txt
        for (var i = 0; i < 10; i++) {  
            console.log("====== EVENT INFO ======");  
            fs.appendFileSync("log.txt", "====== EVENT INFO ======\n");
            console.log(i);
            fs.appendFileSync("log.txt", i+"\n");
            console.log("City: " +  concerts[i].venue.city);
            fs.appendFileSync("log.txt", "City: " +  concerts[i].venue.city+"\n");
            console.log("Concert Venue: " + concerts[i].venue.name);
            fs.appendFileSync("log.txt", "Concert Venue: " + concerts[i].venue.name+"\n");
            console.log("Date: " +  moment(concerts[i].datetime).format("LLLL"));
            fs.appendFileSync("log.txt", "Date: " +  moment(concerts[i].datetime+"\n").format("LLLL"));
            console.log("==================");
            fs.appendFileSync("log.txt", "=================="+"\n");
        }
    } else{
      console.log("Error.");
    }
});}

//Spotify
function showSongInfo(entry) {
    if (entry === undefined) {
        entry = "Never Gonna Give You Up"; // Classic.
    }
    spotify.search(
        {
            type: "track",
            query: entry
        },
        function (err, data) {
            if (err) {
                console.log("Error: " + err);
                return;
            }
            var songs = data.tracks.items;

            for (var i = 0; i < 10; i++) {
                console.log("====== SONG INFO ======");
                fs.appendFileSync("log.txt", "====== SONG INFO ======\n");
                console.log(i);
                fs.appendFileSync("log.txt", i +"\n");
                console.log("Song name: " + songs[i].name);
                fs.appendFileSync("log.txt", "song name: " + songs[i].name +"\n");
                console.log("Preview song: " + songs[i].preview_url);
                fs.appendFileSync("log.txt", "preview song: " + songs[i].preview_url +"\n");
                console.log("Album: " + songs[i].album.name);
                fs.appendFileSync("log.txt", "album: " + songs[i].album.name + "\n");
                console.log("Artist(s): " + songs[i].artists[0].name);
                fs.appendFileSync("log.txt", "artist(s): " + songs[i].artists[0].name + "\n");
                console.log("==================");  
                fs.appendFileSync(
									"log.txt",
									"==================\n"
								);
             }
        }
    );
};

//OMDB
function showMovieInfo(entry){
    if (entry === undefined) {
        entry = "The Departed"
        console.log("==================");
        fs.appendFileSync("log.txt", "==================\n");
        console.log("If you haven't watched 'The Departed,' then you should: https://www.imdb.com/title/tt0407887/");
        fs.appendFileSync("log.txt", "If you haven't watched 'The Departed,' then you should: https://www.imdb.com/title/tt0407887/" +"\n");
        console.log("It's on Netflix!");
        fs.appendFileSync("log.txt", "It's on Netflix!\n");
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + entry + "&y=&plot=short&r=json&tomatoes=true&apikey=trilogy";
    request(queryUrl, function(error, response, body) {

    if (!error && response.statusCode === 200) {
        var movies = JSON.parse(body);
        console.log("====== MOVIE INFO ======");  
        fs.appendFileSync("log.txt", "====== MOVIE INFO ======\n");
        console.log("Title: " + movies.Title);
        fs.appendFileSync("log.txt", "Title: " + movies.Title + "\n");
        console.log("Release Year: " + movies.Year);
        fs.appendFileSync("log.txt", "Released: " + movies.Year + "\n");
        console.log("IMDB Rating: " + movies.imdbRating);
        fs.appendFileSync("log.txt", "IMDB Rating: " + movies.imdbRating + "\n");
        console.log("Rotten Tomatoes Freshness: " + movies.Ratings[1].Value);
        fs.appendFileSync("log.txt", "Rotten Tomatoes Freshness: " + movies.Ratings[1].Value + "\n");
        console.log("Country of Production: " + movies.Country);
        fs.appendFileSync("log.txt", "Country of Production: " + movies.Country + "\n");
        console.log("Language: " + movies.Language);
        fs.appendFileSync("log.txt", "Language: " + movies.Language + "\n");
        console.log("Plot: " + movies.Plot);
        fs.appendFileSync("log.txt", "Plot: " + movies.Plot + "\n");
        console.log("Actors: " + movies.Actors);
        fs.appendFileSync("log.txt", "Actors: " + movies.Actors + "\n");
        console.log("==================");  
        fs.appendFileSync("log.txt", "==================\n");
    } else{
      console.log("Error.");
    }

});}

// Checks random.txt
function showSomeInfo(){
	fs.readFile("random.txt", "utf8", function(err, data){
		if (err){ 
			return console.log(err);
		}
        var dataArr = data.split(",");
        UserInputs(dataArr[0], dataArr[1]);
	});
}
