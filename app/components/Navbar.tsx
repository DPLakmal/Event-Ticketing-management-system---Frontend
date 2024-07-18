import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 justify-center">
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
      </ul>
    </nav>
  )
}

export default Navbar
