

const baseUrl = import.meta.env.VITE_API_URL;



//fecth sin token
export const fectchWithoutToken = ( endpoint, data, method = 'GET') => {

    //contruir la url completa
    const url = `${baseUrl}/${endpoint}`;

    if( method === 'GET' ) {

        return fetch( url );
        
    }else {

        return fetch( url, {
            method,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify( data )
        });
        
        
    }
    
}


//fetch cuando se requiere un token
export const fectchWithToken = (endpoint, data, method = 'GET') => {


    //contruir la url completa
    const url = `${baseUrl}/${endpoint}`;

    if( method === 'GET' ) {

        return fetch( url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token') || ""
            }
        });

    }else {

        return fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token') || ""
            },
            body: JSON.stringify( data )
        });
        
    }
    
    
}