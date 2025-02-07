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

