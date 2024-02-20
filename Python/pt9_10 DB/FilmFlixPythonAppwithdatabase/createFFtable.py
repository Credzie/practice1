# import all variables/functions from the connect.py file
from connectTask import * 

ffCursor.execute(""" 
CREATE TABLE "tblfilms1" (
	"filmID"    INTEGER,
	"title" TEXT,
	"yearReleased"  INTEGER,
	"rating"    TEXT,
    "duration"  INTEGER,
    "genre" TEXT
)""")