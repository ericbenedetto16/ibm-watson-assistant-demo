import React from 'react';
import { Grid, Typography } from '@material-ui/core';
export const ChatHeader = () => {
  return (
    <Grid container style={{ height: 'auto' }}>
      <Grid item xs={12}>
        <Typography variant='h5' className='header-message'>
          Chat
        </Typography>
      </Grid>
    </Grid>
  );
};
