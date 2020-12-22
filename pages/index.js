import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import HeaderSedatu from '../components/HeaderSedatu'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
        <title>SITU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSedatu/>
      <main>
        <nav className="col-span-12 bg-verdec relative select-none flex">
          <div class="flex flex-grow">
            <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
            <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">¿Qué hacemos?</a>
            <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Acciones y Programas</a>
            <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Publicaciones y Descargables</a>
            <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Directorio</a>
            <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Contactos</a>
            <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Lo Destacado</a>
              <Link href="/situ">
                <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">SITU</a>
              </Link>
            </div>
          </div>
        </nav>

        <section className="text-center">
          <div className="container mx-auto">
            
            <Image src="/imagen-sedatu.jpg" width="1200" height="600"/>
            <div className="mt-10"></div>
            <Image src="/imagen-sedatu-2.jpg" width="1200" height="800"/>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
