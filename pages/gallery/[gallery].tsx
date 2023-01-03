import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'

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
  const router = useRouter()
  const { gallery } = router.query

  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-6xl font-bold'>{gallery}</h1>
      </main>
    </>
  )
}
