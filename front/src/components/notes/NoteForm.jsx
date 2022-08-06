import { useSelector, useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { startAddNewNote, startDeleteNote, updateNote } from "../../store/slices/note/noteThunk";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export const NoteForm = () => {

  const newNoteSchema = Yup.object().shape({
    title: Yup.string().required("El título es requerido").min(3, "El título debe tener al menos 3 caracteres").max(50, "El título debe tener como maximo 50 caracteres"),
    content: Yup.string().required("El contenido es requerido").min(5, "El contenido debe tener al menos 5 caracteres").max(500, "El contenido debe tener como maximo 500 caracteres"),	
  });


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { activeNote, notes } = useSelector( state => state.note );
  const { id } = useParams();
  const { pathname } = useLocation()

  console.log(pathname.split('/')[1]);

  useEffect( () => {

    if(!activeNote && !(pathname.split('/')[2] === 'newnote')){
      navigate('/');
    }
    

  }, [activeNote]);
  

  let note = {};


  if( !!activeNote ) {

    console.log('ENTROOOOOOOOOOOOOO', notes);

    note = notes.find( note => note._id === activeNote);
    
  }

  
  const handleSubmit = ( values, reset ) => {

    const note = {
      title       : values.title,
      description : values.content,
    }
    
    if( !activeNote ) {

      dispatch( startAddNewNote( note ) );
      navigate( '/' );

    } else {

      dispatch( updateNote(activeNote, note) );
      navigate( '/' );
      
    }
  }

  const handleDelete = () => {

    dispatch( startDeleteNote( activeNote ) );
    
  }
  
  return (

    <section className="flex flex-col justify-center">

      <Formik

        initialValues={{
          title: (!!activeNote) ? note.title : "",
          content: (!!activeNote) ? note.description : ""
          // title: "",
          // content:""
        }}

        validationSchema={ newNoteSchema }

        enableReinitialize = { true }
      
        onSubmit={ (error, {resetForm}) => {
          handleSubmit( error, resetForm )
        }}
      
      >


        {
          ( {errors, touched } ) => {

            return(

              <Form>

                <div className="">

                  <label className="text-my-color-two block text-3xl font-medium mb-3" >Título</label>
                  <Field
                    className="p-2 w-2/3 rounded-lg bottom-2 "
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Título de la nota"
                  />

                  {
                    (errors.title && touched.title )
                    && <span className="uppercase block text-my-color-four">{ errors.title }</span>
                  }
                  
                </div>

                <div className="my-5">

                  <label className="text-my-color-two block text-3xl font-medium mb-3" >Nota</label>
                  <Field
                    className="p-2 w-full rounded-lg bottom-2"
                    as="textarea"
                    type="text"
                    name="content"
                    id="content"
                    rows="5"
                    placeholder="Descripción de la nota"
                  />

                  {
                    (errors.content && touched.content )
                    && <span className="uppercase block text-my-color-four">{ errors.content }</span>
                  }
                  
                </div>

                <div className="text-right sm:flex sm:justify-end ">

                  <button
                    type="button"
                    onClick={ handleDelete }
                    className={` ${!activeNote ? 'hidden' : ''} py-2 px-3 mr-5 rounded-lg text-my-color-two text-xl bg-my-color-five animate-pulse`}>

                    {`ELIMINAR`}
                    
                  </button>
                  
                  <button
                    type="submit"
                    className="py-2 px-3 rounded-lg text-my-color-two text-xl bg-my-color-five animate-pulse">

                    {`GUARDAR`}
                    
                  </button>
                </div>

              </Form>

            )
          }    
        }
        
      </Formik>
      
    </section>
    
  )
}
