import sqlite3 as sql 

try:
    with sql.connect("Python/pt9_10 DB/FilmFlixPythonAppwithdatabase/FilmFlexDB.db") as filmFlexDB:
        ffCursor = filmFlexDB.cursor() 
except sql.OperationalError as e: 
    print(f"Connection failed: {e}")   