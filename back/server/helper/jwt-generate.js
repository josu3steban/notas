const jwt = require("jsonwebtoken");


const generateJWT = ( uid ) => {


    const payload = { uid };

    return new Promise( (resolve, reject ) => {

        jwt.sign( payload, process.env.SECRETKEY, {expiresIn: '10h'}, ( error, token ) =>{


            if( error ) {

                console.log( error );
                return reject('Ocurrió un error al generar el token');
                
            }else {

                resolve( token );
                
            }
            
            
        });
        
    });
    
    
}

module.exports = {

    generateJWT
    
}