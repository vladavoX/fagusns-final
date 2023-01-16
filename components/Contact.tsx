import { useTranslations } from 'next-intl'
import { useState } from 'react'

const Contact = () => {
  const t = useTranslations('contact')

  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: any) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const [form, setForm] = useState({
    state: 'idle',
    message: '',
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (inputs.firstname && inputs.email && inputs.subject && inputs.message) {
      setForm({
        state: 'loading',
        message: '',
      })
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        })
        setForm({
          state: 'success',
          message: t('success'),
        })
        setInputs({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
        })
      } catch (error) {
        setForm({
          state: 'error',
          message: t('error'),
        })
      }
    }
  }

  return (
    <article
      id='contact'
      className='min-h-screen w-full flex flex-col items-center lg:items-start justify-center py-8 lg:py-20 px-4 lg:px-20 gap-8'
    >
      <h2 className='uppercase text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>
        {t('title')}
      </h2>
      <form
        className='w-full text-center flex flex-col items-center gap-4'
        onSubmit={handleSubmit}
      >
        <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 xl:gap-8 justify-items-center'>
          <div className='flex flex-col justify-center items-center w-full'>
            <label
              htmlFor='firstname'
              className='block font-medium text-gray-700'
            >
              {t('firstname')}*
            </label>
            <input
              className='mt-1 w-full border-gray-700 border-2 rounded-md py-2 px-3 text-gray-700
            focus:outline-none'
              type='text'
              placeholder={t('firstnamePlaceholder')}
              id='firstname'
              required
              name='firstname'
              value={inputs.firstname}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col justify-center items-center w-full'>
            <label
              htmlFor='lastname'
              className='block font-medium text-gray-700'
            >
              {t('lastname')}
            </label>
            <input
              className='mt-1 w-full border-gray-700 border-2 rounded-md py-2 px-3 text-gray-700 focus:outline-none'
              type='text'
              placeholder={t('lastnamePlaceholder')}
              id='lastname'
              name='lastname'
              value={inputs.lastname}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col justify-center items-center w-full'>
            <label
              htmlFor='email'
              className='block font-medium text-gray-700'
            >
              {t('email')}*
            </label>
            <input
              className='mt-1 w-full border-gray-700 border-2 rounded-md py-2 px-3 text-gray-700 focus:outline-none'
              type='email'
              placeholder={t('emailPlaceholder')}
              id='email'
              required
              name='email'
              value={inputs.email}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col justify-center items-center w-full'>
            <label
              htmlFor='phone'
              className='block font-medium text-gray-700'
            >
              {t('phone')}
            </label>
            <input
              className='mt-1 w-full border-gray-700 border-2 rounded-md py-2 px-3 text-gray-700 focus:outline-none'
              type='phone'
              placeholder={t('phonePlaceholder')}
              id='phone'
              name='phone'
              value={inputs.phone}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col justify-center items-center w-full'>
            <label
              htmlFor='company'
              className='block font-medium text-gray-700'
            >
              {t('company')}
            </label>
            <input
              className='mt-1 w-full border-gray-700 border-2 rounded-md py-2 px-3 text-gray-700 focus:outline-none'
              type='text'
              placeholder={t('companyPlaceholder')}
              id='company'
              name='company'
              value={inputs.company}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col justify-center items-center w-full'>
            <label
              htmlFor='subject'
              className='block font-medium text-gray-700'
            >
              {t('subject')}*
            </label>
            <input
              className='mt-1 w-full border-gray-700 border-2 rounded-md py-2 px-3 text-gray-700 focus:outline-none'
              type='text'
              placeholder={t('subjectPlaceholder')}
              id='subject'
              required
              name='subject'
              value={inputs.subject}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center w-full'>
          <label
            htmlFor='message'
            className='block font-medium text-gray-700'
          >
            {t('message')}*
          </label>
          <textarea
            className='mt-1 w-full h-40 border-gray-700 border-2 rounded-md py-2 px-3 text-gray-700 focus:outline-none'
            placeholder={t('messagePlaceholder')}
            id='message'
            required
            name='message'
            value={inputs.message}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col justify-center items-center w-full'>
          <button
            className='bg-gray-900 text-white font-bold py-2 px-4 rounded-md'
            type='submit'
          >
            {t('submit')}
          </button>
        </div>
      </form>
    </article>
  )
}

export default Contact
