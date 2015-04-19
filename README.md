# MEAN Stack Single Page Application Starter

This is a repo for a starter application for a Single Page MEAN Stack application. Just download and install and you have a good foundation for building any application. 

## Installation
1. Install npm modules: `npm install`
2. Install bower dependencies `bower install`
3. Install Gulp `npm install -g gulp`
4. Start up the server: `gulp`
5. View in browser at http://localhost:8080

Use this starter kit to build any MEAN stack application you like.

## Environments

### dev
Just run `gulp`. It concatenates all files in `/css` and all `*.min.css` files in `bower_components/` to one CSS file in `public/css/css.css`. The same with JavaScript files. The final CSS and JS files will be loaded into the page. You don't have to do anything. Just keep your front-end files in `css/` and `js/`. Use the [Livereload Browser Extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions) to automatically refresh the browser upon changes to the files in those two directories. The server will also automatically be restarted upon any change of a back-end file.

### dist
Run `gulp dist`. Like dev, plus JS and CSS are minified and anything you need will be put to a `dist/` directory. Go into that directory and start the application with `node server.js`.

## Technologies

- MEAN Stack
- Twitter Bootstrap
- Jade Template Engine
- Gulp
- Mongoose

## Laravel and AngularJS Starter Application
Also check out my [Zemke/starter-laravel-angular](https://github.com/Zemke/starter-laravel-angular) project featuring Laravel 5 and AngularJS with token-based authentication and many great features to get yourself kick-started.
