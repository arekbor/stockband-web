import { Grid, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography align="center">404 - Not Found</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default NotFound;
