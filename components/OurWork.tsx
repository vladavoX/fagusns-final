import { useTranslations } from 'next-intl'
import Image from 'next/image'

const projects = [
  {
    title: 'project1.title',
    description: 'project1.description',
    image: 'project1.image',
  },
  {
    title: 'project2.title',
    description: 'project2.description',
    image: 'project2.image',
  },
  {
    title: 'project3.title',
    description: 'project3.description',
    image: 'project3.image',
  },
]

const OurWork = () => {
  const t = useTranslations('our-work')
  return (
    <article
      id='our-work'
      className='bg-gray-900 min-h-screen w-full flex flex-col items-center lg:items-start justify-center pt-8 lg:pt-20 lg:pb-20 md:px-4 lg:px-20 gap-8'
    >
      <h2 className='uppercase text-3xl md:text-4xl lg:text-5xl font-bold text-gray-50 text-center lg:text-left w-80'>
        {t('title')}
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col gap-4 w-full h-full'
          >
            <div className='h-96 w-full relative'>
              <Image
                src={t(`${project.image}`)}
                alt={t(`${project.title}`)}
                fill
                className='rounded-lg object-cover'
                loading='lazy'
                sizes='(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, (max-width: 1536px) 1536px, 1920px'
              />
            </div>
            <h3 className='text-xl font-bold text-gray-50'>
              {t(`${project.title}`)}
            </h3>
            <p className='text-gray-50'>{t(`${project.description}`)}</p>
          </div>
        ))}
      </div>
    </article>
  )
}

export default OurWork
