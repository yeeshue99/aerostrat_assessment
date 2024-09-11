import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularSpinner() {
  return (
    <Box sx={{ display: 'flex', width: "100%", height: "100%" }}>
      <CircularProgress sx={{display: "block", position: "absolute", top: "50%", left: "50%"}}/>
    </Box>
  );
}