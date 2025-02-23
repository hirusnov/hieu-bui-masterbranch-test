import { useState } from 'react'
import './App.css'
import dayjs from "dayjs";
import MiniCalendar from './Components/MiniCalendar'
import UpcomingEvents from './Components/UpcomingEvents'
import BigCalendar from './Components/BigCalendar';

function App() {
  const [selectedDate, setSelectedDate] = useState(dayjs())

  return (
    <div className='w-[1300px] mx-auto my-20 shadow-2xl rounded-3xl p-4'>
      <div className='flex gap-2'>
        <div className='flex flex-col gap-4'>
          <MiniCalendar setSelectedDate={setSelectedDate} />
          <UpcomingEvents selectedDate={selectedDate} />
        </div>
        <div className='w-full'>
          <BigCalendar selectedDate={selectedDate} />
        </div>
      </div>
    </div>
  )
}

export default App
