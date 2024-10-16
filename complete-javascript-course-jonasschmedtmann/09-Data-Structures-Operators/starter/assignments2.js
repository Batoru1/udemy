/* Data used in exercises */
const bookz = [
  {
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: ['fantasy', 'high-fantasy', 'adventure'],
    filmAdaptation: true,
    otherLanguagesTitle: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
  },
  {
    title: 'The Cyberiad',
    publicationDate: 1965,
    author: 'Stanislaw Lem',
    genres: ['science fiction'],
    otherLanguagesTitle: {
      polish: 'Cyberiada',
      spanish: 'Ciberiada',
      french: 'Cybériade',
    },
  },
  {
    title: 'Dune',
    publicationDate: 1965,
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    filmAdaptation: true,
    otherLanguagesTitle: {},
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    filmAdaptation: true,
    otherLanguagesTitle: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
  },
  {
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    filmAdaptation: true,
    otherLanguagesTitle: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
  },
];

/* ⚠️ YOU WILL CALL THE FUNCTIONS BELOW IN EXERCISES.
     DON'T WORRY IF THEY DON'T MAKE SENSE FOR NOW.
     YOU WILL LEARN EVERYTHING A BIT LATER IN THE COURSE.
     FOR NOW TREAT THEM AS BLACK BOXES (focus on the values they return).
     YOU CAN CALL THEM AND LOG THE RETURNED VALUE TO THE CONSOLE TO SEE WHAT EXACTLY THEY RETURN. */

const getBooksByGenre = genre =>
  bookz.filter(book => book.genres.includes(genre));

const getBooksAsArrays = () => bookz.map(book => Object.entries(book));

const getBookAuthors = () => bookz.map(book => book.author);
getBooksByGenre('fantasy');

// console.log(getBooksByGenre('fantasy'));
// console.log(getBooksAsArrays());
// console.log(getBookAuthors());

/*
 *  ********************************************
 *  5) SHORT CIRCUITING (&& and ||)            *
 *  ********************************************
 */

/* A) Each book has the 'otherLanguagesTitle' property, which stores an object containing the language as a key,
      and the title of the book in that language as a value.
      Example 'otherLanguagesTitle' property:
      otherLanguagesTitle: {
        spanish: 'El señor de los anillos',
        chinese: '魔戒',
        french: 'Le Seigneur des anneaux'
      }
      Write a function called 'getTitleInSpanish' that takes a 'book' object as an argument,
      and returns a title in Spanish or a string "No data available" if there is no title in Spanish.
      Using the 'if' statement or the ternary operator is not allowed. */
// Solution:
// function getTitleInSpanish(book) {
//   return book.otherLanguagesTitle['spanish'] || 'No data available';
//   return book;
// }

// console.log(getTitleInSpanish(bookz[2]));

/* B) Loop over the 'books' array, and for each book check if it has the title in Spanish and Korean.
      If it's true, log a string "<title> by <author> has title in Spanish and Korean" to the console,
      where <title> is the book title (in English), and <author> is the author of the book.
      Using the 'if' statement or the ternary operator is not allowed.
      Example output:
      "A Game of Thrones by George R. R. Martin has translations in Spanish and Korean."
      */
//Solution:
// for (let i = 0; i < bookz.length; i++) {
//   bookz[i].otherLanguagesTitle['spanish'] &&
//     bookz[i].otherLanguagesTitle['korean'] &&
//     console.log(
//       `${bookz[i].title} by ${bookz[i].author} has translations in Spanish and Korean`
//     );
// }

/* C) Loop over the 'books' array, and for each book check if it has the title in Portuguese or Spanish, but not in both.
      If it's true, log a string "<title> by <author> has title in Portuguese or Spanish, but not in both" to the console,
      where <title> is the book title (in English), and <author> is the author of the book.
      Using the 'if' statement or the ternary operator is not allowed.
      Example output:
      "A Game of Thrones by George R. R. Martin has translations in Spanish and Korean."
      */
//Solution:
// for (let i = 0; i < bookz.length; i++) {
//   if (
//     (bookz[i].otherLanguagesTitle['portuguese'] &&
//       !bookz[i].otherLanguagesTitle['spanish']) ||
//     (bookz[i].otherLanguagesTitle['spanish'] &&
//       !bookz[i].otherLanguagesTitle['portuguese'])
//   ) {
//     console.log(
//       `${bookz[i].title} by ${bookz[i].author} has title in either Portuguese or Spanish, but not in both`
//     );
//   }
// }

/*
 *  ********************************************
 *  4) REST PATTERN AND PARAMETERS             *
 *  ********************************************
 */

/* A) The getBooksByGenre() function returns an array of books based on the genre you pass as the argument.
      Use it to get all 'fantasy' books. Destructure the returned array into two variables — the first one called 'theLordOfTheRings',
      and the second one called 'otherFantasyBooks' (an array containing all other values from the returned array). */
// //Solution:
// const [theLordOfTheRings, ...otherFantasyBooks] = getBooksByGenre('fantasy');
// console.log(theLordOfTheRings, otherFantasyBooks);

/* B) This time you'll write a function utilizing the power of rest parameters.
      This function named as list() should output a list with a title to the console.
      The first argument it takes is the "title" of the list (string),
      the rest of arguments are list "items" (as many as you want) that will be displayed under the title.
      Example:
      list('My favorite books', 'Brave New World', 'The Great Gatsby', 'Pride and Prejudice');
      Output:
      My favorite books:          <-- title
      1) Brave New World          <-- list item
      2) The Great Gatsby         <-- list item
      3) Pride and Prejudice      <-- list item
      ...
     */
// //Solution:
// list(
//   'My favorite books',
//   'Brave New World',
//   'The Great Gatsby',
//   'Pride and Prejudice'
// );

// // function list(title, ...listItems) {
// //   console.log(title, listItems);
// // }

// function list(title, ...items) {
//   console.log(`${title}:`);
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1}) ${items[i]}`);
//   }
// }

/*
 *  ********************************************
 *  3) THE SPREAD SYNTAX                       *
 *  ********************************************
 */

// /* A) The getBookAuthors() function returns an array of authors from the 'books' array.
//       Reassign the 'authors' variable below so that it contains both — already existing authors,
//       and authors returned from the getBookAuthors() function. Use the spread syntax. */
// let authors = ['George Orwell', 'Aldous Huxley'];
// //Solution:
// authors = [...getBookAuthors(), ...authors];
// console.log(authors);

// /* B) The console.log() method can take multiple arguments and log them to the console.
//       First, log the 'authors' array as it is (as one argument).
//       Second, log the elements of the 'authors' array, but this time use the spread syntax.
//       Compare the outputs. */
// //Solution;
// console.log(...authors);

// /* C) The spread syntax can be used with other iterables, for example, strings.
//       Create a new variable called 'firstNameArray', and spread the 'firstName' string
//       so that each letter becomes an element of the 'firstNameArray' like ['J', 'o', 'h', 'n']. */
// const firstName = 'John';
// //Solution:
// const firstNameArray = [...firstName];
// console.log(firstNameArray);

// /* D) Now it's time to spread some objects. Create a new variable called 'cyberiad',
//       and assign an object to it. This object should have all the properties of the second book from the 'books' array,
//       plus the missing 'filmAdaptation' property set to false. */
// //Solution:

// const cyberiad = { ...getBooksAsArrays()[1], filmAdaptation: false };
// console.log(cyberiad);

/*
 *  ********************************************
 *  2) DESTRUCTURING OBJECTS                   *
 *  ********************************************
 */

// /* A) Take the first object from the 'bookz' array, and assign the author to the 'author' variable using destructuring.
//       Use the 'let' statement because the 'author' variable may change later. */
// //Solution:
// let { author } = bookz[0];
// console.log(author);

// /* B) Take the second object from the 'books' array, and destructure the title into a variable called 'bookTitle'. */
// //Solution:
// const bookTitle = bookz[1].title;
// // const { title: bookTitle } = bookz[1];
// console.log(bookTitle);

// /* C) The book objects aren't consistent in their form.
//       For example, the second book doesn't have the 'filmAdaptation' property.
//       Destructure it into a variable called 'hasFilmAdaptation' with a default value of false. */
// //Solution:
// const { filmAdaptation: hasFilmAdaptation = false } = bookz[1];
// console.log(hasFilmAdaptation);

// /* D) Remember the 'author' variable from exercise A? It's time to reassign it.
//       Destructure the author of the third book into existing variable called 'author'. */
// //Solution:
// ({ author } = bookz[2]);
// console.log(author);
/*
 *  ********************************************
 *  1) DESTRUCTURING ARRAYS                    *
 *  ********************************************
 */

// // A) Destructure the 'books' array into four variables called 'a', 'b', 'c' and 'd'.
// //       Leave the rest of the books unused. */

// //Solution:
// const [a, b, c, d] = bookz;
// // const [a, b, c, d] = [...bookz];
// console.log(a, b, c, d);

/* B) The second and third books are science fiction.
      Assign these books to the variables called 'second' and 'third' using destructuring. */

//Solution:

// const [, second, third] = bookz;
// // const [, second, third] = [...bookz];
// console.log(second, third);

// /*D) Are you ready for some hard-core destructuring? 😄
//       The getBooksAsArrays() function returns the books array, but all book objects and their properties were converted to arrays.
//       Now, you have an array of arrays of arrays.
//       Destructure the title of the second book (The Cyberiad) into a variable called 'title'. */

// //Solution:

// const [, [[, title]]] = getBooksAsArrays();
// console.log(title);
