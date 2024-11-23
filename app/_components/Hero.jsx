import React from 'react'

function Hero() {
  return (
<section className="bg-gradient-to-r from-gray-800 via-blue-900 to-sky-900 text-white animated-gradient h-screen flex items-center justify-center">
  <div className="mx-auto px-4 py-24 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1
        className="text-3xl font-extrabold sm:text-5xl"
      >
        Los mejores productos

        <span className="bg-gradient-to-r from-blue-800 via-blue-500 to-sky-500 bg-clip-text text-transparent sm:block"> para tus mascotas </span>
      </h1>

      <p className="mt-4 max-w-xl sm:text-xl/relaxed">
        En Gaho petshop encontrarás los mejnroes productos para tus mascotas con los mejores precios.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          Buscar productos
        </a>

        <a
          className="block w-full rounded border border-blue-400 px-12 py-3 text-sm font-medium text-white hover:border-blue-400 hover:bg-blue-400 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="https://www.instagram.com/cristiandaos/"
        >
          Powered by  @cristiandaos
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
