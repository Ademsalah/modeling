function addMovies(Title, Description, Rating, Actors) {
  return {
    Title: Title,
    Description: Description,
    Rating: Rating,
    Actors: Actors,
  };
}

var movie1 = addMovies("joker", "funny", 5, [
  { name: "hmed", role: "bradd bitt" },
  { name: "mohsen", role: "angelina" },
  { name: "jillani", role: "jolie" },
]);
var movie2 = addMovies("joke", "horror", 7, [
  { name: "hosni", role: "mounas9" },
  { name: "tawfi9", role: "ahemed hamdi" },
  { name: "jillani", role: "3adel imem" },
]);
var movie3 = addMovies("will huntinhg", "drama", 6.5, [
  { name: "hosni", role: "feten hamema " },
  { name: "tawfi9", role: "robert" },
  { name: "jillani", role: "di niro" },
]);
var movie4 = addMovies("die hard", "action", 5.5, [
  { name: "brell", role: "walter" },
  { name: "sankoo7", role: "whilte" },
  { name: "fighouli", role: "jr" },
]);
var movie5 = addMovies("reboot", "documentaire", 8, [
  { name: "bringa", role: "lion" },
  { name: "mohsen", role: "lizard" },
  { name: "sarah", role: "giraffe " },
]);

function display(movie) {
  return (
    movie.Title +
    " " +
    movie.Description +
    " " +
    movie.Rating +
    movie.Actors +
    "."
  );
}
function displayC(movie) {
  for (let i = 0; i < movie.length; i++) {
    const element = array[i];
  }
  return movie.Actors.name + " " + movie.Actors.role;
}
var movies = [movie1, movie2, movie3, movie4, movie5];
function dispMovies() {
  var result = "";
  for (let i = 0; i < arr.length; i++) {
    result += display(movies[i]);
  }
  return result;
}
function aver(movies) {
  var x = 0;
  for (let i = 0; i < movies.length; i++) {
    x += movies[i].Rating;
  }
  return x / movies.length;
}
function isMatch(movie, query) {
  for (let i = 0; i < display(movie).length; i++) {
    if (
      query.toLowerCase() ===
      display(movie).substr(i, query.length).toLowerCase()
    ) {
      return true;
    }
  }
}
function ser(movies, query) {
  for (let i = 0; i < movies.length; i++) {
    if (isMatch(movies[i], query) === true) {
      return movies[i];
    }
  }
  return false;
}
