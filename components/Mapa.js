import Image from 'next/image'

export default function Mapa() {
  return (
    <Image 
      src='/sismos.jpg'
      alt='mapa sismos'
      width={600}
      height={400}
    />
  )
}
