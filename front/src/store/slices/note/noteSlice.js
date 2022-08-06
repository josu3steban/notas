import { createSlice } from "@reduxjs/toolkit"



const initialState = {
  notes: [],
  note: {},
  activeNote: null
}


export const noteSlice = createSlice({

  name: 'note',

  initialState,

  reducers: {

    setActiveNote: ( state, action ) => {

      state.activeNote = action.payload;
      // state.note = action.payload.note;
      
    },

    addNewNote: ( state, action ) => {

      state.notes.push( action.payload );
      
    },

    editeNote: ( state, action ) => {

      state.notes = state.notes.map( note => (note._id !== action.payload.noteId) ? note : action.payload.noteUpdated );

      state.activeNote = null;
      
    },

    deleteNote: ( state, action ) => {

      state.notes = state.notes.filter( note => note._id !== action.payload );

      state.activeNote = null;
      
    },

    loadNotes: ( state, action ) => {

      state.notes = action.payload;
      
    },

    cleanNotes: ( state ) => {

      state.notes = [];
      state.activeNote = null;
      
    },

    cleanActiveNote: ( state ) => {

      state.activeNote = null;
      
    }
    
  }

});

export const { setActiveNote, addNewNote, editeNote, deleteNote, loadNotes, cleanNotes, cleanActiveNote } = noteSlice.actions;