import { Navigate, Route, Routes } from "react-router-dom"
import { SigninPage } from "../SigninPage"
import { SignupPage } from "../SignupPage"

export const AuthRoutes = () => {
  return (

    <Routes>
      <Route path="signin" element={ <SigninPage /> } />
      <Route path="signup" element={ <SignupPage /> }/>

      {/* redireccion */}
      <Route path="/*" element={ <Navigate to="/auth/signin" /> } />
    </Routes>
    
  )
}
