import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';


import { fectchWithoutToken, fectchWithToken } from "../../../helpers/fetch"
import { login, logout } from "./authSlice";


export const checkingLogin = () => {

    return async( dispatch ) => {

        const response = await fectchWithToken('auth/revalidate', 'GET');
        const body = await response.json();

        if( body.ok ) {

            localStorage.setItem('token', body.token);
            
            dispatch( login(body) );
            
        }else{

            dispatch( logout() );
            
        }
        
    }

}

export const startLogin = ( email, password ) => {

    return async( dispatch ) => {

        const data = {
            email,
            password
        }


        const response = await fectchWithoutToken( 'auth/signin', data, 'POST' );

        const body = await response.json();

        
        if( body.ok ) {

            localStorage.setItem('token', body.token);

            dispatch( login( body.user ) );

        } else {

            const errors = body.errors ?? "";

            const error = body.error ?? "";

            dispatch( logout() );

            Swal.fire({
                title   : 'Error',
                text    : !!errors ? errors.errors.map(err => err.msg) : error.msg,
                icon    : 'error',
                confirmButtonText: 'Aceptar'
            });

        }

    }
    
};

export const startRegister = ( {name, username, password} ) => {

    return async( dispatch ) => {

        const data = { name, email: username, password };

        const response = await fectchWithoutToken( 'user/signup', data, 'POST' );
        const body     = await response.json();

        if( body.ok ) {

            Swal.fire({
                title   : 'Usuario creado correctamente!',
                icon    : 'success',
                confirmButtonText: 'Aceptar',
            });

            dispatch( logout() );
            
            // localStorage.setItem('token', body.token);

            // dispatch( login( body.user ) );

        } else {

            const errors = body.errors ?? "";

            const error = body.error ?? "";

            dispatch( logout() );

            Swal.fire({
                title   : 'Error',
                text    : !!errors ? errors.errors.map(err => err.msg) : error.msg,
                icon    : 'error',
                confirmButtonText: 'Aceptar'
            });

        }
    }

}