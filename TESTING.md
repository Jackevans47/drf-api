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
| 1 | Click on the upload image | folder is opened allowing user to upload image | Y   |             |
| 1 | Click on the Create button with filled fields | post has now been created | Y   |             |
| 1 | Click on the cancel button | User is returned to the home page | Y   |             |

















## Validation

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

- - 4 errors were found when the code was passed through Valentin Bryukhanov's [online validation tool](http://pep8online.com/). According to the reports, the code is [Pep 8-compliant](https://legacy.python.org/dev/peps/pep-0008/). This checking was done manually by copying python code and pasting it into the validator.

- errors only found in settings.py
- E501 line too long (91 > 79 characters) - `AUTH_PASSWORD_VALIDATORS` (x4)

- All other files show no errors

- For python validation I have used the official [Pep8Online](http://pep8online.com/) validator

---
