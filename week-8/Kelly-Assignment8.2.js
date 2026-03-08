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