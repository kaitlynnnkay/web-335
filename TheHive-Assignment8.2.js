/*
	Title: TheHive-Assignment8.2
    Author: Shannon Kueneke and Kaitlyn Kelly
    Date: 3/5/26
    Description: Database Queries
 */

// connect to mongodb database


// display a list of books
// formatted so it's easy to read
db.books.find().pretty()

// display a list of books by genre selected by user
console.log("Choose a genre: 1. classics, 2. horror, or 3. thriller");
const genre = userInput

if (genre === "classics" || genre === "horror" || genre === "thriller"){
   const books = await db.collection("books").find({genre}).toArray();
   console.log(books);
} else {
   console.log("Invalid selection");
}

db.books.find({genre: "classics"})

// display a list of books by author
db.books.find({author: "Karin Slaughter"})

// display a book by bookId
db.books.findOne({bookId: "003"})

// display a wishlist by customerId
// with error handling in case of an invalid customerId
db.customers.findOne({customerId: "1"},{wishlistitems: 1, _id: 0})

// add books to a customer's wishlist
db.customers.updateOne({customerId: "1"},{$addToSet: {wishlistitems: "002"}})

// remove book from a customer's wishlist
db.customers.updateOne({customerId: "1"},{$pull: {wishlistitems: "002"}})