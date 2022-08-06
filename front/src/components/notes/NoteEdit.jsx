import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setActiveNote } from '../../store/slices/note/noteSlice';
import { NoteForm } from './NoteForm'

export const NoteEdit = () => {

  // const { id } = useParams();
  // const dispatch = useDispatch();

  // console.log(!!id);


  // if( !!id ) {

  //   dispatch( setActiveNote( id ) );
    
  // }

  // useEffect( () => {

  //   if( !!id ) {

  //     dispatch( setActiveNote( id ) );
      
  //   }
    
  // }, []);
  
  
  
  return (
    <div className='flex flex-col items-center justify-center max-h-screen p-5 animate__animated animate__bounceInLeft animate__faster'>

        <h3 className="uppercase text-my-color-two text-5xl text-center font-extrabold mb-5">Edita tu nota</h3>

        <div className="w-3/4 mt-10">
          <NoteForm />
        </div>
        
    </div>
  )
}
