# README

This project was created in response to the current COVID-19 pandemic.  A team of researchers at Boston University’s School of Public Health compiled data related to individual state legislative actions taken to combat the spread of the virus.  This project was started so that the research team could disseminate their data easier and with the ability to visually display it using charts and graphs.    

## Deploying the COVID-19 State Legislation Tracker
-  Run the backend Rails API server on a different port other than the typical port 3000 such as port 3001
`rails s -p 3001`
- Start the React framework used for the front-end on port 3000 by running `npm run start`
- Run `rails db:migrate` to create all of the necessary database tables.

## Architecture
This project was built using React for the front-end and Rails as the back-end API server with PostgreSQL being used for the database. Some additional packages and libraries used include Bootstrap for front-end styling and Chart.js for displaying data.

The web application was built using the latest available web frameworks (as of June, 2020) to include `Ruby 2.6.4`, `Rails 6.0.2`, and `React 16.13.1`

Full authentication was implemented between the React front-end and Rails back-end, as well as both client side and server side error handling when forms such as the login or registration are submitted.  The bcrypt gem was used in order to store user passwords as irreversible salted hashes.  When a user attempts to log into the site the password that they enter is transformed into a hash and compared against the existing password hash in the database and then the user is allowed access or denied.    

### Importing data
The Boston University research team was originally tracking their state policy data using a spreadsheet.  It can be located at `/rails/lib/COVID-19 US state policy database (CUSP).xlsx`     A rake task was written that maps the columns in the researchers spreadsheet to seven different database tables in a PostgreSQL database. This import script is located at `rails/lib/tasks/import_covid_spreadsheet.rake` and the data import can be executed by running `bundle exec rails import_covid_spreadsheet:data` in the terminal.

