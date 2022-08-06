import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";



export const PrivateRoutes = ({ children, checking }) => {

    // const check = useSelector(state => state.auth.checking);

    console.log(checking);
    
  return (

    (checking === 'checked')
        ? children
        : <Navigate to="/auth/signin"/>
    
  )
}
