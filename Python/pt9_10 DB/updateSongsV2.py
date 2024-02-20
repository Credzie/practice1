from connect import *

def update_all_fields():
    try:
        songID = int(input("Enter songID of the record to update: "))
        dbCursor.execute(f"SELECT * FROM songs WHERE SongID = {songID}")
        
        row = dbCursor.fetchone()
        if row == None: # None is a single object that checks if a value is present
            print(f"No record with songID {songID} exists")
            
        else:
            # get the values to update the respective fields
            sTitle = input("Enter song Title: ")
            sArtist = input("Enter song Artist: ")
            sGenre = input("Enter song Genre: ")
            # execute the sql statement to update respective fields
            
            dbCursor.execute("UPDATE songs SET Title =?, Artist = ?, Genre = ? WHERE songID = ?", (sTitle, sArtist, sGenre,songID))
            dbCon.commit()
            
            # print the details of the updated record
            print(f" The record {songID} updated in the songs table")
    except sql.OperationalError as e:
        print(f"Failed because: {e}")
    except sql.ProgrammingError as pe:
        print(f"Not working because: {pe}")
    finally:
        print("DB operation performed")
update_all_fields()
   


























# def update_songs():
#     try:
#         # SongID is primary key field
 
#         songID = int(input("Enter the SongID to update a record: "))
#         dbCursor.execute(f"SELECT * FROM songs WHERE SongID = {songID}")
 
#         #The fetchone fecthes a unique(one) record
#         row = dbCursor.fetchone()
#         #None is a single object to check if a value is present
#         if row == None:
#             print(f"No record with the SongID {songID} exists")
#         else:
#             fieldname = input("Enter the field (Artist or Title or Genre) ").title()
#             fieldValue =input(f"Enter the value for {fieldname}: ")
#             fieldValue = "'"+fieldValue+"'"
 
#             # dbCursor.execute(f"UPDATE songs SET {fieldname} = ? WHERE SongID = ?",(fieldValue,songID))
#             dbCursor.execute(f"UPDATE songs SET {fieldname} = {fieldValue} WHERE SongID = {songID}")
#             dbCon.commit()
#             print(f"{songID} Updated")
            
#     except sql.OperationalError as e:
#         print(f"Failed because: {e}")
#     except sql.ProgrammingError as pe:
#         print(f"Not working because: {pe}")
#     finally:
#         print("DB operation performed")
# update_songs()
   