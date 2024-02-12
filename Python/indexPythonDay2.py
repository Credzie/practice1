
   # "Task 1: Using if and else"
# 1. Create a program that finds the minimum value between two numbers using if else

  #  "Task 2"
# 2.Create a python program to check user's password and print "Logged In" if successful
# else "Not Logged In“ when unsuccessful.
# <https://teams.microsoft.com/l/message/19:AoFuxukFPcVDPJe1D9LxBjxBuwZ7rvJ71WQmrMqZkZE1@thread.tacv2/1707214067295?tenantId=6efd0f20-57c8-4447-b53f-00d4992ca50b&amp;groupId=18bb3240-1a79-49db-83d8-8128cc5a6180&amp;parentMessageId=1706702791714&amp;teamName=DEV Cohort 5 DFE W4 - 20th Nov&amp;channelName=General&amp;createdTime=1707214067295&amp;allowXTenantAccess=false>


# num1 = int(input("Enter your first number: "))
# num2 = int(input("Enter your second number: "))

# if num1 > num2:
#     print("You smallest imput is:",num2),
# else:
#     if num2 > num1:
#         print("You smallest imput is:",num1)
#     else:
#         print("Numbers you have entered are the same value")
        
        
userLogin = str(input("Enter your password: "))        
password = "Credzie"

if password != userLogin:
    print("The password you entered dosent match")
else:
    print("Welcome, Password Accepted")
 
    
score = int(input("Enter a number: "))
"Predict, then Run, and then Investigate"
# check the condition that score is greater than 100
if score > 100:
 
# create a variable and assign it the value Invalid Entry
 grade = "Invalid Entry"
 
# check the condition that score is between 75 and 100
elif score <=100 and score >=75:
# create a variable and assign it the value A
   grade = "A"
# check the condition that score is between 60 and 74
elif score <=74 and score >=60:

# reassign the grade variable the value B
    grade = "B"
# check the condition that score is between 50 and 59
elif score <=59 and score >=50:
 
# reassign the grade variable the value C
    grade = "C"
# reassign the grade variable the value F
else:
    grade = "F"
    
    print(grade)