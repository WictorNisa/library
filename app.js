const bookcard = document.getElementById("book-card");
const addBook = document.getElementById("book-btn");
const dialog = document.getElementById("bookDialog");
const submit = document.getElementById("submit-btn");

const book = new Book(
  "Harry Potter and the Sorcerer's Stone",
  "JK Rowling",
  "309",
  true
);

const bookTwo = new Book("The Hobbit", "J. R. R. Tolkien", "300", false);

let myLibrary = [book, bookTwo];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

const displayBooks = (arr) => {
  bookcard.textContent = "";
  for (let i = 0; i < arr.length; i++) {
    const book = arr[i];
    const div = document.createElement("div");
    div.dataset.bookId = i;
    bookcard.appendChild(div);
    const title = document.createElement("h1");
    title.textContent = book.title;
    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;
    const pages = document.createElement("p");
    pages.textContent = `${book.pages} Pages`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.dataset.bookId = i;

    
    const read = document.createElement("p");
    read.textContent = `Read: ${book.read}`;

    
    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.textContent = "Toggle Read Status";
    toggleReadBtn.dataset.bookId = i;

    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    div.appendChild(deleteBtn);
    div.appendChild(toggleReadBtn);
  }
};

displayBooks(myLibrary);

function addBookToLibrary() {
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const readInput = document.getElementById("read");
  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.checked
  );
  myLibrary = [...myLibrary, newBook];
  displayBooks(myLibrary);
}

bookcard.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const bookId = e.target.dataset.bookId;
    myLibrary = myLibrary.filter((book, index) => index !== parseInt(bookId));
    displayBooks(myLibrary);
  }
  if (e.target.tagName === "BUTTON" && e.target.dataset.bookId !== undefined) {
    const bookId = e.target.dataset.bookId;
    myLibrary[bookId].toggleReadStatus();
    displayBooks(myLibrary);
  }
});

addBook.addEventListener("click", () => {
  dialog.showModal();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  dialog.close();
});
