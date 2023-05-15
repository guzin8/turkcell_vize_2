// // Values
// const bookName = document.getElementById("bookName");
// const writer = document.getElementById("writer");
// const dateOfBook = document.getElementById("dateOfBook");
// const cover = document.getElementById("cover");
// const category = document.getElementById("category");

// const bookCollectionRow = document.querySelector(".book-collection");
// const searchButton = document.getElementById("search");

// const sortByAlphabetButton = document.getElementById("sortByAlphabet");
// const sortByAlphabetReverseButton = document.getElementById("sortByAlphabetReverse");
// const sortByYearButton = document.getElementById("sortByYear");

// //Event listeners 
// sortByAlphabetButton.addEventListener("click", sortByAlphabet);
// sortByAlphabetReverseButton.addEventListener("click", sortByAlphabetReverse);
// sortByYearButton.addEventListener("click", sortByYear);
// searchButton.addEventListener("keyup", searchBook);
// document.getElementById("bookForm").addEventListener("submit", addBook);
// bookCollectionRow.addEventListener("click", deleteBook)
// bookCollectionRow.addEventListener("click", updateBook)
// document.addEventListener("DOMContentLoaded", function () {
//     const books = storage.getBooksFromStorage();

//     books.forEach(function (book) {
//         ui.addBookToList(book);
//     });
// });

// function createBookCard(book) {
//     return `
//     <div class="col-md-3 my-3 cardBook" id="${book.id}">
//     <div class="card h-100">
//     <img
//       src=${book.cover}
//       class="card-img-top book-cover"
//       alt="..."
//     />
//     <div class="card-body">
//       <h2 class="card-title book-title">${book.bookName}</h2>
//       <h4 class="card-title dateOfBook">${book.dateOfBook}</h4>
//       <h4 class="card-title book-category">${book.category}</h4>
//       <h6 class="card-title writer">${book.writer}</h6>
//       <button class="btn btn-danger book-delete ">Delete</button>
//       <button class="btn btn-warning book-edit">Edit</button>
//       </div>
//       </div>
//       </div>
//       `;
// }
// //Book class

// class Book{
//     constructor(bookName, writer, dateOfBook, cover, category) {
//     this.id = Date.now();
//     this.bookName = bookName;
//     this.writer = writer;
//     this.dateOfBook = dateOfBook;
//     this.cover = cover;
//     this.category = category;
// }
// }

// //Storage class and functions
// class Storage {
//     getBooksFromStorage () {
//         let books;
    
//         if (localStorage.getItem("books")) {
//             books = JSON.parse(localStorage.getItem("books"));
//         } else {
//             books = [];
//         }
//         return books;
//     };

//     addBookToStorage(book) {
//         const books = this.getBooksFromStorage();
    
//         books.push(book);
    
//         localStorage.setItem("books", JSON.stringify(books));
//     };

//     deleteBookFromStorage (index) {
//         const books = this.getBooksFromStorage();
//         books.splice(index, 1);
//         localStorage.setItem("books", JSON.stringify(books));
//     };   
//  }

// // UI class and functions

// class UI{
//     addBookToList (newBook) {
//         bookCollectionRow.innerHTML += createBookCard(newBook);
//     };

//     clearFormFields () {
//         document.getElementById("bookName").value = "";
//         document.getElementById("writer").value = "";
//         document.getElementById("dateOfBook").value = "";
//         document.getElementById("cover").value = "";
//         document.getElementById("category").value = ""
//     };

//     deleteBookFromList (book) {
//         book.remove();
//     }
//     updateBookForm  (book) {
//         bookName.value = book.bookName;
//         writer.value = book.writer;
//         dateOfBook.value = book.dateOfBook;
//         cover.value = book.cover;
//         category.value = book.category;
//     };
//  };

// const ui = new UI();
// const storage = new Storage();

// function addBook(event) {
//     event.preventDefault();

//     const bookName = document.getElementById("bookName").value;
//     const writer = document.getElementById("writer").value;
//     const dateOfBook = document.getElementById("dateOfBook").value;
//     const cover = document.getElementById("cover").value;
//     const category = document.getElementById("category").value;

//     const book = new Book(bookName, writer, dateOfBook, cover, category);

//     ui.addBookToList(book);
//     storage.addBookToStorage(book);
//     ui.clearFormFields();

// }

// function deleteBook(event) {
//     if (event.target.classList.contains("book-delete")) {
//         let book = event.target.parentElement.parentElement.parentElement;
//         storage.deleteBookFromStorage(book.index);
//         ui.deleteBookFromList(book);
//     }
//     event.preventDefault();
// }

// function updateBook(event) {
//     if (event.target.classList.contains("book-edit")) {
//         let book = event.target.parentElement.parentElement.parentElement;
//         books = storage.getBooksFromStorage();
//         ui.updateBookForm(book);
//         console.log(book.bookName)
//         ui.deleteBookFromList(book);
//         storage.deleteBookFromStorage(book.index);
//     }

//     event.preventDefault();

// }

// function searchBook(event) {
//     let books = storage.getBooksFromStorage();
//     let filteredBooks = [];
//     const searchedBook = event.target.value.toLowerCase();
//     console.log(searchedBook);

//     books.forEach(function (book) {
//         const text = book.bookName.toLowerCase();
//         console.log(text);
//         if (text == book.bookName) {
//             filteredBooks.push(book);
//         }
//     });
//     localStorage.setItem("books", JSON.stringify(filteredBooks));
// }

// function sortByAlphabet() {
//     let books = storage.getBooksFromStorage();
//     let bookNames = [];
//     books.forEach(function (book) {
//         bookNames.push(book.bookName.toLowerCase());
//     })
//     bookNames.sort();
//     console.log(bookNames);
// }

// function sortByAlphabetReverse() {
//     let books = storage.getBooksFromStorage();
//     let bookNames = [];
//     books.forEach(function (book) {
//         bookNames.push(book.bookName.toLowerCase());
//     })
//     bookNames.sort().reverse();
//     console.log(bookNames);
// }

// function sortByYear() {
//     let books = storage.getBooksFromStorage();
//     let bookDates = [];

//     books.forEach(function (book) {
//         bookDates.push(book.dateOfBook);
//     })
//     const sonuc = bookDates.sort((a, b) => a - b);
//     console.log(sonuc);
// }

// Values
const bookName = document.getElementById("bookName");
const writer = document.getElementById("writer");
const dateOfBook = document.getElementById("dateOfBook");
const cover = document.getElementById("cover");
const category = document.querySelector('input[name="rate"]:checked');
const categories = document.querySelectorAll("input[name=categories");

const bookCollectionRow = document.querySelector(".book-collection");
const searchButton = document.getElementById("search");

const sortByAlphabetButton = document.getElementById("sortByAlphabet");
const sortByAlphabetReverseButton = document.getElementById("sortByAlphabetReverse");
const sortByYearButton = document.getElementById("sortByYear");
const writerFilter = document.getElementById("writerFilter");

//Event listeners 
sortByAlphabetButton.addEventListener("click", sortByAlphabet);
sortByAlphabetReverseButton.addEventListener("click", sortByAlphabetReverse);
sortByYearButton.addEventListener("click", sortByYear);
searchButton.addEventListener("keyup", searchBook);
writerFilter.addEventListener("keyup",filterWriter);
document.getElementById("bookForm").addEventListener("submit", addBook);
bookCollectionRow.addEventListener("click", deleteBook)
bookCollectionRow.addEventListener("click", updateBook)
writerFilter.addEventListener("click",filterWriter);
document.addEventListener("DOMContentLoaded", function () {
    const books = storage.getBooksFromStorage();

    books.forEach(function (book) {
        ui.addBookToList(book);
    });
});

//Book constructor

class Book{
    constructor(bookName, writer, dateOfBook, cover, category) {
        this.id = Date.now();
        this.bookName = bookName;
        this.writer = writer;
        this.dateOfBook = dateOfBook;
        this.cover = cover;
        this.category = category;
}    
}

//Storage constructor and prototypes
class Storage{ 
    getBooksFromStorage() {
        let books;
    
        if (localStorage.getItem("books")) {
            books = JSON.parse(localStorage.getItem("books"));
        } else {
            books = [];
        }
        return books;
    }
    addBookToStorage(book) {
        const books = this.getBooksFromStorage();
    
        books.push(book);
    
        localStorage.setItem("books", JSON.stringify(books));
    };

    deleteBookFromStorage(index) {
        const books = this.getBooksFromStorage();
        books.splice(index, 1);
        localStorage.setItem("books", JSON.stringify(books));
    };
    
}

// UI constructor and prototypes

class UI{
    addBookToList(newBook) {

        bookCollectionRow.innerHTML += createBookCard(newBook);
    };
    clearFormFields = function () {
        document.getElementById("bookName").value = "";
        document.getElementById("writer").value = "";
        document.getElementById("dateOfBook").value = "";
        document.getElementById("cover").value = "";
        document.querySelector('input[name="rate"]:checked').value = ""
    };
    deleteBookFromList(book) {
        book.remove();
    }
    updateBookForm(book) {
        bookName.value = book.bookName;
        writer.value = book.writer;
        dateOfBook.value = book.dateOfBook;
        cover.value = book.cover;
        category.value = book.category;
    };
    listOfBook(books){
        books.forEach(function(book){
            bookCollectionRow.innerHTML += createBookCard(book);
        })
        }
 };
function createBookCard(book) {
    return `
    <div class="col-md-3 my-3 cardBook" id="${book.id}">
    <div class="card h-100">
    <img
      src=${book.cover}
      class="card-img-top book-cover"
      alt="..."
    />
    <div class="card-body">
      <h2 class="card-title book-title">${book.bookName}</h2>
      <h4 class="card-title writer">${book.writer}</h4>
      <h6 class="card-title dateOfBook">${book.dateOfBook}</h6>
      <h6 class="card-title book-category">${book.category}</h6>
      
      <button class="btn btn-danger book-delete ">Sil</button>
      <button class="btn btn-warning book-edit">Guncelle</button>
      </div>
      </div>
      </div>
      `;
}

const ui = new UI();
const storage = new Storage();

function addBook(event) {
    event.preventDefault();

    const bookName = document.getElementById("bookName").value;
    const writer = document.getElementById("writer").value;
    const dateOfBook = document.getElementById("dateOfBook").value;
    const cover = document.getElementById("cover").value;
    const category = document.querySelector('input[name="rate"]:checked').value;

    const book = new Book(bookName, writer, dateOfBook, cover, category);

    ui.addBookToList(book);
    storage.addBookToStorage(book);
    ui.clearFormFields();

}

function deleteBook(event) {
    if (event.target.classList.contains("book-delete")) {
        let book = event.target.parentElement.parentElement.parentElement;
        storage.deleteBookFromStorage(book.index);
        ui.deleteBookFromList(book);
    }
    event.preventDefault();
}

function updateBook(event) {
    if (event.target.classList.contains("book-edit")) {
        let book = event.target.parentElement.parentElement.parentElement;
        console.log(book)
        books = storage.getBooksFromStorage();
        ui.updateBookForm(book);
        console.log(book.bookName)
        ui.deleteBookFromList(book);
        storage.deleteBookFromStorage(book.index);
    }

    event.preventDefault();

}

function searchBook(event) {
    const searchedBook = event.target.value.toLowerCase(); 
    let bookCards = document.querySelectorAll(".book-title");
    bookCards.forEach(function (bookCard) {
        const text = bookCard.textContent.toLowerCase();
        if (text.indexOf(searchedBook) === -1) {
            bookCard.parentElement.parentElement.style.display="none";

        } else {  
            bookCard.parentElement.parentElement.style.display="block";
        }
      });

}

function refreshBookDisplay() {
    let libraryContainer = document.getElementById("book-collection");
  
    while (libraryContainer.lastChild) {
      libraryContainer.removeChild(libraryContainer.lastChild);
    }

  }

function sortByAlphabet() {
    let books = storage.getBooksFromStorage();
    books.sort(turkcesiralama);
    function turkcesiralama(a, b){
        var atitle = a.bookName;
        var btitle = b.bookName;
        var alfabe = "AaBbCcÇçDdEeFfGgĞğHhIıİiJjKkLlMmNnOoÖöPpQqRrSsŞşTtUuÜüVvWwXxYyZz0123456789";
        if (atitle.length === 0 || btitle.length === 0) {
            return atitle.length - btitle.length;
        }
        for(var i=0;i<atitle.length && i<btitle.length;i++){
            var ai = alfabe.indexOf(atitle[i]);
            var bi = alfabe.indexOf(btitle[i]);
            if (ai !== bi) {
                return ai - bi;
            }
        }
    }
    refreshBookDisplay();
    localStorage.setItem("books", JSON.stringify(books));
    ui.listOfBook(books);
    console.log(books);
}

function sortByAlphabetReverse() {
     let books = storage.getBooksFromStorage();

    books.sort(sortAlphabet).reverse();
    function sortAlphabet(a, b){
        var atitle = a.bookName;
        var btitle = b.bookName;
        var alphabet = "AaBbCcÇçDdEeFfGgĞğHhIıİiJjKkLlMmNnOoÖöPpQqRrSsŞşTtUuÜüVvWwXxYyZz0123456789";
        if (atitle.length === 0 || btitle.length === 0) {
            return atitle.length - btitle.length;
        }
        for(var i=0;i<atitle.length && i<btitle.length;i++){
            var ai = alphabet.indexOf(atitle[i]);
            var bi = alphabet.indexOf(btitle[i]);
            if (ai !== bi) {
                return ai - bi;
            }
        }
    }
    refreshBookDisplay();
    localStorage.setItem("books", JSON.stringify(books));
    ui.listOfBook(books);
    console.log(books);
}

function sortByYear() {
    let books = storage.getBooksFromStorage();
    books.sort(sortYear);
    function sortYear(a,b){
        a=a.dateOfBook;
        b=b.dateOfBook;
        return a-b;
    }
    refreshBookDisplay();
    localStorage.setItem("books", JSON.stringify(books));
    ui.listOfBook(books);
    console.log(books);
}
categories.forEach(category=>category.addEventListener("change",filterCategory));

function filterCategory(event){
    console.log(event.target.value)
    let books = storage.getBooksFromStorage();
    let filteredBooks = books.filter(function (book)
    {
      return book.category == event.target.value;
    }
    );
    refreshBookDisplay();
    //localStorage.setItem("books", JSON.stringify(filteredBooks));
    console.log(filteredBooks);
    ui.listOfBook(filteredBooks);
}

function filterWriter(event){

    const searchedBook = event.target.value.toLowerCase(); 
    let bookCards = document.querySelectorAll(".writer");
    bookCards.forEach(function (bookCard) {
        const text = bookCard.textContent.toLowerCase();
        if (text.indexOf(searchedBook) === -1) {
            bookCard.parentElement.parentElement.style.display="none";

        } else {  
            bookCard.parentElement.parentElement.style.display="block";
        }
      });
}

