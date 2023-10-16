# AirHub Backend System
- This project is based on Microservice architecture.
- This project follows the repository pattern, whereby, we communicate the models through the repository layer, and all of our business logic is primarily stored in the service layer.
- This backend system has specific cron-jobs for different usecases, like reminder service, update mails, etc.
- We have also integrated the message-queues design pattern to scale up the backend system. We have used rabbitMQ for setting up the message queues (previously it was build on kafka, but we have refactored the code for now).
- The microservices follow the REST Api intercommunication between each other using axios.
- This project was earlier deployed on AWS EC2 Ubuntu instance along with automatic load balancers, which is currently terminated; the containerized version of this project will be available soon!
- All the microservices which were needed to build this project are listed at the bottom of this documentation.
- Refer to the Design doc for more explanation regarding the backend complexities and functionalities.

## Microservice repositories
 - ### Ticketing Microservice
      - For booking the flight tickets and message queues
      - [https://github.com/Kartik8Dwivedi/Booking-Microservice](https://github.com/Kartik8Dwivedi/Ticketing-Microservice)
 - ### Mailing and Third party Microservice
      - For setting up the cron jobs and message queues
      - [https://github.com/Kartik8Dwivedi/Notification-Microservice](https://github.com/Kartik8Dwivedi/Thirt-Party-Microservice)
 - ### Authentication and Authorization microservice
      - For authentication logic
      - [https://github.com/Kartik8Dwivedi/Auth-Microservice](https://github.com/Kartik8Dwivedi/Authentication-and-Authorization-microservice)
 - ### Api Endpoint Gateway microservice
      - For api endpoint switch to particular microservice; the role of this microservice in majorly for deployment
      - https://github.com/Kartik8Dwivedi/API-Endpoint-Gateway
 - This backend system was active on AWS EC2 instance earlier, currently it is terminated. The containerized version of this system will be committed soon!

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
  

## DB Design for this microservice
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
## Associations for this microservice
 - Airplane -> Flights (One to Many relationship)
 - City -> Airport (One to Many relationship)
 - Airport -> Flights (One to Many relationship )

    - A flight belongs to an airplane but one airplane can be used in multiple flights.
    - A city has many airports but one airport belongs to a city.
    - One airport can have many flights, but a flight belongs to one airport.
      
    ### Refer to the design doc which is attached above in the code files for more clear understanding of the system design of this project.

## Tables for this microservice

- City -> id, name, created_at, updated_at
- Airport -> id, name, address, city_id, created_at, updated_at
- Relationship -> City has many airports and Airport belngs to a city (one to many relationship) 
