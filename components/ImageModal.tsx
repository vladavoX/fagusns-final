import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'

interface Props {
  setIsOpen: (isOpen: boolean) => void
  selectedImage: string
  setSelectedImage: (selectedImage: string) => void
}

const ImageModal = ({ setIsOpen, selectedImage, setSelectedImage }: Props) => {
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
        src={selectedImage}
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
          setSelectedImage('')
        }}
      />
    </div>
  )
}

export default ImageModal
