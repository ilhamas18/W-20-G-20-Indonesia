import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: 'Home', title_id: 'Beranda', title_en: 'Home', href_id: '/', href_en:'/', current: false },
  { name: 'About W20', title_id: 'Tentang W20', title_en: 'About W20', href_id: '#about', href_en:'#about', current: false },
  { name: 'Issue', title_id: 'Permasalahan', title_en: 'Issue', href_id: '#issues', href_en:'#issues', current: false },
  { name: 'Timeline', title_id: 'Lini Waktu', title_en: 'Timeline', href_id: '#timeline', href_en:'#timeline', current: false },
  { name: 'Committee', title_id: 'Komite', title_en: 'Committee', href_id: '#committee', href_en:'#committee', current: false },
  { name: 'Contact Us', title_id: 'Hubungi Kami', title_en: 'Contact Us', href_id: '#contactus', href_en:'#contactus', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function Header() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  return (
    <>      
    <header className="relative">
      <Disclosure as="nav" className="w-full bg-white fixed z-10">
        {({ open }) => (
          <>
            <div className="container mx-auto">
              <div className="relative flex items-center justify-between h-24">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-start md:justify-center h-24 px-4">
                  {/* Logo */}
                  <div className="flex-shrink-0 flex items-center">
                    {/* <Image className="block lg:hidden"
                      src="/logo-w20.png"
                      alt="Logo W20 Indonesia"
                      width={100}
                      height={75}
                    />
                    <Image className="hidden lg:block"
                      src="/logo-w20.png"
                      alt="Logo W20 Indonesia"
                      width={200}
                      height={100}
                    /> */}
                    <Link href='/'
                          locale={locale == "en" ? "en" : "id"}>
                        <a className='flex flex-row items-center'>
                          <img
                            className="block lg:hidden h-12 w-20 mr-4"
                            src="/logo-w20-resize.png"
                            alt="Workflow"
                          />
                          <img
                            className="hidden lg:block h-12 w-20 mr-4"
                            src="/logo-w20-resize.png"
                            alt="Workflow"
                          />
                          <img
                            className="block lg:hidden h-16 w-20"
                            src="/logo-g20-new.png"
                            alt="Workflow"
                          />
                          <img
                            className="hidden lg:block h-16 w-20"
                            src="/logo-g20-new.png"
                            alt="Workflow"
                          />
                        </a>
                        
                    </Link>
                  </div>
                  {/* List Menu */}
                  <div className="hidden sm:block sm:ml-6 w-full">
                    <div className="flex flex-row justify-end items-center h-24 space-x-4 uppercase tracking-widest font-Roboto">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={ locale == 'en' ? item.href_en : item.href_id}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-black hover:underline hover:underline-offset-8',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          { locale == 'en' ? item.title_en : item.title_id}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block absolute inset-y-0 left-0 flex items-center px-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      {/* <a href="#" className="flex flex-row items-center">
                        <img className="w-5 h-3 mr-1" src="/en_US.png"></img>
                        <div>EN</div>
                      </a> */}
                      {/* <a href="#" className="flex flex-row items-center">
                        <img className="w-5 h-3 mr-1" src="/id_ID.png"></img>
                        <div>ID</div>
                      </a> */}
                      <Link
                          href={asPath}
                          locale={locale == "en" ? "id" : "en"}
                      >
                        <a className="flex flex-row items-center text-sm uppercase tracking-widest font-Roboto border rounded border-black py-2 px-4">
                          {/* <img className="w-5 h-3 mr-1" src={ locale == 'en' ? "/id_ID.png" : "/en_US.png"}></img> */}
                          <div className=''>{ locale == 'en' ? "BAHASA" : "ENGLISH"}</div>
                        </a>
                      </Link>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 font-Roboto uppercase tracking-widest">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={ locale == 'en' ? item.href_en : item.href_id}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-black text-center hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium text-center'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    { locale == 'en' ? item.title_en : item.title_id}
                  </Disclosure.Button>
                ))}
              </div>
                  <Link
                          href={asPath}
                          locale={locale == "en" ? "id" : "en"}
                      >
                        <a className="flex flex-row items-center text-sm uppercase tracking-widest font-Roboto justify-center mb-4">
                          {/* <img className="w-5 h-3 mr-1" src={ locale == 'en' ? "/id_ID.png" : "/en_US.png"}></img> */}
                          <div className='text-center border rounded border-black py-2 px-4'>{ locale == 'en' ? "BAHASA" : "ENGLISH"}</div>
                        </a>
                      </Link>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
    </>
  )
}

export default Header