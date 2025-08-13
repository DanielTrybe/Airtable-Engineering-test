import { memo } from "react";

function RenderLanes({ lanes }) {
  return (
    <Box display={"flex"} gap={3} flexDirection={"column"}>
      {lanes &&
        lanes.length > 0 &&
        lanes.map((lane, index) => (
          <Box key={index}>{lane?.map((itens) => itens?.name)}</Box>
        ))}
    </Box>
  );
}

export default memo(RenderLanes);
