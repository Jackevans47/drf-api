# F1 Social

Go to F1 Social https://f1-social-api-910f5cff82da.herokuapp.com/


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

3. During development found that some images set on profile picture are slightly bigger than others, due to time restrictions this will be fixed in future improvements.

4. Due to lack of time, automated testing will be implimented in future updates.



![profile-image-bug](https://github.com/user-attachments/assets/ec660c2b-977b-4990-ae38-109830cbb1e6)

4. Events page will be fully interactive in future updates including details including ticket purchases.

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


### Events page

This is the events page. It shows the user upcomming events.

![events-page](https://github.com/user-attachments/assets/505083e2-298a-4844-8e2d-915287281036)

 - The events page contains a list of events as well as a search bar to allow users to search through events.

### Liked page

This is the Liked page. It only displays posts that the user has liked.

![liked page](https://github.com/user-attachments/assets/c6b8485a-0b9c-4664-9d88-2a39a3d2dac5)

  - The liked page contains the same features as the home page.


### Profile page

This is the profile page. It displays the users profile infomation.

![profile page](https://github.com/user-attachments/assets/f82a41fa-3489-489a-8485-ebe69862958d)


 On this page the user can see a list of their own posts, how many posts they have as well a count of how many followers they have and how many other users they are following.

 <img width="480" alt="profile count" src="https://github.com/user-attachments/assets/7d7b4fcb-5bcf-4dc8-9e5e-cfd21b5985c2" />

 From this page, users can click the 3 dots to edit their profile by changing profile picture and editing bio. From this feature users can also change their username and  password too.

 ![profile edit](https://github.com/user-attachments/assets/778ea8dc-0bc8-4fc1-8b8b-1b449f37b0e8)


### Profile page

This is the add post page. From here, a user can add their post.

![add post page](https://github.com/user-attachments/assets/e036d996-e5b3-49aa-a5e0-35e4a54119d4)

On this page, users can upload their selected image and add custom title and content before posting.


---
## Design


### Color palette

A mixture of the following colours were used through the application.
- #242a3d

  ![242a3d](https://github.com/user-attachments/assets/fa47fa24-6456-41a2-8f8b-1c1dc638b031)

- #ff0000

  ![ff0000](https://github.com/user-attachments/assets/4d26076e-47a9-4d34-86c3-1887b4a42e76)

- #dadadf

  ![dadadf](https://github.com/user-attachments/assets/c55083c0-50c5-4145-b1a5-20b2ec55f65c)

- #f85032

  ![f85032](https://github.com/user-attachments/assets/12bbb8c6-c434-4ac0-adf3-0b1c013ac3a4)



---
## Agile Methodology

### GitHub Project Management


GitHub Project Management was used as the main method to manage the project. It was used to control the project's workflow and to track the project's progress. The project was created using [GitHub](www.github.com).

I used set the projects according to the application's functionality and set up issues for each feature to keep control of the development.

![user stories](https://github.com/user-attachments/assets/966f4c3b-ac7e-45d7-9735-a3cd04fbde9e)


## Information Architecture

### Database

* During the earliest stages of the project, the database was created using SQLite.
* The database was then migrated to PostgreSQL.

### Entity-Relationship Diagram

![ERD](https://github.com/user-attachments/assets/21c0e25b-ceed-4b2d-96b9-6887a76305f6)

---

### Data Modeling

#### Comments Model
| Name          | Database Key  | Field Type    | Validation |
| ------------- | ------------- | ------------- | ---------- |
| owner      | owner      | foreignKey  |           |
| post         | post         | foreignKey     |  |
| created_at    | created_at    | DateTimeField |           |
| updated_at    | updated_at    | DateTimeField |           |
| content      | content      | TextField  |           |

#### Event Model
| Name          | Database Key  | Field Type    | Validation |
| ------------- | ------------- | ------------- | ---------- |
| track      | track      | CharField  | max_length=100 |
| country         | country         | CharField     | max_length=32, choices=country |
| created_at    | created_at    | DateTimeField |           |
|  race_type     |  race_type     | CharField | choices=race_types, max_length=30 |
| content      | content      | TextField  |           |
| ticket_link      | ticket_link      | URLField  |           |

#### Follower Model
| Name          | Database Key  | Field Type    | Validation |
| ------------- | ------------- | ------------- | ---------- |
| owner      | owner      | foreignKey  | User, related_name="following", on_delete=models.CASCADE |
| followed         | followed         | foreignKey     | User, related_name="followed", on_delete=models.CASCADE |
| created_at    | created_at    | DateTimeField |           |

#### Like Model
| Name          | Database Key  | Field Type    | Validation |
| ------------- | ------------- | ------------- | ---------- |
| owner      | owner      | foreignKey  | User, on_delete=models.CASCADE |
| post         | post         | foreignKey     | Post, related_name="likes", on_delete=models.CASCADE |
| created_at    | created_at    | DateTimeField |           |

#### Post Model
| Name          | Database Key  | Field Type    | Validation |
| ------------- | ------------- | ------------- | ---------- |
| owner      | owner      | foreignKey  | User, on_delete=models.CASCADE |
| created_at    | created_at    | DateTimeField |           |
| updated_at    | updated_at    | CharField |           |
|  title     |  title     | CharField | choices=race_types, max_length=30 |
| content      | content      | TextField  |           |
| image     | image      | ImageField  | upload_to="images/", default="../default_profile_xhasyd", blank=True |
| image_filter     | image_filter      | CharField  | max_length=32, choices=image_filter_choices, default="normal" |

#### Profiles Model
| Name          | Database Key  | Field Type    | Validation |
| ------------- | ------------- | ------------- | ---------- |
| owner      | owner      | OneToOneField  | User, on_delete=models.CASCADE |
| created_at    | created_at    | DateTimeField |           |
| updated_at    | updated_at    | CharField |           |
|  name     |  name     | CharField | cmax_length=255, blank=True |
| content      | content      | TextField  |           |
| image     | image      | ImageField  | upload_to="images/", default="../default_profile_qdjgyp" |

---

## Testing
Please refer to the [TESTING.md](TESTING.md) file for all test-related documentation.

---

## Deployment


Please refer to the [DEPLOYMENT.md](DEPLOYMENT.md) file for all deployment and payment-related documentation.

---

## Credits


- [GitHub](https://github.com/) for giving the idea of the project's design.
- [Django](https://www.djangoproject.com/) for the framework.
- [Django Rest Framework](https://www.django-rest-framework.org/) for the API functionality.
- [Postgresql](https://www.postgresql.org/): for providing a free database.
- [Favicon.io](https://favicon.io/): for providing a free platform to generate favicons.
- [Heroku](https://www.heroku.com/): for the free hosting of the website.
- [PostgreSQL](https://dbs.ci-dbs.net/): for the database used to store all the data provided by code institute.
- [Font awesome](https://fontawesome.com/): for the free access to icons.
- [Responsive Viewer](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb/related?hl=en): for providing a free platform to test website responsiveness
- [Code Institute](https://codeinstitute.net/): for providing the walkthrough projects drf and moments that was used for inspiration and to help structure for my project. Code was used from these walkthroughs to help impliment my own project.
- [Cloudinary](https://cloudinary.com/): for providing a free platform to store images for the project.




## Acknowledgements

[Iuliia Konovalova](https://github.com/IuliiaKonovalova)

I am grateful to my mentor Iuliia Konovalova for her guidance and helpful feedback!


- I used code institute moments and drf walkthrough for inspiration and to help sturucture my code.
- 
---

