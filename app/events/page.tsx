import { register } from 'module'
import Link from 'next/link'

const events = [
  {
    id: 1,
    name: 'Tech Conference 2024',
    describe: 'A conference about the latest in technology and innovation.',
    date: '2024-07-19',
    location: '123 Silicon Valley, CA',
    status: 'Already Registered',
  },
  {
    id: 2,
    name: 'Music Festival 2024',
    describe: 'An annual festival featuring popular music artists and bands.',
    date: '2024-08-01',
    location: '456 Sunset Blvd, Los Angeles, CA',
    status: 'Register to Attend',
  },
  {
    id: 3,
    name: 'Art Expo 2024',
    describe:
      'An exhibition showcasing contemporary art from around the world.',
    date: '2024-09-15',
    location: '789 Art St, New York, NY',
    status: 'Register to Attend',
  },
  {
    id: 4,
    name: 'Startup Pitch Night',
    describe:
      'An event where startups pitch their ideas to potential investors.',
    date: '2024-10-05',
    location: '101 Entrepreneur Rd, San Francisco, CA',
    status: 'Register to Attend',
  },
  {
    id: 5,
    name: 'Culinary Fair 2024',
    describe:
      'A fair celebrating diverse culinary traditions and food innovations.',
    date: '2024-11-10',
    location: '234 Gourmet Ave, Chicago, IL',
    status: 'Register to Attend',
  },
]

export default function EventPage() {
  return (
    <div className="">
      <p className="text-3xl m-5">All Events</p>
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-slate-200 shadow-md rounded-xl p-6 mb-4"
        >
          <div className="w-full flex justify-between">
            <div className="text-2xl font-bold mb-2">{event.name}</div>
            <Link href={'events/' + event.name}>
              <button
                className={` rounded-lg bg-blue-400 p-2 m-1 text-md font-semibold ${
                  event.status === 'Already Registered'
                    ? 'bg-green-500'
                    : 'bg-blue-500'
                }`}
              >
                {event.status}
              </button>
            </Link>
          </div>

          <div className="text-gray-700 mb-4">{event.describe}</div>
          <div className="text-gray-600 mb-2">
            <strong>Date:</strong> {event.date}
          </div>
          <div className="text-gray-600">
            <strong>Location:</strong> {event.location}
          </div>
        </div>
      ))}
    </div>
  )
}
