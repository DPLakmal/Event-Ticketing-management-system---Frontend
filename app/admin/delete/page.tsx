'use client'

import { Button } from '@/app/components/Button'
import axios from 'axios'
import { log } from 'console'
import { Delete, DeleteIcon, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Event {
  eventId: number
  eventName: string
  description: string
  eventDate: string
  location: string
  attendees: number
}

export default function DeleteEventPage() {
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

  const deleteEvent = async (id: number) => {
    try {
      const response = await axios.delete(
        `https://ems-app-v1.onrender.com/api/events/${id}`
      ) // Use relative path for API route
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  function handleDelete(id: number) {
    deleteEvent(id)
  }

  return (
    <div className=" bg-slate-100 p-6 rounded-xl">
      <p className="text-3xl m-5">Delete Event</p>
      <div className="grid grid-cols-2 gap-3">
        {events.map((event: Event) => (
          <div
            key={event.eventId}
            className="bg-slate-200 shadow-md rounded-xl p-6 mb-4"
          >
            <div className="w-full flex justify-between">
              <div className="text-2xl font-bold mb-2">{event.eventName}</div>

              <Button
                variant={'dark'}
                size={'icon'}
                onClick={() => handleDelete(event.eventId)}
                className={`rounded-lg bg-red-400 p-2 m-1 text-md font-semibold`}
              >
                <Trash2 />
              </Button>
            </div>

            <div className="text-gray-700 mb-4">{event.description}</div>
            <div className="text-gray-600 mb-2">
              <strong>Date:</strong> {event.eventDate}
            </div>
            <div className="text-gray-600">
              <strong>Location:</strong> {event.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
