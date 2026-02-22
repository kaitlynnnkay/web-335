db.students.find()

student = {firstName: 'Kaitlyn', lastName: 'Kelly', studentId: 's1019', houseId: 'h1009'};
db.students.insertOne(student);

db.students.updateOne({studentId: '1019'}, {$set: {houseId: '1008'}});

db.students.deleteOne({studentId: 's1019'});

db.houses.aggregate([{$lookup: {from: 'students', localField: 'houseId', foreignField: 'houseId', as: 'students'}}])

db.houses.aggregate([{$lookup: {from: 'students', localField: 'houseId', foreignField: 'houseId', as: 'students'}},{$match: {houseId: 'h1007'}}]);

db.houses.aggregate([{$lookup: {from: 'students', localField: 'houseId', foreignField: 'houseId', as: 'students'}},{$match: {mascot: 'Eagle'}}]);