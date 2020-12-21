import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

import { useState } from 'react'
import { useRouter } from 'next/router'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

export default function InicioSesion() {
  const router = useRouter()
  const [query, setQuery] = useState('')

  //  const handleParam = setValue => e => setValue(e.target.value)
  function handleParam(setValue) {
    return function (e) {
      return setValue(e.target.value);
    }
  }
  console.log(handleParam);

  console.log(query)

  const handleSubmit = preventDefault(() => {
    router.push({
      pathname: '/analisis-geografico',
      query: { q: query },
    })
  })

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
        <title>SITU | Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <main className="container mx-auto">
        <section className="py-20">

          <div className="flex justify-center">

            <div className="mr-8">
              <Image src='/login.jpg' alt='login' width={250} height={250} />
            </div>

            <div className="w-5/12">
              <p className="text-blue-900 my-5 text-2xl font-bold">Inicio de sesión</p>
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <input className="bg-gray-100 mb-2 py-2 pl-5 rounded-xl" type="text" name="q" placeholder="usuario" value={query} onChange={handleParam(setQuery)} />
                <input className="bg-gray-100 mb-2 py-2 pl-5 rounded-xl" type="password" placeholder="contraseña" />
                <div className="flex justify-between mt-5">
                  <div>
                    <p className="text-blue-900 font-semibold cursor-pointer">Crear una cuenta</p>
                    <p className="text-blue-900 font-semibold cursor-pointer">¿Olvidaste tu contraseña?</p>
                  </div>
                  <button className="text-white bg-blue-900 rounded-xl px-5">
                    <a>Iniciar sesión</a>
                  </button>
                </div>
              </form>
            </div>

          </div>

          <div className="grid pt-10">
            <Image src='/iniciar_sesion.jpg' alt='login' width="500" height="200" />
          </div>

        </section>
      </main>
      <Footer />
    </>
  )
}
