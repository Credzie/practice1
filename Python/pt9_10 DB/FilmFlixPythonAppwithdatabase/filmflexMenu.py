import readFFDB, addFilms, updateFilms, deleteFilms, searchFilm

def read_file(file_path): 
    try:
        with open(file_path) as readfile:
            rf= readfile.read()
        return rf
            
    except FileNotFoundError as nf:
        print(f" File not found {nf}")

def films_menu():
    option = 0 
    optionList = ["1","2","3","4","5","6"]   
    menu_choices = read_file("Python/pt9_10 DB/FilmFlixPythonAppwithdatabase/FilmflexOptions.txt")
    while option not in optionList:
        print(menu_choices) 
        option = input("Enter an option from the option choice above")
        
        if option not in optionList:
            print(f" {option} is not a valid choice!")
    return option

mainProgram = True 

while mainProgram: 
    main_menu = films_menu()
    
    match main_menu:
        case "1":
            readFFDB.all_films()
        case "2":
            addFilms.insert_film()
        case "3":
            updateFilms.update_films()
        case "4":
            deleteFilms.delete_afilm()
        case "5":
            searchFilm.search_film()
        case _:
            mainProgram = False 
            
input("Press Enter to Exit........")       