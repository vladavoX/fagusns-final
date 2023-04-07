import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import Image from 'next/image'
import ImageModal from '../../components/ImageModal'
import { useState } from 'react'

const galleryImages = [
  {
    name: 'bathrooms',
    images: [
      {
        id: 1,
        src: '/bathrooms/1.jpeg',
        alt: 'Bathroom 1'
      },
      {
        id: 2,
        src: '/bathrooms/2.jpeg',
        alt: 'Bathroom 2'
      },
      {
        id: 3,
        src: '/bathrooms/3.jpeg',
        alt: 'Bathroom 3'
      },
      {
        id: 4,
        src: '/bathrooms/4.jpeg',
        alt: 'Bathroom 4'
      },
      {
        id: 5,
        src: '/bathrooms/5.jpeg',
        alt: 'Bathroom 5'
      },
      {
        id: 6,
        src: '/bathrooms/6.jpeg',
        alt: 'Bathroom 6'
      },
      {
        id: 7,
        src: '/bathrooms/7.jpeg',
        alt: 'Bathroom 7'
      },
      {
        id: 8,
        src: '/bathrooms/8.jpeg',
        alt: 'Bathroom 8'
      }
    ]
  },
  {
    name: 'bedrooms',
    images: []
  }
]

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { gallery: 'bathrooms' }, locale: 'en' },
      { params: { gallery: 'bathrooms' }, locale: 'sr' },
      { params: { gallery: 'bathrooms' }, locale: 'ru' },
      { params: { gallery: 'bedrooms' }, locale: 'en' },
      { params: { gallery: 'bedrooms' }, locale: 'sr' },
      { params: { gallery: 'bedrooms' }, locale: 'ru' },
      { params: { gallery: 'closets' }, locale: 'en' },
      { params: { gallery: 'closets' }, locale: 'sr' },
      { params: { gallery: 'closets' }, locale: 'ru' },
      { params: { gallery: 'kitchens' }, locale: 'en' },
      { params: { gallery: 'kitchens' }, locale: 'sr' },
      { params: { gallery: 'kitchens' }, locale: 'ru' },
      { params: { gallery: 'living-rooms' }, locale: 'en' },
      { params: { gallery: 'living-rooms' }, locale: 'sr' },
      { params: { gallery: 'living-rooms' }, locale: 'ru' },
      { params: { gallery: 'offices' }, locale: 'en' },
      { params: { gallery: 'offices' }, locale: 'sr' },
      { params: { gallery: 'offices' }, locale: 'ru' }
    ],
    fallback: false
  }
}

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      messages: {
        ...require(`../../messages/navbar/${locale}.json`)
      }
    }
  }
}

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const router = useRouter()
  const { gallery } = router.query
  let images = galleryImages.find((item) => item.name === gallery)

  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center justify-center min-h-screen bg-gray-200 px-8 md:px-20 py-16 pt-[128px]'>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full
          ${isOpen ? 'filter blur-sm pointer-events-none' : ''}

        `}
        >
          {images?.images.map((image) => (
            <div
              className='relative w-full h-96 rounded-md overflow-hidden shadow-lg shadow-black
              hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer
              '
              key={image.id}
              onClick={() => {
                setIsOpen(true)
                setSelectedImage(image.id)
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className='object-cover'
                sizes='100%'
                loading='lazy'
              />
            </div>
          ))}
        </div>
        {isOpen && (
          <ImageModal
            setIsOpen={setIsOpen}
            images={images?.images}
            src={images?.images[selectedImage - 1].src as string}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </main>
    </>
  )
}
