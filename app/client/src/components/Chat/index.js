import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Divider, List } from '@material-ui/core';
import { ChatMessage } from './ChatMessage';
import { ChatHeader } from './ChatHeader';
import { MessageInput } from './MessageInput';
import { GlobalContext } from '../../context/GlobalState';
import { getSession, sendMessage } from '../../api/queries';

const useStyles = makeStyles({
  wrapper: {
    margin: '0 auto',
  },
});

export const Chat = () => {
  const classes = useStyles();
  const {
    user_message,
    message_queue,
    enqueueMessage,
    setMessage,
  } = useContext(GlobalContext);

  // FIXME: Add Session Management Elsewhere, This is Hacky
  useEffect(() => {
    sessionStorage.clear();
  });

  useEffect(() => {
    document.querySelector('#bottom').scrollIntoView({ behavior: 'smooth' });
  }, [message_queue]);

  return (
    <Grid container item xs={12} sm={8} md={6} className={classes.wrapper}>
      <ChatHeader />
      <Grid container component={Paper} style={{ height: '100%' }}>
        <Grid item xs={12}>
          <List style={{ height: '80vh', overflow: 'auto' }}>
            {message_queue.map((msg, it) => (
              <ChatMessage
                name={msg.name}
                text={msg.text}
                time={it.toString()}
                key={it}
                // Alt Must Come from Client Side
                alt={msg.name !== 'User'}
              />
            ))}
            <div id='bottom' />
          </List>
          <Divider />
        </Grid>
        <MessageInput
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onSubmit={async () => {
            enqueueMessage({ text: user_message, name: 'User' });
            const msgs = await sendMessage({ user_message });
            msgs.map(({ text }) => {
              enqueueMessage({ text, name: 'CUNY Assistant' });
            });
          }}
        />
      </Grid>
    </Grid>
  );
};
