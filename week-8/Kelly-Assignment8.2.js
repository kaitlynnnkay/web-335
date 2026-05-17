/*
	Title: Kelly-Assignment8.2
    Author: Kaitlyn Kelly
    Date: 3/5/26
    Description: Database Queries
 */

// display a list of books
db.books.find()

// display a list of books by genre selected by user
db.books.find({genre: "classics"})

// display a list of books by author
db.books.find({author: "Karin Slaughter"})

// display a book by bookId
db.books.findOne({bookId: "003"})

// display a wishlist by customerId
db.customers.findOne({customerId: "1"},{wishlistitems: 1, _id: 0})

// add books to a customer's wishlist
db.customers.updateOne({customerId: "1"},{$addToSet: {wishlistitems: "002"}})

// remove book from a customer's wishlist
db.customers.updateOne({customerId: "1"},{$pull: {wishlistitems: "002"}})