import { memo, useReducer } from "react";
import { Box, Typography } from "@mui/material";
import { assignLanes } from "../../hooks/assignLanes/intex";
import timelineItems from "../../hooks/assignLanes/timelineItems";
import RenderLanes from "./components/molecules/RenderLanes";

const initialState = assignLanes(timelineItems);

function lanesReducer(state, action) {
  switch (action.type) {
    case "SET_LANES":
      return assignLanes(action.payload);
    default:
      return state;
  }
}

function Home() {
  const [lanes, dispatch] = useReducer(lanesReducer, initialState);

  console.log(lanes);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant="h3">Data lanes</Typography>

      <RenderLanes lanes={lanes} />
    </Box>
  );
}

export default memo(Home);
