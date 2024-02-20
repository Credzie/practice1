from connectTask import * 
from readFFDB import *

def dump_data():
    with open("Python/pt9_10 DB/FilmFlixPythonAppwithdatabase/tblfilms1.sql") as dumfile:
        # read the open file(dumbfile) and save its contents to sqlInsertScript variable
        sqlInsertScript = dumfile.read()
        
        # write the content found/stored in the sqlInsertScript variable
        ffCursor.executescript(sqlInsertScript)
        # now call the all_songs function from the readsongs file to display updated records
        all_films()
        
dump_data()

