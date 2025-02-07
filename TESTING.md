# TESTING

## Manual Testing

Testing was done throughout site development, for each feature before it was merged into the master file.

Usability was tested with the below user acceptance testing to ensure testing from different users, on different devices and browsers to ensure issues were caught and where possible fixed during development. However, it was noticed that in Chinese browsers (Breeno, QQ, etc) there was some difficulty with the testing, as the browser would not be able to display React components correctly.

| Page    | User Actions           | Expected Results | Y/N | Comments    |
|-------------|------------------------|------------------|------|-------------|
| Sign Up     |                        |                  |      |             |
| 1 | Click Sign up button in nav bar | Redirect to Sign up page | Y   |             |
| 2 | Click login in "Already have an account?" section | Redirect to login page | Y   |             |
| 3 | Click login in "Don't have an account?" section | Redirect to Sign up page | Y   |             |
| 4 | Fill in all fields in the register page | Successfully register redirect to login | Y   |             |
| Sign In      |                        |                  |      |             |
| 1 | Click Sign In button in nav bar | Redirect to Sign In page | Y   |             |
| 2 | Fill in all fields in the login page | Successfully login, redirect to home page | Y   |             |
| 3 | Click Sign out in nav bar | Logs user out | Y   |             |
| Signed out users  |                        |                  |      |             |
| 1 | User searches for a url page of a signed in user | user is redirected to the sign in page | Y   |             |
| Navbar |                        |                  |      |             |
| 1 | Click home in nav bar | Redirect to home page | Y   |             |
| 2 | Click Sign in on nav bar | Redirect to Sign in page | Y   |             |
| 3 | Click Sign out in nav bar | Redirect Sign out page | Y   |             |
| Navbar for logged in users |                        |                  |      |             |
| 1 | Click profile with user's name buttons | Redirects to profile page | Y   |             |
| 2 | Click Feed in nav bar | Redirect to Feed page | Y   |             |
| 3 | Click Events in nav bar | Redirect to Events page | Y   |             |
| 4 | Click Liked in nav bar | Redirect to Liked page | Y   |             |
| 5 | Click Sign out in nav bar | Signs out user | Y   |             |
| 6 | Click on the add post icon in navbar | User is directed to add post page| Y   |             |
| Home       |                        |                  |      |             |
| 1 | Click on posts displayed | Redirects users to that post | Y   |             |
| 2 | Scroll through posts on home page | See posts automatically loading as user scrolls | Y   |             |
| Profile |                        |                  |      |             |
| 1 | Click on the edit button near avatar | Display options to edit or delete profile | Y   |             |
| 2 | Scroll through screen displaying users posts | Shows user the posts they’ve created and posted | Y   |             |
| 3 | Most followed profiles displayed right hand side of screen | profiles can be selected or followed | Y   |             |
| 4 | Click on the follow button next to users in most followed | User now follows | Y   |             |
| 5 | Click on the unfollow button next to users in most followed | User is now unfollowed | Y   |             |
| Posts (signed out)|                        |                  |      |             |
| 1 | Click on the post | User is directed to post | Y   |             |
| 2 | Click on the like button | User is informed to sign in  | Y   |             |
| 3 | Click on the comment button | User is shown the comments avaliable | Y   |             |
| Posts (signed out)|                        |                  |      |             |
| 1 | Click on the post | User is directed to post | Y   |             |
| 2 | Click on the like button | User now liked the post  | Y   |             |
| 3 | Click on the like button when post has already been liked| User now unliked the post  | Y   |             |
| 4 | Click on the comment button | User is shown the comments avaliable and is able to leave a comment| Y   |             |
| Liked |                        |                  |      |             |
| 1 | Click on the liked icon in navbar | All liked posts are displayed | Y   |             |
| Add post |                        |                  |      |             |
| 1 | Click on the Create button with empty fields | Message is displayed informing user fields may not be blank | Y   |             |
| 2 | Click on the upload image | folder is opened allowing user to upload image | Y   |             |
| 3 | Click on the Create button with filled fields | post has now been created | Y   |             |
| 4 | Click on the cancel button | User is returned to the home page | Y   |             |
| Events  |                        |                  |      |             |
| 1 | Click on the searchbar and search for events | events are filtered based on what the user types | Y   |             |
| 2 | User scrolls down the page | all posts are loaded without having to click next page| Y   |             |


 User Story Goals | Requirement met | Image |
| ------------------------- | --------------- | ----- |
| As a user I can view a navbar from every page so that I can navigate easily between pages | Y   | ![navbar-signed-in](https://github.com/user-attachments/assets/35c1eb12-6be0-4774-a845-d2bd1135c782) |
|  As a user I can create a new account so that I can access all the features for signed up users | Y   | ![sign-up page](https://github.com/user-attachments/assets/8b50fb28-eb9e-49d4-ae34-e897e5bd2237)|
| As a user I can sign in to the app so that I can access functionality for logged in users | Y   | ![sign-in-page](https://github.com/user-attachments/assets/547d463c-8467-4417-8ce8-acdbcd12a674)|
| As a user I can tell if I am logged in or not. | Y   |![navbar-signed-in](https://github.com/user-attachments/assets/4fe6616f-6a78-4a68-9fd0-b306613c92e7)|
| As a logged out user I can see signing in/up options allowing me to sign in/out | Y   |![navbar-signed-out](https://github.com/user-attachments/assets/609701e3-7bf0-4788-a9eb-aed1b49fb540)|
| As a logged in user I can create posts so that I can share my posts | Y   |![add-post-page](https://github.com/user-attachments/assets/ed25eefc-5191-4cea-bf53-0af6f7ff57c9)|
| As a logged in user I can like a post so that show interest in the post | Y   |![like:comment](https://github.com/user-attachments/assets/58ac7162-f870-4c8c-b4ad-fd0856101658)|
| As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content | Y   |![homepage](https://github.com/user-attachments/assets/b1b0d1e5-2051-4fab-b5be-82870dfaf81c)|
| As a user, I can search for posts with keywords, so that I can find the posts, profiles and events that are of interest| Y   |<img width="440" alt="post-searchbar" src="https://github.com/user-attachments/assets/52aead40-a577-486f-816c-e09163f96b98" />|
| As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most | Y   |![liked-page](https://github.com/user-attachments/assets/66464433-8fbd-44a4-926a-ce41cc7d211c)|
| As a user i can continuously scroll through the posts so that i can keep seeing more posts without having to switch pages | Y   |  |
| As a user I can view the posts page so that I can read the comments about the post | Y   | ![comment](https://github.com/user-attachments/assets/43f5e04b-5a8d-4333-b708-258e32595b5a)|
| As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created | Y   | ![post-edit](https://github.com/user-attachments/assets/2c808eb1-f0e9-46b7-a515-d8f39d76fc9a)|
| As a logged in user I can add comments to a post so that I can share my thoughts about the post | Y   | ![comment](https://github.com/user-attachments/assets/511480fd-05c1-4cc4-aa15-d796076c63ea)|
| As a user I can see how long ago a comment was made so that I know how old a comment is | Y   | ![comment](https://github.com/user-attachments/assets/d7459101-4bb0-4190-b6bd-e28c9120547b)|
| As a user I can read comments on posts so that I can read what other users feedback about the posts | Y   |![comment](https://github.com/user-attachments/assets/109d7f9a-1667-4ad9-baba-6a68369390c7)|
| As the creator of the comment i can delete my comment so that i can remove my own comment | Y   |![comment-delete](https://github.com/user-attachments/assets/10948742-4462-45a2-8077-098d8c95e6e7)|
| As the creator of a comment i can edit my comments so that i can fix any errors on the existing comment | Y   | ![comment-edit](https://github.com/user-attachments/assets/cdeacaaf-ecd5-44af-9b47-72ab1b494d3d)|
| As a user I can view other users profiles so that I can see their posts and learn more about them | Y   |![profile-view](https://github.com/user-attachments/assets/97296c61-398e-4716-8940-e8b8ad89be1e)|
| As a logged in user I can edit my profile so that I can change any infomation required on my profile | Y   | ![profile-edit](https://github.com/user-attachments/assets/5d0377d1-daaa-4954-b832-6f0b06109fb7)|
| As a logged in user I can update my username and password so that I can change my display name and keep my profile secure | Y   |![profile-edit](https://github.com/user-attachments/assets/58780de7-6658-4d78-9bc1-fe5d97b44f0a)|
| As a user, i want to be able to see the most popular profiles so i can see which profiles are popular. | Y   | ![most-followed-profiles](https://github.com/user-attachments/assets/914c7d9b-fd17-48c8-8bf2-806929134a99)|
| As a user i want to be able to follow and unfollow other users so i can either see or remove their content from my feed. | Y   |![most-followed-profiles](https://github.com/user-attachments/assets/626d9908-0775-4696-8cd3-10325db7b6cb)|
| As a use, i want to be able to see the events page so that i can look through any events that may interest me. | Y   |![events-page](https://github.com/user-attachments/assets/41baf322-c453-4223-878f-411ba539c7c5)|





## Code Validation

### HTML Validation:

- No errors or warnings were found when passing through the official [W3C](https://validator.w3.org/) validator. This checking was done manually by copying the view page source code (Ctrl+U) and pasting it into the validator for logged in user and the rest of the pages were checked by the URL validation.
- ![validator w3 html](https://github.com/user-attachments/assets/a75abc84-2c0d-4cf3-840c-ffb81df2362b)


### CSS Validation:

- Full CSS Validation Report
- ![jigsaw w3 css](https://github.com/user-attachments/assets/218a97ca-af54-4c85-b90a-395dcc64401b)

- For css validation I have used the official [W3C (Jigsaw)](https://jigsaw.w3.org/css-validator/#validate_by_uri) validator

### JS Validation:

- Since the application's frontend is written in React, I could not use the JSHint validator to validate the application. As you can down below, JSHint just doesn't understand JSX syntax.

 ![js validator](https://github.com/user-attachments/assets/8f9ac5a2-25b4-4d91-8119-34c44a265284)


- But React itself validates the code on each build, and if there were any errors, the application would not be able to run.
- Since it runs correctly, we can consider all the code to be valid.



### Python Validation:

- Full Python Validation Report
- ![ pep8 auth_password_validators](https://github.com/user-attachments/assets/bc2012c3-f01c-4012-8dd4-93b2ec903f8e)

According to the reports, the code is [Pep 8-compliant](https://legacy.python.org/dev/peps/pep-0008/). This checking was done manually by copying python code and pasting it into the pep8ci validator.

- errors only found in settings.py
- E501 line too long (91 > 79 characters) - `AUTH_PASSWORD_VALIDATORS` (x4)

- All other files show no errors

- For python validation I have used the official [Pep8Online](http://pep8online.com/) validator

---


## Compatibility

Testing was conducted on the following browsers;
- Chrome;

![chrome-home](https://github.com/user-attachments/assets/c7d342e2-a88b-498d-bcd7-5c4c8f1016ff)
![chrome-events](https://github.com/user-attachments/assets/13682de8-af01-4a08-a48d-063032e02281)
![chrome-profile](https://github.com/user-attachments/assets/cae35191-a78c-459d-b9c0-3701c13c1f58)



- Firefox;

![firefox-home](https://github.com/user-attachments/assets/65fff2c4-a745-4cc8-85f4-b02289274f09)
![firefox-events](https://github.com/user-attachments/assets/4d570061-5401-4c4f-97e6-2e6aacc63e64)
![firefox-profile](https://github.com/user-attachments/assets/4c48efe4-bfcc-4663-9e6d-ebcbfd297b36)

---

## Responsiveness

The responsiveness was checked manually by using devtools (Chrome) throughout the whole development.

- Mobile

![mobile](https://github.com/user-attachments/assets/4ad0cdf9-47a6-4ec4-b9f8-ad92db08e087)

- tablet
  
![tablet](https://github.com/user-attachments/assets/e3740450-3ea1-488e-bcb4-3506aa9a4c55)

- desktop
  
![desktop](https://github.com/user-attachments/assets/eef94401-be1c-4949-b5d9-980f20ed62f0)

  
