"To Do: Task1: Modify the code in userName function below to use parameter and arguments"



#   def userName():  # define a subrouitine called userName
#     fullName = input("Enter your name: ")
#     address = input("Enter your address: ")
#     interest = input("Any interest? ")
#     print(f"my name is {fullName}, my address is {address} and my interest is {interest}")

def userName():  # define a subrouitine called userName
   
    fullName = str(input("Enter your name: "))
    address = str(input("Enter your address: "))
    interest = str(input("Any interest? "))
    pupilDets = (fullName,address,interest)
    
    return pupilDets

userName()
    
  


