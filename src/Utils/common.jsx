import dayjs from "dayjs"
import { v4 as uuidV4 } from "uuid"

export const generateRecurringEvents = (eventsData, viewDate, viewType) => {
  const generatedEvents = []
  const startOfView = dayjs(viewDate).startOf(viewType)
  const endOfView = dayjs(viewDate).endOf(viewType)

  eventsData.forEach(({ date, events }) => {
    events.forEach((event) => {
      let eventDate = dayjs(`${date} ${event.time_start}`)
      const { frequency, interval } = event.recurrence || {}

      if (!frequency) {
        if (eventDate.isBetween(startOfView, endOfView, null, "[]")) {
          generatedEvents.push({ ...event, start: eventDate.format("YYYY-MM-DD") })
        }
        return
      }
      while (eventDate.isBefore(endOfView)) {
        if (eventDate.isBetween(startOfView, endOfView, null, "[]")) {
          generatedEvents.push({ ...event, start: eventDate.format("YYYY-MM-DD"), id: uuidV4() })
        }

        if (frequency === "daily") {
          eventDate = eventDate.add(interval, "day")
        } else if (frequency === "weekly") {
          eventDate = eventDate.add(interval * 7, "day")
        } else if (frequency === "monthly") {
          eventDate = eventDate.add(interval, "month")
        }
      }
    })
  })

  return generatedEvents
}

export default generateRecurringEvents