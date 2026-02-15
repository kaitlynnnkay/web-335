taskList = ["Buy supplies", "Juice lemons", "Make lemonade", "Wash dishes", "Count money"]
for x in taskList:
    print(x)

dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

for i in range(len(dayList)):
    day = dayList[i]
    if day == "Saturday" or day == "Sunday":
        print(f"{day}: It's your day off, you should rest!")
    else:
        task = taskList[i-1]
        print(f"{day}: {task}")