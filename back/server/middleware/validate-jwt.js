const { response } = require("express");
const jwt = require("jsonwebtoken");
const { User } = require("../models");



const validateJWT = async( req, res = response, next ) => {

    const token = req.header('Authorization');

    if( !token ) {

        return res.status(401).json({
            ok: false,
            error: {
                msg: 'No tiene autorización para realizar esta acción'
            }
        });
        
    }
    
    try {


        const { uid } = jwt.verify( token, process.env.SECRETKEY );

        const user = await User.findById( uid );

        if( !user ) {

            return res.status(401).json({
                ok: false,
                error: {
                    msg: 'No tiene autorización para realizar esta acción'
                }
            });
            
        }

        req.user = user;


        next();
        
        
    }catch( error ){


        console.log( error );

        res.json({
            ok: false,
            error: {
                msg: 'Ocurrió un error inesperado'
            }
        });
        
    }
    
    
}


module.exports = {

    validateJWT
    
}