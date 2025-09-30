import React, { useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Reservar', href: '/login', current: false },

]

const menu = [
  { name: 'Home', href: '#home', current: false },
  { name: 'Quienes Somos', href: '#about', current: false },
  { name: 'Servicios', href: '#services', current: false },
  { name: 'Opiniones', href: '#opinions', current: false },

]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavbarLogin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-[#014ba0]/30 to-[#000000]/50 z-[1] ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

        
          <div className="flex flex-1 items-center justify-start">
            <div className="flex shrink-0 items-center">
             {/*  <img
                alt="DmServices"
               src="https://www.projekt0708.com/fileadmin/p78-Inhalt/Referenzen/dm/dm-logo-weiss-280.png"
                className="h-8 w-auto"
              /> */}
            </div> <span className="text-white text-xl font-bold"><a href="/">DMSERVICESQRO</a></span>
          </div>
          
          <div className="flex items-center">
            <div className="hidden sm:block mr-6">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-[#ff0080] hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            
            <button className="relative group z-20" onClick={toggleMenu}>
              <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-[#ff0080] hover:ring-2 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  {!isOpen ? (
                    <>
                      <div className="bg-[#ff0080] h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                      <div className="bg-[#ff0080] h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                      <div className="bg-[#ff0080] h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>
                    </>
                  ) : (
                    <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                      <div className="absolute bg-[#ff0080] h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                      <div className="absolute bg-[#ff0080] h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                    </div>
                  )}
                </div>
              </div>
            </button>
          </div>

          <div className={`fixed inset-0 bg-black bg-opacity-90 z-[5] w-screen h-screen flex items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
  <div className="flex flex-col items-center justify-center w-screen h-screen">
    {menu.map((item) => (
      <a
        key={item.name}
        href={item.href}
        onClick={closeMenu}
        className="block text-white text-3xl font-bold py-4 hover:text-[#ff0080] transition-colors text-center w-full"
      >
        {item.name}
      </a>
    ))}
  </div>
</div>


        </div>
      </div>


    </Disclosure>
  )
}

export default NavbarLogin;