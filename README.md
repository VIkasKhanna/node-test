# node-test
## First install make sure you have all the prereq for Node project
## Install Node.JS
## Install MogoDB

## Start configuring from here
npm install -g express-generator

## Scaffold the  Project
express node-prototype-1

## Install Dependencies 
CD node-prototype-1
npm install

## Install NodeMon globally as it can used by other node apps
npm install nodemon -g 

## Install Monk
## Monk is a Node module for reading and writing documents in MongoDB.
npm install monk --save 


## Run the Application
## Nodemon will start your web server on port 3000
nodemon 

## Pattern to create a simple page 
1) Add <xxxx>.jade file - include the layout
2) Define the client side angular js code
3) Define module and controller, in the controller define template html 

## Start using GIT

git init

## Clone git repo
git clone https://github.com/VIkasKhanna/node-test.git && cd node-prototype-1
git add *.*
git config --list
git config --global user.email "mrvikaskhanna@gmail.com"
git config --global user.name "vikaskhanna"
git commit -m "Initial import"
git push origin master

## install Karma
## Karma is not a testing framework, nor an assertion library. 
## Karma just launches a HTTP server, and generates the test runner HTML file you 
## probably already know from your favourite testing framework. 
## So for testing purposes you can use pretty much anything you like

npm install karma --save-dev

# Install plugins that your project needs:
npm install karma-jasmine karma-chrome-launcher --save-dev

## Open a new command promprt and run, this will run Karma 
>.\node_modules\.bin\karma start

## install karma-cli as karma -- use global scope
npm install  karma-cli -g
## Run Karma 
karma start

## initialise
karma init
karma start karma.conf.js


