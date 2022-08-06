import { Field, Form, Formik } from 'formik';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import BgImg from '../../assets/img/bg-auth.jpg';


import { authenticating, startLogin } from '../../store/slices/auth';

export const SigninPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { status } = useSelector( state => state.auth);

  const isAuthenticating = useMemo( () => status === 'authenticating', [status] );

  console.log(isAuthenticating);

  const newLoginSchema = Yup.object().shape(
    {
      username: Yup.string().email('Email no valido').required('Debe de ingresar un email'),
      password: Yup.string().required('Debe ingresar la contraseña')
    }
  );

  const handleLogin = ( values, resetForm ) => {

    const { username: email, password } = values;

    dispatch( authenticating() );
    dispatch( startLogin( email, password ) );

    // resetForm();

    
  }

  // bg-[url('./assets/img/bg-login.svg')]
  
  return (
    <div className=" flex justify-center items-center h-screen bg-cover bg-[url('./assets/img/bg-auth.jpg')] ">

      <div className="
        bg-my-color-two/50
        sm:w-5/6
        animate__animated animate__bounce animate__fadeIn animate__faster
        w-1/4 
        border-2 
        border-my-color-five 
        rounded-lg 
        p-3
      ">
        
        <Formik
        
          initialValues={ 
            {
              username: "",
              password: ""
            }
          }

          validationSchema = { newLoginSchema }

          enableReinitialize = { true }
          
          onSubmit = {( values, {resetForm} ) => {

            handleLogin( values, resetForm );

          }}
        
        >

          {

            ( {errors, touched} ) => {

              return(

                <div className="">

                  <Form>

                    <div className="">
                      <label className='block text-2xl font-medium mb'>Email</label>
                      <Field
                        className="w-full bg-white border-2 border-my-color-three focus:outline-none focus:border-my-color-five rounded-lg px-3 py-1 transition-all"
                        type="text"
                        name="username"
                        id="username"
                      />
                      {
                        (errors.username && touched.username )
                          ? <span className="uppercase block text-sm text-my-color-four">{ errors.username }</span>
                          : <span className="uppercase block text-sm text-transparent">null</span>
                      }
                    </div>

                    <div className="mb-3">
                      <label className='block text-2xl font-medium mb'>Contraseña</label>
                      <Field
                        className="w-full bg-white border-2 border-my-color-three focus:outline-none focus:border-my-color-five rounded-lg px-3 py-1 transition-all"
                        type="password"
                        name="password"
                        id="password"
                      />
                      {
                        (errors.password && touched.password )
                          ? <span className="uppercase block text-sm text-my-color-four">{ errors.password }</span>
                          : <span className="uppercase block text-sm text-transparent">null</span>
                      }
                    </div>

                    <div className="">
                      <button
                        type="submit"
                        disabled={ isAuthenticating }
                        className={`w-full py-2 px-3 rounded-lg text-my-color-two text-xl bg-my-color-five ${ !isAuthenticating ? 'animate-pulse' : ''} `}>

                        {`INICIAR SESIÓN`}
                        
                      </button>
                    </div>

                    <div className="text-right mt-2">
                      <span onClick={ () => navigate('/auth/signup') } className="uppercase border-b border-my-color-four text-xs text-my-color-four cursor-pointer">Obtener una cuenta</span>
                    </div>
                    
                  </Form>
                  
                </div>
                
              )
              
            }
            
          }
          
        </Formik>
        
      </div>
      
    </div>
  )
}
