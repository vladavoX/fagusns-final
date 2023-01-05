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
        src: '/bathrooms/1.jpeg',
        alt: 'Bathroom 1',
      },
      {
        src: '/bathrooms/2.jpeg',
        alt: 'Bathroom 2',
      },
      {
        src: '/bathrooms/3.jpeg',
        alt: 'Bathroom 3',
      },
      {
        src: '/bathrooms/4.jpeg',
        alt: 'Bathroom 4',
      },
      {
        src: '/bathrooms/5.jpeg',
        alt: 'Bathroom 5',
      },
      {
        src: '/bathrooms/6.jpeg',
        alt: 'Bathroom 6',
      },
      {
        src: '/bathrooms/7.jpeg',
        alt: 'Bathroom 7',
      },
      {
        src: '/bathrooms/8.jpeg',
        alt: 'Bathroom 8',
      },
    ],
  },
  {
    name: 'bedrooms',
    images: [],
  },
]

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { gallery: 'bathrooms' } },
      { params: { gallery: 'bathrooms' }, locale: 'sr' },
      { params: { gallery: 'bedrooms' } },
      { params: { gallery: 'bedrooms' }, locale: 'sr' },
      { params: { gallery: 'closets' } },
      { params: { gallery: 'closets' }, locale: 'sr' },
      { params: { gallery: 'kitchens' } },
      { params: { gallery: 'kitchens' }, locale: 'sr' },
      { params: { gallery: 'living-rooms' } },
      { params: { gallery: 'living-rooms' }, locale: 'sr' },
      { params: { gallery: 'offices' } },
      { params: { gallery: 'offices' }, locale: 'sr' },
    ],
    fallback: false,
  }
}

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      messages: {
        ...require(`../../messages/navbar/${locale}.json`),
      },
    },
  }
}

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')
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
              key={image.src}
              onClick={() => {
                setIsOpen(true)
                setSelectedImage(image.src)
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
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        )}
      </main>
    </>
  )
}
