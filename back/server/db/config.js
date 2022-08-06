const mongoose = require("mongoose");



const dbConnection = async() => {

    try{

        await mongoose.connect( process.env.MONGODB_CNN );

        console.log('Conectado a BD');
        
    }catch( error ) {

        console.log(error);

        throw new Error('Ocurrió un error al conectarse a la base de datos');
        
    }
    
}

module.exports = {
    dbConnection
}