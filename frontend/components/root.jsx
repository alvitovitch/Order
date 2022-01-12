import React, { createContext } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import actionCable from 'actioncable'

import App from './app';

const CableApp = {}
CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')
export const ActionCableContext = createContext()

const Root = ({ store }) => (
  <Provider store={store}>
    <ActionCableContext.Provider value={CableApp.cable}>
      <HashRouter>
        <App />
      </HashRouter>
    </ActionCableContext.Provider>
  </Provider>
)

export default Root;
