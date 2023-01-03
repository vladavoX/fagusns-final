import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'

const Gallery = () => {
  const router = useRouter()
  const { gallery } = router.query

  console.log(gallery)

  return (
    <>
      <Navbar />
      {/* <article>
        <h1>{gallery}</h1>
      </article> */}
    </>
  )
}

export default Gallery
