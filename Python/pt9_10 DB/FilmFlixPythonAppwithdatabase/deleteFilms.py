from connectTask import *

def delete_afilm():
    try:
   
        filmID = int(input("Enter filmID to delete a film: "))
        ffCursor.execute(f"SELECT * FROM tblfilms1 WHERE filmID = {filmID}")
        
        row = ffCursor.fetchone()
    
        if row == None:
            print(f"filmID {filmID} does not exists")
        else:
            ffCursor.execute("Delete FROM tblfilms1 WHERE filmID = ?", (filmID,))
            filmFlexDB.commit()
            print(f"Deleted {filmID} from table")
    except sql.OperationalError as e:
        print(f"Failed because: {e}")
    except sql.ProgrammingError as pe:
        print(f"Not working because: {pe}")
    finally:
        print("DB operation performed")
        
if __name__ == "__main__":        
    delete_afilm()