const { Router } = require('express');
const { check } = require('express-validator');


const { createNote, updateNote, deleteNote, getNotes, getNoteById } = require('../controller/note.controller');


const { validateJWT } = require('../middleware/validate-jwt');
const { validateNoteInUser } = require('../middleware');
const { validateFields } = require('../middleware/validateFields');

const router = Router();


router.get( '/', validateJWT, getNotes );


router.get( '/:id', validateJWT, getNoteById );


router.post('/', [

    validateJWT,
    check('title', 'El título es requerido').notEmpty(),
    check('description', 'La descripción es requerido').notEmpty(),

    validateFields
    
], createNote );



router.put('/:id', [

    validateJWT,
    check('id', 'El id no es válido').isMongoId(),
    validateFields,
    validateNoteInUser

], updateNote );


router.delete('/:id', [

    validateJWT,
    check('id', 'El id no es válido').isMongoId(),
    validateFields,
    validateNoteInUser

], deleteNote );


module.exports = router;