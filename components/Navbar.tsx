import { Disclosure } from '@headlessui/react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useTranslations } from 'next-intl'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import LocaleSwitcher from './LocaleSwitcher'
import logo from '../public/logo.svg'

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'WhatWeDo', path: '/#what-we-do' },
  { name: 'OurWork', path: '/#our-work' },
  { name: 'Contact', path: '/#contact' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const t = useTranslations('navbar')
  return (
    <Disclosure
      as='nav'
      className='bg-gray-800 fixed left-0 right-0 top-0 z-50'
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <AiOutlineClose
                      className='block h-6 w-6'
                      aria-hidden='true'
                    />
                  ) : (
                    <AiOutlineMenu
                      className='block h-6 w-6'
                      aria-hidden='true'
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-between'>
                <div className='flex flex-shrink-0 items-center'>
                  <Link
                    href='/'
                    className='h-8 w-20 relative block lg:hidden'
                  >
                    <Image
                      fill
                      src={logo}
                      alt='FagusNS logo'
                      priority
                    />
                  </Link>

                  <Link
                    href='/'
                    className='h-8 w-20 relative hidden lg:block'
                  >
                    <Image
                      fill
                      src={logo}
                      alt='FagusNS logo'
                      priority
                    />
                  </Link>
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-1 md:space-x-4'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className={classNames(
                          'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                      >
                        {t(`${item.name}`)}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  <LocaleSwitcher />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.path}
                  className={classNames(
                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                >
                  {t(`${item.name}`)}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
