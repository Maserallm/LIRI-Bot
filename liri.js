// code for required packages
const axios = require("axios");
const dotenv = require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys.js");
console.log(keys);

const spotify = new Spotify(keys.spotify);
// const omdbKey = new Omdb(keys.omdb);

// const searchParam1 = process.argv[2];
// const searchParam2 = process.argv[3];

// //spotify.searchParam;
// console.log(dotenv);

// switch case statements
// switch(searchParam1) {
//     case:

// }

spotify.search({ type: "track", query: "All the Small Things" }, function(
  err,
  data
) {
  if (err) {
    return console.log("Error occurred: " + err);
  }

  console.log(data);
});

//   axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"", )
