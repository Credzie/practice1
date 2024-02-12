fname    = input("Enter you full name: ")
address   = input("Enter your address: ")
interest = input("Enter your interest: ")
age      =    int(input("Enter your age: "))

"Make"
"To Do: Task 1: Use the code above to ask for user input and then save it to a file called userDetails.txt"
with open('Python/Pt7_FilesDictsCodeBase2024/1 Reference File FileHandling/userDetails.txt',"a") as data:
    
    "method 1"
    # data.write("\n"+fname+ " "+address+ " "+interest+" "+ str(age))
    
    "method 2"
    
    filecontent = (f"\n{fname} {address} {interest} {age}")
    data.write(filecontent)
    #or
    # data.write(f"\n{fname} {address} {interest} {age}")
    


"Further reading"
# https://www.w3schools.com/python/python_file_handling.asp