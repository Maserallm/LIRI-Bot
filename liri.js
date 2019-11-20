// code for dotenv package
const dotenv = require("dotenv").config();
const keys = require("./keys.js");

const spotify = new Spotify(keys.spotify);
console.log("spotify");
