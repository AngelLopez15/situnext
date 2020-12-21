import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <footer className="bg-verdef">
        <div className="flex py-8 mx-4 justify-around ">
          <div className="col-span-3 m-6">
            <Image 
              src='/logo_gob_fed.png'
              alt='logo gobierno federal'
              width={454}
              height={126}
            />
          </div>
          
          <div className="col-span-3 m-6">
            <p className="text-white text-2xl font-semibold mb-2">Enlaces</p>
            <ul>
              <li className="text-white">Participa</li>
              <li className="text-white">Datos</li>
              <li className="text-white">Publicaciones oficiales</li>
              <li className="text-white">Portal de obligaciones de transparencia</li>
              <li className="text-white">PNT</li>
              <li className="text-white">INAI</li>
            </ul>
          </div>
          
          <div className="col-span-3 m-6">
            <p className="text-white text-2xl font-semibold mb-2">¿Qué es gob.mx?</p>
            <p className="text-white mb-4">Es el portal único de trámites, información y participación ciudadana. Leer más</p>
            <ul>
              <li className="text-white text-sm">Temas</li>
              <li className="text-white">Declaración de accesibilidad</li>
              <li className="text-white">Aviso de privacidad integral</li>
              <li className="text-white">Aviso de privacidad simplificado</li>
              <li className="text-white">Términos y condiciones</li>
              <li className="text-white">Política de seguridad</li>
              <li className="text-white">Marco jurídico</li>
              <li className="text-white">Mapa de sitio</li>
            </ul>
          </div>
          
          <div className="col-span-3 m-6">
            <p className="text-white text-2xl font-semibold mb-2">Contacto</p>
            <p className="text-white">Dudas e información a controlgestion@sedatu.gob.mx</p>
            <p className="text-white">Síguenos en</p>
            <ul className="flex">
              <li><i className="fab fa-facebook-f text-white mr-5"></i></li>
              <li><i className="fab fa-twitter text-white"></i></li>
            </ul>
          </div>
        </div>
        <Image
        src='/pleca_verde_aguilas.png'
        alt='logo gobierno federal'
        width={1480}
        height={36}
      />
      </footer>
    </>
  )
}
