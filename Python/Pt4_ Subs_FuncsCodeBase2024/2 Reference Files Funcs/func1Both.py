"A subroutine(function) may or may not have a return statement"
"A subroutine(function) may or may not have parameters"

# create function use return statement without parameters and arguments
"To Do: Predict, then Run, and then Investigate"
def user():  # define the subroutine/function user
    name = str(input("What is your name"))
    

def userName():  # define the subroutine userName
    name = input("What is your name? ")
   


# create function use return statement with parameters and arguments
def addition():  # defines the addition function
    # variables inside a  surbroutine/function have local scope
    num1 = int(input("Enter your first number: "))
    num2 = int(input("Enter your second number: "))
    answer = num1 + num2
    return answer

# prevents the automatic running of the subroutine when it is imported
# in to another python file/application

# "If this file is run directly it will automatically call and run the respective subroutines"
if __name__ == "__main__":
    # call/invoke the subroutine
    user()
    
    # call/invoke the subroutine
    userName()
    
    print(f"Method 2\nYour username is {user}")

    # call/invoke the functioneName
    "Method 1"
    
    print(f"Method 2\nThe answer is {user}")

    "Method 2"
  
    num3 = 10#int(input("Enter your first number: "))
    num4 = 20#int(input("Enter your second number: "))
    addition()
    myAddition = addition(num3,num4)

    # Assigned the function to the variable myAddition
   
    print(f"Method 2\nThe answer is {userName}")


    print(f"Your answer to {num3} + {num4} is {myAddition}")





