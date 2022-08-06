import ImgWelcome from '../../assets/img/icons/welcome.png';

export const NotesWelcom = () => {
  return (
    <section className="flex sm:justify-center sm:h-fit sm:w-full flex-col w-full items-center justify-center h-screen p-5 animate__animated animate__bounceInUp ">

        <h3 className="uppercase text-my-color-two text-6xl font-extrabold sm:text-5xl ">¡bienvenido!</h3>

        <div className="my-10 sm:w-full sm:flex sm:justify-center">
            <img className='w-80 sm:w-5/6 ' src={ ImgWelcome } alt="iamgen de bienvenida" />
        </div>

        <p className='text-my-color-two text-xl font-extrabold'>Crea tus notas importantes para siempre tenerlas en cuenta y que no se te olviden.</p>
        
    </section>
  )
}
