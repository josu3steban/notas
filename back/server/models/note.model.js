const { Schema, model } = require('mongoose');


const NoteSchema = new Schema({

    title: {
        type: String,
        required: [true, 'Es necesario el título']
    },

    description: {
        type: String,
        required: [true, 'Es necesaria la descripción']
    },

    create: {
        type: Date
    }
    
});


NoteSchema.methods.toJSON = function() {

    const { __v, ...rest } = this.toObject();

    return rest;
    
}


module.exports = model('Note', NoteSchema );