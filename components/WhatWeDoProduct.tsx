import Image from 'next/image'
import Link from 'next/link'

interface Props {
  product: {
    title: string
    href: string
    image: string
    imageAlt: string
  }
  t: any
}

const WhatWeDoProduct = ({ product, t }: Props) => {
  return (
    <div className='flex items-end justify-center w-full h-[500px] relative group cursor-pointer'>
      <Image
        style={{ objectFit: 'cover' }}
        fill
        sizes='(max-width: 640px) 100vw, 640px'
        src={product.image}
        alt={product.imageAlt}
      />
      <Link
        href={`/gallery${product.href}`}
        className='transition-all h-16 group-hover:h-full text-xl flex justify-center items-center font-semibold uppercase absolute bg-gray-800 bg-opacity-80 text-gray-50 w-full'
      >
        {t(`${product.title}`)}
      </Link>
    </div>
  )
}

export default WhatWeDoProduct
