"To Do: Predict, then Run, and then Investigate "

countries = ["Scotland", "Spain", "England", "Wales", "Brazil", "Argentina", "Italy","France"]


print("Printed all countries in the terminal")
for country in range(len(countries)):
     print(f"{countries[country]}")


print("\nNot all countries are printed in terminal")
for country in range(5):
    print(f"{countries[country]}")

"To Do: Task 1: Explain why the first loop printed all the countries and the second for loop did not"
#the first loop used the range of the entire list when it used len(countries) within Range() so it printed out the entire content of the list Countries
#while the second loop used range(5) so it displayed the first five countries within the range of index 5

"Modify"
"To Do: Task 2: Modify the number in the second for loop range function from '5' to any other number and explain the output"

print("\nNot all countries are printed in terminal")
for country in range(2):
    print(f"{countries[country]}")
    
    
# second loop used range(2) so it displayed the first two countries within the range of index 2