const myLibrary = [];
let newBook = document.querySelector('.new-book');
let dialog = document.querySelector('dialog');
let confirm = document.querySelector('#confirm');
let bookInfo = document.querySelector('#book-info');
let tableBody = document.querySelector('tbody');
let cancelButton = document.querySelector('#cancel');

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function addBooks() {
    clearTable();
    myLibrary.forEach((value, index) => {
    let newRow = document.createElement('tr');
    let title = document.createElement('td');
    title.textContent = value.title;
    newRow.appendChild(title);
    let author = document.createElement('td');
    author.textContent = value.author;
    newRow.appendChild(author);
    let pages = document.createElement('td');
    pages.textContent = value.pages;
    newRow.appendChild(pages);
    let released = document.createElement('td');
    released.textContent = value.released;
    newRow.appendChild(released);
    let read = document.createElement('td');
    let booleanResult = value.read;
    read.textContent = booleanResult + ' ';
    let readToggle = document.createElement('button');
    readToggle.textContent = 'flip';
    readToggle.addEventListener('click', () => {
        if (read.textContent.includes('true')) {
            read.textContent = 'false ';
        } else {
            read.textContent = 'true '
        }
        read.appendChild(readToggle);
    })
    read.appendChild(readToggle);
    console.log(read);
    newRow.appendChild(read);
    let deletes = document.createElement('td');
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete!';
    deleteButton.addEventListener('click', () => {
        myLibrary.splice(index, 1);
        addBooks();
    })
    deletes.appendChild(deleteButton);
    newRow.appendChild(deletes);
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

let book1 = new Book('Mistborn', 'Brandon Sanderson', 541, 2006, true);
let book2 = new Book('A Game of Thrones', 'George Martin', 694, 1996, true);
let book3 = new Book('Pride and Prejudice', 'Jane Austen', 259, 1813, false);
let book4 = new Book('The Art of War', 'Sun Tzu', 260, -500, false);
let book5 = new Book('The MANIAC', 'Benjamin Labatut', 368, 2023, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);

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
    addBookToLibrary(book);
    addBooks();
    bookInfo.reset();
    dialog.close();
})

cancelButton.addEventListener('click', (e) => {
    e.preventDefault();
    bookInfo.reset();
    dialog.close();
})

function clearTable() {
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.lastChild);
    }
}

function readToggle() {

}