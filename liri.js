// code for required packages
require("dotenv").config();
const axios = require("axios");
const Spotify = require("node-spotify-api");
const keys = require("./keys.js");
const moment = require("moment");
const fs = require("fs");

const spotify = new Spotify(keys.spotify);

//caused promise handling error in terminal. Hard coded OMDB-APIKEY
//const omdbKey = new axios(keys.omdb);
//console.log(omdbKey);

const commands = process.argv[2];
const secCommand = process.argv.slice(3).join(" ");

//switch case statements
switch (commands) {
  case "concert-this":
    // code to search BIT API
    if (secCommand) {
      bandsInTown();
    } else {
      console.log("This artist has no upcoming shows.");
    }
    break;
  case "spotify-this-song":
    // code to pull song info
    if (secCommand) {
      spotSearch(secCommand);
    } else {
      spotSearch("Everything We Need");
    }
    break;
  case "movie-this":
    // pull movie info though OMDB
    if (secCommand) {
      movieSearch(secCommand);
    } else {
      movieSearch("Mr. Nobody");
    }
    break;
  case "do-what-it-says":
    // takes random.txt file & runs switch commands
    dwis();
    break;
}

function bandsInTown() {
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        secCommand +
        "/events?app_id=codingbootcamp"
    )
    .then(response => {
      let info = response.data[0];
      console.log("______________BIT DATA______________");
      console.log(`Venue: ${info.venue.name}`);
      console.log(
        `Location: ${info.venue.city}, ${info.venue.region}, ${info.venue.country}`
      );
      console.log(moment(info.datetime).format("MM/DD/YYYY"));
      console.log("________________________________________");
    })
    .catch(err => {
      if (err) {
        console.log(err.response);
      }
    });
}

function spotSearch(song) {
  spotify.search({ type: "track", query: song, limit: 1 }, function(err, data) {
    if (err) {
      throw console.log("Error occurred: " + err);
    } else {
      for (let i = 0; i < data.tracks.items.length; i++) {
        let songInfo = data.tracks.items[i];
        console.log("________________________________________");
        console.log(`Artists: ${songInfo.artists[0].name}`);
        console.log(`Name of the Song: ${songInfo.name}`);
        console.log(`Click to preview it: ${songInfo.preview_url}`);
        console.log(`Album: ${songInfo.album.name}`);
        console.log("________________________________________");
      }
    }
  });
}

function movieSearch(movie) {
  axios
    .get("http://www.omdbapi.com/?apikey=trilogy&t=" + movie)
    .then(response => {
      let movieInfo = response.data;
      console.log("________________________________________");
      console.log(`Movie Title: ${movieInfo.Title}`);
      console.log(`Release Year: ${movieInfo.Year}`);
      console.log(`IMDB Rating: ${movieInfo.imdbRating}`);
      console.log(`Rotten Tomatoes Rating: ${movieInfo.Ratings[1].Value}`);
      console.log(`Country: ${movieInfo.Country}`);
      console.log(`Language: ${movieInfo.Language}`);
      console.log(`Plot: ${movieInfo.Plot}`);
      console.log(`Actors: ${movieInfo.Actors}`);
      console.log(`Awards: ${movieInfo.Awards}`);
      console.log("________________________________________");
    })
    .catch(err => {
      if (err) {
        console.log(err.response);
      }
    });
}

function dwis() {
  fs.readFile("random.txt", "utf8", function(err, data) {
    let randTxt = data.split(",");
    //console.log(randTxt[1]);

    spotSearch(randTxt[1]);
    if (err) {
      throw err;
    } else {
      console.log("Listen to the Node Vibes");
    }
  });
}
