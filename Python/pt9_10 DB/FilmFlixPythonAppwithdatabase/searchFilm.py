from connectTask import *
def search_film():
        try:
            field = input("Search by filmID, title, yearReleased, rating, duration or genre: ")
 
            if field == "filmID":
                idInput = int(input("Enter filmID: "))
                ffCursor.execute("SELECT * FROM tblfilms1 WHERE filmID = ?", (idInput,))
                row = ffCursor.fetchone()
 
                if row is None:
                    print(f"No film with filmID {idInput} exists")
                else:
                    for afilm in row:
                        print(afilm)
 
            elif field in ["title", "yearReleased", "rating", "duration", "genre"]:
                strInput= input(f"Enter the value for the field {field}: ")
                ffCursor.execute(f"SELECT * FROM tblfilms1 WHERE {field} LIKE '%{strInput}%'")
                rows = ffCursor.fetchall()
                if not rows:
                    print(f"No films with field {field} matching '{strInput} ")
                elif field == "Title" or field == "yearReleased" or field == "rating" or field == "duration" or field == "genre":
                    for films in rows:
                        print(films)    
                        
                        genreType = ffCursor.fetchall()
                        for gType in genreType:
                            print(gType)
 
            else:
                print(f"Search field {field} invalid !")
        except sql.OperationalError as e:
            print(f"Failed because: {e}")
        except sql.ProgrammingError as pe:
            print(f"Not working because: {pe}")
        finally:
            print("DB operation performed")
            
if __name__ == "__main__":
    search_film()