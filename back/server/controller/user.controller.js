const { response } = require("express");

const bcryptjs = require('bcryptjs');


const { User } = require("../models");


const getUsers = async( req, res = response ) => {

    const { limit = 10 } = req.query;

    try {

        const [ totalUsers, users ] = await Promise.all([
            User.countDocuments({ state: true }),
            User.find({ state: true }).limit( Number(limit) ).populate( 'notes', 'title description' )
        ]);

        res.json({
            ok: true,
            totalUsers,
            users
        });

        
    }catch( error ) {

        console.log(error);

        res.status(500).json({
            ok: false,
            error: {
                msg: 'Ocurrió un error inesperado'
            }
        });
        
    }
    
}


const userSignup = async( req, res = response ) => {

    const { name, email, password } = req.body;

    try {

        const user = new User({
            name,
            email,
            password
        });

        user.password =  bcryptjs.hashSync( password, 10 );

        const newUser = await user.save();


        res.json({
            ok: true,
            msg: 'Usuario creado',
            user: newUser
        });

        
    }catch( error ) {

        console.log(error);

        res.status(500).json({
            oj: false,
            error: {
                msg: 'Ocurrió un error inesperado'
            }
        });
        
    }
    
}


const deleteUser = async( req, res = response ) => {

    const { id } = req.params;

    try {

        const userDeleted = await User.findByIdAndRemove( id, {new: true});


        res.json({
            ok: true,
            msg: 'Usuario eliminado',
            userDeleted
        });
        
    } catch( error )  {

        console.log(error);

        res.json({
            ok: false,
            error: {
                msg: 'Ocurrió un error inesperado'
            }
        });
        
    }
    
}


module.exports = {

    getUsers,
    userSignup,
    deleteUser
    
}