# Airline management backend system

## Project Setup
- clone the project on your local 
- Execute `npm install` on the same path  as of your root directory of the downloaded project.
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following json
    ```
    {
        "development": {
            "username": "<YOUR_DB_LOGIN_NAME>",
            "password": "<YOUR_DB_PASSWORD>",
            "database": "Flights_Search_DB_DEV",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
    }
    ```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute 
    `npx sequelize db:create`
and then execute 
`npx sequelize db:migrate`
    ```

## DB Design
    - Airplane Table
        - id
        - model_number
        - capacity
    - Flight Table
        - id
        - airplane_id
        - departure_city_id
        - destination_city_id
        - departure
        - arrival
        - flight number
        - airport_id
    - Airport Table
        - id
        - name
        - city_id
        - address
    - City Table
        - id
        - name
    Airplane -> Flights (One to Many relationship)
    City -> Airport (One to Many relationship)
    Airport -> Flights (One to Many relationship )

    - A flight belongs to an airplane but one airplane can be used in multiple flights.
    - A city has many airports but one airport belongs to a city.
    - One airport can have many flights, but a flight belongs to one airport.

## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many airports and Airport belngs to a city (one to many relationship) 