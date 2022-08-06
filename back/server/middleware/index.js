const validateJWT = require('./validate-jwt');
const validateNoteUser = require('./validate-note-user');
const validateFields = require('./validateFields');

module.exports = {
    
    ...validateJWT,
    ...validateNoteUser,
    ...validateFields
    
}