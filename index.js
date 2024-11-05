//Part 1

//Task 1
const book = {
  title: "JavaScript: The Definitive Guide",
  author: "David Flanagan",
  publishedYear: 2020,
  genre: "Programming",
};
//Task 2
console.log(book.title);
console.log(book["publishedYear"]);

//Part 2

//Task 3

book.pageCount = 1096;
//Task 4
book.ISBN = "978-1491952023";
//Task 5
book.publishedYear = 2021;

//Part 3

// Task 6
book.author = ["David Flanagan", "Another Author"];

///Task 7

book.reviwes = [
  {
    reviwer: "book Critic",
    Comment: "A comprehensive guide to JavaScript",
  },
];
console.log(book);
