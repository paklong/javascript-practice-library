const myLibrary = [];

function Book(title, author, year, pages, read = false) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBook(book) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

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
    const bookshelf = document.querySelector('.bookshelf');
    bookshelf.appendChild(bookDiv);
}

function displayLibrary(library) {
    library.map(displayBook);
}

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 281);
const book2 = new Book("1984", "George Orwell", 1949, 328, true);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, 180);
const book4 = new Book("Moby Dick", "Herman Melville", 1851, 635);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

displayLibrary(myLibrary);