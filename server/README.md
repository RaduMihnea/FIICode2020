<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## About Piazeta-Server

The server part of the application is built using [Laravel](https://laravel.com) 6.17 Framework. It acts as a CRUD Api connecting to the Database. The application also creates the Databases tables and seeds it at start ( using Laravels migrations and seeders ). The routes are protected by the Passport OAuth2. The main principles of the laravel framework can be viewed in the documentations.

## Installation Guide

1) Clone or download repo
2) Start local server and database ( we used xampp but any other Apache app will work (WAMP, MAMP etc))
3) Create local database named 'retrosite' ( in our case by following 'localhost/phpmyadmin')
4) Copy the .env.example file and rename it to .env. Adjust data inside accordingly.
5) Open a terminal inside the root folder of the server app and run the following commands in order:
     * `composer install`
     * `php artisan key:generate`
     * `php artisan migrate`
     * `php artisan db:seed`
     * `php artisan passport:install`
     * `php artisan serve`
6) Server opens up on port 8000 (default) connect via localhost:8000/api

##### Note: For testing purposes, an user with the credentials: `email: admin@piazeta.com ; password: administrator` with admin privileges will be created at start. The app currently comes with no build in products on the market, but we hope to make a Seeder for that in the following updates

Prerequisites: Php ^7.0, Laravel ^6.0, Composer, Any local Apache server of your liking.

Any further information can be asked by sending an email to [Radu Mihnea](mailto:radumihneaa@gmail.com).

## Available Scripts

In the project directory, you can run: `php artisan` to get more info over on all available commands
