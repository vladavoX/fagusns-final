import { useTranslations } from 'next-intl'
import WhatWeDoProduct from './WhatWeDoProduct'

const products = [
  {
    title: 'Bathroom',
    href: '/bathroom',
    image: '/bathroom.jpeg',
    imageAlt: 'Bathroom',
  },
  {
    title: 'Bedroom',
    href: '/bedroom',
    image: '/bedroom.jpeg',
    imageAlt: 'Bedroom',
  },
  // {
  //   title: 'Bedroom door',
  //   href: '/bedroom-door',
  //   image: '/bedroom-door.jpeg',
  //   imageAlt: 'Bedroom door',
  // },
  {
    title: 'Closet',
    href: '/closet',
    image: '/closet.jpg',
    imageAlt: 'Closet',
  },
  {
    title: 'Kitchen',
    href: '/kitchen',
    image: '/kitchen.jpeg',
    imageAlt: 'Kitchen',
  },
  {
    title: 'LivingRoom',
    href: '/living-room',
    image: '/living-room.jpeg',
    imageAlt: 'Living Room',
  },
  {
    title: 'Office',
    href: '/office',
    image: '/office.jpeg',
    imageAlt: 'Office',
  },
]

const WhatWeDo = () => {
  const t = useTranslations('what-we-do')
  return (
    <article className='min-h-screen w-full flex flex-col items-center lg:items-start justify-center pt-8 lg:pt-20 lg:pb-20 md:px-4 lg:px-20 gap-8 bg-gray-100'>
      <h2 className='uppercase text-3xl md:text-4xl lg:text-5xl font-bold'>
        {t('title')}
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-4 xl:gap-8 w-full justify-items-center'>
        {products.map((product) => (
          <WhatWeDoProduct
            key={product.title}
            product={product}
            t={t}
          />
        ))}
      </div>
    </article>
  )
}

export default WhatWeDo
