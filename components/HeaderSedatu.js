import React from 'react'
import Image from 'next/image'

export default function HeaderSedatu() {
    return (
        <>
            <header className="grid grid-cols-12 gap-4 px-12 py-2 bg-verdef">
                <div className="col-span-6">
                    <Image
                        src='/logo_sedatu.png'
                        alt='logo sedatu'
                        width={250}
                        height={50}
                    />
                </div>
                <div className="col-span-6 flex justify-end items-center">
                    <p className="text-white" >Información importante sobre COVID-19</p>
                    <p className="text-white ml-4" >Trámites</p>
                    <p className="text-white ml-4" >Gobierno</p>
                    <i className="fas fa-search text-white ml-4"></i>
                </div>
            </header>
        </>
    )
}
