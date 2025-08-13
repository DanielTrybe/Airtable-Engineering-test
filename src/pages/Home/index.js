import { memo, useReducer } from "react";
import { Box } from "@mui/material";
import { assignLanes } from "../../hooks/assignLanes/intex";
import timelineItems from "../../hooks/assignLanes/timelineItems";

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

  return <Box></Box>;
}

export default memo(Home);
