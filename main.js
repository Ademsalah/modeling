function makeBook(title, author, genre) {
  return {
    title: title,
    author: author,
    genre: genre,
  };
}
function display(book) {
  return book.title + " " + book.author + " " + book.genre + ".";
}
var book1 = makeBook(
  "Structure and Interpretation of Computer Programs",
  "Gerald Jay Sussman, Hal Abelson",
  "drama"
);
var book2 = makeBook("Harry Potter", "J.K. Rowling", "fantasy");
var books = [book1, book2];

function dispBooks() {
  var result = "";
  for (let i = 0; i < arr.length; i++) {
    result = arr[i].title + " " + arr[i].author + " " + arr[i].genre + ".\n ";
  }
  return result;
}

function isMatch(book, query) {
  for (let i = 0; i < display(book).length; i++) {
    if (
      query.toLowerCase() ===
      display(book).substr(i, query.length).toLowerCase()
    ) {
      return true;
    }
  }
}
function ser(books, query) {
  for (let i = 0; i < books.length; i++) {
    if (isMatch(books[i], query) === true) {
      return true;
    }
  }
  return false;
}
function remove(books, name) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].name === name) {
      books.splice(i, 1);
    }
  }
}
