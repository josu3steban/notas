import { NoteListContainer } from "./NotesListContainer"
import IconNewNote from '../../../assets/img/icons/icon-new-note.png'
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/slices/auth";
import { cleanActiveNote, cleanNotes } from "../../../store/slices/note/noteSlice";


export const Sidebar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { name } = useSelector( state => state.auth );
  

  const handleNewNote = () => {

    dispatch( cleanActiveNote() );
    navigate( '/mynote/newnote' );
    
  }



  const handleLogout = () => {

    Swal.fire({
      title: '¿Deseas salir?',
      // text: "You won't be able to revert this!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, salir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        
        localStorage.removeItem('token');
        dispatch( logout() );
        dispatch( cleanNotes() );
        
      }
    })

    // navigate( '/auth/signin' );
    
  }
  
  return (
      <aside
        className="

          sm:h-full
          sm:w-screen
          sm:relative

          flex
          flex-col
          bg-my-color-two
          
          w-full
          h-screen
        ">


          

            <header onClick={ () => { dispatch(cleanActiveNote()); navigate('/'); } } className="p-2 cursor-pointer">
              <p className="w-full block uppercase mr-5 text-lg" >bienvenido <span className="text-my-color-five font-medium">{ name }</span></p>
            </header>

          <div className="flex sm:h-full sm:flex-row sm:w-screen min-h-0 flex-col">

            <section
              onClick={ handleNewNote }
              className="flex sm:gap-y-0 sm:flex-col  sm:justify-center sm:shadow-md sm:border-my-color-five sm:w-1/4  items-center gap-5 hover:shadow-md border-2 border-transparent hover:border-my-color-five p-2 rounded-md transition-all duration-300 cursor-pointer m-2"
            >
              <div className="sm:w-2/4 sm:h-fit w-1/5">
                <img className="w-full sm:h-full" src={ IconNewNote } alt="Icono nueva nota" />
              </div>

              <div className="text-3xl sm:text-2xl font-extrabold sm:text-center sm:w-full">
                <h3 className="">Nueva Nota</h3>
              </div>
            </section>

              {/* <h2 className="text-4xl text-center font-extrabold">Mis Notas</h2>
              <hr className="w-full bg-my-color-three h-1 rounded-xl border-none mb-7"/> */}

            <div className="sm:overflow-x-scroll sm:h-full sm:w-screen sm:overflow-y-clip overflow-y-scroll">
              <NoteListContainer />
            </div>

          </div>


            <footer className="p-2 text-right">
              <button onClick={ handleLogout } className="w-auto px-2 uppercase border rounded-md bg-my-color-four text-my-color-two font-medium">salir</button>
            </footer>

      </aside>
  )
}
