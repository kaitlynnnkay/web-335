"""
File: Kelly_usersp1.py
Author: Kaitlyn Kelly
Date: 2/22/2026
Description: Hands on 4.2
"""

# connect to mongodb
from pymongo import MongoClient

client = MongoClient(
    "mongodb+srv://web335_user:s3cret@cluster0.lujih.mongodb.net/web335DB?retryWrites=true&w=majority"
)

db = client['webb335DB']

print("Connected to web335DB!")

# display all documents in the users collection
print("\nAll users:")

for user in db.users.find({}):
    print(user)

# display the document where employeeId is 1011
print("\nUser with employee Id 1011:")
print(db.users.find_one({"employeeId": "1011"}))

# display the document where lastName is Mozart
print("\nUser with lastName Mozart:")
print(db.users.find_one({"lastName": "Mozart"}))