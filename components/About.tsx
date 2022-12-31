import { useTranslations } from 'next-intl'

const About = () => {
  const t = useTranslations('about')

  return (
    <article className='min-h-screen w-full bg-black flex flex-col items-center justify-center text-gray-200 px-8 sm:px-20 lg:px-32 gap-4 text-center font-semibold'>
      <h2 className='text-xl md:text-2xl lg:text-3xl'>{t('descOne')}</h2>
      <h2 className='text-xl md:text-2xl lg:text-3xl'>{t('descTwo')}</h2>
    </article>
  )
}

export default About
