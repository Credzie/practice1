
"To Do: Task 2:Modify the code below to:"
# Read the contents of your file (yourName.txt) by replacing the:
# 1. "w" mode after the file path with the "r"
# 2. the write() method with the read method()
# 3. Unlike the write mode, no argument is required within the parenthesis of the read mode.
# use the print to display the contents from the file you are redaing


"Syntax :  varName = openMethod('pathtofolder/parthtofile//fileName.txt', 'w')"
filePath1 = open('Python/Pt7_FilesDictsCodeBase2024/Credziefile.txt', 'r') # folder/folder/filename
# filePath1.read()
print(filePath1.read())
filePath1.close()


"Further reading"
# https://www.w3docs.com/snippets/python/how-to-read-a-text-file-into-a-list-or-an-array-with-python.html