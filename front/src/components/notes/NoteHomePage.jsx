import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { Outlet } from "react-router-dom";

import 'animate.css';

import { startLoadNotes } from "../../store/slices/note/noteThunk";
import { NotePage } from "./NotePage";
import { Sidebar } from "./sidebar/Sidebar";

import  IconMenu from '../../assets/img/icons/menu.png';


export const NoteHomePage = () => {

  const dispatch = useDispatch();
  


  const [ menu, setMenu ] = useState( true );
  const [ animar, setAnimar ] = useState( true );

  const handleMenu = () => {

    if( menu ){

      setMenu( !menu );

      setTimeout(() => {

        setAnimar( !animar );

      }, 200);

    } else {

      //   setTimeout(() => {
      setMenu( !menu );
      //   }, 200);

      setAnimar( !animar );

    }

  }
  
  
  
  
  useEffect( () => {

    dispatch( startLoadNotes() );
    
  }, []);
  
  
  return (
    
    <main className="
      flex
      h-screen
      sm:flex-col
      sm:box-border
      
    ">

        <div className={`md:hidden w-full sm:flex sm:justify-end sm:items-center transition-all duration-700 ${menu ? ' bg-my-color-three' : ' bg-my-color-two'}`}>
            <div className={`mr-5 `}>
                <button
                    id='icon-menu'
                    onClick={ handleMenu }
                    className="
                    border
                    bg-my-bg-second
                    fill-current
                    w-6
                    p-1
                    rounded
                    flex
                ">
                    <img className="w-full" src={ IconMenu } alt="icono de boton" />
                </button>
            </div>
        </div>

        <div className={`

          sm:w-full
          sm:overflow-hidden
          ${menu ? ' sm:h-0' : ' sm:h-2/6'}
          transition-all
          duration-500


          w-1/4
        `}>
          <Sidebar />
        </div>


        <div className={` sm:w-full w-3/4 bg-my-color-three ${menu ? ' sm:h-full sm:flex sm:items-center' : ' sm:h-4/6'} transition-all duration-500 overflow-y-scroll`}>
          <NotePage>
            <Outlet />
          </NotePage>
        </div>
        

        
    </main>

  )
}
