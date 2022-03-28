const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/user/';
        
        // Middlewares
        this.middlewares();
        // Routes
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Parseo y lectura del body - JSON
        this.app.use( express.json() );
        // Public directory
        this.app.use( express.static('public') );
    }

    routes() {
        // Read
        this.app.use( this.usersPath, require('../routes/user') );
    }

    start() {
        this.app.listen(this.port, () => {
            console.log('Server running in PORT', this.port);
        });
    }

}

module.exports = Server;