import EventPage from '../events/page'

export default function Page() {
  return (
    <div className="m-10">
      <div className=" flex justify-center flex-col w-full">
        <div className="flex items-center justify-evenly bg-slate-600 shadow-md rounded-xl p-6 mb-4">
          <p className="text-4xl">Add Event</p>
          <button className="text-center text-6xl rounded-xl bg-neutral-100 p-2 px-4 ">
            +
          </button>
        </div>
        <EventPage />
      </div>
    </div>
  )
}
