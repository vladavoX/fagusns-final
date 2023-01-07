import { useTranslations } from 'next-intl'

const Landing = () => {
  const t = useTranslations('landing')
  return (
    <article className="bg-[url('/hero.jpeg')] bg-center bg-no-repeat bg-cover w-full pt-[64px]">
      <div className='bg-black/60 min-h-screen flex flex-col items-center md:items-start justify-center px-4 md:px-20 lg:px-36 gap-4 text-center md:text-left md:w-2/3'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-gray-50 w-3/4 md:w-full xl:w-5/6'>
          {t('title')}
        </h1>
        <p className='text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 text-center md:text-left w-3/4 md:w-full xl:w-5/6'>
          {t('subtitle')}
        </p>
      </div>
    </article>
  )
}

export default Landing
