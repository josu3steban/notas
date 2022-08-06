import { Navigate, Route, Routes } from "react-router-dom"
import { SigninPage } from "../components/auth/SigninPage"
import { SignupPage } from "../components/auth/SignupPage"


export const AuthRouter = () => {


    
  return (
    <div>

        <Routes>

            <Route path="signin" element={ <SigninPage />} />
            <Route path="signup" element={ <SignupPage />} />

            <Route path="/*" element={ <Navigate to="/auth/signin"/> } />
            

        </Routes>
        
    </div>
  )
}
