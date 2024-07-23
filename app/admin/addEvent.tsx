'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import axios from 'axios'

interface EventData {
  eventName: string
  description: string
  eventDate: string
  location: string
  attendees: any
}
const AddEvent = () => {
  const initialEventData: EventData = {
    eventName: '',
    description: '',
    eventDate: '',
    location: '',
    attendees: 0,
  }

  const [eventData, setEventData] = useState<EventData>(initialEventData)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEventData({
      ...eventData,
      [name]: value,
    })
  }

  const createEvent = async () => {
    console.log(eventData)

    try {
      const response = await axios.post(
        'https://ems-app-v1.onrender.com/api/events',
        eventData
      )
      console.log(response.data)
    } catch (error) {
      console.error('Error creating event:', error)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    createEvent()
    setEventData(initialEventData)
  }

  return (
    <div className="bg-slate-100 p-6 rounded-xl">
      <p className="text-4xl m-3">Add Event</p>
      <div className="border-t-4 border-black pt-6">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <div className="flex justify-between w-[400px]">
            <label htmlFor="name">Event Name:</label>
            <input
              type="text"
              name="eventName"
              value={eventData.eventName}
              onChange={handleChange}
              className="p-3 rounded-xl"
            />
          </div>
          <label htmlFor="description">Event Description</label>
          <input
            type="text"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            className="p-3 rounded-xl"
          />
          <label htmlFor="date">Event Date</label>
          <input
            type="datetime-local"
            name="eventDate"
            value={eventData.eventDate}
            onChange={handleChange}
            className="p-3 rounded-xl"
          />
          <label htmlFor="location">Event Location</label>
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            className="p-3 rounded-xl"
          />
          <label htmlFor="attendeesLimit">Event Attendees Limit</label>
          <input
            type="number"
            name="attendees"
            value={eventData.attendees}
            onChange={handleChange}
            className="p-3 rounded-xl"
          />
          <button
            type="submit"
            className="text-center text-2xl rounded-xl m-3 p-3 bg-blue-300"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddEvent
