const myLibrary = [];

function Book(title, author, year, pages, read = false) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
}


Book.prototype.toggleRead = function () {
    this.read = !this.read;

}

function addBookToLibrary(book) {
    myLibrary.push(book);
}


function resetBookShelf() {
    const bookshelf = document.querySelector('.bookshelf');
    while (bookshelf.firstChild) {
        bookshelf.removeChild(bookshelf.firstChild);
    }
}


function displayBook(book, index) {

    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const toggleReadBtn = document.createElement('input');
    toggleReadBtn.setAttribute('type', 'checkbox');
    toggleReadBtn.checked = book.read;
    toggleReadBtn.addEventListener('change', () => {
        book.toggleRead();
        displayLibrary();
    });


    for (const key in book) {
        if (Object.prototype.hasOwnProperty.call(book, key)) {
            if (key === 'read') {
                book[key] ? bookDiv.classList.add("isRead") : '';
            } else {
                const bookDetail = document.createElement('p');
                bookDetail.innerText = `${key}: ${book[key]}`
                bookDiv.append(bookDetail)
            }
        }
    }
    const reomveBtn = document.createElement('button');
    reomveBtn.textContent = 'Remove';
    reomveBtn.setAttribute('data-index', index);
    reomveBtn.addEventListener('click', removeBook);
    bookDiv.append(reomveBtn);


    bookDiv.append(toggleReadBtn);


    const bookshelf = document.querySelector('.bookshelf');
    bookshelf.appendChild(bookDiv);
}

function displayLibrary() {
    resetBookShelf();
    myLibrary.forEach((book, index) => {
        displayBook(book, index)
    });;
}


function removeBook(e) {
    const index = e.target.getAttribute('data-index');
    myLibrary.splice(index, 1);
    console.log(myLibrary);
    displayLibrary();
}

const bookshelf = document.querySelector('.bookshelf');


const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const addBtn = document.querySelector('#add-btn');



addBtn.addEventListener(
    'click', (e) => {
        addNewBook(e);
        displayLibrary();
    }
)

function addNewBook(e) {
    e.preventDefault();
    const book = new Book(title.value, author.value, year.value, pages.value, read.checked);
    addBookToLibrary(book);
}

