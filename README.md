# Aplicación de Notas

## Instrucciones

- Registrate para obtener tu cuenta

![register (2)](https://user-images.githubusercontent.com/84942510/183358391-5682b5ae-5e2b-4719-8ff9-1309d988ace5.jpeg)

- Inicia sesión

![login](https://user-images.githubusercontent.com/84942510/183358518-acaf94b3-85ce-4dab-a25a-dd6ac9ffc053.jpeg)

- Una vez inciada sesión podrás hacer uso de la aplicación de nota

![inside](https://user-images.githubusercontent.com/84942510/183358647-86b5f83f-42aa-418f-8199-a81c89ba86d5.jpeg)

## Descargar y usar

**Back**

*Nota: Para poder correr el backend necesitas crear el archivo `.env` en la raíz del proyecto con las siguiente variables*

    PORT=
    MONGODB_CNN=
    SECRETKEY

- Decarga el respositorio

    `git clone https://github.com/josu3steban/notas.git`

- Ve a la carpeta de **back**

    `cd back`
    
- Corre el siguiente comando para instalar todos los paquetes

    `npm install`
    
- Levanta el servidor

    `node app`
    
**Front**

*Nota: Para poder correr el frontend necesitas crear el archivo `.env` en la raíz del proyecto con la siguiente variable, El valor de esta debe ser solcitada*

    VITE_API_URL=
    
- Decarga el respositorio

    `git clone https://github.com/josu3steban/notas.git`

- Ve a la carpeta de **front**

    `cd front`
    
- Corre el siguiente comando para instalar todos los paquetes

    `npm install`
    
- Corre la aplicación

    `npm run dev`
    
## Librerias y paquetes usadas

- React
- Redux toolkit
- Formik
- Yup
- React router dom 6
- Sweet alert 2
- Tailwind css
- Node.js
- Bcrypt
- JsonWebToken
- Mongoose
- MongoDB
- Express
- Express validator
