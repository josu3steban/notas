const { Schema, model } = require('mongoose');


const UserSchema = new Schema({

    name: {
        type: String,
        required: [ true, 'El nombre es requerido' ]
    },

    email: {
        type: String,
        required: [ true, 'El email es requerido' ],
        unique: true
    },

    password: {
        type: String,
        required: [ true, 'La contraseña es requerida' ]
    },

    status: {
        type: Boolean,
        default: true
    },

    google: {
        type: Boolean,
        default: false
    },

    avatar: {
        type: String
    },

    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }]
    
});


UserSchema.methods.toJSON = function() {

    const { _id, __v, google, status, password, ...rest } = this.toObject();

    rest.uid = _id;

    return rest;
    
}


module.exports = model( 'User', UserSchema );