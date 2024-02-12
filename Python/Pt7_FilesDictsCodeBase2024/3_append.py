
# a for adding to an existing file​ and creates the file if it does not exists
# Using context manager to handling resource usage
" automatically setup and teardown resources"

"Syntax :  with openMethod('pathtofolder/parthtofile/fileName.txt', 'w') as varName:"
# with open('Python/Pt7_FilesDictsCodeBase2024/flie2.txt',"a") as filePath1:
#     contents ="\nYourA\ntext\ngoes\nhere\nin\nnewlines"
#     filePath1.write(contents) #write to file 


"To Do: Task 1: Task 1: Refer to the example code above to use the context manager to:"
# append to your file (yourName.txt), your interests and a fake address
with open('Python/Pt7_FilesDictsCodeBase2024/Credziefile.txt',"a") as filePath1:
    contents ="\nIs the best\nIs the greatest\nHe can't be stop\nHe is the one\nOf all time\nAbsolute"
    filePath1.write(contents)

"Further reading"
# https://www.w3docs.com/snippets/python/how-to-read-a-text-file-into-a-list-or-an-array-with-python.html