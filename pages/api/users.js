import { httpClient } from '@/utils/api'
import _ from 'lodash'

export const fetchUsersApi = (page, filters = {}) => {
      if (_.isEmpty(filters)) {
            return httpClient.get(`users/?page=${page}`)
      } else {
            const queryParams = Object.entries(filters)
                  .map(([key, val]) => `${key}=${val}`)
                  .join('&')
            return httpClient.get(`users/?page=${page}&${queryParams}`)
      }
}
export const addNewUserApi = (data) => httpClient.post('users/', data)
export const deleteUserApi = (userId) => httpClient.delete(`users/${userId}/`)
export const editUserApi = (userId, data) => httpClient.put(`users/${userId}/`, data)
export const changeUserPasswordApi = (userId, data) => httpClient.post(`users/${userId}/change_password/`, data)
export const fetchUserApi = (userId) => httpClient.get(`users/${userId}/`)
export const fetchPublicUserApi = (id) => httpClient.get(`/auth/public_single_user/${id}`)
export const featuredContributorsApi = () => httpClient.get('auth/featured_contributors/')