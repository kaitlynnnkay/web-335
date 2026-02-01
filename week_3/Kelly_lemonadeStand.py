"""
Author: Kaitlyn Kelly
Date: 2/1/2026
File Name: Kelly_lemonadeStand.py
Description: Exercise 3.3 - Python Variables and Functions
"""

# function to calculate cost of lemonade based on two parameters
# store the cost in the totalCost variable
# return the cost
def calculate_cost(lemons_cost, sugar_cost):
    totalCost = int(lemons_cost) + int(sugar_cost)
    return totalCost

# function to calculate the profit of the lemonade based on three parameters
# store the profit in the profit variable
# return the profit
def calculate_profit(lemons_cost, sugar_cost, selling_price):
    profit = int(selling_price) - (int(lemons_cost) + int(sugar_cost))
    return profit

# define variables to test functions
lemons_cost = 2
sugar_cost = 1
selling_price = 5

# output strings to test variables
cost_string = str(lemons_cost) + " + " + str(sugar_cost) + " = " + str(calculate_cost(lemons_cost, sugar_cost)) 

profit_string = str(selling_price) + " - " + str(lemons_cost) + " - " + str(sugar_cost) + " = " + str(calculate_profit(lemons_cost, sugar_cost, selling_price))

# print strings
print(cost_string)
print(profit_string)