
# Things Done
### Created basic calendar events with recurring features.
**Demo link:** [Enjoy cái moment này :)](https://hieu-bui-masterbranch-test.vercel.app/ "Enjoy cái moment này :)")

#### Data structure:
    [
      {
        "date": "2025-03-01",
        "events": [
          {
            "id": "evt_001",
            "type": "appointment",
            "title": "DSU with Alex Stan",
            "time_start": "09:00",
            "time_end": "09:30",
            "timezone": "GMT+8",
            "client": {
              "id": "client_123",
              "name": "Alex Stan",
              "profile_url": "https://meet.google.com/client/123"
            },
            "video_call_url": "https://meet.google.com/",
            "recurrence": { "frequency": "daily", "interval": 1 }
          },
          {
            "id": "evt_002",
            "type": "event",
            "title": "Webinar: How to cope with trauma in professional life",
            "time_start": "09:00",
            "time_end": "09:30",
            "timezone": "GMT+8",
            "event_url": "https://eventbrite.sg/sample_event"
          }
        ]
      },
##### Why This Structure?
- **Categorization**: Differentiates between "appointment" (with clients) and "event"
- **Modular Data**: The structure allows easy expansion, e.g., adding new event types in the future.
- **Recurring Events Handling**: A key recurrence ensures recurring sessions are processed separately from one-time events.
- **Optimized Queries:** Backend can filter events based on date, type, and recurrence pattern, improving efficiency.:


------------

#### Some ways to handle recurring events:
###### Pattern-Based Recurrence (Database)

- Store recurrence rules and generate occurrences dynamically.
- Good for flexibility and handling different schedules.

###### Precomputed Events

- The backend pre-generates all future recurring events for the next X months.
- Faster UI rendering but consumes more storage.

##### Approach in this project:
I chose option 1 for this test because I can handle it in the Frontend.
In the event data, I added a field called `"recurrence": { "frequency": "daily", "interval": 1 }. "requency"` can have 3 types "month", "week", "day" and "interval" allows repetition as once every 3 days, once every 2 weeks... I will then process and generate new events based on that repeat type.

------------
####  What I have learned from this project?
- **Data Structure Importance**: A well-defined data structure is crucial for managing complex data like calendar events.
- **API Design**: Designing a clear and efficient API response is essential for smooth data flow and easy to implement for both FE and BE side.
- **Recurring Events Challenge**: Handling recurring events requires careful consideration of performance and user experience. I have never done a recurrence event but it is ok with me.
- **UI/UX Considerations**: Designing a user-friendly calendar interface requires attention to detail and responsiveness.

------------
#### Future Development (if I can continue)
- **Event Editing and Creation**: Implement functionality to add, edit, and delete events.
- **Drag-and-Drop Scheduling**: Allow users to drag and drop events to reschedule them.
- **Time Zone Support**: Handle events in different time zones.
- **Reminders and Notifications**: Add reminders for upcoming events.
- **Improved Recurring Event UI**: Create a more intuitive UI for creating and editing recurring events.
- **Performance Optimization**: Optimize the application for performance, especially when handling a large number of events.
- **Accessibility**: Ensure the application is accessible to users with disabilities.
