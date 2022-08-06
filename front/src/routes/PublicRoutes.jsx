import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';

export const PublicRoutes = ( { children, checking } ) => {

  // const check = useSelector(state => state.auth.checking);

  console.log(checking);
    
  return (
    
    (checking === 'checked')
        ? <Navigate to="/" />
        : children
    
  )
}
