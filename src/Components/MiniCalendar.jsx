/* eslint-disable react/prop-types */
import { useState } from "react"
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { IconButton, Box, Typography } from "@mui/material"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import dayjs from "dayjs"

const MiniCalendar = ({ setSelectedDate }) => {
  const [date, setDate] = useState(dayjs())

  const handlePrevMonth = () => {
    setDate(date.subtract(1, "month"))
  }

  const handleNextMonth = () => {
    setDate(date.add(1, "month"))
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          width: 'fit-content',
          padding: 2,
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            justifyContent: 'center',
            marginBottom: 1,
          }}
        >
          <IconButton onClick={handlePrevMonth} >
            <ArrowBackIosIcon fontSize="medium" className="text-[#0F4C81]" />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#0F4C81" }}>
            {date.format("MMM YYYY")}
          </Typography>
          <IconButton onClick={handleNextMonth}>
            <ArrowForwardIosIcon fontSize="medium" className="text-[#0F4C81]" />
          </IconButton>
        </Box>

        <StaticDatePicker
          showDaysOutsideCurrentMonth
          displayStaticWrapperAs="desktop"
          value={date}
          onChange={(newDate) => {
            setDate(newDate)
            setSelectedDate(newDate)
          }}
          slotProps={{
            actionBar: { actions: [] },
          }}
          sx={{
            "& .MuiDateCalendar-root": {
              height: '270px',
            },
            "& .MuiPickersCalendarHeader-root": {
              display: "none",
            },
            "& .MuiPickersDay-root": {
              fontSize: "1rem",
            },
            "& .Mui-selected": {
              backgroundColor: "#5684AE !important",
              color: "#FFF",
            },
            "& .MuiBox-root": {
              padding: "22px",
            },
          }}
        />
      </Box>
    </LocalizationProvider>
  )
}

export default MiniCalendar
