This project is started on 11-05-2022
This site works as furniture renting platform for housdeck furnishing pvt. ltd.

This website is building in two phases one in for large devices such as desktop,tv,etc and other is for medium and small devices such as tablets,mobiles,etc
Medium folder consists of android app looking ui while Large folder consists of desktop web applications ui.
The app.js file is separated in two modules one serve for medium and other serve for large separated by useMediaQuery.
The whole app is build using type = modules. 

## Link of the website 

    https://housedeck-furniture-renting.firebaseapp.com/

## The theme of the website is

    color : mediumblue
    background : #ffffff

## For Hover

    background : mediumblue
    color : white

## Fonts

    <link href="https://fonts.googleapis.com/css2?family=Jost&display=swap" rel="stylesheet">
      -> fontFamily : 'Jost'

    <link href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap" rel="stylesheet">
      -> fontFamily : 'Fredoka'

    <link href="https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap" rel="stylesheet">
      -> fontFamily : 'Marcellus SC'

## Frameworks Used

    Material ui
    Redux Toolkit

## Packages for client side (external)

    npm i crypto-js @mui/icons-material react-router-dom axios @mui/lab @mui/material @emotion/react @emotion/styled firebase firebase-tools redux react-redux @reduxjs/toolkit firebase-tools

## Packages for server side (external)

    npm i express mongoose node-fetch dotenv nodemon body-parser cors twilio

## Packages description (external)

    -> client
        @mui/icons-material : for using material ui icons
        @mui/lab : for using advanced components of material ui
        @mui/material : for using components of material ui
        @emotion/react : for styling the components of material ui
        @emotion/styled : for using styling attributes of material ui
        axios : for calling api from forntend
        crypto-js : for encrypting and decrypting of the data send to client and server
        react-router-dom : for using routing in client side
        firebase : for hosting the project and using other functions in it
        firebase-tools : for using firebase cli
        @reduxjs/toolkit : to use function provided by redux toolkit
        redux : to use redux on our project
        react-redux : to enable redux features on our project

    -> server
        express : for using routing functions in server
        mongooose : to use mongodb as backend we require this package
        node-fetch : for fetching data from database and other apis
        dotenv : for using .env extension and security purposes
        body-parser : using body-parser as middleware
        cors : for removing cors key origin error
        nodemon : for auto-restating the server whenever a change is made
        twilio :' for using features provided by twilio

## Commits

    -> First Commit (11-05-2022)
        Created template for the project

    -> Second Commit (12-05-2022)
        Installed needed packages for our project
        Added readme and important information
        Create Header for this project (without backend for large)

    -> Third Commit (13-05-2022)
        Making Full Login and signup (with backend for large)
        Created Header for Medium website
        Created Bottom Tabs for Medium Website

    -> Fourth Commit (14-05-2022)
        Making Full Login and signup (with backend for medium)
        Added Search to Medium website
        Added Select City for Medium and large
        Added Dummy Profile page to medium