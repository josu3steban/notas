const { Router } = require('express');
const { check }  = require('express-validator')

const { userSignin, userGoogleSignin, userRevalidateToken } = require('../controller/auth.controller');

const { existeUserByEmail } = require('../helper/db-validators');
const { validateJWT } = require('../middleware');
const { validateFields } = require('../middleware/validateFields');

const router = Router();



router.post('/signin', [

    check('password', 'La contraseña es requerida').notEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    validateFields,
    check('email').custom( existeUserByEmail ),

    validateFields

], userSignin);



router.post('/google-signin', [

    check('google_token', 'El token es requerido').notEmpty()

], userGoogleSignin);



router.get('/revalidate', validateJWT, userRevalidateToken );



module.exports = router;