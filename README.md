## example-mern-app
![Video of Frontend](https://i.imgur.com/PI8xmrW.gif)

## What is this?
An example full-stack MERN application, featuring a RESTful CRUD API using MongoDB, Express, and Node and a React frontend using Sass and React Hooks.

## Why did you make this?
I plan on using this to create an NPM package that can be used to generate a basic MERN application boilerplate.

## How do I use this?
### API
The API requires a `.env` file to function properly. The provided `example.env` appears as follows:

```
PORT=3001
NODE_ENV=development
CORS_ORIGIN=*
MONGO_URI=localhost/appname
```
* `NODE_ENV` should be set to `production` when not in development.
* `CORS_ORIGIN` should be set to the URL of your frontend.
* `MONGO_URI` is the URL of the MongoDB database, which could include authentication details. If using `localhost/appname`, make sure that MongoDB is running locally on your system.

The `schemas` folder contains an example schema that will validate all objects that enter the MongoDB collection. The `routers` folder contains endpoints for the API.

To start the server in development mode, use `npm run dev`. To start it in production mode, use `npm start`. It should start at `localhost:3001` by default.

### Frontend
The frontend also requires a `.env` file to function properly. The provided `example.env` appears as follows:

```
REACT_APP_API_URI=http://localhost:3001/api/v1/objs
```
* `REACT_APP_API_URI` should be set to the URL of the endpoint of the API.

The `api` folder inside of `src` contains `objsHelper.js` which contains helper functions for all of the operations the API provides by default. These are demonstrated in `App.js` inside of `components`.

### Tests
TBA

## TODO
* [ ] Backend tests
* [ ] Frontend tests