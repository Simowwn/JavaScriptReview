//Arrays

// Question 3: We are setting up our small library of books about JavaScript programming.
// We have three books and want to prepare a list of them. We will store three pieces information about
// each book: title, author, and number of pages:

let books = [
  {
    bookTitle: "Speaking JavaScript",
    bookAuthor: "Axel Rauschmayer",
    bookPages: "460",
  },
  {
    bookTitle: "Programming JavaScript Applications",
    bookAuthor: "Eric Elliott",
    bookPages: "254",
  },
  {
    bookTitle: "Understanding ECMAScript 6",
    bookAuthor: "Nicholas C. Zakas",
    bookPages: "352",
  },
];

// Question 4: Add a new book to the collection: Learning JavaScript Design Patterns, by Addy Osmani, 254 pages.
// Use the appropriate method to do this, which will attach the book at the end of the array. Display the length of the array and,
// in turn, all the book names in the collection.

let newBook = {
  bookTitle: "Learning JavaScript Design Patterns",
  bookAuthor: "Addy Osmani",
  bookPages: "254",
};
books.push(newBook);

books.forEach((book, index) => {
  console.log(
    `Book ${index + 1}: ${book.bookTitle} by ${book.bookAuthor}, ${
      book.bookPages
    } pages`
  );
});

// Question 5: Use the slice command to copy the last two books to the new array.

let lastTwoBooks = books.slice(-2);
console.log(lastTwoBooks);

// Question 6: The first book from the collection is lost in unexplained circumstances. You have already accepted the loss, so remove it from the array. Which method will you use for this purpose? Display the length of the array and all the names of the books from the collection in turn.
let removedBook = books.shift();
books.forEach((book, index) => {
  console.log(
    `Book ${index + 1}: ${book.bookTitle} by ${book.bookAuthor}, ${
      book.bookPages
    } pages`
  );
});

let totalPages =
  Number(books[0].bookPages) +
  Number(books[1].bookPages) +
  Number(books[2].bookPages);
console.log(`Total pages in the collection: ${totalPages}`);

let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];

let newContact = {
  name: "Maisie Haley",
  phone: "09135313030",
  email: "risus.Quisque@urna.ca.",
};

contacts.push(newContact);

contacts.forEach((contacts, index) => {
  console.log(
    `Contact ${index + 1}: ${contacts.name}, ${contacts.phone}, ${
      contacts.email
    }`
  );
});
