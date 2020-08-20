import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField, Fab } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

export const MessageInput = ({ onChange, onSubmit }) => {
  const ref = useRef(null);
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
      ref.current.value = '';
    }
  };
  return (
    <Grid
      container
      item
      xs={12}
      sm={8}
      md={6}
      style={{ position: 'fixed', bottom: '0', padding: '20px' }}
    >
      {/* Text Input */}
      <Grid item xs={10} style={{ marginRight: '10px' }}>
        <TextField
          onChange={onChange}
          onKeyPress={handleKeyPress}
          id='outlined-basic-email'
          label='Type Something'
          fullWidth
          autoFocus={true}
          inputRef={ref}
        />
      </Grid>

      {/* Send Button */}
      <Grid item xs={1} align='right'>
        <Fab color='primary' aria-label='add'>
          <SendIcon
            onClick={() => {
              ref.current.value = '';
              onSubmit();
            }}
          />
        </Fab>
      </Grid>
    </Grid>
  );
};

MessageInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
