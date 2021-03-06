# "Damburgen 2" - The Sequel(ize-d)

##### Burger Eating App using Sequelize (MySQL), Node, Express, &amp; Handlebars

Burger is a web app that revolves around one thing... Eating Burgers.  This is the sequel to the previous version, but this time rather that using my own ORM to query the database, Sequelize has been used.  It is web application using a MySQL database to store the burgers, Node & Express to run the server and app, with Handlebars as the templating engine to render tasty noms to the HTML.

![Screenshot](public/assets/img/burger2screenshot.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.  See deployment for notes on how to deploy the project on a live system.

### Prerequisites

In order to install and run Burger you will need the following:

```
Node.js
Express.js
Sequelize
MySQL
Handlebars
```

### Installing

You will need to do the following steps after cloning the repo to your device in order to ensure that it works properly.

To ensure Node.js is running within the package and configure all modules for use:

```
npm install (or npm install -y)
```

This should install all the requisite modules, but just in case, you will need:

```
express     (npm install -s express)
handlebars  (npm install -s express-handlebars)
mysql2      (npm install -s mysql2)
sequelize   (npm install -s sequelize)
body-parser (npm install -s body-parser)
```

## Running 'Damburgen 2'

The Sequel is run locally using Node.js, but first you must load the MySQL database, which can be done a number of ways.  The file to create the database is inside the 'db' folder, so it can be opened and run in a MySQL GUI to set up the database, or you can path into the 'db' folder and run it from the MySQL command line (after logging in) using:
 
```
source schema.sql
```
Once the database has been set up, you can then begin the server simply by path into the root folder for the application and running:

```
node server.js
```

This starts the server which is currently set to run at PORT 8080 (http://localhost:8080/), at the same time the model 'burger.js' will create, via Sequelize, the pertinent tables for the application to use.
That is really all there is to starting the application running, after that everything else is run in your browser.

## Deployment

* [Deployed Site](https://burger-2-the-sequel.herokuapp.com/)

I personally have this application deployed using Heroku, with the JawsDB serving to link my database to the application.  More notes and info on this to come...

## Built With

* [Node.js](https://nodejs.org/en/) - Runtime Environment
* [MySQL](https://www.mysql.com/) - Database
* [Sequelize](http://docs.sequelizejs.com/) - ORM
* [Handlebars](https://handlebarsjs.com/) - Templating Engine
* [Express.js](https://expressjs.com/) - Web Framework
* [Bootstrap](https://getbootstrap.com/) - CSS Framework
* [gitignore.io](https://www.gitignore.io/) - For creating the .gitignore
* [WebStorm](https://www.jetbrains.com/webstorm/) - JavaScript IDE
* [DataGrip](https://www.jetbrains.com/datagrip/) - Database IDE

## Authors

* **Dalton Ricker** - *Primary Author* - [SasquatchXYZ](https://github.com/SasquatchXYZ)

## Acknowledgments
* Many thanks to my instructors & TAs, as well as the O'Reilly reference books.
