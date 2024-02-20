from connectTask import * 
from readFFDB import *

def multiple_films():
        films = [
                ("FILM023","Voices in the Mist","2063","8.1","140 minutes","satire"),
                ("FILM004","Dreams of Tomorrow","2023","5.2","170 minutes"",sci-fi"),
                ("FILM003","Lost in Time","2040","7.3","145 minutes","romance"),
                ("FILM033","The Secret Chamber","2018","6.9","70 minutes","crime"),
                ("FILM004","The Midnight Sun","2038","5.2","95 minutes","romance"),
                ("FILM028","The Eternal Flame","2043","6.7","170 minutes","sci-fi"),
                ("FILM020","The Last Sunrise","2043","5.6","125 minutes","mockumentary"),
                ("FILM028","The Forgotten Path","2065","5.7","140 minutes","thriller"),
                ("FILM029","The Lost Kingdom","2068","6.2","160 minutes","horror"),
                ("FILM028","Whispers of Hope","2020","6.8","250 minutes","crime"),
                ("FILM016","The Crystal Moon","2073","8.1","195 minutes","comedy"),
                ("FILM033","Whispers of Courage","2073","5.6","170 minutes","crime"),
                ("FILM002","Lost in Time","2043","5.3","75 minutes","biography"),
                ("FILM020","Voices in the Mist","2053","5.7","90 minutes","documentary"),
                ("FILM029","The Enchanted Mirror","2028","6.5","90 minutes","cyberpunk"),
                ("FILM015","Whispers of Wisdom","2035","5.2","120 minutes","family"),
                ("FILM015","The Final Frontier","2015","8.3","95 minutes","family"),
                ("FILM025","Shadows of the Past","2005","8.6","125 minutes","spy"),
                ("FILM035","The Sacred Quest","2053","6.8","240 minutes","historical"),
                ("FILM006","The Phantom Isle","2025","7.9","220 minutes","war"),
                ("FILM035","The Secret Chamber","2073","7.3","270 minutes","war"),
                ("FILM014","Whispers of Hope","2008","6.9","240 minutes","horror"),
                ("FILM006","Dreams of Tomorrow","2058","7.4","200 minutes","war"),
                ("FILM026","Lost in Time","2073","6.2","125 minutes","sci-fi"),
                ("FILM009","Echoes of Adventure","2075","7.5","280 minutes","buddy cop"),
                ("FILM012","The Lost Kingdom","2048","5.9","120 minutes","mystery"),
                ("FILM006","Echoes of the Heart","2025","6.2","230 minutes","animation"),
                ("FILM033","Whispers in the Wind","2003","6.4","105 minutes","superhero"),
                ("FILM034","The Hidden Treasure","2073","6.8","250 minutes","drama"),
                ("FILM024","Echoes of the Heart","2050","8.6","150 minutes","coming-of-age"),
                ("FILM006","Echoes of Destiny","2048","6.7","120 minutes","cyberpunk"),
                ("FILM012","Whispers of Love","2033","5.2","160 minutes","fantasy"),
                ("FILM024","Whispers of the Sea","2058","6.5","290 minutes","family"),
                ("FILM035","The Last Sunrise","2038","7.5","80 minutes","sports"),
                ("FILM003","The Crystal Moon","2035","7.2","180 minutes","mockumentary"),
                ("FILM028","Whispers in the Wind","2075","7.4","310 minutes","thriller")
                ]
        
        # write the content found/stored in the sqlInsertScript variable
        ffCursor.executemany("INSERT INTO tblfilms1 (filmID, Title, yearReleased, rating, duration, genre) VALUES(?,?,?,?,?,?)", films)
        filmFlexDB.commit()
        # now call the all_songs function from the readsongs file to display updated records
        multiple_films()
        
multiple_films()

