const { response } = require("express");
const { Note, User } = require("../models");
const router = require("../routes/user.routes");

const getNoteById = async( req, res = response ) => {

    const { id: userId } = req.user;
    const { id } = req.params;

    try {

        const { notes } = await User.findById( userId ).populate( 'notes', 'title description create' );

        // const notes = [];
        
        const note = notes.find( note => note.id === id );
        
        res.json({
            ok: true,
            note
        });

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

const getNotes = async( req, res = response ) => {

    const { id } = req.user;

    try {

        const { notes } = await User.findById( id ).populate( 'notes', 'title description create' );

        res.json({
            ok: true,
            notes
        });

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

const createNote = async( req, res = response ) => {

    const { title, description } = req.body;
    const { id } = req.user;

    try {

        
        const note = new Note({ title, description, create: new Date() });

        const newNote = await note.save();

        await User.findByIdAndUpdate( id, { $push: { 'notes': newNote._id } }, {new: true} );


        res.json({
            ok: true,
            msg: 'Nota creada',
            newNote
        })
        
        
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

const updateNote = async( req, res = response ) => {

    const { id } = req.params;

    const { title, description } = req.body;
    
    try {

        const note = await Note.findById( id );

        const noteUpdated = await Note.findByIdAndUpdate( id, {title: title ?? note.title, description: description ?? note.description, create: new Date()}, {new: true} );

        res.json({
            ok: true,
            msg: 'Note actualizada',
            noteUpdated
        });
        
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



const deleteNote = async( req, res = response ) => {

    const { id } = req.params;
    const { id: userId } = req.user;

    try {

        const noteDeleted = await Note.findByIdAndRemove( id, {new: true});

        await User.findByIdAndUpdate( userId, { $pull: { 'notes': id } }, {new: true} );

        res.json({
            ok: true,
            msg: 'Nota eliminada',
            noteDeleted
        });
        
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

    getNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
    
}