<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About LaravelSPA
It is a Laravel 8 & Vue 3, Composition API  based SPA demo project (Continue Development). Build with love and open source for developers. 

1. Tailwind CSS
2. laravel/breeze -- Authentication (composer require laravel/breeze --> php artisan breeze:install)
3. Vue 3
4. Vue Router 4
5. Vue Loader 16.8.1


## Getting Started Step by Step
1. In your root folder, clone the project file using git clone https://github.com/rafi021/laravue3CompAPI.git
2. Open terminal (bash/cmd). Then go to project folder using command

```sh
cd laravue3CompAPI
```

3. Then install required files and libraries using 

```sh
composer install
```

4. Then create a .env file and generate key for this project using command 

```sh
cp .env.example .env

php artisan key:generate
```

5. Then compile all CSS & JS files together using this command

```sh
npm install && npm run dev
```

or

```sh
yarn install && yarn run dev
```
6. Create a database in MYSQL and connect it with your project via updating .env file.
7. After connecting the db with project, then run command 

```sh
php artisan migrate:fresh --seed
```

Finally we are ready to run our project using this command 

```sh
php artisan serve 
```
