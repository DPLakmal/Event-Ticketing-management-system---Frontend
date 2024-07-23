import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo.png'
import { AmpersandIcon, Menu, User } from 'lucide-react'
import { Button } from '../components/Button'

const PageHeader = () => {
  return (
    <nav className="bg-slate-200 p-1 px-4">
      <div className="flex justify-between items-center gap-10 lg:gap-20">
        <div className="flex items-center gap-4">
          <button className="hover:bg-slate-400 p-4 rounded-full ">
            <Menu />
          </button>
          <Link href={'/'}>
            {/* <Image
              src={logo}
              alt={''}
              className="h-10 w-fit flex flex-shrink-0 rounded-lg"
            /> */}

            <p className="text-2xl text-blue-300">Event Mangement System</p>
          </Link>
        </div>
        <div className="">
          <input
            type="text"
            placeholder="search"
            className="h-10 w-96 p-2 rounded-xl"
          />
        </div>
        <div className="flex flex-row gap-3">
          <Button variant={'ghost'} size={'icon'}>
            <User />
          </Button>
          <Button variant={'ghost'} size={'icon'}>
            <AmpersandIcon />
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default PageHeader

{
  /* 
<li>
          <Link href="/events" className="text-white hover:text-gray-300">
            Viewer for all event
          </Link>
        </li>
        <li>
          <Link href="/admin" className="text-white hover:text-gray-300">
            Admin Panel
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
      </ul> */
}
