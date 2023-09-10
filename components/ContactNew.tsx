import { useTranslations } from 'next-intl'
import { AiFillPhone } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const ContactNew = () => {
	const t = useTranslations('contact')

	return (
		<article
			id='contact'
			className='w-full flex flex-col items-center md:items-start justify-center py-8 lg:py-20 px-4 lg:px-20 gap-8 text-center md:text-left'
		>
			<h2 className='uppercase text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>{t('title')}</h2>
			<div className='flex flex-col md:flex-row w-full justify-between gap-y-4'>
				<div className='flex flex-col gap-4 items-center md:items-start'>
					<h4 className='text-2xl'>{t('phone')}</h4>
					<div>
						<p className='flex items-center gap-4 text-lg'>
							<AiFillPhone />
							065 920 75 42
						</p>
						<p className='flex items-center gap-4 text-lg'>
							<AiFillPhone />
							064 221 64 25
						</p>
					</div>
				</div>
				<div className='flex flex-col gap-4 items-center md:items-start'>
					<h4 className='text-2xl'>{t('user')}</h4>
					<div>
						<p className='flex items-center gap-4 text-lg'>
							<FaUserAlt />
							{t('user_one')}
						</p>
						<p className='flex items-center gap-4 text-lg'>
							<FaUserAlt />
							{t('user_two')}
						</p>
					</div>
				</div>
				<div className='flex flex-col gap-4 items-center md:items-start'>
					<h4 className='text-2xl'>{t('email')}</h4>
					<div>
						<p className='flex items-center gap-4 text-lg'>
							<MdEmail />
							fagusns021@gmail.com
						</p>
					</div>
				</div>
			</div>
		</article>
	)
}

export default ContactNew
