"""use a while loop when the number of iteration is unknown(dont know how many times you want/going 
to do something for)
A while loop also controls the flow of execution in a program"""



# import the datetime library/class/module
import datetime


"To Do: Predict, then Run, and then Investigate"



print("None while Loop output")
dateTime = datetime.datetime.now()
print(dateTime.strftime("%H:%M:%S"))


"To Do: Task 1" 
" study the output of the code above and the output in in the while loop below, and use the links provide to answer"

" What is the while loop doing?"
# its running a program that will display the current time in a particular format

" add comment to explain what you understand the 'datetime.datetime.now().strftime('%H:%M:%S')'"
# display the current time in a ('%H:%M:%S') format

" add comment to explain what you understand the 'end='"
# is used to make it print on the same line.

# https://www.toppr.com/guides/python-guide/questions/what-does-end-do-in-python/
" add comment to explain what you understand the '\r' "
# tells Python to move the cursor back to the beginning of the current line

# https://www.w3schools.com/python/gloss_python_escape_characters.asp

" What will output if you remove  , end='\r'  from the while loop"
# If you remove the end='\r' the loop with keep running and printing the currentime time repeatedly

print("while Loop output")
while True:
    print(datetime.datetime.now().strftime("%H:%M:%S"), end="\r")

    # time.sleep(1)

"Further reading on python while statements"
# https://www.w3schools.com/python/ref_keyword_while.asp
# https://www.w3schools.com/python/python_ref_keywords.asp
# https://www.w3schools.com/python/python_reference.asp