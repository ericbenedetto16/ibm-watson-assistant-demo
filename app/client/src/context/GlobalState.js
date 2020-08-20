import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import RootReducer from './RootReducer';
import * as actions from './actions';

const initialState = {
  user_message: null,
  message_queue: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RootReducer, initialState);
  const setMessage = (payload) => {
    dispatch({ type: actions.SET_MESSAGE, payload });
  };
  const enqueueMessage = (payload) => {
    dispatch({ type: actions.ENQUEUE_MESSAGE, payload });
  };

  return (
    <GlobalContext.Provider
      value={{
        user_message: state.user_message,
        message_queue: state.message_queue,
        setMessage,
        enqueueMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node,
};
