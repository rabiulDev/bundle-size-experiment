import { httpClient } from '@/utils/api'
import _ from 'lodash'

export const createRestaurantApi = (data) => httpClient.post('restaurants/', data)
export const createQuickRestaurantApi = (data) => httpClient.post('/restaurants/quick-restaurant-create/', data)
export const updateRestaurantApi = (id, data) => httpClient.put(`/restaurants/${id}/`, data)
export const restaurantDraftApi = (id, data) =>
    httpClient.post(`restaurants_drafts/create-restaurant-draft/${id}/`, data)
export const addOrRemoveFavoriteRestaurantApi = (id) => httpClient.post(`restaurants/${id}/add-or-remove-favorite/`)
export const fetchSingleRestaurantApi = (id) => httpClient.get(`restaurants/${id}/`)
export const ownerRestaurantsApi = (page = 1, pageSize = 10, status = '', search = '', ordering= '') =>
    httpClient.get(
        `restaurants/owner-list/?page=${page}&page_size=${pageSize}&restaurant_status=${status}&search=${search}&ordering=${ordering}`
    )
export const fetchRestaurantFeaturesApi = () => httpClient.get('restaurants/feature/')
export const fetchRestaurantPaymentMethodApi = () => httpClient.get('restaurants/payment-method/')
export const createRestaurantReviewApi = (id, data) =>
    httpClient.post(`/ratings/restaurant_ratings/${id}/create/`, data)
export const fetchRestaurantReviewApi = (id, page, pageSize) =>
    httpClient.get(`/ratings/restaurant_ratings/${id}/?page=${page}&page_size=${pageSize}`)
export const fetchRestaurantRatingRatioApi = (id) =>
    httpClient.get(`/ratings/restaurant_ratings/${id}/restaurant_rating_ratio/`)

export const fetchPopularRestaurantListApi = () => httpClient.get('/restaurants/popular-restaurant/')
export const fetchSuggestionRestaurantListApi = (page, pageSize, searchValue = '') =>
    httpClient.get(`/restaurants/quick-add-restaurant-list/?page=${page}&page_size=${pageSize}&search=${searchValue}`)
export const createRestaurantReviewReplyApi = (id, data) =>
    httpClient.post(`/ratings/restaurant_ratings/${id}/reply/`, data)
export const fetchRestaurantWorkingDaysListApi = () => httpClient.get('/restaurants/working-days-list/')

export const deleteRestaurantRequestApi = (id, data) => httpClient.post(`/restaurants/${id}/delete-restaurant/`, data)
export const fetchRestaurantsDeleteListApi = (page, pageSize, search= '', ordering='') =>
    httpClient.get(`/restaurants/owner-restaurant-delete-list/?page=${page}&page_size=${pageSize}&search=${search}&ordering=${ordering}`)
