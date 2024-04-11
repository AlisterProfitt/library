const myLibrary = [];
let newBook = document.querySelector('.new-book');
let dialog = document.querySelector('dialog');
let confirm = document.querySelector('#confirm');
let bookInfo = document.querySelector('#book-info');
let tableBody = document.querySelector('tbody');
let cancelButton = document.querySelector('#cancel');
let rows = Array.from(document.querySelectorAll('tr'))

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function addBooks() {
    myLibrary.forEach((value) => {
    newRow = document.createElement('tr');
    title = document.createElement('td');
    title.textContent = value.title;
    newRow.appendChild(title);
    author = document.createElement('td');
    author.textContent = value.author;
    newRow.appendChild(author);
    pages = document.createElement('td');
    pages.textContent = value.pages;
    newRow.appendChild(pages);
    released = document.createElement('td');
    released.textContent = value.released;
    newRow.appendChild(released);
    read = document.createElement('td');
    read.textContent = value.read;
    newRow.appendChild(read);
    tableBody.appendChild(newRow);
})
}

function Book(title, author, pages, released, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.released = released;
    this.read = read;
}

// Add Some books as placeholders

let book1 = new Book('Mistborn', 'Brandon Sanderson', 307, 1995, true);
let book2 = new Book('Game of Thrones', 'George Martin', 2000, 1992, true);
let book3 = new Book('Pride and Prejudice', 'Jane Austin', 300, 1882, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

console.log(myLibrary);

addBooks();


newBook.addEventListener('click', () => {
    dialog.showModal();
})

bookInfo.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(bookInfo);
    const formObject = Object.fromEntries(formData);
    let title = formObject.title
    let author = formObject.author;
    let pages = formObject.pages;
    let released = formObject.released;
    let read = formObject.read;
    let book = new Book(title, author, pages, released, read);
    myLibrary.push(book);
    dialog.close();
})

cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
})

rows.forEach((value), () => {
    value.addEventListener('click', () => {

})
})