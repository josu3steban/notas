const { Router } = require('express');
const { check } = require('express-validator');


const { userSignup, getUsers, deleteUser } = require('../controller/user.controller');
const { existEmail } = require('../helper/db-validators');
const { validateFields } = require('../middleware/validateFields');

const router = Router();



router.get('/', getUsers );


router.post('/signup', [

    check('name', 'El nombre es obligatorio').notEmpty(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min:6 }),
    check('email', 'El email es obligatorio').notEmpty().isEmail(),
    check('email').custom( existEmail ),

    validateFields
    
], userSignup );


router.delete('/:id', [], deleteUser );


module.exports = router;