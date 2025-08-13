import { differenceInCalendarDays } from "date-fns";
import { Box } from "@mui/material";
import { memo } from "react";
import RenderEvents from "./RenderEvents";

function RenderLanes({ lanes }) {
  const all = lanes.flat();
  const min = new Date(Math.min(...all.map((date) => new Date(date.start))));
  const max = new Date(Math.min(...all.map((date) => new Date(date.end))));
  const totalDays = differenceInCalendarDays(max, min) + 1;

  return (
    <Box display={"flex"} gap={3} flexDirection={"column"} width={"100%"}>
      {lanes &&
        lanes.length > 0 &&
        lanes.map((lane, index) => (
          <RenderEvents
            key={index}
            eventLine={lane}
            minDay={min}
            totalDays={totalDays}
          />
        ))}
    </Box>
  );
}

export default memo(RenderLanes);
