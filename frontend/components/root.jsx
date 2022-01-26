import React, { createContext } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'

import actionCable from 'actioncable'

import App from './app';

const CableApp = {}
CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')
export const ActionCableContext = createContext()

const Root = ({ store, persistor }) => (
  <Provider store={store}>
      <ActionCableContext.Provider value={CableApp.cable}>
    <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <App />
        </HashRouter>
    </PersistGate>
      </ActionCableContext.Provider>
  </Provider>
)

export default Root;
