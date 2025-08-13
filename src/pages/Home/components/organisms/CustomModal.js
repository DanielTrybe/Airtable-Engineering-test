import { Box, Button, Modal, Typography } from "@mui/material";
import { format } from "date-fns";
import { memo } from "react";

function CustomModal({ item, open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
        }}
      >
        {item && (
          <>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="body2">
              Start:{" "}
              {item.start && format(new Date(item.start), "dd/MM/yyyy - HH:mm")}
            </Typography>
            <Typography variant="body2">
              End:{" "}
              {item.end && format(new Date(item.end), "dd/MM/yyyy - HH:mm")}
            </Typography>
            <Box mt={2} display="flex" justifyContent="flex-end">
              <Button variant="contained" onClick={handleClose}>
                Close
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Modal>
  );
}

export default memo(CustomModal);
