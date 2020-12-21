import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="col-span-12 bg-navsitu relative select-none flex">
      <div className="flex flex-no-shrink items-stretch h-12">
        <Link href="/">
          <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Inicio</a>
        </Link>
        <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Planeacion municipal</a>
        <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Análisis geográfico</a>
        <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Estadísticas e Indicadores</a>
        <a href="#" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Consulta documental</a>
      </div>
    </nav>
  )
}
