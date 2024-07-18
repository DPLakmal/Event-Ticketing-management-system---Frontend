import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function EventPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar />
      {/* <Sidebar /> */}
      <main className="flex m-10 justify-center w-screen h-screen ">
        {children}
      </main>
    </div>
  )
}
