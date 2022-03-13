const express = require('express'); //express import

// Writing the application with class
class AppController {
    constructor() {
        this.express = express(); // the méthod is here
        this.middlewares = middlewares();
        this.routes = routes();
    }

    middlewares() {
        this.express.use(express.json()); // used for application to understand request in json format
    }

    routes() {
        this.routes.use(require('./routes'));
    }
}

// instanties a new class and returns the express property only
module.exports = new AppController().express