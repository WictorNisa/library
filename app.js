let bookcard = document.getElementById("book-card");
const addBook = document.getElementById("book-btn");
const dialog = document.getElementById("bookDialog");
const submit = document.getElementById("submit-btn");

const book = new Book(
  (title = "Harry Potter and the Sorcerer's Stone"),
  (author = "JK Rowling"),
  (pages = "309"),
  (read = "Yes")
);

const bookTwo = new Book("The Hobbit", "J. R. R. Tolkien ", "300", "no");

let myLibrary = [book, bookTwo];

const displayBooks = (arr) => {
  bookcard.textContent = "";
  for (let i = 0; i < arr.length; i++) {
    const book = arr[i];
    const div = document.createElement("div");
    bookcard.appendChild(div);
    const title = document.createElement("h1");
    title.textContent = book.title;
    const author = document.createElement("p");
    author.textContent = book.author;
    const pages = document.createElement("p");
    pages.textContent = book.pages;
    const read = document.createElement("p");
    read.textContent = book.read;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    div.appendChild(deleteBtn);
  }
};

displayBooks(myLibrary);

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const readInput = document.getElementById("read");

  const newBook = new Book();
  newBook.title = titleInput.value;
  newBook.author = authorInput.value;
  newBook.pages = pagesInput.value;
  newBook.read = readInput.checked;
  myLibrary = [...myLibrary, newBook];
  displayBooks(myLibrary);
}

addBook.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  dialog.close();
});
