import sqlite3 as sql #import the sqlite module and assign it an alias

try:
    # to use the sqlite module we start be creating a variable(object) to hold the path to the folder and create the file CredziesDatabase.db
    with sql.connect("Python/pt9_10 DB/CredziesDatabase.db") as dbCon:
        # use the dbCon variable to hold the folder and the pathway 
        # also to manipulate tables(sql queries) in the databse
        dbCursor = dbCon.cursor() # use the execute sql statement
except sql.OperationalError as e: # raise sqlERROR
    #handle the exception
    print(f"Connection failed: {e}")    
    
