import { combineReducers } from "redux";
import MessagesReducer from './messages_reducer'


const RootReducer = combineReducers(
    {
        messages: MessagesReducer
    }
)

export default RootReducer