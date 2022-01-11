// get the all the current server's categories

export const fetchCategories = serverId => (
    $.ajax({
        url: `/api/servers/${serverId}/categories`,
        method: 'GET'
    })
)

// get a single category

export const fetchCategory = (serverId, categoryId) => (
    $.ajax({
        url: `/api/servers/${serverId}/categories/${categoryId}`,
        method: 'GET'
    })
)

// create a category

export const createCategory = (serverId, category) => {
    return $.ajax({
        url: `/api/servers/${serverId}/categories`,
        method: 'POST',
        data: category
    })
}

export const updateCategory = (serverId, category) => (
    $.ajax({
        url: `/api/servers/${serverId}/categories/${category.id}`,
        method: 'PATCH',
        data: category
    })
)

export const deleteCategory = (serverId, categoryId) => (
    $.ajax({
        url: `/api/servers/${serverId}/categories/${categoryId}`,
        method: 'DELETE'
    })
)