import sqlite3
import pandas as pd
import json

# SQL STUFF
# get DB file
sqlite_file = './clean.db'
# Connecting to the database file
conn = sqlite3.connect(sqlite_file)
c = conn.cursor()
c.execute("""SELECT match_date as date, league as league, home_team as home, away_team as away, prediction as prediction, sel_odds as odds, win as win FROM predictions WHERE live == 1 ORDER BY date;""")
bets = c.fetchall()
df = pd.DataFrame(bets, columns=["Date", "League", "HomeTeam", "AwayTeam", "Prediction", "Odds", "Win"])

days = sorted(set(df.Date.values))
weekend_predictions = {}
for day in days:
    weekend_predictions[day] = []

for bet in bets:
    # check if the win cell is null or not
    if bet[6]:
        win = bet[6]
    else:
        win = "TBD"
        
    weekend_predictions[bet[0]].append({
        "League": bet[1],
        "HomeTeam": bet[2],
        "AwayTeam": bet[3],
        "Prediction": bet[4],
        "Odds": bet[5],
        "Win": win
    })

j = json.dumps(weekend_predictions)
print(j)

#export JSON here
with open ('predictions.json', 'w') as outfile:
    outfile.write(j)

conn.close()
