# Airline management backend system
- This project is based on Microservice architecture.
- This project follows the repository pattern, whereby, we communicate the models through the repository layer, and all of our business logic is primarily stored in the service layer.
- This backend system has specific cron-jobs for different usecases, like reminder service, update mails, etc.
- We have also integrated the message-queues design pattern to scale up the backend system. We have used rabbitMQ for setting up the message queues (previously it was build on kafka, but we have refactored the code for now).
- We will soon deploy this backend system on AWS as well and will containerize the microservices as well for orchestration.

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

#### NOTE: In other microservice also we have the similar kind of pattern, so the above steps will work accurately for other microservices as well.
  

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
## Associations
 - Airplane -> Flights (One to Many relationship)
 - City -> Airport (One to Many relationship)
 - Airport -> Flights (One to Many relationship )

    - A flight belongs to an airplane but one airplane can be used in multiple flights.
    - A city has many airports but one airport belongs to a city.
    - One airport can have many flights, but a flight belongs to one airport.
      
    ### Refer to the design doc which is attached above in the code files for more clear understanding of the system design of this project.

## Tables

- City -> id, name, created_at, updated_at
- Airport -> id, name, address, city_id, created_at, updated_at
- Relationship -> City has many airports and Airport belngs to a city (one to many relationship) 

## Microservice repositories
 - Auth microservice: https://github.com/Kartik8Dwivedi/Auth-Microservice
 - Booking microservice: https://github.com/Kartik8Dwivedi/Booking-Microservice
 - Reminder microservice: https://github.com/Kartik8Dwivedi/Notification-Microservice
 - There are few more private repositories for reminder service, logging, aws microservice, etc which will be made public soon!!
