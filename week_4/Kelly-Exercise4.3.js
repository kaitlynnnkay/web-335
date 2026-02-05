/* 
Name: Kaitlyn Kelly
Date: 2/5/26
File Name: Kelly-Exercise4.3
*/

// display all users
db.users.find();

// display user with email jbach@me.com
db.users.find({email: 'jbach@me.com'});

// display user with lastName Mozart
db.users.find({lastName: 'Mozart'});

// display user with firstName Richard
db.users.find({firstName: 'Richard'});

// display user with employeeId 1010
db.users.find({employeeId: '1010'});