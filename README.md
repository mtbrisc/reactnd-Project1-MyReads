# MyReads Project

This is my submission for the final assessment project for Udacity's React Fundamentals course.

## TL;DR

To run this project

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server Info

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## reactnd-project-myreads-starter

This project was started from [reactnd-project-myreads-starter](https://github.com/udacity/reactnd-project-myreads-starter). You can find more information about the original project [here](https://raw.githubusercontent.com/udacity/reactnd-project-myreads-starter/master/README.md).

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).