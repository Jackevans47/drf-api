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
