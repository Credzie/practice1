from connect import *

def delete_asong():
    try:
    # Check if the songID exists
        songID = int(input("Enter songID to delete a record: "))
        dbCursor.execute(f"SELECT * FROM songs WHERE SongID = {songID}")
        
        row = dbCursor.fetchone()
    
        if row == None:
            print(f"SongID {songID} does not exists")
        else:
            dbCursor.execute("Delete FROM songs WHERE SongID = ?", (songID,))
            dbCon.commit()
            print(f"Deleted {songID} from table")
    except sql.OperationalError as e:
        print(f"Failed because: {e}")
    except sql.ProgrammingError as pe:
        print(f"Not working because: {pe}")
    finally:
        print("DB operation performed")
        
if __name__ == "__main__":        
    delete_asong()