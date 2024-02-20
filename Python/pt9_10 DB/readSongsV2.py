from connect import *

def all_songs():
    try:
        
    #try tp execute the sql statement below
    
        dbCursor.execute("SELECT * FROM songs")
        # fetch all selected data(rows)
        allsongs = dbCursor.fetchone() # fetchall fetches all the rowsfrom the table
        
        if allsongs:
            # format output
            print("SongID # Title # Artist # Genre")
            print("-" * 50)
            
            for aSong in allsongs:
        
        
                print(aSong)
        else:
            print("No somgs found in songs table")
    except sql.OperationalError as e:
        print(f"Failed because: {e}")
    except sql.ProgrammingError as pe:
        print(f"Not working because: {pe}")
    except sql.Error as er:
        print(f"This error occurs: {er}")
    finally:
        print("DB operation performed")
        
all_songs()        
           