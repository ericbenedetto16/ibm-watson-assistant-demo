import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalProvider } from './context/GlobalState';
import { Chat } from './components/Chat/';
import './index.css';
ReactDOM.render(
  <GlobalProvider>
    <Chat />
  </GlobalProvider>,
  document.getElementById('root')
);
