import React from "react";

import { Box, CircularProgress, Typography } from "@mui/material";

function Loading() {
    return (
        <Box
            sx={{
                flexGrow: 1,
                alignSelf: "center",
                alignContent: "center",
                textAlign: "center",
            }}>
            <CircularProgress size="40px" />
            <Typography variant="h5">Loading</Typography>
        </Box>
    );
}

export default Loading;
