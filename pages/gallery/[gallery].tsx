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
			},
			{
				id: 9,
				src: '/bathrooms/9.jpg',
				alt: 'Bathroom 9'
			},
			{
				id: 10,
				src: '/bathrooms/10.jpg',
				alt: 'Bathroom 10'
			},
			{
				id: 11,
				src: '/bathrooms/11.jpg',
				alt: 'Bathroom 11'
			}
		]
	},
	{
		name: 'bedrooms',
		images: [
			{
				id: 1,
				src: '/bedrooms/1.jpeg',
				alt: 'Bedroom 1'
			},
			{
				id: 2,
				src: '/bedrooms/2.jpeg',
				alt: 'Bedroom 2'
			},
			{
				id: 3,
				src: '/bedrooms/3.jpeg',
				alt: 'Bedroom 3'
			},
			{
				id: 4,
				src: '/bedrooms/4.jpeg',
				alt: 'Bedroom 4'
			},
			{
				id: 5,
				src: '/bedrooms/5.jpeg',
				alt: 'Bedroom 5'
			},
			{
				id: 7,
				src: '/bedrooms/7.jpeg',
				alt: 'Bedroom 7'
			},
			{
				id: 8,
				src: '/bedrooms/8.jpeg',
				alt: 'Bedroom 8'
			},
			{
				id: 9,
				src: '/bedrooms/9.jpeg',
				alt: 'Bedroom 9'
			},
			{
				id: 10,
				src: '/bedrooms/10.jpeg',
				alt: 'Bedroom 10'
			},
			{
				id: 11,
				src: '/bedrooms/11.jpeg',
				alt: 'Bedroom 11'
			},
			{
				id: 12,
				src: '/bedrooms/12.jpeg',
				alt: 'Bedroom 12'
			},
			{
				id: 13,
				src: '/bedrooms/13.jpeg',
				alt: 'Bedroom 13'
			},
			{
				id: 14,
				src: '/bedrooms/14.jpeg',
				alt: 'Bedroom 14'
			},
			{
				id: 15,
				src: '/bedrooms/15.jpeg',
				alt: 'Bedroom 15'
			},
			{
				id: 16,
				src: '/bedrooms/16.jpeg',
				alt: 'Bedroom 16'
			},
			{
				id: 17,
				src: '/bedrooms/17.jpeg',
				alt: 'Bedroom 17'
			},
			{
				id: 18,
				src: '/bedrooms/18.jpeg',
				alt: 'Bedroom 18'
			},
			{
				id: 19,
				src: '/bedrooms/19.jpeg',
				alt: 'Bedroom 19'
			},
			{
				id: 20,
				src: '/bedrooms/20.jpg',
				alt: 'Bedroom 20'
			}
		]
	},
	{
		name: 'living-rooms',
		images: [
			{
				id: 1,
				src: '/living-rooms/1.jpeg',
				alt: 'Living room 1'
			},
			{
				id: 2,
				src: '/living-rooms/2.jpeg',
				alt: 'Living room 2'
			},
			{
				id: 3,
				src: '/living-rooms/3.jpg',
				alt: 'Living room 3'
			},
			{
				id: 4,
				src: '/living-rooms/4.jpg',
				alt: 'Living room 4'
			},
			{
				id: 5,
				src: '/living-rooms/5.jpg',
				alt: 'Living room 5'
			},
			{
				id: 6,
				src: '/living-rooms/6.jpg',
				alt: 'Living room 6'
			},
			{
				id: 7,
				src: '/living-rooms/7.jpg',
				alt: 'Living room 7'
			}
		]
	},
	{
		name: 'kitchens',
		images: [
			{
				id: 1,
				src: '/kitchens/1.jpeg',
				alt: 'Kitchen 1'
			},
			{
				id: 2,
				src: '/kitchens/2.jpeg',
				alt: 'Kitchen 2'
			},
			{
				id: 3,
				src: '/kitchens/3.jpeg',
				alt: 'Kitchen 3'
			},
			{
				id: 4,
				src: '/kitchens/4.jpeg',
				alt: 'Kitchen 4'
			},
			{
				id: 5,
				src: '/kitchens/5.jpeg',
				alt: 'Kitchen 5'
			},
			{
				id: 6,
				src: '/kitchens/6.jpeg',
				alt: 'Kitchen 6'
			},
			{
				id: 7,
				src: '/kitchens/7.jpeg',
				alt: 'Kitchen 7'
			},
			{
				id: 8,
				src: '/kitchens/8.jpeg',
				alt: 'Kitchen 8'
			},
			{
				id: 9,
				src: '/kitchens/9.jpeg',
				alt: 'Kitchen 9'
			},
			{
				id: 10,
				src: '/kitchens/10.jpeg',
				alt: 'Kitchen 10'
			},
			{
				id: 11,
				src: '/kitchens/11.jpeg',
				alt: 'Kitchen 11'
			},
			{
				id: 12,
				src: '/kitchens/12.jpeg',
				alt: 'Kitchen 12'
			},
			{
				id: 13,
				src: '/kitchens/13.jpeg',
				alt: 'Kitchen 13'
			},
			{
				id: 14,
				src: '/kitchens/14.jpeg',
				alt: 'Kitchen 14'
			},
			{
				id: 15,
				src: '/kitchens/15.jpeg',
				alt: 'Kitchen 15'
			},
			{
				id: 16,
				src: '/kitchens/16.jpeg',
				alt: 'Kitchen 16'
			},
			{
				id: 17,
				src: '/kitchens/17.jpeg',
				alt: 'Kitchen 17'
			},
			{
				id: 18,
				src: '/kitchens/18.jpeg',
				alt: 'Kitchen 18'
			},
			{
				id: 19,
				src: '/kitchens/19.jpg',
				alt: 'Kitchen 19'
			},
			{
				id: 20,
				src: '/kitchens/20.jpg',
				alt: 'Kitchen 20'
			},
			{
				id: 21,
				src: '/kitchens/21.jpg',
				alt: 'Kitchen 21'
			},
			{
				id: 22,
				src: '/kitchens/22.jpg',
				alt: 'Kitchen 22'
			},
			{
				id: 23,
				src: '/kitchens/23.jpg',
				alt: 'Kitchen 23'
			},
			{
				id: 24,
				src: '/kitchens/24.jpg',
				alt: 'Kitchen 24'
			}
		]
	},
	{
		name: 'offices',
		images: [
			{
				id: 1,
				src: '/offices/1.jpeg',
				alt: 'Office 1'
			},
			{
				id: 2,
				src: '/offices/2.jpeg',
				alt: 'Office 2'
			},
			{
				id: 3,
				src: '/offices/3.jpeg',
				alt: 'Office 3'
			},
			{
				id: 4,
				src: '/offices/4.jpeg',
				alt: 'Office 4'
			},
			{
				id: 5,
				src: '/offices/5.jpeg',
				alt: 'Office 5'
			},
			{
				id: 6,
				src: '/offices/6.jpeg',
				alt: 'Office 6'
			},
			{
				id: 7,
				src: '/offices/7.jpeg',
				alt: 'Office 7'
			},
			{
				id: 8,
				src: '/offices/8.jpeg',
				alt: 'Office 8'
			},
			{
				id: 9,
				src: '/offices/9.jpeg',
				alt: 'Office 9'
			},
			{
				id: 10,
				src: '/offices/10.jpeg',
				alt: 'Office 10'
			},
			{
				id: 11,
				src: '/offices/11.jpeg',
				alt: 'Office 11'
			},
			{
				id: 12,
				src: '/offices/12.jpeg',
				alt: 'Office 12'
			}
		]
	},
	{
		name: 'closets',
		images: [
			{
				id: 1,
				src: '/closets/1.jpeg',
				alt: 'Closet 1'
			},
			{
				id: 2,
				src: '/closets/2.jpeg',
				alt: 'Closet 2'
			},
			{
				id: 3,
				src: '/closets/3.jpeg',
				alt: 'Closet 3'
			},
			{
				id: 4,
				src: '/closets/4.jpg',
				alt: 'Closet 4'
			},
			{
				id: 5,
				src: '/closets/5.jpg',
				alt: 'Closet 5'
			},
			{
				id: 6,
				src: '/closets/6.jpg',
				alt: 'Closet 6'
			},
			{
				id: 7,
				src: '/closets/7.jpg',
				alt: 'Closet 7'
			}
		]
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
	let images = galleryImages.find(item => item.name === gallery)

	return (
		<>
			<Navbar />
			<main className='flex flex-col items-center justify-center min-h-screen bg-gray-200 px-8 md:px-20 py-16 pt-[128px]'>
				<div
					className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full
          ${isOpen ? 'filter blur-sm pointer-events-none' : ''}

        `}
				>
					{images?.images.map(image => (
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
