import json
import requests
import os

api_key = os.getenv("ODDS_API_KEY")

if not api_key:
    print("❌ Missing ODDS_API_KEY environment variable.")
    exit(1)

headers = {"x-api-key": api_key}

player_url = "https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?regions=us&markets=h2h"
team_url = "https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?regions=us&markets=spreads"

try:
    print("Fetching player data...")
    player_data = requests.get(player_url, headers=headers)
    print("Fetching defense data...")
    team_data = requests.get(team_url, headers=headers)

    with open("currentWeeklyData.json", "w") as f:
        json.dump(player_data.json(), f, indent=2)

    with open("defenseStats.json", "w") as f:
        json.dump(team_data.json(), f, indent=2)

    print("✅ Data updated successfully!")

except Exception as e:
    print("❌ Error:", e)
    exit(1)
