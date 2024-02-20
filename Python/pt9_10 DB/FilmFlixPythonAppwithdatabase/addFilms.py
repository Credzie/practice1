from connectTask import *

def insert_films():
    try:
        filmID = input("Enter film ID: ")
        title = input("Enter title of film: ")
        yearReleased = input("Enter yearReleased: ")
        rating = input("Enter rating of film: ")
        duration= input("Enter duration of film: ")
        genre= input("Enter genre of film: ")
        
        
        ffCursor.execute("INSERT INTO tblfilms1 VALUES(?,?,?,?,?,?)", (filmID, title, yearReleased, rating, duration, genre))
        filmFlexDB.commit()
        print(f"{title} inserted in the film table")
    except sql.OperationalError as e:
        print(f"failed  because: {e}")

if __name__ == "__main__":
    
    insert_films()