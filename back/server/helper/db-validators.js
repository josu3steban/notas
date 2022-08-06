const { User } = require('../models')


const existEmail = async( email ) => {

    const user = await User.findOne({ email });

    if( user ) {

        throw new Error(`El usuario con correo ${email} ya existe`);
        
    }
    
    return true;
}


const existeUser = async( id ) => {

    const user = await User.findById( id );

    if( !user  ) {

        throw new Error(`El usuario con el id ${ id } no existe`);

    }

    return true;
    
}


const existeUserByEmail = async( email ) => {

    const user = await User.findOne( {email} );

    if( !user  ) {

        throw new Error(`El usuario con el email  ${ email } no existe`);

    }

    return true;
    
}


module.exports = {

    existEmail,
    existeUser,
    existeUserByEmail
    
}