<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## About Piazeta-Server

The client part of the application is built using [Reactjs](https://reactjs.org)Library. The Core principles of this programming language can be view in the documentations. The app includes many different features to ease the job for the users and to keep a clean ui. Our App also uses different libraries and stores data in the users computer (thus the need to accept cookies).

## Installation Guide

1) Create a .env file and set up the following data: `REACT_APP_SERVER_APP_URL = 'enter your server url here'` `REACT_APP_GOOGLE_API_KEY = 'api key for the map used on mailing'` `NODE_PATH = src/` ( Note that the last line will become redundant and will have to set a global directory in the `jsconfig.js` file)
2) Open a terminal and run the following commands in order:
    * `npm install`
    * `npm start` for e developer build or `npm run build` and then `php -S ip:port -t build` if you want a production build (note that ip:port must be chosen accordingly to your device)
3) Application will open on `localhost:3000/` if using `npm start` and on `localhost:port/` if using the other way.


Prerequisites: Node ^8.10, npm ^5.6.

Any further information can be asked by sending an email to [Radu Mihnea](mailto:radumihneaa@gmail.com).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.