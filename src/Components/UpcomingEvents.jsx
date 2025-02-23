/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";
import { useMemo } from "react";
import dayjs from "dayjs";
import { MOCKUP } from "../Utils/mockup";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { generateRecurringEvents } from "../Utils/common";

const UpcomingEvents = ({ selectedDate }) => {
  const displayedEvents = useMemo(
    () => generateRecurringEvents(MOCKUP, selectedDate, "day"),
    [selectedDate]
  );

  return (
    <Box
      sx={{
        width: "fit-content",
        p: 2,
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "75px" }}>
        <Typography sx={{ color: "#0F4C81", fontWeight: "bold", fontSize: "20px" }}>
          Upcoming Events
        </Typography>
        <Button
          sx={{
            fontSize: "12px",
            color: "white",
            py: "5px",
            px: "14px",
            textTransform: "capitalize",
            borderRadius: "50px",
            background: "hsla(205, 81%, 31%, 1)",
          }}
        >
          View All
        </Button>
      </Box>

      <Typography sx={{ color: "#948f9e", fontWeight: "bold", fontSize: "16px" }}>
        {dayjs(selectedDate).isSame(dayjs(), "day") ? "Today, " : ""}
        {dayjs(selectedDate).format("D MMM")}
      </Typography>
      <Box className="overflow-y-auto max-h-[300px]">
        {displayedEvents.map(({ id, type, title, time_start, time_end, timezone, client }) => {
          const isAppointment = type === "appointment";
          return (
            <Box
              key={id}
              sx={{
                borderRadius: "8px",
                backgroundColor: isAppointment ? "#5684AE" : "#F9BE81",
                p: "14px",
                mt: "14px",
                borderLeftWidth: "8px",
                borderColor: isAppointment ? "#fa7d3c" : "#5684AE",
                maxWidth: "320px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ width: '70%' }}>
                  <Typography sx={{ color: isAppointment ? "white" : "#0F4C81" }} fontWeight={600}>
                    {title}
                  </Typography>
                  <Typography sx={{ color: isAppointment ? "#FFE4C8" : "#6b8daf", mt: "5px" }}>
                    {time_start} - {time_end} {timezone}
                  </Typography>
                </Box>

                {isAppointment && (
                  <Box sx={{ background: "#FFE4C8", borderRadius: "50%", p: 1 }}>
                    <VideocamOutlinedIcon sx={{ color: "#5684AE" }} />
                  </Box>
                )}
              </Box>

              {/* Client Profile Link */}
              {isAppointment && (
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px", mt: "3px" }}>
                  <AccountCircleIcon />
                  <a href={client.profile_url} className="underline text-[14px] text-[#FFE4C8]">
                    View Client Profile
                  </a>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default UpcomingEvents;
