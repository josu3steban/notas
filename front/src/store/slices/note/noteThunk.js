import Swal from "sweetalert2";
import { fectchWithToken } from "../../../helpers/fetch"
import { addNewNote, deleteNote, editeNote, loadNotes } from "./noteSlice";



export const startLoadNotes = () => {

  return async( dispatch ) => {

    const response = await fectchWithToken( 'note', {}, 'GET' );
    const body     = await response.json();

    

    // console.log(body);
    
    if( body.ok ) {

      dispatch( loadNotes( body.notes ) );
      
    }else {


      
    }
    
  }
  
}


export const startAddNewNote = ( note ) => {

  return async( dispatch ) => {

    const response = await fectchWithToken( 'note', note, 'POST' );
    const body     = await response.json();

    if( body.ok ) {

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Nota creada!',
        showConfirmButton: false,
        timer: 1500
      })
      
      
      dispatch( addNewNote( body.newNote ) )
      
    }else {

      const errors = body.errors ?? "";

      const error = body.error ?? "";

      dispatch( logout() );

      Swal.fire({
          title   : 'Error',
          text    : !!errors ? errors.errors.map(err => err.msg) : error.msg,
          icon    : 'error',
          confirmButtonText: 'Aceptar'
      });
      
    }
    
  }
  
}


export const getNoteById = ( id ) => {

  return async( dispatch ) => {

    const response = await fectchWithToken(`note/${id}`, {} , 'GET');
    const body = await response.json();

    if( body.ok ) {

      
      
    }else {

      const errors = body.errors ?? "";

      const error = body.error ?? "";

      Swal.fire({
          title   : 'Error',
          text    : !!errors ? errors.errors.map(err => err.msg) : error.msg,
          icon    : 'error',
          confirmButtonText: 'Aceptar'
      });
      
    }
    
  }
  
}


export const updateNote = ( noteId, note ) => {

  return async( dispatch ) => {

    const response = await fectchWithToken(`note/${noteId}`, note , 'PUT');
    const body = await response.json();

    const {noteUpdated} = body;

    if( body.ok ) {

      console.log(body);
      dispatch( editeNote({ noteId, noteUpdated }) );
      
    }else {

      const errors = body.errors ?? "";

      const error = body.error ?? "";

      Swal.fire({
          title   : 'Error',
          text    : !!errors ? errors.errors.map(err => err.msg) : error.msg,
          icon    : 'error',
          confirmButtonText: 'Aceptar'
      });
      
    }
    
  }
  
}

export const startDeleteNote = ( noteId ) => {

  return async( dispatch ) => {

    const response = await fectchWithToken(`note/${noteId}`, {} , 'DELETE');
    const body = await response.json();

    if( body.ok ) {

      dispatch( deleteNote( noteId ) );
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Nota eliminada!',
        showConfirmButton: false,
        timer: 1500
      })
      
    }else {

      const errors = body.errors ?? "";

      const error = body.error ?? "";

      Swal.fire({
          title   : 'Error',
          text    : !!errors ? errors.errors.map(err => err.msg) : error.msg,
          icon    : 'error',
          confirmButtonText: 'Aceptar'
      });
      
    }
    
  }
  
}