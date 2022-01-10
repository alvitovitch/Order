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
const removeCategory = categoryId => ({
    type: REMOVE_CATEGORY,
    categoryId
})


export const fetchCategories = serverId => dispatch => {
    debugger
    return (categoryApiUtil.fetchCategories(serverId)
        .then(categories => dispatch(receiveCategories(categories)))
    )}

export const fetchCategory = (serverId, categoryId) => dispatch => (
    categoryApiUtil.fetchCategory(serverId, categoryId)
        .then(category => dispatch(fetchCategory(category)))
)

export const patchCategory = (serverId, category) => dispatch => (
    categoryApiUtil.updateCategory(serverId, category)
        .then(category => dispatch(receiveCategory(category.id)))
)

export const deleteCategory = (serverId, categoryId) => dispatch => (
    categoryApiUtil.deleteCategory(serverId, categoryId)
        .then(category => dispatch(removeCategory(category.id)))
)