"""
File: Kelly_usersp1.py
Author: Kaitlyn Kelly
Date: 3/1/2026
Description: Hands on 5.2
"""

# connect to mongodb
from pymongo import MongoClient

client = MongoClient(
    "mongodb+srv://web335_user:s3cret@cluster0.lujih.mongodb.net/web335DB?retryWrites=true&w=majority"
)

db = client['webb335DB']

# import datetime
import datetime 

# create a new user document
Nick = {
    "firstName": "Nick",
    "lastName": "Dawson",
    "employeeId": "1234",
    "email": "ndawson@me.com",
    "dateCreated": datetime.datetime.utcnow()
}

# add user to collection
Nick_user_id = db.users.insert_one(Nick).inserted_id
print(Nick_user_id)

# prove the insert worked
print(db.users.find_one({"employeeId": "1234"}))

# update email address of Nick
db.users.update_one(
    {"employeeId": "1234"},
    {
        "$set": {
            "email": "nick.dawson@me.com"
        }
    }
)

# prove the update worked
print(db.users.find_one({"employeeId": "1234"}))

# delete the nick document
result = db.users.delete_one({
    "employeeId": "1234"
})

# display the results of the query
print(result)

# prove the delete worked
print(db.users.find_one({"employeeId": "1234"}))

