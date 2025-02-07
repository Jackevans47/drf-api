## Local deployment

1. Clone the repository.

    - ```git clone https://github.com/Jackevans47/f1-social.git```

2. Go to the ```drf_api``` directory.

    - ```cd drf_api```

3. Create a virtual environment.

    - ```python3 -m venv venv```

    - ```source venv/bin/activate```

4. Install all dependencies.

    - ```pip install -r requirements.txt```

5. Create a ```env.py``` file.

    - ```touch env.py```

6. Add the following lines to ```env.py```:

   - ```import os```
    - ```os.environ["SECRET_KEY"]``` = your secret key.
    - ```# os.environ["DEBUG"]``` = "1"
    - ```# os.environ["DEV"]``` = "1"
    - ```os.environ["ALLOWED_HOSTS"]``` = your domain name.
    - ```os.environ["DATABASE_URL"]``` = your database url.
    - ```os.environ["CLOUDINARY_URL"]``` = your cloudinary url.
    - ```os.environ["CLIENT_ORIGIN"]``` =  your client origin url.


8. Create and migrate the database.

- ```python manage.py makemigrations```
- ```python manage.py migrate```

---

9. Create the superuser.

    - ```python manage.py createsuperuser```
  
10. Go to frontend/ directory.


```cd frontend```


11. Install dependencies.


```npm install```


12. Run the command to build the frontend.


```npm run build```



 13. Go to backend/ directory.

```
cd backend
```

  
14. Run the server.

    - ```python manage.py runserver```

15. Access the website by the link provided in terminal. Add ```/admin/``` at the end of the link to access the admin panel.



---

## Heroku Deployment


1. Create a Heroku account if you don't already have one.

2. Create a new app on Heroku.

    1. Go to the [Heroku dashboard](https://dashboard.heroku.com/apps).
    2. Click on the "New" button.
    3. Click on the "Create new app" button.
    4. Choose a name for your app.
    5. Choose a region.
    6. Click on the "Create app" button.


3. In your app, go to the "Settings" tab, press "Reveal Config Vars", and add the following config vars if they are not already set:

    1. ```ALLOWED_HOSTS``` = your heroku domain name.
    2. ```CLIENT_ORIGIN``` = the base url of client side application .
    3. ```CLOUDINARY_URL``` = the url from cloudinary.
    5. ```DATABASE_URL``` = the url of your heroku postgres database.
    6. ```CLIENT_ORIGIN_DEV``` = the base url of client side application in a development enviroment .
    7. ```SECRET_KEY``` = a secret key for your app.
    8. ```DISABLE_COLLECTSTATIC``` = environment variable in Django that prevents the collectstatic command from running during deployment.
  
4. In your app go to the "Deploy" tab.

    1. If it's already possible, connect your Heroku account to your GitHub account and then click on the "Deploy" button.
    2. If not, you need to copy the Heroku CLI command to connect your heroku app and your local repository.

        - ```heroku git:remote -a <your-heroku-app-name>```

5. Go to your local repository.

6. Login to your Heroku account in your terminal and connect your local repository to your heroku app.

    1. ```heroku login -i``` - Enter all your Heroku credentials it will ask for.
    2. Paste the command you copied from step 5 into your terminal.


7. Create Procfile.

   - add the following:
     ```release: python3 manage.py makemigrations && python3 manage.py migrate```
     ```web: gunicorn drf_api.wsgi```

     
8. Create ```requirements.txt```. This can be done by running the following command:

    - ```pip freeze > requirements.txt```
  
10. Add and commit all changes.

11. Push your changes to Heroku.

    - ```git push heroku master```
    or
    - ```git push heroku main```

12. Check your app's logs in heroku dashboard and ensure everything is working.
