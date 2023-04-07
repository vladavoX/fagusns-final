import Image from 'next/image'
import { AiOutlineClose, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

interface Props {
  setIsOpen: (isOpen: boolean) => void
  src: string
  selectedImage: number
  setSelectedImage: (selectedImage: number) => void
  images:
    | {
        id: number
        src: string
        alt: string
      }[]
    | undefined
}

const ImageModal = ({ setIsOpen, images, src, selectedImage, setSelectedImage }: Props) => {
  return (
    <div
      className='
          fixed
          top-1/2
          left-1/2
          transform
          -translate-x-1/2
          -translate-y-1/2
          w-full
          h-full
          mt-[64px]
          md:mt-0
          md:w-3/4
          md:h-3/4
          md:rounded-2xl
          bg-gray-900
          overflow-hidden
          md:shadow-2xl
          md:shadow-black
          z-20
        '
    >
      <Image
        src={src}
        alt='Bathroom 1'
        fill
        className='object-contain'
      />
      <AiOutlineClose
        className='
          absolute
          top-10
          right-10
          text-3xl
          text-white
          cursor-pointer
        '
        onClick={() => {
          setIsOpen(false)
          setSelectedImage(0)
        }}
      />
      <AiOutlineArrowLeft
        className={`
          absolute
          top-1/2
          left-10
          text-3xl
          ${selectedImage === 1 ? 'text-gray-500' : 'text-white'}
          cursor-pointer
        `}
        onClick={() => {
          if (selectedImage === 1) return
          setSelectedImage(selectedImage - 1)
        }}
      />
      <AiOutlineArrowRight
        className={`
          absolute
          top-1/2
          right-10
          text-3xl
          ${selectedImage === images?.length ? 'text-gray-500' : 'text-white'}
          cursor-pointer
        `}
        onClick={() => {
          if (selectedImage === images?.length) return
          setSelectedImage(selectedImage + 1)
        }}
      />
    </div>
  )
}

export default ImageModal
