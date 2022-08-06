import React from 'react'
import { NoteForm } from './NoteForm'

export const NoteNew = () => {
  return (
    <div className='flex flex-col justify-center items-center max-h-screen p-5 animate__animated animate__bounceInLeft animate__faster'>

        <h3 className="uppercase text-my-color-two text-5xl text-center font-extrabold mb-5">Agregar una nueva nota</h3>

        <div className="w-3/4 mt-10">
          <NoteForm />
        </div>
        
    </div>
  )
}
