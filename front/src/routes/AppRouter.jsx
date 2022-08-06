import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../components/auth/routes/AuthRoutes";
import { NoteRoutes } from "../components/notes/routes/NoteRoutes";
import { LoadingPage } from "../components/ui/LoadingPage";
import { Spinner } from "../components/ui/Spinner";
import { checkingLogin } from "../store/slices/auth";
import { cleanActiveNote } from "../store/slices/note/noteSlice";


export const AppRouter = () => {

  const dispatch = useDispatch();
  const { checking } = useSelector( state => state.auth )

  useEffect( () => {

    dispatch( checkingLogin() );
    
  }, []);


  if( checking === 'cheking' ) {

    return <Spinner />
    
  }
  
  
  return (

    <Routes>

      {

        ( checking === 'not-authenticated' )
          ? <Route path="/auth/*" element={ <AuthRoutes /> }/>
          : <Route path="/*" element={ <NoteRoutes /> } />
        
      }

      <Route path="/*" element={ <AuthRoutes /> } />

    </Routes>
    
  )
}
