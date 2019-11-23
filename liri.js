// code for required packages
const axios = require("axios");
require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys.js");

const spotify = new Spotify(keys.spotify);
const omdbKey = new axios(keys.omdb);

const commands = process.argv[2];
const secCommand = process.argv[3];

//switch case statements

switch (commands) {
  case "concert-this":
    // code to search BIT API
    if (secCommand) {
      axios
        .get(
          "https://rest.bandsintown.com/artists/" +
            secCommand +
            "/events?app_id=codingbootcamp"
        )
        .then(response => {
          console.log(response.venue.name);
          console.log(`Location: ${response.venue.city}`);
        })
        .catch(err => {
          if (err) {
            console.log(err);
          }
        });
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
    break;
  case "do-what-it-says":
    // takes random.txt file & runs switch commands
    break;
}
/*function spotSearch(song) {
  spotify.search({ type: "track", query: song, limit: 1 }, function(err, data) {
    if (err) {
      throw console.log("Error occurred: " + err);
    } else {
      for (let i = 0; i < data.tracks.items.length; i++) {
        let songInfo = data.tracks.items[i];

        console.log(`Artists: ${songInfo.artists[0].name}`);
        console.log(`Name of the Song: ${songInfo.name}`);
        console.log(`Click to preview it: ${songInfo.preview_url}`);
        console.log(`Album: ${songInfo.album.name}`);
      }
    }
  });
}*/

//   axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"", )
