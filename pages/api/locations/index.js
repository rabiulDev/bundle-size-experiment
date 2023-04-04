import { httpClient } from '@/utils/api'
import _ from 'lodash'

export const fetchCountriesApi = ({ page = 1, pageSize = 10 }) =>
    httpClient.get(`locations/country_list/?page=${page}&page_size=${pageSize}`)

export const fetchCitiesApi = (id) => httpClient.get(`/locations/country_list/${id}/cities/`)

export const fetchStateCitiesApi = (id) => httpClient.get(`/locations/states/${id}/cities/`)

export const fetchCitiesListApi = ({ page, pageSize, filters = {} }) => {
    const queryParams = Object.entries(filters)
        .map(([key, val]) => `${key}=${val}`)
        .join('&')
    return httpClient.get(`/locations/city_list/?page=${page}&page_size=${pageSize}&${queryParams}`)
}

export const fetchRegionListApi = () => httpClient.get(`locations/region_list/`)
export const fetchStateListApi = (id) => httpClient.get(`locations/country_list/${id}/states/`)
export const fetchRegionCountry = (region) => httpClient.get(`locations/regions/${region}/countries`)
export const fetchFoodAndRestaurantNumberInCity = (state, city) =>
    httpClient.get(`locations/states/${state}/cities/${city}/total_foods_restaurants`)
