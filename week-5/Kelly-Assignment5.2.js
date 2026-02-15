/* 
Name: Kaitlyn Kelly
Date: 2/15/26
File Name: Kelly-Assignment5.2-Projections
*/

// update mozart's email address
 db.users.updateOne({employeeId: '1009'}, {$set: {email: 'mozart@me.com'}});

// create new user
user = {firstName: 'Kaitlyn', lastName: 'Kelly', employeeId: '3333', email: 'knkelly725@gmail.com', dateCreated: '2026-02-16'};

// add above user
db.users.insertOne(user);

// display all users and only show firstName, lastName, and email
db.users.find({}, {firstName: 1, lastName: 1, email: 1});