import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import RootReducer from '../reducers/root_reducer'
import logger from 'redux-logger'
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";



const persistConfig = {
    key: "root",
    storage,
    whitelist: ["entities", "session"]
};

const persistedReducer = persistReducer(persistConfig, RootReducer);



const configureStore = (preloadedState = {}) => (
    createStore(persistedReducer, preloadedState, applyMiddleware(thunk, logger))
)


export default configureStore