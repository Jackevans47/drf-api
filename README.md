# F1 Social

Go to F1 Social [https://f1-social-api-910f5cff82da.herokuapp.com/)


## About
This is a social media app that allows F1 fans to be able to connect with other fans and post content relating to F1. They can post images, follow other users and see events that are avalioable to them.
to use this application you need to create an account to access the main features of this application.


## User stories

- As a user I can view a navbar from every page so that I can navigate easily between pages
- As a user I can create a new account so that I can access all the features for signed up users
- As a user I can sign in to the app so that I can access functionality for logged in users
- As a user I can tell if I am logged in or not.
- As a logged out user I can see signing in/up options allowing me to sign in/out
- As a logged in user I can create posts so that I can share my posts
- As a logged in user I can create posts so that I can share my posts
- As a logged in user I can like a post so that show interest in the post
- As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content
- As a user, I can search for posts with keywords, so that I can find the posts, profiles and events that are of interest
- As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most
- As a user i can continuously scroll through the posts so that i can keep seeing more posts without having to switch pages
- As a user I can view the posts page so that I can read the comments about the post
- As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created
- As a logged in user I can add comments to a post so that I can share my thoughts about the post
- As a user I can see how long ago a comment was made so that I know how old a comment is
- As a user I can read comments on posts so that I can read what other users feedback about the posts
- As the creator of the comment i can delete my comment so that i can remove my own comment
- As the creator of a comment i can edit my comments so that i can fix any errors on the existing comment
- As a user I can view other users profiles so that I can see their posts and learn more about them
- As a logged in user I can edit my profile so that I can change any infomation required on my profile
- As a logged in user I can update my username and password so that I can change my display name and keep my profile secure
- As a user, i want to be able to delete my post so that i can delete posts i no longer like.
- As a user, i want to be able to see the most popular profiles so i can see which profiles are popular.
- As a user i want to be able to follow and unfollow other users so i can either see or remove their content from my feed.
- As a use, i want to be able to see the events page so that i can look through any events that may interest me.


---


### Target audience

F1 social is aimed toward fans of F1 who want to be able to share exclusive f1 material with other fans and attand events to meet up.

### Strategy Trade-Off

The strategy trade-off is to make the application as user friendly as possible.
- simple interface;
- easy to use;
- intuitive navigation;
- consistent design;
- accessible to all users;

---

## Future Development

1. Events creation:

 - This will allow users to be able to create their own events that their followers can see.

2. Liking and commenting on events:

 - This will allow users to be able to interact with events more by allowing them to like and comment on events they like and share their feedback.



## Technologies used

- ### Languages:
    
    + [Python 3.9.16](https://www.python.org/downloads/release/python-385/): the primary language used to develop the server-side of the website.

    + [JS](https://www.javascript.com/): the primary language used to develop interactive components of the website.

    + [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML): the markup language used to create the website.

    + [CSS](https://developer.mozilla.org/en-US/docs/Web/css): the styling language used to style the website.

 - ### Frameworks and libraries:

  + [Django](https://www.djangoproject.com/): python framework used to create all the logic.

  + [Django-rest-framework](https://www.django-rest-framework.org/): python framework used to create the API.

  + [React](https://reactjs.org/): javascript framework used to create the front-end of the website.

  + [PrimeReact](https://www.primefaces.org/primereact/): a set of components used to create the front-end of the website.

  + [Primeflex](https://www.primefaces.org/primeflex/): css framework used to style the front-end of the website.

- ### Databases:

  + [SQLite](https://www.sqlite.org/): was used as a development database.
  + [PostgreSQL](https://www.postgresql.org/): the database used to store all the data.

- ### Other tools:

    + [Git](https://git-scm.com/): the version control system used to manage the code.
    + [Pip3](https://pypi.org/project/pip/): the package manager used to install the dependencies.
    + [Psycopg2](https://www.python.org/dev/peps/pep-0249/): the database driver used to connect to the database.
    + [Heroku](https://heroku.com/): the hosting service used to host the website.
    + [GitHub](https://github.com/): used to host the website's source code.
    + [VSCode](https://code.visualstudio.com/): the IDE used to develop the website.
    + [Chrome DevTools](https://developer.chrome.com/docs/devtools/open/): was used to debug the website.
    + [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi): was used to debug the website.
    + [W3C Validator](https://validator.w3.org/): was used to validate HTML5 code for the website.
    + [W3C CSS validator](https://jigsaw.w3.org/css-validator/): was used to validate CSS code for the website.
    + [JShint](https://jshint.com/): was used to validate JS code for the website.
    + [PEP8](https://pep8.org/): was used to validate Python code for the website.

---
​
## Features
​
### Navbar:
​
There are 2 types of the navbar:
​
1. Navbar for Signed out users:
​

![navbar signed out](https://github.com/user-attachments/assets/0873be5f-2c48-457f-9b8e-a1d87951a23e)

​
  - "Home" button: takes the user to the home page.
  - "Sign In" button: takes the user to the Sign in page.
  - "Sign up" button: takes the user to the Sign up form page.

2. Navbar for Signed in users:
​

![navbar signed in](https://github.com/user-attachments/assets/0a6ef3e8-3e97-4e51-862e-040740296dbb)

​
  - "Home" button: takes the user to the home page.
  - "Feed" button: takes the user to the feed page.
  - "Events" button: takes the user to the events page.
  - "Sign out" button: will sign the user out.
  - "Profile" button: takes the user to theit profile page.
  - "Add post" button: takes the user to the add post page.


### Home page

![homepage](https://github.com/user-attachments/assets/599440d5-857a-4cdb-90d5-1453817fb12e)

This is the home page of the website. It displays posts from users and has a search bar allowing users to search through posts.

It includes the following features:

1. Most followed profiles:

   - The most follwed profiles section is displayed on the home page next to posts, this shows users the most followed profiles avaliable. Users also can follow or unfollow users easily on this feature.
  
    ![most followed profiles](https://github.com/user-attachments/assets/c7fdad07-0518-43cc-b0ed-4bbab5b2a11d)


2. Posts

  - Posts are displayed on the home page and can be scrolled through automatically refreshing the page to give users a good user experience eliminating the option to have to click next page at the end of posts.

3. Searchbar

   - The home page contains a search bar giving the users the option to filter through posts to one they want to see.
  
     ![home searchbar](https://github.com/user-attachments/assets/d68d0318-548a-4acf-ba18-ad59c3f82a7f)


### Feed page

This is the feed page. It only displays posts from profiles that the user is following.

![feed page](https://github.com/user-attachments/assets/5a58e547-a965-4f80-b6ce-cd3e821bc941)

  - The feed page contains the same features as the home page.
