const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../db/config');


class Server {


    constructor() {

        this.app = express();
        this.port = process.env.PORT;


        //conexión
        this.dbConnection();

        //Rutas
        this.authRoute = '/api/auth'
        this.userRoute = '/api/user';
        this.noteRoute = '/api/note'
        

        //middlewares
        this.middlewares();
        

        //ruta
        this.routes();
        

        
    }

    async dbConnection() {

        await dbConnection();
        
    }

    middlewares() {

        //cors
        this.app.use( cors() );

        //body parser to json
        this.app.use( express.json() );
        
        //hacer publica
        this.app.use( express.static('public') );
        
    }


    routes() {

        this.app.use( this.authRoute, require('../routes/auth.routes') );

        this.app.use( this.userRoute, require('../routes/user.routes') );

        this.app.use( this.noteRoute, require('../routes/note.routes') );
        
    }


    listen() {

        this.app.listen( this.port, () => {
            console.log(`Corriendo en el puerto ${ this.port }`);
        });
        
    }
    
    
}

module.exports = Server;