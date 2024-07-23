'use client'

import axios from 'axios'
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Event {
  eventId: number
  eventName: string
  description: string
  eventDate: string
  location: string
  attendees: number
}

export default function EventNamePage() {
  const urlParam = useSearchParams()
  const [events, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Function to fetch data
  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await axios.get(
        `https://ems-app-v1.onrender.com/api/events?q=${urlParam}`
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
    console.log(events)
  }, [])

  return (
    <div className="mx-10">
      <p className="text-4xl m-10 text-center">{urlParam}</p>
    </div>
  )
}
