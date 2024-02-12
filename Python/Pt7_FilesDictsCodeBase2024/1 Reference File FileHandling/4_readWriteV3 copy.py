# There are four modes for opening a file:​

# r for only reading files​

# w for only writing to files​ and creating the file if it does not exists but overwrites existing file contents

# a for adding to an existing file​

# r+ for reading and writing files
import os

filepath = 'Python/Pt7_FilesDictsCodeBase2024/1 Reference File FileHandling/file3.txt'

if os.path.exists(filepath):
  try:
    with open(filepath +'/file3.txt',"r+") as filePath1:
    # with open('Python/Pt7_FilesDictsCodeBase2024/1 Reference File FileHandling/file3.txt',"r+") as filePath1:# folder/folder/filename
        # print(filePath1.read()) #read from fiile
      readContents = filePath1.read()
      print(readContents)
      contents ="\nI cant be\nStop\nAm going No where\nAm everywhere\nin\nEveryplace"
      filePath1.write(contents) #write to file 
                
# handle(FileNotFoundError) if the file is not found
  except IOError as e:
    print("Error occured because: {e}")

else:
      print("File not found, please check file path")

  # try this code to open file, read and display its content in the terminal
    
# # try:
# #     with open('Python/Pt7_FilesDictsCodeBase2024/1 Reference File FileHandling/file4.txt',"r+") as filePath1:# folder/folder/filename
# #         # print(filePath1.read()) #read from fiile
# #         readContents = filePath1.read()
# #         print(readContents)
# #         contents ="\nI cant be\nStop\nAm going No where\nAm everywhere\nin\nEveryplace"
# #         filePath1.write(contents) #write to file 
                
# # handle(FileNotFoundError) if the file is not found
# except FileNotFoundError:
#     print("File not found, please check file path")



"To Do: Task 1: Modify the code above to"
# Read the contents from your file (yourName.txt) and write to your file  
# use the with the correct mode and ensure you use both the read and the write() methods to perform their respective 
# operations

# import os
 
# file_path = '<filepath>/fake_file.txt' 
# # ^ your file path
 
# try:
#     if os.path.exists(file_path):
#         with open(file_path, 'w') as file:
#             file.write("Testing\n")
#         print("successfully written to the file")
#     else:
#         print("Error: File not found")
# except Exception as e:
#     print("An error occurred:", e)
