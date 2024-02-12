#Functions and Loops
def function():
    #function defined above
    print("this is a print statement, acts like console.log() in Javascript")
    
    num1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    #this is an list inside a variable

    for x in num1:
        if x > 10:
            print("a is greater than 10")
        else:
            print("a is not greater than 10")
    # this is a for loop with a nested if else statement
    
    return #end of function

function() # calls the function

#Data Types
item1= "String" #text type
item2= 10 #integer - number type
item3= 10.5 #float - number type 
item4= 1j #complex - number type
item5= True #boolean - Can be True or False
item6= {"name" : "John", "age" : 24} #Dict - Mapping Type
item7= ["one", "two", "three"] #List - Sequencing Type
item8= ("one", "two", "three") #Tuple - Sequencig Type
item9= range(6) #range - Sequencng Type
item10= {"one", "two", "three"}#Set - Set type

#Strings
""" Multiline Comment """

item11 = """ 
This is a string that 
has multiple lines attached to it
"""

""" 
Strings are arrays ( or lists) of characters. 
They can be accessed using square brackets
e.g. item11[0] would return the letter 'T' 
"""

#Loop through a string
for x in item11:
    print(x)

#Check for phrase or charater in string
print("is" in item11)

#Using if 
if "is" in item11:
    print("Yes, 'is' is present")

#Not present
print("expensive" not in item11)


#Operators
"""
 Mathematical operators are as follows:
 + Addition
 - Subtraction
 * Multiplication
 / Division
 % Modulus
 ** Exponentiation (Power of)
 // Floor Division

"""

x = 2
#Logical operators
print(x < 5 and x < 10) #and
print(x < 5 or x < 4) #or
print(not(x<5 and x < 10))#not


#Dictionaries
"""
As of Python version 3.7, dictionaries are ordered;
In Python 3.6 and earlier, dictionaries are unordered
"""

dict1={
    "brand": "Vauxhall",
    "model": "Astra",
    "year": 2018,
    "colour": ["Midnight Blue", "Crimson Red", "Nightshade Black"],
    "keyless": True
}
print(dict1)

#Getting info from a dictionary
print(dict1["model"])


#Getting info from a list item in a dictionary
print(dict1["colour"[1]])


#Python Collections (Arrays in JS)
"""
List is a collection which is ordered and changeable, 
Allows duplicate members.

Tuple is a collection which is ordered and unchangeable, 
Allows duplicate members.

Set is a collection which is unordered, unchangeable*, 
and unindexed. No duplicate members.

Dictionary is a collection which is ordered** 
and changeable. No duplicate members.
"""