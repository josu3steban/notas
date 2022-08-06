import { useSelector, useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { startAddNewNote, startDeleteNote, updateNote } from "../../store/slices/note/noteThunk";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export const NoteView = () => {

  const navigate = useNavigate();
  const { activeNote, notes } = useSelector( state => state.note );
  const { pathname } = useLocation()

  let note = {};


  const [form, setForm ] = useState({
    title:'',
    description:''
  });


  if( !!activeNote ) {

    note = notes.find( note => note._id === activeNote);

    // setForm({
    //   title:note.title,
    //   description:note.description
    // });
    
  }


  const handleInputChange = ({ target }) => {

    setForm({
      ...form,
      [target.name]: target.value
    });
    
  }


  useEffect( () => {

    if(!activeNote && ((pathname.split('/')[2] === 'viewnote'))){
      navigate('/');
    }else{
      setForm({
        title:note.title,
        description:note.description
      });
    }
    

  }, [activeNote]);


  const handleSubmit = ( e ) => {

    e.preventDefault();

    navigate(`/mynote/${activeNote}`);

  }

  
  return (

    <section className="flex flex-col justify-center items-center max-h-screen p-5  animate__animated animate__bounceInLeft animate__faster ">
      <h3 className="uppercase text-my-color-two text-5xl text-center font-extrabold mb-5">Aquí tu notita</h3>
      <div className="w-3/4 mt-10">
        

        <form onSubmit={ handleSubmit }>

          <div className=" ">
            <label className="text-my-color-two block text-3xl font-medium mb-3" >Título</label>
            <input
              className="p-2 w-2/3 rounded-lg bottom-2 bg-my-color-two"
              disabled
              type="text"
              value={form.title}
              onChange={handleInputChange}
              name="title"
              id="title"
            />
          </div>


          <div className="my-5">
            <label className="text-my-color-two block text-3xl font-medium mb-3" >Nota</label>
            <textarea
              className="p-2 w-full rounded-lg bottom-2 bg-my-color-two"
              disabled
              type="text"
              name="title"
              id="title"
              rows="5"
              value={form.description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="text-right">

            <input
              type="submit"
              className="py-2 px-3 rounded-lg text-my-color-two text-xl bg-my-color-five animate-pulse cursor-pointer"
              value='EDITAR'
            />

          </div>

        </form>

      </div>
    </section>
    
  )
}

