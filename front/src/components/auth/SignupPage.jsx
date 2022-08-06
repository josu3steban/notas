import { Field, Form, Formik } from 'formik';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { authenticating, startRegister } from '../../store/slices/auth';

export const SignupPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { status } = useSelector( state => state.auth);
  const isAuthenticating = useMemo( () => status === 'authenticating', [status] );

  const newLoginSchema = Yup.object().shape(
    {
      name  : Yup.string().required('Ingrese un nombre'),
      username: Yup.string().email('Email no valido').required('Debe de ingresar un email'),
      password: Yup.string().required('Debe ingresar la contraseña').min(6, 'La contraseña debe tener al menos 6 caracteres').max(15, 'La contraseña debe tener como maximo 15 caracteres')
    }
  );

  const handleSignup = (values, resetForm) => {

    dispatch( authenticating() );
    dispatch( startRegister(values) );

  }


  
  return (
    <div className=" flex justify-center items-center h-screen bg-cover bg-[url('./assets/img/bg-auth.jpg')] backdrop-blur-xl">

      <div className="sm:w-5/6 bg-my-color-two/50 w-1/4 border-2 border-my-color-five rounded-lg p-3 animate__animated animate__bounce animate__fadeIn animate__faster">
        
        <Formik
        
          initialValues={ 
            {
              name: "",
              username: "",
              password: ""
            }
          }

          validationSchema = { newLoginSchema }

          enableReinitialize = { true }
          
          onSubmit = {( values, {resetForm} ) => {

            handleSignup( values, resetForm );

          }}
        
        >

          {

            ( {errors, touched} ) => {

              return(

                <div className="">

                  <Form>

                    <div className="mb-2">
                      <label className='block text-2xl font-medium mb'>Nombre</label>
                      <Field
                        className="w-full bg-white border-2 border-my-color-three focus:outline-none focus:border-my-color-five rounded-lg px-3 py-1 transition-all"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Ej. Juanito Garcias"
                      />
                      {
                        (errors.name && touched.name )
                          ? <span className="uppercase block text-sm text-my-color-four">{ errors.name }</span>
                          : <span className="uppercase block text-sm text-transparent">null</span>
                      }
                    </div>

                    <div className="mb-2">
                      <label className='block text-2xl font-medium mb'>Correo</label>
                      <Field
                        className="w-full bg-white border-2 border-my-color-three focus:outline-none focus:border-my-color-five rounded-lg px-3 py-1 transition-all"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Ej. correo@correo.com"
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
                        placeholder="Ingresa tu contraseña"
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
                        className={`w-full py-2 px-3 rounded-lg text-my-color-two text-xl bg-my-color-five ${ !isAuthenticating ? 'animate-pulse' : ''} `}>

                        {`REGISTRARSE`}
                        
                      </button>
                    </div>

                    <div className="text-right mt-2">
                      <span onClick={ () => navigate('/auth/signin') } className="uppercase border-b border-my-color-four text-xs text-my-color-four cursor-pointer">Ya tengo una cuenta</span>
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
