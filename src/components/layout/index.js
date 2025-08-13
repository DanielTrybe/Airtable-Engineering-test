import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <Container maxWidth="lg">
      <Box
        minWidth={"100%"}
        minHeight={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Outlet />
      </Box>
    </Container>
  );
}
