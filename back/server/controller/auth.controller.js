const bcryptjs = require('bcryptjs');
const { response } = require('express');
const { googleVerify } = require('../helper/google-verify');
const { generateJWT } = require('../helper/jwt-generate');

const { User } = require("../models");




const userSignin = async( req, res = response ) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });

        const isValidPassword = bcryptjs.compareSync( password, user.password );

        if( !isValidPassword ) {

            return res.status(400).json({
                ok: false,
                error: {
                    msg: 'Usuario o contraseña incorrecto'
                }
            });
            
        }

        const token = await generateJWT( user.id );

        res.json({
            ok: true,
            msg: 'OK',
            user,
            token
        });

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



const userGoogleSignin = async( req, res = response ) => {

    try {


        const { google_token } = req.body;

        const { name, email, picture } = await googleVerify( google_token );

        let user = await User.findOne({ email });

        if( !user ) {

            const newUser = new User({
                name,
                email,
                password: ':)',
                google: true,
                img: picture
            });


            user = await newUser.save();
            
        }


        const token = await generateJWT( user.id );
        
        
        res.json({
            ok: true,
            msg: 'OK',
            user,
            token
        });

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



const userRevalidateToken = async( req, res = response ) => {

    const { name, email, id } = req.user;

    const token = await generateJWT( id );

    console.log(id)
    console.log(token)

    return res.json({
        ok: true,
        name,
        email,
        uid: id,
        token
    });
    
    
}



module.exports = {

    userSignin,
    userGoogleSignin,
    userRevalidateToken
    
}
