import { differenceInCalendarDays } from "date-fns";
import { Box, Tooltip, Typography } from "@mui/material";
import ToolTipText from "../atoms/ToolTipText";
import { teal } from "@mui/material/colors";
import CustomModal from "../organisms/CustomModal";
import { useState } from "react";

export default function RenderEvents({ eventLine, minDay, totalDays }) {
  const [selectedItem, setSelectedItem] = useState({
    data: {},
    openModal: false,
  });

  const laneToRender = (oneLane) => {
    // create a copy to not chande the original
    const sortedNewLane = oneLane
      .slice()
      .sort((a, b) => new Date(a.start) - new Date(b.start));
    // intervals array
    const intervals = [];
    let currentDay = 0;

    sortedNewLane.forEach((item) => {
      const startDay = differenceInCalendarDays(item.start, minDay);
      const duration = differenceInCalendarDays(item.end, item.start) + 1;

      // bloco cinza para gap antes do item
      if (startDay > currentDay) {
        intervals.push({
          item: null,
          startDay: currentDay,
          duration: startDay - currentDay,
          color: "#eee",
        });
      }

      // bloco verde do item
      intervals.push({
        item,
        startDay,
        duration,
        color: teal[700],
      });

      currentDay = startDay + duration;
    });

    // bloco cinza no final se necessário
    if (currentDay < totalDays) {
      intervals.push({
        item: null,
        startDay: currentDay,
        duration: totalDays - currentDay,
        color: "#eee",
      });
    }

    return intervals;
  };

  const closeModal = () => {
    setSelectedItem({ data: {}, openModal: false });
  };

  return (
    <Box display="flex" height={30} mb={1} gap={1} width={"100%"}>
      {laneToRender(eventLine).map(({ item, duration, color }, index) => (
        <Tooltip
          key={index}
          title={<ToolTipText data={item} />}
          slotProps={{
            tooltip: {
              sx: {
                bgcolor: "transparent",
              },
            },
          }}
          arrow
          placement="top"
        >
          <Box
            sx={{
              width: `${item ? duration * 12 : duration * 6}%`,
              height: "100%",
              bgcolor: color,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              cursor: item ? "pointer" : "default",
            }}
            onClick={() =>
              setSelectedItem(() => ({ data: item, openModal: true }))
            }
          >
            <Typography
              sx={{
                color: item ? "#FFFFFF" : "black",
                whiteSpace: "nowrap", // impede quebra de linha
                overflow: "hidden", // esconde o excesso
                textOverflow: "ellipsis",
              }}
            >
              {item && item?.name}
            </Typography>
          </Box>
        </Tooltip>
      ))}

      <CustomModal
        handleClose={closeModal}
        item={selectedItem.data}
        open={selectedItem.openModal}
      />
    </Box>
  );
}
