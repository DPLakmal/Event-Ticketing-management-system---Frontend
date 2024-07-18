'use client'
import Link from 'next/link'
import { useState } from 'react'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const hrefggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex flex-col">
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out bg-gray-800 w-64 p-4`}
      >
        <button
          onClick={hrefggleSidebar}
          className="text-white focus:outline-none bg-slate-300"
        >
          Close
        </button>
        <ul className="mt-8 space-y-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Events
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-white hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-grow p-4">
        <button
          onClick={hrefggleSidebar}
          className="text-gray-800 focus:outline-none md:hidden"
        >
          Menu
        </button>
        <div className="hidden md:block">
          Sidebar Content (e.g., page content here)
        </div>
      </div>
    </div>
  )
}

export default Sidebar
