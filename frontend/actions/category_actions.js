import * as categoryAPI from '../util/category_api_util'

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

export const DELETE_CATEGORY = 'DELETE_CATEGORY'
const deleteCategory = categoryId => ({
    type: DELETE_CATEGORY,
    categoryId
})


export const fetchCategories = ()