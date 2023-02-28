# Local Little Neighborhood Library

This Local Little Neighborhood Library keeps track of the books in a single little library. A logged in user has the ability to keep track of the books they have read and left reviews for, edit and delete their own reviews, donate new books and "retire" old ones, and mark a book to show whether it is currently available or not.


## Constructed With

This app was designed using:
* React
* Ruby/Rails
* Postgresql
* ActiveRecord
* JSX, HTML, CSS
* Bootstrap



## Installation and Requirements

* Fork and clone this repo

* Have all gems and dependencies installed

* If you don't already have the Ruby gems installed for the backend, run the following:
```console
$ bundle install
```

* For the frontend dependencies, run the following:
```console
$ npm install --prefix client
```

* Make sure to have Postgresql installed and running as the database. 

    * For WSL:
```console
$ sudo apt update
$ sudo apt install postgresql postgresql-contrib libpq-dev
$ sudo service postgresql start
```

   * For OSX:
```console
$ brew install postgresql
$ brew services start postgresql
```



## Starting The Servers and Opening the App

* To open the app in the browser and start up the frontend server:
```console
$ npm start --prefix client
```
* In a new terminal, start the server for the backend:
```console
$ rails s
```



## License

[MIT](https://choosealicense.com/licenses/mit/)