import {
    RECEIVE_CATEGORIES,
    RECEIVE_CATEGORY,
    REMOVE_CATEGORY
} from '../actions/category_actions'
import { LOGOUT_USER } from "../actions/session_actions";

const CategoriesReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return action.categories
        case RECEIVE_CATEGORY:
            newState[action.category.id] = action.category
            return newState
        case REMOVE_CATEGORY:
            delete newState[action.categoryId]
            return newState
        case LOGOUT_USER:
            return {}
        default:
            return oldState;
    }
}

export default CategoriesReducer