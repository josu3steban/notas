const { response } = require("express");


const { User } = require("../models");



const validateNoteInUser = async( req, res = response, next ) => {

    const { id } = req.params;

    const { _id: uid } = req.user;

    try{

        const user = await User.findOne( {_id:uid, "notes": id} );

        if( !user ) {

            return res.status(400).json({
                ok: false,
                error: {
                    msg: `No existe la nota con el id ${id}`
                }
            });
            
        }

        next();

        
    }catch( error ) {

        console.log(error);

        res.json({
            ok: true,
            error: {
                msg: 'Ocurrió un error inesperado'
            }
        });
        
    }
    
}

module.exports = {

    validateNoteInUser
    
}