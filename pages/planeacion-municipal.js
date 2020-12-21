import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import { useEffect } from "react";
import HeaderSedatu from '../components/HeaderSedatu'

import { useRouter } from 'next/router'

export default function PlaneacionMunicipal() {

  const router = useRouter()

  useEffect(
    function mount() {
      var elemento = document.getElementById("menuId");
      var oculto = document.getElementById("ocultarMenu");

      function onScroll() {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
          elemento.className = "menu-flotante";
          oculto.className = "ocultar";
        }
        else {
          elemento.classList.remove("menu-flotante");
          elemento.className = "py-3 mt-5";
          oculto.classList.remove("ocultar");
          oculto.className = "py-3 mt-5";
        }
      }

      window.addEventListener("scroll", onScroll);
    });

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
        <title>SITU | Planeación municipal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSedatu />
      <div className="col-span-12 bg-verdec p-6 text-right text-white">{router.query.q} <i class="fas fa-cog"></i></div>
      <nav className="col-span-12 bg-navsitu relative select-none flex">
        <div class="flex text-center">
          <Link href="/situ">
            <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Inicio</a>
          </Link>
          <a href="#" class="bg-gray-500 flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Planeacion<br />municipal</a>
          <Link 
          href={{
            pathname: "/analisis-geografico",
            query: { q: router.query.q },
          }}>
            <a href="#" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Análisis<br />geográfico</a>
          </Link>
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
      </nav>
      <main className="container mx-auto">
      <nav className="py-3 mt-5" id="ocultarMenu">
          <ul className="flex justify-end">
            <a className="mx-2 text-navsitu font-bold" href="#tecnica">Ficha tecnica</a>
            <a className="mx-2 text-navsitu font-bold" href="#sub2">Análisis geográfico</a>
            <a className="mx-2 text-navsitu font-bold" href="#sub3">Estadísticas</a>
            <a className="mx-2 text-navsitu font-bold" href="#sub4">Indicadores</a>
            <a className="mx-2 text-navsitu font-bold" href="#sub5">Consulta documental</a>
          </ul>
        </nav>
        <nav className="py-3 mt-5" id="menuId">
          <ul className="flex justify-end">
            <a className="mx-2 text-navsitu font-bold" href="#tecnica">Ficha tecnica</a>
            <a className="mx-2 text-navsitu font-bold" href="#sub2">Análisis geográfico</a>
            <a className="mx-2 text-navsitu font-bold" href="#sub3">Estadísticas</a>
            <a className="mx-2 text-navsitu font-bold" href="#sub4">Indicadores</a>
            <a className="mx-2 text-navsitu font-bold" href="#sub5">Consulta documental</a>
          </ul>
        </nav>

        <section id="tecnica" className="mt-5">

          <h2 className="text-navsitu font-bold border-b-2 borde-dorado" id="sub1">Ficha técnica</h2>

          <div className="flex justify-around mt-3">
            <p>Localización: Acapulco, Guerrero</p>
            <form>
              <div>
                <button className="text-navsitu mb-3">Buscar</button>
              </div>
              <div className="bg-gray-300 p-3 mb-3">
                <label className="mr-3">Estado</label>
                <select id="" className="bg-gray-300 text-navsitu">
                  <option value="AGUASCALIENTES">AGUASCALIENTES</option>
                  <option value="BAJA CALIFORNIA">BAJA CALIFORNIA</option>
                  <option value="BAJA CALIFORNIA SUR">BAJA CALIFORNIA SUR</option>
                  <option value="CAMPECHE">CAMPECHE</option>
                  <option value="COAHUILA DE ZARAGOZA">COAHUILA DE ZARAGOZA</option>
                  <option value="REGIÓN LAGUNERA">REGIÓN LAGUNERA</option>
                  <option value="COLIMA">COLIMA</option>
                  <option value="CHIAPAS">CHIAPAS</option>
                  <option value="CHIHUAHUA">CHIHUAHUA</option>
                  <option value="CIUDAD DE MÉXICO">CIUDAD DE MÉXICO</option>
                  <option value="DURANGO">DURANGO</option>
                  <option value="REGIÓN LAGUNERA">REGIÓN LAGUNERA</option>
                  <option value="GUANAJUATO">GUANAJUATO</option>
                  <option selected="selected" value="GUERRERO">GUERRERO</option>
                  <option value="HIDALGO">HIDALGO</option>
                  <option value="JALISCO">JALISCO</option>
                  <option value="MEXICO">MEXICO</option>
                  <option value="MICHOACAN DE OCAMPO">MICHOACAN DE OCAMPO</option>
                  <option value="MORELOS">MORELOS</option>
                  <option value="NAYARIT">NAYARIT</option>
                  <option value="NUEVO LEON">NUEVO LEON</option>
                  <option value="OAXACA">OAXACA</option>
                  <option value="PUEBLA">PUEBLA</option>
                  <option value="QUERETARO DE ARTEAGA">QUERETARO DE ARTEAGA</option>
                  <option value="QUINTANA ROO">QUINTANA ROO</option>
                  <option value="SAN LUIS POTOSI">SAN LUIS POTOSI</option>
                  <option value="SINALOA">SINALOA</option>
                  <option value="SONORA">SONORA</option>
                  <option value="TABASCO">TABASCO</option>
                  <option value="TAMAULIPAS">TAMAULIPAS</option>
                  <option value="TLAXCALA">TLAXCALA</option>
                  <option value="VERACRUZ DE IGNACIO DE LA LLAVE">VERACRUZ DE IGNACIO DE LA LLAVE</option>
                  <option value="YUCATAN">YUCATAN</option>
                  <option value="ZACATECAS">ZACATECAS</option>
                  <option value="EXTRANJERO">EXTRANJERO</option>
                  <option value="Guerrero">NACIONAL</option>
                </select>
              </div>
              <div className="bg-gray-300 p-3">

                <label className="mr-3">Municipio</label>
                <select id="" className="bg-gray-300 text-navsitu">
                  <option value="ACAPULCO DE JUAREZ">ACAPULCO DE JUAREZ</option>
                  <option value="AHUACUOTZINGO">AHUACUOTZINGO</option>
                  <option value="AJUCHITLAN DEL PROGRESO">AJUCHITLAN DEL PROGRESO</option>
                  <option value="ALCOZAUCA DE GUERRERO">ALCOZAUCA DE GUERRERO</option>
                  <option value="ALPOYECA">ALPOYECA</option>
                  <option value="APAXTLA">APAXTLA</option>
                  <option value="ARCELIA">ARCELIA</option>
                  <option value="ATENANGO DEL RIO">ATENANGO DEL RIO</option>
                  <option value="ATLAMAJALCINGO DEL MONTE">ATLAMAJALCINGO DEL MONTE</option>
                  <option value="ATLIXTAC">ATLIXTAC</option>
                  <option value="ATOYAC DE ALVAREZ">ATOYAC DE ALVAREZ</option>
                  <option value="AYUTLA DE LOS LIBRES">AYUTLA DE LOS LIBRES</option>
                  <option value="AZOYU">AZOYU</option>
                  <option value="BENITO JUAREZ">BENITO JUAREZ</option>
                  <option value="BUENAVISTA DE CUELLAR">BUENAVISTA DE CUELLAR</option>
                  <option value="COAHUAYUTLA DE JOSE MARIA IZAZAGA">COAHUAYUTLA DE JOSE MARIA IZAZAGA</option>
                  <option value="COCULA">COCULA</option>
                  <option value="COPALA">COPALA</option>
                  <option value="COPALILLO">COPALILLO</option>
                  <option value="COPANATOYAC">COPANATOYAC</option>
                  <option value="COYUCA DE BENITEZ">COYUCA DE BENITEZ</option>
                  <option value="COYUCA DE CATALAN">COYUCA DE CATALAN</option>
                  <option value="CUAJINICUILAPA">CUAJINICUILAPA</option>
                  <option value="CUALAC">CUALAC</option>
                  <option value="CUAUTEPEC">CUAUTEPEC</option>
                  <option value="CUETZALA DEL PROGRESO">CUETZALA DEL PROGRESO</option>
                  <option value="CUTZAMALA DE PINZON">CUTZAMALA DE PINZON</option>
                  <option value="CHILAPA DE ALVAREZ">CHILAPA DE ALVAREZ</option>
                  <option value="CHILPANCINGO DE LOS BRAVO">CHILPANCINGO DE LOS BRAVO</option>
                  <option value="FLORENCIO VILLARREAL">FLORENCIO VILLARREAL</option>
                  <option value="GENERAL CANUTO A. NERI">GENERAL CANUTO A. NERI</option>
                  <option value="GENERAL HELIODORO CASTILLO">GENERAL HELIODORO CASTILLO</option>
                  <option value="HUAMUXTITLAN">HUAMUXTITLAN</option>
                  <option value="HUITZUCO DE LOS FIGUEROA">HUITZUCO DE LOS FIGUEROA</option>
                  <option value="IGUALA DE LA INDEPENDENCIA">IGUALA DE LA INDEPENDENCIA</option>
                  <option value="IGUALAPA">IGUALAPA</option>
                  <option value="IXCATEOPAN DE CUAUHTEMOC">IXCATEOPAN DE CUAUHTEMOC</option>
                  <option value="JOSE AZUETA">JOSE AZUETA</option>
                  <option value="JUAN R. ESCUDERO">JUAN R. ESCUDERO</option>
                  <option value="LEONARDO BRAVO">LEONARDO BRAVO</option>
                  <option value="MALINALTEPEC">MALINALTEPEC</option>
                  <option value="MARTIR DE CUILAPAN">MARTIR DE CUILAPAN</option>
                  <option value="METLATONOC">METLATONOC</option>
                  <option value="MOCHITLAN">MOCHITLAN</option>
                  <option value="OLINALA">OLINALA</option>
                  <option value="OMETEPEC">OMETEPEC</option>
                  <option value="PEDRO ASCENCIO ALQUISIRAS">PEDRO ASCENCIO ALQUISIRAS</option>
                  <option value="PETATLAN">PETATLAN</option>
                  <option value="PILCAYA">PILCAYA</option>
                  <option value="PUNGARABATO">PUNGARABATO</option>
                  <option value="QUECHULTENANGO">QUECHULTENANGO</option>
                  <option value="SAN LUIS ACATLAN">SAN LUIS ACATLAN</option>
                  <option value="SAN MARCOS">SAN MARCOS</option>
                  <option value="SAN MIGUEL TOTOLAPAN">SAN MIGUEL TOTOLAPAN</option>
                  <option value="TAXCO DE ALARCON">TAXCO DE ALARCON</option>
                  <option value="TECOANAPA">TECOANAPA</option>
                  <option value="TECPAN DE GALEANA">TECPAN DE GALEANA</option>
                  <option value="TELOLOAPAN">TELOLOAPAN</option>
                  <option value="TEPECOACUILCO DE TRUJANO">TEPECOACUILCO DE TRUJANO</option>
                  <option value="TETIPAC">TETIPAC</option>
                  <option value="TIXTLA DE GUERRERO">TIXTLA DE GUERRERO</option>
                  <option value="TLACOACHISTLAHUACA">TLACOACHISTLAHUACA</option>
                  <option value="TLACOAPA">TLACOAPA</option>
                  <option value="TLALCHAPA">TLALCHAPA</option>
                  <option value="TLALIXTAQUILLA DE MALDONADO">TLALIXTAQUILLA DE MALDONADO</option>
                  <option value="TLAPA DE COMONFORT">TLAPA DE COMONFORT</option>
                  <option value="TLAPEHUALA">TLAPEHUALA</option>
                  <option value="LA UNION DE ISIDORO MONTES DE OCA">LA UNION DE ISIDORO MONTES DE OCA</option>
                  <option value="XALPATLAHUAC">XALPATLAHUAC</option>
                  <option value="XOCHIHUEHUETLAN">XOCHIHUEHUETLAN</option>
                  <option value="XOCHISTLAHUACA">XOCHISTLAHUACA</option>
                  <option value="ZAPOTITLAN TABLAS">ZAPOTITLAN TABLAS</option>
                  <option value="ZIRANDARO">ZIRANDARO</option>
                  <option value="ZITLALA">ZITLALA</option>
                  <option value="EDUARDO NERI">EDUARDO NERI</option>
                  <option value="ACATEPEC">ACATEPEC</option>
                  <option value="MARQUELIA">MARQUELIA</option>
                  <option value="COCHOAPA EL GRANDE">COCHOAPA EL GRANDE</option>
                  <option value="JOSE JOAQUIN DE HERRERA">JOSE JOAQUIN DE HERRERA</option>
                  <option value="JUCHITAN">JUCHITAN</option>
                  <option value="ILIATENCO">ILIATENCO</option>
                </select>
              </div>

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
              <table class="table-auto">
                <tbody>
                  <tr>
                    <td className="border-r-2 text-yellow-500">Sistema urbano nacional</td>
                    <td className="text-yellow-500">Población</td>
                  </tr>
                  <tr>
                    <td className="border-r-2">Localidades</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="border-r-2">ZM de Acapulco</td>
                    <td>886,957 (25.1%)</td>
                  </tr>
                  <tr>
                    <td className="border-r-2">ZM de Chilpancingo</td>
                    <td>324,422 (9.1%)</td>
                  </tr>
                </tbody>
              </table>
              <button className="text-guinda text-2xl mt-5">Descargar ficha <i className="text-2xl fas fa-download text-guinda"></i></button>
            </div>

            <div>
              <Image
                src='/mancha.jpg'
                alt='resultados'
                width={288}
                height={221}
              />
              <table class="table-auto">
                <tbody>
                  <tr>
                    <td className="text-yellow-500">Datos generales de Acapulco</td>
                  </tr>
                  <tr>
                    <td className="border-r-2">Poblacion estatal</td>
                    <td>3.5 millones</td>
                  </tr>
                  <tr>
                    <td className="border-r-2">Porcentaje de población Nacional</td>
                    <td>3%</td>
                  </tr>
                  <tr>
                    <td className="border-r-2">Mujeres</td>
                    <td>51.9%</td>
                  </tr>
                  <tr>
                    <td className="border-r-2">Hombres</td>
                    <td>48.1%</td>
                  </tr>
                  <tr>
                    <td className="border-r-2">Superficie estatal(km2)</td>
                    <td>63,595.9</td>
                  </tr>
                  <tr>
                    <td className="border-r-2">Porcentaje de la superficie nacional</td>
                    <td>32.2%</td>
                  </tr>
                  <tr>
                    <td className="border-r-2">Grado de marginación(CONAPO)</td>
                    <td>Muy alto</td>
                  </tr>
                  <tr>
                    <td className="border-r-2">Grado de rezago social(CONEVAL)</td>
                    <td>Muy alto</td>
                  </tr>
                  <tr>
                    <td className="border-r-2">Porcentaje de población en pobreza</td>
                    <td>67.1%(2,370,811)</td>
                  </tr>
                  <tr>
                    <td className="border-r-2">Población rural</td>
                    <td>1,483,965(42%)</td>
                  </tr>
                  <tr>
                    <td className="border-r-2">*Poblacion urbana</td>
                    <td>2,049,286(58%)</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-3">*Población en localidades mayores a 2,500 habitantes.</p>
            </div>
          </div>

        </section>

        <section id="analisis" className="mt-10">
          <h2 className="text-navsitu font-bold border-b-2 borde-dorado" id="sub2">Análisis geográfico</h2>
          <div className="flex mt-10">
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

        <section id="estadisticas" className="mt-10">
          <h2 className="text-navsitu font-bold border-b-2 borde-dorado" id="sub3">Estadísticas</h2>
          <div className="flex justify-around mt-10">
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

        <section id="indicadores" className="mt-10">
          <h2 className="text-navsitu font-bold border-b-2 borde-dorado" id="sub4">Indicadores</h2>
          <div className="flex justify-center mt-10">
            <Image
              src='/indicadores.jpg'
              alt='resultados'
              width={247}
              height={257}
            />
          </div>
        </section>

        <section id="consulta" className="my-10">
          <h2 className="text-navsitu font-bold border-b-2 borde-dorado" id="sub5">Consulta documental</h2>
          <div className="flex justify-center mt-10 bg-gray-200 grid grid-cols-3 pt-6 text-center">
            <div className="imagenes-consulta mx-4">
              <Image src='/trazado.jpg' alt='resultados' width={247} height={257} />
              <p className="bg-white">
                Guía trazando ciudades <br />para integrar a las personas <br />en la planeación urnaba.
              </p>
            </div>
            <div className="imagenes-consulta mx-4">
              <Image src='/meteorologica.jpg' alt='resultados' width={247} height={257} />
              <p className="bg-white">
                Guía meteorológica de <br /> recuperacion socieconómica <br /> municipal con contexto COVID-19
              </p>
            </div>
            <div className="imagenes-consulta mx-4">
              <Image src='/manual.jpg' alt='resultados' width={247} height={257} />
              <p className="bg-white">
                Manual de calles: diseño <br /> vial para ciudades<br />mexicanas
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
