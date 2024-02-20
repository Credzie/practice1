from connect import *

def insert_songs():
    try:
    
        # "SongID","Title","Artist","Genre"	
        # PRIMARY KEY("SongID" AUTOINCREMENT)
        sTitle = input("Enter song title: ")
        sArtist = input("Enter song Artist: ")
        sGenre = input("Enter song Genre: ")
        
        dbCursor.execute("INSERT INTO SONGS VALUES(NULL,?,?,?)", (sTitle, sArtist, sGenre))
        dbCon.commit()
        print(f"{sTitle} inserted in the song table")
    except sql.OperationalError as e:
        print(f"failed  because: {e}")

if __name__ == "__main__":
    
    insert_songs()




    #sqlite3.OperationalError
# # dbCursor.execute("INSERT INTO song VALUES(NULL,?,?,?)", (sTitle, sArtist,sGenre))
#         dbCursor.execute("INSERT INTO songs (SongID, Title, Artist) VALUES(NULL,?,?)", (sTitle, sArtist,sGenre))
#         dbCon.commit()
#         print(f"{sTitle} inserted in the song table")
    # except sql.OperationalError as e:
    #     print(f"Failed because: {e}")
    # except sql.ProgrammingError as pe:
    #     print(f"Not working because: {pe}")
    # except sql.Error as er:
    #     print(f"This error occurs: {er}")
   
# insert_songs()
 
# sqlite3.OperationalError    