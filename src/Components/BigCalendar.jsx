/* eslint-disable react/prop-types */
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import React, { useEffect, useMemo, useState } from 'react'
import { MOCKUP } from '../Utils/mockup'
import { generateRecurringEvents } from '../Utils/common'
import { Box } from "@mui/material"
import dayjs from 'dayjs'

const BigCalendar = ({ selectedDate }) => {
  let calendarRef = React.createRef()
  const [currentDate, setCurrentDate] = useState()

  const handleEventClick = (info) => {
    const props = info.event.extendedProps
    const url = props.video_call_url || props.event_url
    window.open(url, "_blank")
  }

  const renderEventContent = (eventInfo) => {
    const eventType = eventInfo.event.extendedProps.type
    const borderColor = eventType === 'event' ? "border-[#5684AE]" : 'border-[#F9BE81]'
    const textColor = eventType === 'event' ? "text-[#5684AE]" : 'white'
    return (
      <div className={`w-28 truncate pl-1 border-l-4 ${borderColor} ${textColor}`} title={eventInfo.event.title}>{eventInfo.event.title}</div>
    )
  }

  const displayedEvents = useMemo(
    () => generateRecurringEvents(MOCKUP, currentDate, "month"),
    [currentDate]
  )

  const handleEventMount = (info) => {
    const eventType = info.event.extendedProps.type

    let bgColor = "#5684AE"

    if (eventType === "event") {
      bgColor = "#FFE4C8"
    }

    info.el.style.backgroundColor = bgColor
    info.el.style.color = "white"
    info.el.style.borderRadius = "5px"
    info.el.style.border = "none"
  }

  useEffect(() => {
    if (calendarRef.current) {
      let calendarApi = calendarRef.current.getApi()
      setTimeout(() => {
        calendarApi.gotoDate(dayjs(currentDate).format('YYYY-MM-DD'))
      }, 0)
    }
  }, [currentDate, calendarRef])

  useEffect(() => {
    setCurrentDate(selectedDate)
  }, [selectedDate])

  return (
    <Box sx={{
      p: 2,
      borderRadius: 2,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    }}>
      <FullCalendar
        customButtons={{
          prev: {
            click: () => {
              const api = calendarRef.current.getApi()
              api.prev()
              setCurrentDate(api.getDate())
            }
          },
          next: {
            click: () => {
              const api = calendarRef.current.getApi()
              api.next()
              setCurrentDate(api.getDate())
            }
          },
          today: {
            text: "Today",
            click: () => {
              const api = calendarRef.current.getApi()
              api.today()
              setCurrentDate(api.getDate())
            }
          },
          dayGridDay: {
            text: "Day", click: () => {
              const api = calendarRef.current.getApi()
              api.changeView('dayGridDay')
            }
          },
          dayGridWeek: {
            text: "Week", click: () => {
              const api = calendarRef.current.getApi()
              api.changeView('dayGridWeek')
            }
          },
          dayGridMonth: {
            text: "Month", click: () => {
              const api = calendarRef.current.getApi()
              api.changeView('dayGridMonth')
            }
          }
        }}
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'today prev,next',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay'
        }}
        initialView='dayGridMonth'
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        initialEvents={displayedEvents}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
        events={displayedEvents}
        viewClassNames="custom"
        eventDidMount={handleEventMount}
      />
    </Box>
  )
}

export default BigCalendar