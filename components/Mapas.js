import Image from 'next/image'

export default function Mapas() {
  return (
    <div className="flex justify-around">
      <Image
        src='/mapa1.jpg'
        alt='mapa sismos 1'
        width={350}
        height={400}
      />
      <Image
        src='/mapa2.jpg'
        alt='mapa sismos 2'
        width={350}
        height={400}
      />
    </div>
  )
}
