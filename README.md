**Link to the app:** https://toeaung-yeyint.github.io/teams-titles/dist/index.html
<br/>

# Project description

This app allows users to view the winning history of top European football teams in the UEFA Champions League. Users can access the Champions League winning history of teams such as Real Madrid, Barcelona, Manchester United, Chelsea, Liverpool, Bayern Munich, AC Milan, Inter Milan, Juventus, and Ajax. Additionally, the system provides functionality for users to add new teams, remove existing teams, and update the winning history of teams.

## Project specifications

- Users can search for a team to view its champion league winning history
- If a user can click search button successfully, the search input field will be back to empty field
- If a user searches for a team that doesn’t exist in the API, “No data for the team you are searching for.” message will be returned rather than throwing error or return nothing
- “Search” button shouldn’t work until a user puts any text in the search input field
- If a user clicks on the “Rest” button, the result section and the search input field will be clear
- Users can add a new team
- If a user adds a new team successfully, “You have added the team successfully.” will be returned.
- If a user tries to add a new team that already exists, “The team already exists in the database.” will be returned.
- Users can remove an existing team
- If a user removes an existing team successfully, “You have deleted the team successfully.” will be returned.
- If a user removes a team that doesn’t exist in the database, “The team you want to delete doesn't exist in the database.” will be returned
- Users can update the existing information of a team’s history
- If a user updates a team history successfully, “You have updated the winning history of the team successfully.” will be returned
- If a user updates a team that doesn’t exist in the database, “You can't update the team that doesn't exist.” will be returned

### Tools used & credits:

- HTML
- CSS
- Bootstrap (https://getbootstrap.com/)
- Vanilla JavaScript
- Snackbar (https://github.com/andreruffert/snackbar)
- MockAPI (https://mockapi.io)
- Parcel (https://parceljs.org/)
