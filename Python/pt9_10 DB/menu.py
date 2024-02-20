import readSongs, addSong, updateSongs, deleteSong, search

def read_file(file_path): #file_path is a parametter/variable
    try:
        with open(file_path) as readfile:
            rf= readfile.read()
        # with open(file_path) as rf:
        #     rf.read()
        return rf
            
    except FileNotFoundError as nf:
        print(f" File not found {nf}")
        
#Testing The file
# print(read_file("Python/pt9_10 DB/menuOptions.txt"))  

def songs_menu():
    option = 0 # initializing the variable within the function with an integer value 0
    optionList = ["1","2","3","4","5","6"]
    # call rge read_file function and assign to avariable      
    menu_choices = read_file("Python/pt9_10 DB/menuOptions.txt")
    # repeat the menu options until user opts to quit
    while option not in optionList:
        print(menu_choices) # print the menu_choices variables because its is a function
        # re-assign the option variables as a string value
        option = input("Enter an option from the menu choice above")
        
        # check if the input provided in options variables is not outside optionList = ["1","2","3","4","5","6"]
        if option not in optionList:
            print(f" {option} is not a valid choice!")
    return option

# testing 
# print(songs_menu())
# create and use a bollean flag variable
mainProgram = True # toggle to False to exit out of a while loop

while mainProgram: # while True
# call the song_menu functions and assign to a variable(main_menu)
    main_menu = songs_menu()
    
    # use match case # same as with JS
    match main_menu:
        case "1":
            readSongs.all_songs()
        case "2":
            addSong.insert_songs()
        case "3":
            updateSongs.update_songs()
        case "4":
            deleteSong.delete_asong()
        case "5":
            search.search_song()
        case _:
            mainProgram = False # set mainProgram = False to exit the menu
            
input("Press Enter to Exit........")            
    


    
            