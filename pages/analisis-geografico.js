import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import HeaderSedatu from '../components/HeaderSedatu'
import Mapa from '../components/Mapa'
import Mapas from '../components/Mapas'

import { useRouter } from 'next/router'

export default function AnalisisGeografico() {

  const router = useRouter()

  const [divide, setDivide] = useState(false)

  const divideMap = () => {
    setDivide(!divide)
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
        <title>SITU | Análisis Geográfico</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSedatu />
      <div className="col-span-12 bg-verdec p-6 text-right text-white">{router.query.q} <i class="fas fa-cog"></i></div>
      <nav className="col-span-12 bg-navsitu relative select-none flex">
        <div class="flex text-center">
          <Link href="/situ">
            <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Inicio</a>
          </Link>
          <Link href={{
            pathname: "/planeacion-municipal",
            query: { q: router.query.q },
          }}>
            <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Planeacion<br />municipal</a>
          </Link>
          <a href="#" class="bg-gray-500 flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Análisis<br />geográfico</a>
          <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Estadísticas<br />e Indicadores</a>
          <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Consulta<br />documental</a>
        </div>
        <div class="flex flex-grow">
          <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
            <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Administracion del sistema</a>
            <Link href="/inicio-sesion">
              <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Cerrar sesión <i class="fas fa-sign-in-alt text-white"></i></a>
            </Link>
          </div>
        </div>
      </nav >
      <main>
        <div className="container mx-auto py-5">
          <ul className="flex justify-around w-2/5">
            <li><i className="fas fa-folder cursor-pointer"></i></li>
            <li><i className="fas fa-save cursor-pointer"></i></li>
            <li><i className="fas fa-hand-point-up cursor-pointer"></i></li>
            <li><i className="fas fa-arrows-alt cursor-pointer"></i></li>
            <li><i className="fas fa-search-plus cursor-pointer"></i></li>
            <li><i className="fas fa-search-minus cursor-pointer"></i></li>
            <li><i className="fas fa-search cursor-pointer"></i></li>
          </ul>
        </div>

        <div className="grid grid-rows-2 grid-flow-col gap-4">
          <div className="col-span-5 row-span-2 text-center">
            <h1 className="mb-5 text-2xl font-bold" >Fénomenos sísmicos y volcanes</h1>
            {
              divide ? <Mapas /> : <Mapa />
            }
          </div>

          <div className="col-span-2 text-center">
            <div className="flex flex-col">
              <button className="w-2/4 bg-navsitu text-white mb-5 rounded-lg py-2" onClick={divideMap}>{divide ? "Unir pantalla" : "Dividir pantalla"}</button>
              <div className="w-2/4">
                <Image
                  src='/resultados.jpg'
                  alt='resultados'
                  width={139}
                  height={164}
                />
              </div>
              <select className="my-5" name="select">
                <option value="default selected">Consultas</option>
                <option value="Densidad de población">Densidad de población</option>
                <option value="Zona de deslizamiento">Zona de deslizamiento</option>
                <option value="Zona de riesgo">Zona de riesgo</option>
                <option value="Zona de influencia">Zona de influencia</option>
              </select>
            </div>
          </div>

          <div className="col-span-2">
            <p className="text-sm mb-5 font-bold">Capas</p>
            <Image
              src='/capas.jpg'
              alt='resultados'
              width={148}
              height={124}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
