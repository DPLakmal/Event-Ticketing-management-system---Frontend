import EventPage from '../events/page'
import AddEvent from './addEvent'
import DeleteEventPage from './delete/page'

export default function Page() {
  return (
    <div className="m-10">
      <div className=" flex justify-center  w-full">
        <div className="flex  flex-col-2 gap-x-40   rounded-xl p-6 mb-4">
          <AddEvent />
          <EventPage />
        </div>
      </div>
    </div>
  )
}
