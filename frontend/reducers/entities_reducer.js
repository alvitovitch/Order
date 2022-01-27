import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import ServersReducer from "./servers_reducer";
import CategoriesReducer from './categories_reducer'
import ChannelsReducer from "./channels_reducer";
import MessagesReducer from "./messages_reducer";
import MembershipsReducer from "./memberships_reducer";
import FriendshipsReducer from "./friendships_reducer";


export default combineReducers({
    users: UsersReducer,
    servers: ServersReducer,
    categories: CategoriesReducer,
    channels: ChannelsReducer,
    messages: MessagesReducer,
    memberships: MembershipsReducer,
    friendships: FriendshipsReducer
})