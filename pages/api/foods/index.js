import { httpClient } from '@/utils/api'
import _ from 'lodash'

export const createFoodApi = (data) => httpClient.post('/foods/', data)
export const createQuickFoodApi = (data) => httpClient.post('/foods/create-quick-food/', data)
export const createFoodAttachmentApi = (id, data) => httpClient.post(`/foods/${id}/add-food-attachment/`, data)
export const deleteFoodAttachmentApi = (id) => httpClient.delete(`/foods/delete-food-attachment/${id}/`)
export const addOrRemoveFavoriteApi = (id) => httpClient.post(`/foods/${id}/add-or-remove-favorite/`)
export const addOrRemoveTastedFoodApi = (id) => httpClient.post(`/foods/${id}/add-or-remove-tasted/`)
export const updateFoodApi = (id, data) => httpClient.put(`/foods/${id}/`, data)
export const fetchFoodsApi = (page, pageSize) => httpClient.get(`foods/?page=${page}&page_size=${pageSize}`)
export const fetchOwnerFoodsApi = (page, pageSize, ordering ='', filters = {}) => {
    if (_.isEmpty(filters)) {
        return httpClient.get(`foods/owner-food-list/?ordering=${ordering}&page=${page}&page_size=${pageSize}`)
    } else {
        const queryParams = Object.entries(filters)
            .map(([key, val]) => `${key}=${val}`)
            .join('&')
        return httpClient.get(
            `foods/owner-food-list/?ordering=${ordering}&page=${page}&page_size=${pageSize}&${queryParams}`
        )
    }
}
export const fetchDraftFoodsApi = (page, pageSize, filters = {}) => {
    if (_.isEmpty(filters)) {
        return httpClient.get(`foods_drafts/food-draft-list/?page=${page}&page_size=${pageSize}`)
    } else {
        const queryParams = Object.entries(filters)
            .map(([key, val]) => `${key}=${val}`)
            .join('&')
        return httpClient.get(`foods_drafts/food-draft-list/?page=${page}&page_size=${pageSize}&${queryParams}`)
    }
}
export const fetchPublishedFoodsApi = (page, pageSize,status,ordering = '', filters = {}) => {
    if (_.isEmpty(filters)) {
        return httpClient.get(
            `foods/owner-food-list/?food_status=${status}&ordering=${ordering}&page=${page}&page_size=${pageSize}`
        )
    } else {
        const queryParams = Object.entries(filters)
            .map(([key, val]) => `${key}=${val}`)
            .join('&')
        return httpClient.get(
            `foods/owner-food-list/?food_status=${status}&ordering=${ordering}&page=${page}&page_size=${pageSize}&${queryParams}`
        )
    }
}
export const fetchSearchFoodsApi = (page, pageSize, filters = {}) => {
    const queryParams = Object.entries(filters)
        .map(([key, val]) => `${key}=${val}`)
        .join('&')
    return httpClient.get(`foods/?page=${page}&page_size=${pageSize}&${queryParams}`)
}
export const fetchSingleFoodApi = (id) => httpClient.get(`foods/${id}/`)
export const fetchRelatedFoodsApi = (id, page, pageSize) =>
    httpClient.get(`foods/${id}/related-food/?page=${page}&page_size=${pageSize}`)
export const fetchFoodTimeTypesApi = () => httpClient.get('/foods/meal-time-type-list/')
export const fetchFoodMakingTimeTypeApi = () => httpClient.get('/foods/making-time-type-list/')
export const fetchFoodQtyTypeApi = () => httpClient.get('/foods/qty-type-list/')
export const fetchWishlistFoodsApi = (page, pageSize, filters = {}) => {
    const queryParams = Object.entries(filters)
        .map(([key, val]) => `${key}=${val}`)
        .join('&')
    return httpClient.get(`/foods/wish-list-foods/?page=${page}&page_size=${pageSize}&${queryParams}`)
}
export const fetchTastedFoodsApi = (page, pageSize, filters = {}) => {
    const queryParams = Object.entries(filters)
        .map(([key, val]) => `${key}=${val}`)
        .join('&')
    return httpClient.get(`/foods/tasted-foods/?page=${page}&page_size=${pageSize}&${queryParams}`)
}
export const createFoodRatingsApi = (id, data) => httpClient.post(`/ratings/food_ratings/${id}/create/`, data)
export const fetchFoodRatingsCommentsApi = (id, page, pageSize) =>
    httpClient.get(`/ratings/food_ratings/${id}/?page=${page}&page_size=${pageSize}`)
export const fetchFoodRatingRatioApi = (id) => httpClient.get(`/ratings/food_ratings/${id}/food_rating_ratio/`)
export const fetchRestaurantFoodApi = (id, page, pageSize, ordering = '') =>
    httpClient.get(`/restaurants/${id}/available-foods/?page=${page}&page_size=${pageSize}&ordering=${ordering}`)
export const fetchFoodNutritionListApi = () => httpClient.get('/foods/food-nutrition-list/')
export const fetchPopularFoodListApi = () => httpClient.get('/foods/popular-foods-list/')

export const fetchPublicUserWishlistFoodApi = (id, page, pageSize) =>
    httpClient.get(`/auth/public_single_user/wishlist_food/${id}/?page=${page}&page_size=${pageSize}`)

export const fetchPublicUserTastedFoodApi = (id, page, pageSize) =>
    httpClient.get(`/auth/public_single_user/tasted_food/${id}/?page=${page}&page_size=${pageSize}`)

export const fetchNutritionValueTypeApi = () => httpClient.get('/foods/nutrition-value-type-list/')

export const fetchQuickFoodListApi = (id, page, pageSize, searchValue = '') =>
    httpClient.get(
        `/foods/quick-add-food-list/?restaurant=${id}&page=${page}&page_size=${pageSize}&search=${searchValue}`
    )
export const createFoodRatingsReplyApi = (id, data) => httpClient.post(`/ratings/food_ratings/${id}/reply/`, data)

export const deleteFoodRequestApi = (id, data) => httpClient.post(`foods/${id}/delete-food/`, data)

export const deletedFoodListApi = (page, pageSize,ordering ='', filters = {}) => {
    if (_.isEmpty(filters)) {
        return httpClient.get(`foods/owner-food-delete-list/?ordering=${ordering}&page=${page}&page_size=${pageSize}`)
    } else {
        const queryParams = Object.entries(filters)
            .map(([key, val]) => `${key}=${val}`)
            .join('&')
        return httpClient.get(
            `foods/owner-food-delete-list/?ordering=${ordering}&page=${page}&page_size=${pageSize}&${queryParams}`
        )
    }
}
    
