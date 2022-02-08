import * as categoryApiUtil from '../util/category_api_util'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
const receiveCategories = categories => ({
    type: RECEIVE_CATEGORIES,
    categories
})

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY'
const receiveCategory = category => ({
    type: RECEIVE_CATEGORY,
    category
})

export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'
const removeCategory = categoryId => {
    return {
    type: REMOVE_CATEGORY,
    categoryId
}}


export const fetchCategories = serverId => dispatch => {
    return (categoryApiUtil.fetchCategories(serverId)
        .then(categories => dispatch(receiveCategories(categories)))
    )}

export const fetchCategory = (serverId, categoryId) => dispatch => (
    categoryApiUtil.fetchCategory(serverId, categoryId)
        .then(category => dispatch(receiveCategory(category)))
)

export const createCategory = (serverId, category) => dispatch => {
    return categoryApiUtil.createCategory(serverId, category) 
        .then(category => dispatch(receiveCategory(category)))
}

export const patchCategory = (serverId, category) => dispatch => (
    categoryApiUtil.updateCategory(serverId, category)
        .then(category => dispatch(receiveCategory(category)))
)

export const deleteCategory = (serverId, categoryId) => dispatch =>{ 
    
return categoryApiUtil.deleteCategory(serverId, categoryId)
        .then(category => dispatch(removeCategory(category.id)))
}
