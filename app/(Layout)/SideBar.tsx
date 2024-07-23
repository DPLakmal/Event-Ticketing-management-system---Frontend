import {
  CalendarCog,
  CalendarDays,
  CalendarPlus2,
  CalendarX,
  Home,
} from 'lucide-react'
import Link from 'next/link'
import { ElementType } from 'react'
import { Button } from '../components/Button'

export default function SideBar() {
  return (
    <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1">
      <SmallSideBarSection
        Icon={CalendarDays}
        title={'All \nEvents'}
        url={'/events'}
      />
      <SmallSideBarSection
        Icon={CalendarPlus2}
        title={'Add\n Event'}
        url={'/admin'}
      />
      <SmallSideBarSection
        Icon={CalendarCog}
        title={'Update\n Event'}
        url={'/admin/update'}
      />
      <SmallSideBarSection
        Icon={CalendarX}
        title={'Delete\n Event'}
        url={'/admin/delete'}
      />
    </aside>
  )
}

type SmallSideBarSectionPros = {
  Icon: ElementType
  title: string
  url: string
}

function SmallSideBarSection({ Icon, title, url }: SmallSideBarSectionPros) {
  return (
    <Link href={url}>
      <Button
        variant={'ghost'}
        className="flex flex-col items-center justify-center  rounded p-4 m-1"
      >
        <Icon className="w-6 h-6" />
        <div className="whitespace-break-spaces text-sm text-center">
          {title}
        </div>
      </Button>
    </Link>
  )
}
