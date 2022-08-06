import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { NotesList } from "./NotesList";


export const NoteListContainer = () => {


  const { notes } = useSelector( state => state.note );

  return (

    <main className="sm:flex sm:h-full  sm:w-screen p-2">

      {
        notes.map( note => (
          <NotesList key={ note._id } note={ note } />
        ))
      }
        
    </main>
    
  )
}
