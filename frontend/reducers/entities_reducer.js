import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import ServersReducer from "./servers_reducer";


export default combineReducers({
    users: UsersReducer,
    servers: ServersReducer
})