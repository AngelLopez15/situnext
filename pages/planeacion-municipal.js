import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PlaneacionMunicipal() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" /> 
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <title>SITU | Planeación municipal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <nav className="col-span-12 bg-navsitu py-8">
          <ul className="flex justify-around">
            <li className="text-white">Inicio</li>
            <li className="text-white">Planeacion municipal</li>
            <li className="text-white">
              <Link href="/analisis-geografico"> 
                <a>Análisis geográfico</a>
              </Link>
            </li>
            <li className="text-white">Estadísticas e Indicadores</li>
            <li className="text-white">Consulta documental</li>
            <li className="text-white">Administracion del sistema</li>
            <li className="text-white cursor-pointer">
              <Link href="/inicio-sesion">
                <a>Cerrar sesión <i class="fas fa-sign-in-alt text-white"></i></a>
              </Link>
            </li>
          </ul>
      </nav>
      <main className="container mx-auto">
        <nav className="py-3">
          <ul className="flex justify-end">
            <li className="mx-2 text-navsitu font-bold">Ficha tecnica</li>
            <li className="mx-2 text-navsitu font-bold">Análisis geográfico</li>
            <li className="mx-2 text-navsitu font-bold">Estadísticas</li>
            <li className="mx-2 text-navsitu font-bold">Indicadores</li>
            <li className="mx-2 text-navsitu font-bold">Consulta documental</li>
          </ul>
        </nav>

        <section id="tecnica">

          <h2>Ficha técnica</h2>
          
          <div className="flex justify-between my-8">
            <p>Localización: Acapulco, Guerrero</p>
            <form>
              <input type="text" placeholder="Estado" value="Guerrero" />
              <input type="text" placeholder="Municipio" value="Acapulco" />
              <button className="bg-navsitu text-white px-5 py-2 rounded-2xl mx-5">Buscar</button>
            </form>
          </div>

          <div className="flex justify-around">
            <div>
              <Image 
                src='/edoguerrero.jpg'
                alt='resultados'
                width={330}
                height={225}
              />
              <div>
                <p>Sistema urbano nacional | Población</p>
                <p>Localidades</p>
                <ul>
                  <li>ZM de Acapulco: 886,957 (25.1%)</li>
                  <li>ZM de Chilpancingo: 324,422 (9.1%)</li>
                </ul>
              </div>
              <button className="text-guinda text-2xl">Descargar ficha <i className="text-2xl fas fa-download text-guinda"></i></button>
            </div>

            <div>
              <Image 
                src='/mancha.jpg'
                alt='resultados'
                width={288}
                height={221}
              />
              <div>
                <p>Datos generales de Acapulco</p>
                <ul>
                  <li>Poblacion estatal: 3.5 millones</li>
                  <li>Porcentaje de población Nacional: 3%</li>
                  <li>Mujeres: 51.9%</li>
                  <li>Hombres: 48.1%</li>
                  <li>Superficie estatal(km2): 63,595.9</li>
                  <li>Porcentaje de la superficie nacional: 32.2%</li>
                  <li>Grado de marginación(CONAPO): <b>Muy alto</b></li>
                  <li>Grado de rezago social(CONEVAL): <b>Muy alto</b></li>
                  <li>Porcentaje de población en pobreza: 67.1%(2,370,811)</li>
                  <li>Población rural: 1,483,965(42%)</li>
                  <li>*Poblacion urbana: 2,049,286(58%)</li>
                </ul>
                <p>*Población en localidades mayores a 2,500 habitantes.</p>
              </div>
            </div>
          </div>
          
        </section>
        
        <section id="analisis">
          <h2>Análisis geográfico</h2>
            <div className="flex">
              <Image 
                src='/mapaguerrero.jpeg'
                alt='resultados'
                width={992}
                height={525}
              />

              <div className="flex flex-col mx-10">
                <select className="my-10" name="select">
                  <option value="default selected">Consultas</option>
                  <option value="Densidad de población">Densidad de población</option>
                  <option value="Zona de deslizamiento">Zona de deslizamiento</option>
                  <option value="Zona de riesgo">Zona de riesgo</option>
                  <option value="Zona de influencia">Zona de influencia</option>
                </select>
                <Image 
                  src='/resultados.jpg'
                  alt='resultados'
                  width={139}
                  height={164}
                />
                <Image 
                  src='/capas.jpg'
                  alt='resultados'
                  width={148}
                  height={124}
                />
              </div>
            </div>
        </section>
        
        <section id="estadisticas">
          <h2>Estadísticas</h2>
          <div className="flex justify-around">
            <Image 
              src='/estadisticas1.jpg'
              alt='resultados'
              width={455}
              height={241}
            />
            <Image 
              src='/estadisticas2.jpg'
              alt='resultados'
              width={400}
              height={261}
            />
          </div>
        </section>
        
        <section id="indicadores">
          <h2>Indicadores</h2>
          <div className="flex justify-center">
            <Image 
              src='/indicadores.jpg'
              alt='resultados'
              width={247}
              height={257}
            />
          </div>
        </section>

        <section id="consulta">
          <h2>Consulta documental</h2>
          <div className="flex justify-center">
            <article className="w-4/12">
              <Image 
                src='/trazado.jpg'
                alt='resultados'
                width={247}
                height={257}
              />
              <p className="w-8/12">
                Guía trazando ciudades para integrar a las personas en la planeación urnaba.
              </p>
            </article>
            <article className="w-4/12">
              <Image 
                src='/meteorologica.jpg'
                alt='resultados'
                width={247}
                height={257}
              />
              <p className="w-8/12">
                Guía meteorológica de recuperacion socieconómica municipal con contecto COVID-19
              </p>
            </article>
            <article className="w-4/12">
              <Image 
                src='/manual.jpg'
                alt='resultados'
                width={247}
                height={257}
              />
              <p className="w-8/12">
                Manual de calles: diseño vial para ciudades mexicanas
              </p>
            </article>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
