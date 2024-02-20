from connectTask import *

def update_films():
    try:
 
        filmID = int(input("Enter the filmID to update a film: "))
        ffCursor.execute(f"SELECT * FROM tblfilms1 WHERE filmID = {filmID}")
 
        row = ffCursor.fetchone()
      
        if row == None:
            print(f"No film with the filmID {filmID} exists")
        else:
            fieldname = input("Enter the field (filmID or title or yearReleased or rating or duration or genre) ").title()
            fieldValue =input(f"Enter the value for {fieldname}: ")
            fieldValue = "'"+fieldValue+"'"
 
            ffCursor.execute(f"UPDATE tblfilms1 SET {fieldname} = {fieldValue} WHERE filmID = {filmID}")
            filmFlexDB.commit()
            print(f"{filmID} Updated")
            
    except sql.OperationalError as e:
        print(f"Failed because: {e}")
    except sql.ProgrammingError as pe:
        print(f"Not working because: {pe}")
    finally:
        print("DB operation performed")

if __name__ == "__main__":
    update_films()
   