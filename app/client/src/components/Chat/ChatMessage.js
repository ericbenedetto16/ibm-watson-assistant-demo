import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

export const ChatMessage = ({ name, text, time, alt }) => {
  if (alt) {
    return (
      <ListItem key='2'>
        <ListItemAvatar>
          <Avatar>{name.slice(0, 1)}</Avatar>
        </ListItemAvatar>
        <ListItemText
          align='left'
          primary={text}
          secondary={time}
        ></ListItemText>
      </ListItem>
    );
  }
  return (
    // Chat Message
    <ListItem key='1'>
      <ListItemText
        align='right'
        primary={text}
        secondary={time}
      ></ListItemText>
      <ListItemAvatar align='right'>
        <Avatar>{name.slice(0, 1)}</Avatar>
      </ListItemAvatar>
    </ListItem>
  );
};

ChatMessage.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  alt: PropTypes.bool,
};
