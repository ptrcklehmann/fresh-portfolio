import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import ActiveLink from './active-link'
import logo from '../public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Works', href: '/works', current: false },
  { name: 'Contact', href: '/contact', current: false },
]
export default function Navbar() {
  const staticlLoader = () => {
    return `${logo.href}?w=${75}&q=${75}`
  }
  return (
    <Disclosure as='nav'>
      {({ open }) => (
        <>
          <div className='px-2 mx-auto mt-5 max-w-7xl sm:px-6 lg:px-5'>
            <div className='relative flex items-end justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block w-6 h-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block w-6 h-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex items-end justify-center flex-1 sm:items-stretch sm:justify-between'>
                <div className='flex items-end flex-shrink-0'>
                  <Link href='/'>
                    <a href='/' alt='Home' className='p-0 m-0 leading-none'>
                      <Image
                        src='/images/logo.svg'
                        width={50}
                        height={50}
                        layout='intrinsic'
                        alt='ptrcklehmann.com'
                        className='hidden w-auto h-8 mr-auto lg:block'
                      />
                    </a>
                  </Link>
                </div>
                <div className='self-end hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <ActiveLink
                        href={item.href}
                        activeClassName='transition-all rounded-md bg-gradient-to-t from-accent-7 via-accent-8 to-accent-9'
                        className='text-white transition-all rounded-md bg-gradient-to-t from-accent-7 via-accent-8 to-accent-9 hover:bg-accent-2 hover:text-type-1'
                      >
                        <a
                          key={item.name}
                          href={item.href}
                          className='px-3 py-2 text-sm font-medium rounded-md'
                        >
                          {item.name}
                        </a>
                      </ActiveLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <ActiveLink
                  activeClassName='bg-gray-900 text-white'
                  href={item.href}
                  className='px-3 py-2 text-sm font-medium text-transparent transition-all rounded-md bg-clip-text bg-gradient-to-t from-accent-7 via-accent-8 to-accent-9 hover:bg-accent-2 hover:text-type-1'
                >
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className='px-3 py-2 text-sm font-medium rounded-md'
                  >
                    {item.name}
                  </Disclosure.Button>
                </ActiveLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
