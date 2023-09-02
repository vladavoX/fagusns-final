import Image from 'next/image'

import logo from '../public/logo.svg'

const Footer = () => {
	const year = new Date().getFullYear()
	return (
		<footer className='bg-gray-900 text-gray-400 w-full flex flex-col lg:flex-row items-center justify-center lg:gap-10 gap-2 p-4 text-center text-sm'>
			<Image
				src={logo}
				alt='FagusNS logo'
				priority
			/>
			<p>Copyright © 2022-{year} FagusNS021. All rights reserved.</p>
			<p>Website made by Vladimir Aleksic</p>
		</footer>
	)
}

export default Footer
