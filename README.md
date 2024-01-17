# Cypress Intermediate Course

This repository contains project for that is used to showcase different features of Cypress during intermidiate course.

For educational purposes only.

## Installation

Navigate to `app/ui` directory:

```sh
cd app/ui
```


Install dependecies:

```sh

npm install
```

Navigate back to `app` directory. This is where the backend of project is stored:

```sh

cd app
```


Then install dependencies and start the server:

```sh

npm install
```


To install Cypress you need to navigate into `tests` directory and install all the necessary dependecies there:

``` sh
cd tests
```

``` sh
npm install
```

This should install latest version of Cypress

## Usage

### Start backend server

While in `app` directory execute the following command:

```sh

npm start
```


You should be able to open Apollo dashboard by navigating to `localhost:5050/gql` in your browser.



### Start frontend React application


Navgiagte to `app/ui` and start the React application. Should open automatically in your browser:

```sh

npm start
```


### Start Cypress tests

Navigate to `tests` directory and execute following command:

``` sh
npm run cy:open
```

