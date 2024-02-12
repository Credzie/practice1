print(2 * 2)
print(5 + 5)
print(10 - 2)
print(20 / 4)
print("Jason " + " Umeyor")

print("Refracted Code\n")

print("Jason " + "Umeyor","\n"),

print("7 " + "Badric Court","\n","London,","\n","SW11 3SW","\n")

print("I like to Play Football,","\n","I like yo make music,","\n","I like to do Nerdy Stuff","\n")

#Variables are datacontainers that hold a value within.

fName = "Jason "
lName = "Umeyor"

print(fName + lName)

# ACCESING ITEMS IN A DICTIONARY
#
#
# as demostrating in the previous slide a Dictionary is is present like an Object in Javascript and its way of accessing the Ditionary is similar too.
# you can Access a Python Dictionary by referring to its key name
# Eg.

thisDictionary = {
    "Movie": "Spiderman",
    "Genre": "Action",
    "Rating": "9/10"
}
for key, value in thisDictionary.items():
 print(f"{key}: {value}")

# Here you can create a new variable that can access the Diction by refering to the key value in the dictionary

rating = thisDictionary["Rating"]
print(rating)

# you can also use another method to access a Dctionary with the .get() method

genre = thisDictionary.get("Genre")

#PYTHON INPUT
#
# Input of data and output from there results( featuring Casting on the input variable)
#
#
num1 = int(input("Enter your first number: "))
num2 = int(input("Enter your second number: "))
totalValue = (num1 + num2)
print("Your Input Answer is: ", totalValue)


pStudy = input("Enter your program of study: ").title()
curProgram = "Bootcamp"

if pStudy == "Bootcamp":
   print("Welcome User to BootCamp"),
else:
    print("This current program is not runnig")

   