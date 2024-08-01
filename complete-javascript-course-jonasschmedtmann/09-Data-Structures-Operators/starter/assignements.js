'use strict';

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

/////////////////////////////////////////////////////////////////////////////
///////////////////////////REPEAT///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// Working with Strings - Part 3
// 17.1
// Below is the bookCategories variable that stores a string of categories. Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories.

// Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings).

// const logBookCategories = function (categories) {
//   const categoriesArray = categories.split(';');
//   for (const category of categoriesArray) {
//     console.log(category);
//   }
// };

// logBookCategories(
//   'science;computing;computer science;algorithms;business;operating systems;networking;electronics'
// );

// const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
// logBookCategories(bookCategories);
// Expected output:

// science
// computing
// computer science
// algorithms
// business
// operating systems
// networking
// electronics
// show example solution
//  {...}
// 17.2
// Now, the opposite. Each book from the books array has the keywords property.

// Write a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates, and then joins them to create a single string where keywords are separated by a semicolon.

// Example
// Code:

// getKeywordsAsString(books);
// Expected output:

// computer science;programming;algorithms;data structures;java;math;software;engineering;javascript;computer systems;C;operating systems;Java;mathematics;business;compilers;interpreters;work;focus;personal development
// show example solution
//  {...}
// 17.3
// Below is the bookChapters array that contains inner arrays. Each inner array consists of a chapter's title, and the number of a page, for example, in ['The Basics', 14], 'The Basics' is the chapter's title, and 14 is the number of a page.

// Write a function called logBookChapters that takes an array of arrays (like bookChapters) as an argument, and logs each chapter's name to the console together with the page number. The page number should be separated from the chapter's name with underscores (take a look at the example below).

// Use the padEnd method.

// Example
// Code:

// const bookChapters = [['The Basics', 14], ['Sorting', 254], ['Searching', 372], ['Graphs', 526], ['Strings', 706]];
// logBookChapters(bookChapters);
// Expected output:

// The Basics__________ 14
// Sorting_____________ 254
// Searching___________ 372
// Graphs______________ 526
// Strings_____________ 706

// Working with Strings - Part 2
// 16.1
// Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).

// You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". The string may also contain trailing spaces.

// normalizeAuthorName('  JuliE sussMan (Contributor)')
// Expected output:

// "Julie Sussman"
// show example solution

// function normalizeAuthorName(author) {
//   author = author.trim();
//   const firstName = author.slice(0, author.indexOf(' '));

//   let lastName = '';
//   if (author.indexOf(' ') === author.lastIndexOf(' ')) {
//     lastName = author.slice(author.indexOf(' ') + 1, author.length);
//   } else {
//     lastName = author.slice(author.indexOf(' ') + 1, author.lastIndexOf(' '));
//   }

//   const capitalizedFirstName =
//     firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
//   const capitalizedLastName =
//     lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

//   return capitalizedFirstName + ' ' + capitalizedLastName;
// }
// // 16.2
// // Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable.

// const newBookTitle = books[1].title.replace('Programs', 'Software');

// console.log(newBookTitle);

// // 16.3
// // Write a function called logBookTheme that takes book's title (string), and logs to the console:

// // "This book is about computers" if the title starts with the word "computer",

// // "This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words,

// // and, "This book is about some systems, but definitely not about operating systems" if the title ends with the word "system" or "systems", but doesn't include the word "operating".

// // The title may contain both small and capital letters.

// function logBookTheme(bookTitle) {
//   const lowerCaseBookTitle = bookTitle.toLowerCase();

//   if (lowerCaseBookTitle.startsWith('computer')) {
//     console.log('This book is about computers');
//   } else if (
//     lowerCaseBookTitle.includes('algorithms') &&
//     lowerCaseBookTitle.includes('structures')
//   ) {
//     console.log('This book is about algorithms and data structures');
//   } else if (
//     (lowerCaseBookTitle.endsWith('system') ||
//       lowerCaseBookTitle.endsWith('systems')) &&
//     !lowerCaseBookTitle.includes('operating')
//   ) {
//     console.log(
//       'This book is about various systems, but not operating systems'
//     );
//   }
// }

// logBookTheme('Computer Systems: A Programmer Perspective');

// Working with Strings - Part 1
// 15.1
// Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.

// console.log(
//   books[0].ISBN[6],
//   books[0].ISBN[4],
//   books[0].ISBN[9],
//   books[0].ISBN[8]
// );

// // 15.2
// // Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.

// const quote =
//   'A computer once beat me at chess, but it was no match for me at kick boxing';

// console.log(quote.indexOf('chess'));

// // 15.3
// // Extract the word "boxing" from the same quote string, and log it to the console.

// // console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// // 15.4
// // Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.

// function isContributor(autName) {
//   return author.lastIndexOf('(Contributor)') !== -1;
// }

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat🫠');
//   else console.log('You got lucky 😁');
// };

// Example 1

// isContributor('Julie Sussman (Contributor)');
// Expected output:
// true

// // Maps: Iteration
// // 14.1
// // Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.

// const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);

// // 14.2
// // Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.

// for (const [key, value] of firstBookMap) {
//   if (typeof key === 'number') {
//     console.log(value);
//   }
// }

// // Maps: Fundamentals
// // 13.1
// // Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data:

// // [['title', 'Clean Code'], ['author', 'Robert C. Martin']]

// const bookMap = new Map([
//   ['title', 'Clean Code'],
//   ['author', 'Robert C. Martin'],
// ]);

// // 13.2
// // Set a new key in bookMap called pages, and assign it with a number 464.

// bookMap.set('pages', 464);
// console.log(bookMap);

// // 13.3
// // Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".

// console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);
// // 13.4
// // Get the size of bookMap, and log it to the console.

// console.log(bookMap.size);
// // 13.5
// // Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.

// if (bookMap.has('author')) {
//   console.log('The author of the book is known');
// }

// // Sets

// // 12.1
// // Below is the allKeywords variable, which stores an empty array. Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object. The allKeywords array should have just one level (no nested arrays).

// // Use whatever loop and methods you want. You can also use the spread syntax. In the end, the allKeywords array should look more or less like this: ['computer science', 'programming', 'algorithms', 'data structures', ...].

// const allKeywords = [];

// for (const book of books) {
//   allKeywords.push(...book.keywords);
// }

// console.log(allKeywords);

// // The for-of loop is used to iterate over the books array. For each book, the spread operator is used to spread the keywords array into the allKeywords array. This effectively adds all the keywords from each book to the allKeywords array.
// // The console.log(allKeywords) statement is used to log the contents of the allKeywords array to the console, which will display all the keywords from all the books in the array.

// // 12.2
// // The allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly created set to the uniqueKeywords variable.

// const uniqueKeywords = new Set(allKeywords);
// console.log(uniqueKeywords);

// // 12.3
// // Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.

// uniqueKeywords.add('coding');
// uniqueKeywords.add('science');
// console.log(uniqueKeywords);

// // 12.4
// // Delete 'business' from the uniqueKeywords set.

// uniqueKeywords.delete('business');
// console.log(uniqueKeywords);

// // 12.5
// // Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.

// const uniqueKeywordsArr = [...uniqueKeywords];
// console.log(uniqueKeywordsArr);

// // 12.6
// // Delete all items from the uniqueKeywords set.

// uniqueKeywords.clear();
// console.log(uniqueKeywords);

// Looping Objects: Object Keys, Values and Entries

// 11.1
// Below is the entries variable that stores an empty array. Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array. For each key, push a new array that contains that key to the entries array.

// In the end, the entries array should be filled with arrays containing keys:

// [['rating'], ['ratingsCount'], ['reviewsCount'], ['fiveStartRatingCount'], ['oneStartRatingCount']]
// const entries = [];

// for (const key of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push([key]);
// }

// console.log(entries);

// // 11.2
// // The Object.values() method returns an array, which means you can call the Array's entries() method on it, for example, Object.entries(books[0].thirdParty.goodreads).entries(). The Array's entries() method returns [index, value] arrays for each element in the array.

// // Use the for-of loop together with the Object.values() method and Array's entries() method to loop over thirdParty.goodreads property of the first book from the books array.

// // Push each value to the appropriate inner array in the entries array (use index from entries()).

// for (const [index, value] of Object.values(
//   books[0].thirdParty.goodreads
// ).entries()) {
//   entries[index].push(value);
// }

// console.log(entries);

// // 11.3
// // Use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array. Assign the returned value to the variable called entries2.

// const entries2 = Object.entries(books[0].thirdParty.goodreads);
// console.log(entries2);

// 11.4
// Log the entries and entries2 variables to the console, and compare them. They should look the same.

// Optional Chaining (?.)

// 10.1
// Write a function called getFirstKeyword that takes the book object as an argument. This function should return the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist). It shouldn't throw an error. Use optional chaining for that.

// function getFirstKeyword(book) {
//   console.log(book.keywords?.[0]);
// }

// getFirstKeyword(book[0]);

// Example 1
// Example 2
// Code:

// getFirstKeyword(book[0]);
// Expected output:

// "computer science"

// Enhanced Object Literals
// 9.1
// Below is the bookData array that contains other arrays. Each inner array consists of the property name (first element), and the value (second element). For example, in ['title', 'Computer Networking: A Top-Down Approach'], 'title' is the property name, and 'Computer Networking: A Top-Down Approach' is meant to be the value assigned to that property name.

// Using computed properties, fill the newBook object with the properties and values from the bookData array. The first one is done already.

// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// Do the rest
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
// };

// console.log(newBook);

// 9.2
// Below is the pages variable. Add it as a property of the newBook2 object. Use the shorter way.

// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages,
// };

// console.log(newBook2);

// Looping Arrays: The for-of Loop
// 8.1
// Use the for-of loop to loop over the books array and sum the pages of all books. Use the pageSum variable below, and the pages property of the book objects.

// let pageSum = 0;

// for (const book of books) {
//   pageSum += book.pages;
// }

// console.log(pageSum);

// 8.2
// Below is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array.

// Remember that each book object has the author property, which can be a string (if there is only a single author) or an array (if there are multiple authors). You may need to use the typeof operator. You can also use multiple loops if needed. The allAuthors array should have just one level (no nested arrays).

// const allAuthors = [];

// for (const book of books) {
//   if (typeof book.author === 'string') {
//     allAuthors.push(book.author);
//   } else {
//     for (const author of book.author) {
//       allAuthors.push(author);
//     }
//   }
// }

// console.log(allAuthors);

// 8.3
// Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index. Make the index start from 1, instead of 0.

// Expected output
// 1. Robert Sedgewick
// 2. Kevin Wayne
// 3. Harold Abelson
//    ...                    // part removed for clarity
// 15. Cal Newport

// for (const author of allAuthors.entries()) {
//   console.log(`${author[0] + 1}:${author[1]}`);
// }

// Logical Assignments Operators
// 7.1
// Some of the book objects from the books array are missing the edition property. Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.

// for (let i = 0; i < books.length; i++) {
//   books[i].edition ||= 1;
// }

// 7.2
// Some of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.

// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

// Use the &&= operator (tip: you may also need the ! operator)

// The Nullish Coalescing Operator (??)
// 6.1
// There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.

// for (let i = 0; i < books.length; i++) {
//   books.onlineContent ??
//     console.log(`${books[i].title}" provides no data about its online content`);
// }

// Short Circuiting (&& and ||)
// 5.1
// Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book, for example

// {
//   title: 'Algorithms',
//   author: ['Robert Sedgewick', 'Kevin Wayne'],
//   ...
//   programmingLanguage: 'Java',     // <-- HERE
// }
// Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.

// Use short-circuiting.

// Example 1
// Example 2
// Code:

// hasExamplesInJava(books[0]);
// Expected output:

// true

// function hasExamplesInJava(book) {
//   console.log(book.programmingLanguage === 'Java' || 'no data available');
// }

// hasExamplesInJava(books[5]);

// 5.2
// Some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting.

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent &&
//     console.log(`"${books[i].title}" provides online content`);
// }

// {
//   title: 'Operating System Concepts',
//   // ... removed for clarity
//   onlineContent: false,          // <-- HERE
// },

// // Rest Pattern and Parameters
// // 4.1
// // Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).

// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

// // 4.2
// // Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.

// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher);
// console.log(restOfTheBook);

// // 4.3
// // Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".

// // Example
// // Code:

// // printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
// // Expected output:

// // "The book "Algorithms" has 2 authors"

// function printBookAuthorsCount(title, ...authors) {
//   console.log(`The book "${title}" has ${authors.length} authors`);
// }
// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

/*The Spread Operator
3.1
Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.

Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays).

3.2
Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.

Example
Code:

spellWord('JavaScript')
Expected output:

"J a v a S c r i p t"
*/

// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

// function spellWord(str) {
//   console.log(...str);
// }
// spellWord('wtf');
// // Destructuring Objects

// // 2.1
// // Destructure the first book object from the books array into variables called title, author and ISBN.

// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// // 2.2
// // Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.

// // const tags = books[0].keywords;
// const { keywords: tags } = books[0];
// console.log(tags);

// // 2.3
// // The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.

// const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);

// // 2.4
// // Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.

// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';
// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);

// // 2.5
// // Each book object has a deeply nested rating property as illustrated below:

// // {
// //   title: 'Algorithms',
// //   ...
// //   thirdParty: {
// //     goodreads: {
// //       rating: 4.41,              // <-- HERE
// //       ratingsCount: 1733,
// //       reviewsCount: 63,
// //       fiveStarRatingCount: 976,
// //       oneStarRatingCount: 13
// //     }
// //   }
// // },
// // Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.

// // Please do most of the work on the left side of the assignment operator: const ... = books[0];
// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];

// console.log(bookRating);

// // 2.6
// // Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

// // If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

// // Example 1

// // printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });
// // Expected output:

// // "Algorithms by Robert Sedgewick, 2011"

// function printBookInfo({ title, author, year = 'year unknown' }) {
//   console.log(`${title} by ${author}, ${year}`);
// }

// printBookInfo({
//   title: 'Algorithms',
//   author: 'Robert Sedgewick',
//   year: '2011',
// });

// // printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });

//Destructuring Arrays

// //1.1
// let [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// //1.2
// let [, , thirdBook] = books;
// console.log(thirdBook);

// //1.3
// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// //1.4
// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 1] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);
// 1.1
// Destructure the books array into two variables called firstBook and secondBook.

// 1.2
// Destructure the books array into a variable called thirdBook. You must skip the first two books.

// 1.3
// Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.

// 1.4
// Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.

//

////////////////////////////////////////////////////////////
/////////////Working with Strings - Pt.3////////////////////
////////////////////////////////////////////////////////////

/*17.1
Below is the bookCategories variable that stores a string of categories. Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories.

Write a function called logBookCategories that takes a string of categories separated with semicolons, and logs each category to the console (as separate strings).

Example
Code:

const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
logBookCategories(bookCategories);
Expected output:

science
computing
computer science
algorithms
business
operating systems
networking
electronics

17.2
Now, the opposite. Each book from the books array has the keywords property.

Write a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates, and then joins them to create a single string where keywords are separated by a semicolon.

Example
Code:

getKeywordsAsString(books);
Expected output:

computer science;programming;algorithms;data structures;java;math;software;engineering;javascript;computer systems;C;operating systems;Java;mathematics;business;compilers;interpreters;work;focus;personal development

17.3
Below is the bookChapters array that contains inner arrays. Each inner array consists of a chapter's title, and the number of a page, for example, in ['The Basics', 14], 'The Basics' is the chapter's title, and 14 is the number of a page.

Write a function called logBookChapters that takes an array of arrays (like bookChapters) as an argument, and logs each chapter's name to the console together with the page number. The page number should be separated from the chapter's name with underscores (take a look at the example below).

Use the padEnd method.

Example
Code:

const bookChapters = [['The Basics', 14], ['Sorting', 254], ['Searching', 372], ['Graphs', 526], ['Strings', 706]];
logBookChapters(bookChapters);
Expected output:

The Basics__________ 14
Sorting_____________ 254
Searching___________ 372
Graphs______________ 526
Strings_____________ 706*/

////////////////////////////////////////////////////////////
/////////////Working with Strings - Pt.2////////////////////
////////////////////////////////////////////////////////////

// //16.1
// function normalizeAuthorName(name) {
//   const removeContr = name.replace('(Contributor)', '');
//   const noWhiteSpace = removeContr.trim();
//   const nameSurname = noWhiteSpace.split(' ');
//   const fName = nameSurname[0].toLowerCase().trim();
//   const surname = nameSurname[1].toLowerCase().trim();
//   const fnameCap = fName[0].toUpperCase() + fName.slice(1);
//   const surnameCap = surname[0].toUpperCase() + surname.slice(1);
//   const goodName = [fnameCap, surnameCap].join(' ');

//   console.log(goodName);
//   // return goodName;
// }

// normalizeAuthorName('  JuliE sussMan (Contributor)');

// //16.2
// const newBookTitle = books[1].title.replace('Programs', 'Software');

// console.log(newBookTitle);

// //16.3

// /*16.1
// Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).

// You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". The string may also contain trailing spaces.

// Example
// Code:

// normalizeAuthorName('  JuliE sussMan (Contributor)')
// Expected output:

// "Julie Sussman"

// 16.2
// Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable.

// 16.3
// Write a function called logBookTheme that takes book's title (string), and logs to the console:

// "This book is about computers" if the title starts with the word "computer",

// "This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words,

// and, "This book is about some systems, but definitely not about operating systems" if the title ends with the word "system" or "systems", but doesn't include the word "operating".

// The title may contain both small and capital letters. */

// //16.3
// function logBookTheme(title) {
//   const booksTitle = title.toLowerCase();

//   if (booksTitle.startsWith('computer')) {
//     console.log('This book is about computers');
//   }
//   if (booksTitle.includes('algorithms') && booksTitle.includes('structures')) {
//     console.log('This book is about algorithms and data structures');
//   }
//   if (
//     booksTitle.endsWith('system') ||
//     (booksTitle.endsWith('systems') && !booksTitle.include('operating'))
//   ) {
//     console.log(
//       'This book is about some systems, but definitely not about operating systems'
//     );
//   }
// }

// logBookTheme("Computer Systems: A Programmer's Perspective");

//////////////////////////////////////////////////////////////
/////////////Working with Strings - Pt.1//////////////////////
//////////////////////////////////////////////////////////////

// //15.1 9780321573513
// console.log(books[0].ISBN[6]);
// console.log(books[0]['ISBN'][4]);
// console.log(books[0]['ISBN'][9]);
// console.log(books[0]['ISBN'][8]);

// //15.2
// const quote =
//   'A computer once beat me at chess, but it was no match for me at kick boxing';

// console.log(quote.indexOf('chess'));

// //15.3
// console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// //15.4
// function isContributor(autName) {
//   const ifContr = autName.slice(autName.lastIndexOf(' ') + 1);
//   // console.log(ifContr);
//   if (ifContr === '(Contributor)') {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// //memas solution
// // function isContributor(author) {
// //   return author.lastIndexOf('(Contributor)') !== -1;
// // }

// isContributor('Julie Sussman (Contributor)');
/*15.1
Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.

15.2
Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.

const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';

15.3
Extract the word "boxing" from the same quote string, and log it to the console.

15.4
Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". Create a function called isContributor that takes an author's name as an argument, and returns either true (if he's a contributor) of false (if he's not a contributor). The string "(Contributor)" is always the last part of the author's name string.

Example 1

Code:

isContributor('Julie Sussman (Contributor)');
Expected output:

true

Example 2
Code:

isContributor('Robert Sedgewick');
Expected output:

false*/

//////////////////////////////////////////////////////////////////////////////
//////////////////////////Maps: iteration//////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);

// for (const [key, value] of firstBookMap) {
//   if (typeof value === 'number') {
//     console.log(value);
//   }
// }

/*14.1
Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.

14.2
Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values. */

////////////////////////////////////////////////////////////////
////////////////////Maps:Fundamentals///////////////////////////
///////////////////////////////////////////////////////////////

// const bookMap = new Map([
//   ['title', 'Clean Code'],
//   ['author', 'Robert C. Martin'],
// ]);
// // bookMap.set('title', 'Clean Code').set('author', 'Robert C. Martin');
// console.log(bookMap);

// bookMap.set('pages', 464);
// console.log(bookMap);

// console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

// console.log(bookMap.size);

// if (bookMap.has('author')) {
//   console.log('The author of the book is known');
// }

/*13.1
Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data:

[['title', 'Clean Code'], ['author', 'Robert C. Martin']]

13.2
Set a new key in bookMap called pages, and assign it with a number 464.

13.3
Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".

13.4
Get the size of bookMap, and log it to the console.

13.5
Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.*/

/////////////////////////////////////////////////////////////////
///////////////////////////SETS//////////////////////////////////
//////////////////////////////////////////////////////////////////

// /*12.1
// Below is the allKeywords variable, which stores an empty array. Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object. The allKeywords array should have just one level (no nested arrays).

// Use whatever loop and methods you want. You can also use the spread syntax. In the end, the allKeywords array should look more or less like this: ['computer science', 'programming', 'algorithms', 'data structures', ...].

// const allKeywords = [];
// */
// const allKeywords = [];

// //my way
// for (const book of books) {
//   // console.log(book);
//   for (const key of book.keywords) {
//     // console.log(key);
//     allKeywords.push(key);
//   }
// }

// //2nd way
// // for (const book of books) {
// //   allKeywords.push(...book.keywords);
// // }

// console.log(allKeywords);

// /*12.2
// The allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly created set to the uniqueKeywords variable.
// */

// const uniqueKeywords = new Set(allKeywords);
// console.log(uniqueKeywords);

// /*12.3
// Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.
//  */
// uniqueKeywords.add('coding');
// uniqueKeywords.add('science');
// console.log(uniqueKeywords);

// /*12.4
// Delete 'business' from the uniqueKeywords set.
// */

// uniqueKeywords.delete('business');
// console.log(uniqueKeywords);

// /*12.5
// Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.
// */

// //my way
// const uniqueKeywordsArr = [...new Set(uniqueKeywords)];

// //2nd way
// // const uniqueKeywordsArr = [...uniqueKeywords];

// console.log(uniqueKeywordsArr);
// /* 12.6
// Delete all items from the uniqueKeywords set.
// */

// uniqueKeywords.clear();
// console.log(uniqueKeywords);

///////////////////////////////////////////////////////////////
//////////Looping Objects:Object Keys, Values and Entries/////
///////////////////////////////////////////////////////////////

// /*11.1
// Below is the entries variable that stores an empty array. Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array. For each key, push a new array that contains that key to the entriez array.

// In the end, the entriez array should be filled with arrays containing keys:

// [['rating'], ['ratingsCount'], ['reviewsCount'], ['fiveStartRatingCount'], ['oneStartRatingCount']]*/

// const entriez = [];
// const goodReads = Object.keys(books[0].thirdParty.goodreads);
// console.log(goodReads);

// for (const entry of goodReads) {
//   entriez.push([entry]);
// }

// console.log(entriez);

// // entriez.push(goodReads);
// // console.log(entriez);

// /*11.2
// The Object.values() method returns an array, which means you can call the Array's entries() method on it, for example, Object.entries(books[0].thirdParty.goodreads).entries(). The Array's entries() method returns [index, value] arrays for each element in the array.

// Use the for-of loop together with the Object.values() method and Array's entries() method to loop over thirdParty.goodreads property of the first book from the books array.

// Push each value to the appropriate inner array in the entriez array (use index from entriez()).*/

// const valuez = Object.values(books[0].thirdParty.goodreads).entries();

// console.log(valuez);

// for (const [index, value] of valuez) {
//   // console.log(iterator);
//   // console.log(index, value);
//   entriez[index].push(value);
// }

// console.log(entriez);

// /*11.3
// Use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array. Assign the returned value to the variable called entries2.*/

// const entries2 = Object.entries(books[0].thirdParty.goodreads);

// console.log(entries2);

/*11.4
Log the entriez and entries2 variables to the console, and compare them. They should look the same.*/

//done  in 11.2 and 11.3

///////////////////////////////////////////////////////////////////////////////Optional Chaining (?.)////////////////////////
/////////////////////////////////////////////////////////////

/*10.1
Write a function called getFirstKeyword that takes the book object as an argument. This function should return the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist). It shouldn't throw an error. Use optional chaining for that.*/

// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages,
// };

// const getFirstKeyword = function (book) {
//   return book.keywords?.[0];
// };

// console.log(getFirstKeyword(books[1]));

/*Example 1

Code:
getFirstKeyword(book[0]);

Expected output:
"computer science"

Example 2

Code:
getFirstKeyword(newBook2); // from previous tasks

Expected output:
undefined*/

///////////////////////////////////////////////////////////////////////////////Enhanced Object Literals///////////////////////
//////////////////////////////////////////////////////////////

// /*9.1
// Below is the bookData array that contains other arrays. Each inner array consists of the property name (first element), and the value (second element). For example, in ['title', 'Computer Networking: A Top-Down Approach'], 'title' is the property name, and 'Computer Networking: A Top-Down Approach' is meant to be the value assigned to that property name.

// Using computed properties, fill the newBook object with the properties and values from the bookData array. The first one is done already.*/

// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// // Do the rest
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
// };

// console.log(newBook);

// /*9.2
// Below is the pages variable. Add it as a property of the newBook2 object. Use the shorter way.*/

// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages,
// };

// console.log(newBook2);

/////////////////////////////////////////////////////////////
//////////////////Looping arrays: The for-of loop//////////////
///////////////////////////////////////////////////////////

// /*8.1
// Use the for-of loop to loop over the books array and sum the pages of all books. Use the pageSum variable below, and the pages property of the book objects.*/

// let pageSum = 0;

// for (const i of books) {
//   // console.log(i.pages);
//   pageSum += i.pages;
// }

// console.log(pageSum);

// /*8.2
// Below is the allAuthors variable which stores an empty array. Use the for-of loop to fill allAuthors with the authors of each book from the books array.

// Remember that each book object has the author property, which can be a string (if there is only a single author) or an array (if there are multiple authors). You may need to use the typeof operator. You can also use multiple loops if needed. The allAuthors array should have just one level (no nested arrays).*/

// const allAuthors = [];

// for (const book of books) {
//   if (typeof book.author === 'string') {
//     allAuthors.push(book.author);
//   } else {
//     for (const author of book.author) {
//       allAuthors.push(author);
//     }
//   }
// }

// console.log(allAuthors);

// /*8.3
// Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index. Make the index start from 1, instead of 0.

// Expected output
// 1. Robert Sedgewick
// 2. Kevin Wayne
// 3. Harold Abelson
//    ...                    // part removed for clarity
// 15. Cal Newport*/

// for (const authorNIndex of allAuthors.entries()) {
//   console.log(`${authorNIndex[0] + 1}:${authorNIndex[1]}`);
//   // console.log(authorNIndex);
// }

// //2nd way
// for (const [key, value] of allAuthors.entries()) {
//   console.log(`${key + 1}. ${value}`);
// }

// // console.log([...allAuthors.entries()]);

/////////////////////////////////////////////////////////////
//////////Logical Assignments Operators/////////////////////
///////////////////////////////////////////////////////////

// 7.1
// Some of the book objects from the books array are missing the edition property. Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.

// for (let i = 0; i < books.length; i++) {
//   books[i].edition ||= 1;
// }

// console.log(books);

// 7.2
// Some of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.

// Use the &&= operator (tip: you may also need the ! operator)

//Solution:
//official
// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

//working solution
// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted ||= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

// console.log(books);

////////////////////////////////////////////////////////
/////////The Nullish Coalescing Operator (??)///////////
//////////////////////////////////////////////////////

//6.1
// There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.
//Solution:
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent ??
//     console.log(`${books[i].title} provides no data about its online content`);
// }

////////////////////////////////////////////////////////////////////////////Short Circuiting ($$ and ||)/////////////////////
//////////////////////////////////////////////////////////////

// 5.1
// Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book, for example

// {
//   title: 'Algorithms',
//   author: ['Robert Sedgewick', 'Kevin Wayne'],
//   ...
//   programmingLanguage: 'Java',     // <-- HERE
// }
// Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.

//Solution:
// function hasExamplesInJava(book) {
//   return book.programmingLanguage === 'Java' || 'no data';
// }
// console.log(hasExamplesInJava(books[0]));

// Use short-circuiting.

// Example 1

// Code:

// hasExamplesInJava(books[0]);
// Expected output:

// true
// Example 2

// Code:

// hasExamplesInJava(books[1]);
// Expected output:

// "no data available"

// 5.2
// Some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting.

// {
//   title: 'Operating System Concepts',
//   // ... removed for clarity
//   onlineContent: false,          // <-- HERE
// },

//solution:
// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent &&
//     console.log(`'${books[i].title}' provides online content`);
// }
/////////////////////////////////////////////////////////////
/////////Rest Pattern and Parameters////////////////////////
////////////////////////////////////////////////////////////

// 4.1
// Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).

// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

// 4.2
// Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.

// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher, restOfTheBook);

// 4.3
// Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".

// Example
// Code:

// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
// Expected output:

// "The book "Algorithms" has 2 authors"

// function printBookAuthorsCount(title, ...authors) {
//   console.log(`The book "${title}" has ${authors.length} authors`);
// }

// const printBookAuthorsCount = (title, ...authors) => {
//   console.log(`The book "${title}" has ${authors.length} authors`);
// };

// printBookAuthorsCount('Al', 'faf');

////////////////////////////////////////////////
//////////////destructuring arrays/////////////
///////////////////////////////////////////
//1.1
// Destructure the books array into two variables called firstBook and secondBook.

// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

//1.2
//Destructure the books array into a variable called thirdBook. You must skip the first two books.

// const [, , thirdBook] = books;
// console.log(thirdBook);

// 1.3
// Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// 1.4
// Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.

// const ratingStars = [63405, 1808];
// const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] =
//   ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

////////////////////////destructuring objects//////////////////////
//////////////////////////////////////////////////////////////////

//2.1
// Destructure the first book object from the books array into variables called title, author and ISBN.

// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// 2.2
// Each book object has the keywords property. Destructure the first book object from the books array into a variable called tagz. The tagz Svariable should be assigned with the value of the keywords property.

// const { keywords: tagz } = books[0];
// console.log(tagz);

//2.3
// The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.

// const { language = [], programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);

// 2.4
// Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.

// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';

// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);

// 2.5
// Each book object has a deeply nested rating property as illustrated below:

// {
//   title: 'Algorithms',
//   ...
//   thirdParty: {
//     goodreads: {
//       rating: 4.41,              // <-- HERE
//       ratingsCount: 1733,
//       reviewsCount: 63,
//       fiveStarRatingCount: 976,
//       oneStarRatingCount: 13
//     }
//   }
// },
// Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.

// Please do most of the work on the left side of the assignment operator: const ... = books[0];

// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];

// console.log(bookRating);

////////////////////////////////////////////
////////////the spread operator////////////
//////////////////////////////////////////

// 3.1
// Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.

// Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays).

// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

// 3.2
// Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.

// Example
// Code:

// spellWord('JavaScript')
// Expected output:

// "J a v a S c r i p t"

// const spellWord = function (str) {
//   console.log(...str);
// };

// spellWord('bam');

/////////////////////////////////////////////////////////////
// //////////////Coding Challenges////////////////////////
////////////////////////////////////////////////////////////

/*We're building a football betting app
Suppose we get data from a web service about a certain game
 In this challenge we're gonna work with that data.*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/////////////////////////////////////////////////////////////////////////////
////////////////////String Methods Practice/////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // console.log(flights.split('+'));

// //refractoring
// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');

//   const output = `${type.startsWith('_Delayed') ? '🫥' : ''}${type.replaceAll(
//     '_',
//     ' '
//   )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
//     ':',
//     'h'
//   )})`.padStart(50);
//   console.log(output);
// }

///////////////////////////////////////////////////////////
//////////////////Coding Challange #4///////////////////////
////////////////////////////////////////////////////////////

/*Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):

underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):

underscoreCase
firstName✅
✅✅
someVariable
calculateAge✅✅✅
✅✅✅✅
delayedDeparture✅✅✅✅✅

Hints:
§Remember which character defines a new line in the textarea 😉
§The solution only needs to work for a variable made out of 2 words, like a_b
§Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§
This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀*/
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toLocaleUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'🗼'.repeat(i + 1)}`);
//   }
// });

///////////////////////////////////////////////////////////
//////////////////Coding Challange #3///////////////////////
////////////////////////////////////////////////////////////

/*Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time). */

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// //1
// //bad way
// // const gameEventsArr = [...gameEvents.values()];
// // // console.log(gameEventsArr);
// // const eventsSet = [new Set(gameEventsArr)];
// // // console.log(eventsSet);
// // const events = [...eventsSet];
// // console.log(events);
// // //teacher way
// // const events = [...new Set(gameEvents.values())];
// // console.log(events);

// //my way
// console.log(gameEvents.values());
// const eventsSet = new Set(gameEvents.values());
// console.log(eventsSet);
// const events = [...eventsSet];
// console.log(events);

// //const events = [...new Set(gameEvents.values())];
// // console.log(events);meEvents.delete(64);
// console.log(gameEvents);

// //3
// console.log(`An event happened, on
// average, every ${90 / gameEvents.size} minutes`);

// //Bonus to count time from 92 not 90
// const time = [...gameEvents.keys()].pop();
// console.log(time);

// //4
// for (const [key, value] of gameEvents) {
//   if (key < 45) {
//     console.log(`[FIRST HALF] ${(key, value)}`);
//   }
//   if (key > 45) {
//     console.log(`[SECOND HALF] ${(key, value)}`);
//   }
// }

// // //teacher way
// // for (const [key, value] of gameEvents) {
// //   const half = key <= 45 ? 'FIRST' : 'SECOND';
// //   console.log(`[${half} HALF] ${key}: ${value}`);
// // }

/*
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
⚽
[FIRST HALF] 17:
GOAL*/

//////////////////////////////////////////////////////////////
///////////////////Coding Challenge #2////////////////////////
//////////////////////////////////////////////////////////////

// // 1
// for (const player of game.scored.entries()) {
//   console.log(`Goal ${player[0] + 1}: ${player[1]}`);
//   // console.log(player);
// }
// //2
//mine sol
// const num = Object.values(game.odds);
// // console.log(num);

// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//   sum += num[i];
//   // console.log(sum);
// }

// const avgOdd = sum / num.length;
// console.log(avgOdd);

//not mine
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;

// average /= odds.length;
// console.log(average);
// console.log(odds);
//3
//my sol
// console.log(`Odd of victory ${game.team1}:${num[0]}
// Odd of draw: ${num[1]}
// Odd of victory ${game.team2}:${num[1]}`);
//not mine
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// console.log(Object.entries(game.odds));
//4
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

/*Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK 😀*/

/////////////////////////////////////////////////////////////
// //////////////Coding Challenge #1////////////////////////
////////////////////////////////////////////////////////////

/*We're building a football betting app
Suppose we get data from a web service about a certain game
 In this challenge we're gonna work with that data.*/

// /*1. Create one player array for each team (variables 'players1' and
// 'players2')*/

// const [players1, players2] = game.players;
// console.log(players1, players2);

// /*2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players*/

// const [gk, ...fieldPlayers] = game.players[0];
// console.log(gk, fieldPlayers);

// /*3. Create an array 'allPlayers' containing all players of both teams (22
// players) */

// const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);

// /*4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'*/

// const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...game.players[0]];
// console.log(players1Final);

// /**5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2') */

// // const { team1, x: draw, team2 } = game.odds;
// // console.log(team1, draw, team2);
// //or the same but harder...lol
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// /*6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored*/

// function printGoals(...playersNames) {
//   console.log(`${playersNames.length} goals were scored by ${playersNames}`);
// }

// printGoals('Davis', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// /*7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
// odds: {
//   team1: 1.33,
//   x: 3.25,
//   team2: 6.5,
// },*/

// // game.odds.team1 < game.odds.team2;
// // if (game.odds.team1 < game.odds.team2) {
// //   console.log('team1 wins');
// // } else {
// //   console.log('team2 wins+');
// // }

// // console.log(game.odds.team1 < game.odds.team2 ? 'team1 wins' : 'team2 wins');

// console.log(
//   (game.odds.team2 < game.odds.team1 && 'team2 wins') ||
//     (game.odds.team1 < game.odds.team2 && 'team1 wins')
// );
