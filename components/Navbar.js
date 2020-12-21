import React from 'react'

export default function Navbar() {
  return (
    <nav className="col-span-12 bg-navsitu py-8">
      <ul className="flex justify-around">
        <li className="text-white">Inicio</li>
        <li className="text-white">Planeacion municipal</li>
        <li className="text-white">Análisis geográfico</li>
        <li className="text-white">Estadísticas e Indicadores</li>
        <li className="text-white">Consulta documental</li>
      </ul>
    </nav>
  )
}
