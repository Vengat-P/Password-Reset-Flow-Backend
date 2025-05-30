## Password reset flow Backend

## Overview

- Implement password reset flow  in a Node.js application with Express.js, Mongoose, and JWT. This application follow the MVC pattern and include API documentation.

## Tech Stack

- **NodeJs** for Backend
- **expressJs** for performence and easy update
- **cors** for middleware
- **dotenv** for environment variables
- **mongoose** to Connect Mongo DB
- **JsonWebToken** for token singin and verify functionalites
- **bcrypt** to hash and compare the passwords
- **Postman** for API Documentation
- **Nodemailer** to send email function
- **VSCode** for development
- **JavaScript** to applying logics

## Basic Installation and MVC Folder setup

**Step 1**

- Initailize NPM by using npm init --y command in prombt then change scripts start for node index.js and type module and create index.js file.

**Step 2**

- install required pacakges npm i expres ,cors ,dotenv ,nodemon ,bcrypt,nodemailer and JsonWebToken. Then add scripts for dev to automatic restart of nodemon index.js

  **Step 3**

- create folders and required javascript file in MVC Patterns its nothing but database, models,routers and controllers are in separate folders.MVC- Model Views Controllers .

## Logics

**Step 1**

- initalize express function and add middlewares like express.json and cors.then create defult route for home page of backend. then declare port and start the server using listen function.

**Step 2**

- connect mongo DB using mongoose . make a async function with trycatch that returns our connection string with mongoose connect function.then call this function in index file before default route.

**Step 3**

- need to create Schema structure using mongoose schema function . this structure format will refelcts our DB so create wisely . Each field should have type (String) and required(true).And email feild should be unique. then store Schema in variable name users to access further for this use mongoose model function.

**Step 4**

- In user router file import express and declare (express.router) function to make custom routes for each operations. export default router function .then import this router file in index file with type of js file. then create custom route function for app and pass this (/api/auth/) and userRoute(this will replace all opertions end point).

**Step 5**

- **userRegister** In auth controller file first import userschema which is inlcude our schema structure and make an export function for userRegister . This function also trycatch model and parameters will be request and response. catch will give error message in json format.In try block declare variable with new function and call users as function from stored schema pass inside request.body .then our password need to be encrypt so by using bcrypt hash method we can hash the password. now store as newUser with new feature passing all fields. then to save newUser call save function.now in reponse with 200 status code pass json message and data(newUser).now goto user router file make router with post function and pass register path and userRegister function(automatcally controllers will import need to change last file in js type). for checking need to go to postman and give the localhost url with our custom routes.

**Step 6**

- **userLogin** In user controller file crete a export function name is userLogin . now destructure the datas from client by using request.body method. and find the user from mongo db using findOne method (pass email because this feild is unique) and stored as user.now write validation if not a user return user not found. then check password with our hash password for this we need to use bcrypt compare method.then write validations for password if password not match return invalid password. now need to asign token for user for this we need to use jwt sign method and store that token then pass that into response.this will give token for login user.then go to user router page and use post method router and set path as /login and pass userLogin controller.now go to post man and check with customize api in end point use /login and enter email and password in json format in body with raw type you will get token.

**Step 7**

- **getuser** for this function we need login token . to decode that we need user middleware function. in this middleware function get token by bearer token method and verify that in jwt method and store as decoded. now target req.user as decoded(this will give you the user id). this is middleware function so this will return next function call. now go to user controller make a export function name is getUser and use async,try catch method till catch block. in try block get user id from req.user and pass that as \_id in findone method of mongo DB this will give user informations store this as user then pass this data in response.Now go to user router file and set get method and pass /getuser and getUser controller . now go to post man and check in authentication method bearer toke and paste the token(which is created from login end) . we can get user information details.

**Step 8**

- **forgotPassword** create aexport function of forgotPassword . get email id from req.body method if user not valid throw error. if user valid call send email function from nodemailer (import sendEmail from nodemailer.js). these node mailer send email function has three parameters, first one to pass user.email ,then subject write password reset link or related then text here write details and pass frontendlink with proper route in the end pass user._id and user.token . then send response as email sent successfully. user will get email for reset password link.

**Step 8**

- **resetPassword**  get id and token by using req.params method and get password by using req.body method . verify the token using jwt verify method if invalid token send error meassage . after updating new password need to encrypt so using bcrypt hash method to hash password and stored in db . to update this password in db use findByIdAndUpdate method (mongoose method) and set new password in db. if user not found throw error message . if password update successfully send response as a message password  changed sucessfully else throw error.

## How to use customize routes

- **userRegister** - https://password-reset-flow-backend-123.onrender.com/api/auth/register to register new user .
- **userLogin** - https://password-reset-flow-backend-123.onrender.com/api/auth/login to retrive login Token.
- **getUser** - https://password-reset-flow-backend-123.onrender.com/api/auth/getdata to retrive user informations
- **forgotPassword**  - https://password-reset-flow-backend-123.onrender.com/api/auth/forgot-password to get reset password email
- **resetPassword** - https://password-reset-flow-backend-123.onrender.com/api/auth/reset-password/:id/:token to reset password

## Features

- Clean and Readable Code
- MVC pattern followed

## API Documentation Link

- https://documenter.getpostman.com/view/44995047/2sB2qfBL2Z


## DEMO Link

- https://password-reset-flow-backend-123.onrender.com

## Authors

- [@ Vengat p](https://github.com/Vengat-P)