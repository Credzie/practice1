# Read though the code below:

# 1. Identify any programming language that uses similar syntax --- Javacript 
# 2. Explain and comment as many lines to demonstrate understanding
#
#
# a JS example of a case can be shown below as 
# switch(teamPlayer().getPlayer()){
#     case 0:
#     player1 = "Jason";
#     break;
#   case 1:
#     player2 = "Simon";
#     break;
#   player3:
#      day = "Gabby";
#     break;
#   case 3:
#     player4 = "Alice";
#     break
#   case 4:
#     player5 = "Susan";
#     break;
#   case 5:
#     player6 = "Tony";
#     break;
#   case 6:
#     player7 = "Betty";
    
# }

# 3. Use the example below to write your own days in the week program

import random

weeks = ["wk1", "wk2", "wk3", "wk4", "wk5", "wk6", "wk7", "wk8", "wk9", "wk10", "wk11", "wk12"]
aWeek = random.choice(weeks)
print(aWeek)
match aWeek:
    case "wk1":
        print("Welcome to SDLC.")
    case "wk2":
        print("Welcome HTML.")
    case "wk3":
        print("Welcome to CSS.")
    case "wk4":
        print("Still CSS week.")
    case "wk5":
        print("Welcome to JavaScript.")
    case "wk6":
        print("Welcome JavaScript project.")
    case "wk7":
        print("Welcome to Database.")
    case "wk8":
        print("Still database week.")
    case "wk9":
        print("Welcome Python .")
    case "wk10":
        print("Still Python week.")
    case "wk11":
        print("Welcome Python Project week.")
    case "wk12":
        cohortName = input("Enter cohort name: ")
        if cohortName == "Man":
            print("Microsoft Azure week.")
        else:
            print("Portfolio week.")
    # In the last case block, we defined case _, where the variable 
    # name _ acts as a wildcard and it will never fail to match.
    # If no case matches in the upper code then the last case block is executed.
    case _:
        print("Matches anything.")

        # https://geekpython.in/match-case-in-python
        import random

        game_wks = ["wek1", "wek2", "wek3", "wek4", "wek5", "wek6", "wek7", "wek8", "wek9", "wek10", "wek11", "wek12"]
        matchWeek = random.choice(game_wks)
        print(matchWeek)
        match matchWeek:
            case "wek1":
                print("ManU vs Chelsea.")
            case "wek2":
                print("ManU Vs Wolves.")
            case "wek3":
                print("ManU Vs Arsenal.")
            case "wek4":
                print("ManU Vs Brighton.")
            case "wek5":
                print("ManU Vs W.Ham.")
            case "wek6":
                print("ManU Vs M.City.")
            case "wek7":
                print("ManU Vs Liverpool.")
            case "wek8":
                print("ManU Vs Spurs..")
            case "wek9":
                print("ManU Vs Luton.")
            case "wek10":
                print("ManU Vs Burnley.")
            case "wek11":
                print("ManU Vs A.Villa.")
            case "wek12":
                season = int(input("Enter number of matches: "))
                if season == 12:
                    print("End of season")
                else:
                 print("Season in Progress.")
                 
                 
                 print(game_wks[3])
                print(matchWeek[5])
                 