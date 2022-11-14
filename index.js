function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const value = fetch("https://anapioficeandfire.com/api/books");
  return value;
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks()
    .then((res) => res.json())
    .then((json) => {
      renderBooks(json);
    });
});
