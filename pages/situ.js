import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Image from 'next/image'

export default function Situ() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
        <title>SITU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <nav className="col-span-12 bg-navsitu relative select-none flex">
          <div class="flex flex-no-shrink items-stretch h-12">
            <a href="/situ" class="bg-gray-500 flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Inicio</a>
            <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Planeacion municipal</a>
            <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Análisis geográfico</a>
            <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Estadísticas e Indicadores</a>
            <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Consulta documental</a>
          </div>
          <div class="flex flex-grow">
            <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
              <Link href="/inicio-sesion">
                <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Iniciar sesión <i class="fas fa-sign-in-alt text-white"></i></a>
              </Link>
            </div>
          </div>
        </nav>

        <section className="container mx-auto pt-12 pb-20">

          <h1 className="text-center mb-8 text-4xl font-bold">Sistema de Información Territorial y Urbana</h1>
          <p className="text-center mb-8 text-3xl font-semibold">Bienvenido</p>
          <p className="text-justify">
            El Sistema de Información Territorial y Urbana <b>(SITU)</b> se concibe como una herramienta que permite recopilar, organizar, integrar, difundir y actualizar la
            información geográfica documental así como indicadores sobre el ordenamiento territorial agrario, el desarrollo urbano y vivienda de México.
          </p>
          <p className="text-justify">
            El <b>SITU</b> se integrá por información e indicadores generados por los tres órdenes del gobierno, instancias de gobernanza metropolitana, así como otros registros
            e inventario del territorio derivados de actividades científicas, academicas o de cualquier índole en materia de ordenamiento territorial y desarrollo urbano.
          </p>
          <div className="grid pt-10">
            <Image src='/iniciar_sesion.jpg' alt='login' width="500" height="200" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
