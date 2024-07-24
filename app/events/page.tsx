'use client'

import axios from 'axios'
import { log } from 'console'
import { register } from 'module'
import Link from 'next/link'
import { cache, useEffect, useState } from 'react'

interface Event {
  eventId: number
  eventName: string
  description: string
  eventDate: string
  location: string
  attendees: number
}

export default function EventPage() {
  const [events, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Function to fetch data
  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await axios.get(
        'https://ems-app-v1.onrender.com/api/events'
      ) // Use relative path for API route
      console.log(response.data)

      setData(response.data)
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [loading])

  return (
    <div className="mx-10">
      <p className="text-4xl m-10 text-center">All Events</p>
      <div className="grid grid-cols-3 gap-6">
        {events.map((event: Event) => (
          <Link
            key={event.eventId}
            href={`events/${event.eventName.replaceAll(' ', '-')}?q=${
              event.eventId
            }`}
          >
            <div
              key={event.eventId}
              className="bg-slate-200 shadow-md rounded-xl p-6 mb-4"
            >
              <div className="w-full flex justify-between">
                <div className="text-2xl font-bold mb-2">{event.eventName}</div>
                <button
                  className={` rounded-lg bg-blue-400 p-1.5 m-1 font-semibold ${
                    event.description === 'Already Registered'
                      ? 'bg-green-500'
                      : 'bg-blue-500'
                  }`}
                >
                  {/* {event.status} */}Already Registered
                </button>
              </div>

              <div className="text-gray-700 mb-4">{event.description}</div>
              <div className="text-gray-600 mb-2">
                <strong>Date:</strong> {event.eventDate}
              </div>
              <div className="text-gray-600">
                <strong>Location:</strong> {event.location}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
