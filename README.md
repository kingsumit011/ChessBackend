# ChessBackend
Chess Backend 
## Software Requirements

- Node.js **8+**
- MongoDB **3.6+** (Recommended **4+**)

### Install npm dependencies after installing (Git or manual download)

npm install

## Project structure

```sh
.
├── app.js
├── package.json
├── bin
│   └── www
├── controllers
│   ├── AuthController.js
│   └── BookController.js
├── models
│   ├── BookModel.js
│   └── UserModel.js
├── routes
│   ├── api.js
│   ├── auth.js
│   └── book.js
├── middlewares
│   ├── jwt.js
├── helpers
│   ├── apiResponse.js
│   ├── constants.js
│   ├── mailer.js
│   └── utility.js
├── test
│   ├── testConfig.js
│   ├── auth.js
│   └── book.js
└── public
    ├── index.html
    └── stylesheets
        └── style.css
```

## How to run

### Running API server locally

```bash
npm run dev
```

You will know server is running by checking the output of the command `npm run dev`

```bash
Connected to mongodb:YOUR_DB_CONNECTION_STRING
App is running ...

Press CTRL + C to stop the process.
```

**Note:** `YOUR_DB_CONNECTION_STRING` will be your MongoDB connection string.

### Creating new models

If you need to add more models to the project just create a new file in `/models/` and use them in the controllers.

### Creating new routes

If you need to add more routes to the project just create a new file in `/routes/` and add it in `/routes/api.js` it will be loaded dynamically.

### Creating new controllers

If you need to add more controllers to the project just create a new file in `/controllers/` and use them in the routes.


## ESLint

### Running Eslint

```bash
npm run lint
```

You can set custom rules for eslint in `.eslintrc.json` file, Added at project root.

## Bugs or improvements

Every project needs improvements, Feel free to report any bugs or improvements. Pull requests are always welcome.