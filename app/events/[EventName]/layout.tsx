import { Button } from '@/app/components/Button'
import { ArrowLeft, ArrowLeftRight } from 'lucide-react'
import Link from 'next/link'

export default function EventNamePageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Link href={'/events'}>
        <Button>
          <ArrowLeft />
        </Button>
      </Link>
      <div className=" ">{children}</div>
    </div>
  )
}
