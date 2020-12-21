import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <>
      <header className="grid grid-cols-12 gap-4 px-12 py-8 bg-verdef">
        <div  className="col-span-6">
          <Image
            src='/logo_sedatu.png'
            alt='logo sedatu'
            width={407}
            height={93}
          />
        </div>
        <div className="col-span-6 flex justify-end items-center">
          <p className="text-white" >Trámites</p>
          <p className="text-white ml-4" >Gobierno</p>
          <i className="fas fa-search text-white ml-4"></i>
        </div>
      </header>
      <div className="col-span-12 bg-verdec p-8"></div>
    </>
  )
}
