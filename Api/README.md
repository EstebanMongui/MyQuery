# My Query API

### This api was created with Django and django rest framework

#### - Api contains all backend logic, is an API REST that expose all necessary endpoints to get and post data, these service contain two important models "Query" and "Answer". You can run backend server from Api directory and running next commands:

#### 1. *pip3 venv env* or *pipenv shell* to start virtualenv 
#### 2. *pip3 install -r requirements.txt* to install dependencies 
#### 3. *python manage.py makemigrations* to make migratins of models
#### 4. *python manage.py migrate* to apply migrations in database
#### 5. *python manage.py runserver* to start server

#### Note: The steps 1 to 4 only need run the first time 


## Endpoints

#### - /queries/ --> to get all queries
#### - /queries/category/ --> to filter ansquers by category 
#### - /answers/  --> to get all answers 
#### - /answers/<int:query_id> --> to get answer for his query pair