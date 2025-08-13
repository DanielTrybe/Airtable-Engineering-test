import { Paper, Typography } from "@mui/material";
import { memo } from "react";
import { format } from "date-fns";

function ToolTipText({ data }) {
  if (!data) return null;

  const startFormatted = format(new Date(data.start), "dd/MM/yyyy - HH:mm");
  const endFormatted = format(new Date(data.end), "dd/MM/yyyy - HH:mm");

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold">
        {data.name}
      </Typography>
      <Typography variant="body2">Start: {startFormatted}</Typography>
      <Typography variant="body2">End: {endFormatted}</Typography>
    </Paper>
  );
}

export default memo(ToolTipText);
