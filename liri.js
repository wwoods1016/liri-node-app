// Reads and sets any environment variables with the dotenv package
require("dotenv").config();

//Global Variables
var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

