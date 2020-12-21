import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" /> 
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <title>SITU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <nav className="col-span-12 bg-navsitu py-8">
          <ul className="flex justify-around">
            <li className="text-white">Inicio</li>
            <li className="text-white">Planeacion municipal</li>
            <li className="text-white">Análisis geográfico</li>
            <li className="text-white">Estadísticas e Indicadores</li>
            <li className="text-white">Consulta documental</li>
            <li className="text-white cursor-pointer">
              <Link href="/inicio-sesion">
                <a>Iniciar sesión <i class="fas fa-sign-in-alt text-white"></i></a>
              </Link>
            </li>
          </ul>
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

        </section>
      </main>
      <Footer />
    </>
  )
}
