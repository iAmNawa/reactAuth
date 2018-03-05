# ReactAuthentication

## About

Creating a full-stack token authentication application with react on the front-end.

database - mongo - in terminal type mongod to run

back-end server - type npm run dev in the server directory - port 3449

front-end server - webpack-dev-server - npm run start in reactFront directory  - port 8080

## Requirements

  you tell me, Paul

## NECESSARY

You must create a config.js file in the server directory and make your own secret.  Inside the config.js this is exactly what the file should look like.

```
module.exports = {
  secret: 'YOURSECRETHERE'
};
```

You must change 'YOURSECRETHERE' to any random number of letters and numbers and that will be your local secret. *DO NOT SHARE WITH ANYONE*

The reason this file is not created when you clone the repo is because the .gitignore tells git to ignore the file config.js.  This is to make everyone that uses this authentication system have a different secret.

## Installation


`git clone https://github.com/iAmNawa/reactAuth`

should say what directory to run nmp i in

 `npm i` - install dependencies

`npm run dev` - in server folder

`npm run start` - in reactFront folder

make sure you are running mongo with mongod, so you should have two servers and one database running
????? ^

<localhost:8080> - root route

<localhost:8080/signup> - signup with email here

<localhost:8080/signin> - sign in to your account here

<localhost:8080/feature> - main feature... must be authenticated to visit this route

<localhost:8080/signout> - will show after you logout
