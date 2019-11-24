# LIRI Bot CLI

[![IMAGE ALT TEXT HERE](wp2465899-javascript-wallpapers.jpg)](https://drive.google.com/file/d/1t6RnO3-BIHhh_yzuL1nK8iHspHfsUoDq/preview)

https://drive.google.com/file/d/1t6RnO3-BIHhh_yzuL1nK8iHspHfsUoDq/preview

Welcome to LIRI. This is a Language Interpreatation and Recognition Interface that listens for commands written in the command line interface in node. With this CLI, you can search spotify for your favorite songs; it will pull up information about these songs like the album the song was on, the artist that are on there, and even a link to preview the song.

You can also search to see what artists and bands are playing around the world; and you can find fun facts about your favorite movies.

---

### Getting Started

When users enter into github repository, clone the repository onto their local machine through their local terminal. Users will need to do an npm install in order to have all of the modules unpacked and ready to be used for the CLI.

After the install, users will need to create their own .env file that will store their spotify ID and secret ID keys. User then will be able to open the command line and run the application.

To initiate calls user must make sure that they are in the correct directory that the repository was cloned to. Then to activate node the user must type in "node" as their initial argument and then "liri.js" as the second argument. User must follow this syntax ("node liri.js") each time a request for information in node is made.

When the initial syntax is typed in command, users can then type in "spotify-this-song", "concert-this", "movie-this", or "do-what-it-says" as the third argument. After this third arguement the user can input certain search parameters to retrieve information about concerts, music, movies,and what is in the random.txt file. Here's what each call does:

- `concert-this <artist/band name here>` - This will search the Bands in Town Artist Events API

- `spotify-this-song <song name here>` - This will show information from Spotify API about the song in your terminal/bash window.

- `movie-this <movie name here>` - This will output movie information from OMDB API to your terminal/bash window.

- `do-what-it-says` - LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands

---

### Link to Github Repo and LIRI Demonstration

- https://github.com/Maserallm/LIRI-Bot
- https://drive.google.com/file/d/1t6RnO3-BIHhh_yzuL1nK8iHspHfsUoDq/preview

### Technologies Used in LIRI Application

1. [Node.js](https://nodejs.org/en/docs/)
2. [Axios](https://www.npmjs.com/package/axios)
3. [Dotenv](https://www.npmjs.com/package/dotenv)
4. [Spotify-API](https://www.npmjs.com/package/node-spotify-api)
5. [Moment.js](https://momentjs.com/docs/#/use-it/node-js/)
6. [fs](https://nodejs.org/api/fs.html)

---

### Contribution

I am the sole contributor to this application.
