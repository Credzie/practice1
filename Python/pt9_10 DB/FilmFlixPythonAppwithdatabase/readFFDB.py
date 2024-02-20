from connectTask import *
 
def all_films():
    try:
        ffCursor.execute("SELECT * FROM tblfilms1")
        allfilms = ffCursor.fetchall()
 
        if allfilms:
            print("filmID | Title | YearReleased | Rating | Duration | Genre")
            print("-" * 60)
 
            for aFilm in allfilms:
                print(f"{aFilm[0]:<3} | {aFilm[1]:<10} | {aFilm[2]:<4} | {aFilm[3]:<3} | {aFilm[4]:<4} | {aFilm[5]:<8}")
        else:
            print("No films found in the tblfilms1 table")
    except sql.OperationalError as e:
        print(f"Failed because: {e}")
    except sql.ProgrammingError as pe:
        print(f"Not working because: {pe}")
    finally:
        print("DB operation performed")
        
all_films()


# ffCursor.execute("DROP TABLE 'tblfilms' ")