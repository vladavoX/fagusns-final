import Image from 'next/image'

import logo from '../public/logo.svg'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-50 w-full flex items-center justify-center gap-10 py-4'>
      <Image
        src={logo}
        alt='FagusNS logo'
        priority
      />
      <p>Copyright © 2021 FagusNS. All rights reserved.</p>
      <p>Website made by Vladimir Aleksic</p>
    </footer>
  )
}

export default Footer
