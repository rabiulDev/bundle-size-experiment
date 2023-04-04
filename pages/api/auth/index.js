import { httpClient } from '@/utils/api'

export const signupApi = (data) => httpClient.post('auth/register/', data)
export const profileApi = () => httpClient.get('auth/profile_info/')
export const updateProfileApi = (data) => httpClient.put('auth/profile_info/', data)
export const changePasswordApi = (data) => httpClient.post('auth/change-password/', data)
export const forgotPasswordEmailApi = (data) => httpClient.post('auth/reset-password/send/', data)
export const resetPasswordApi = (data) => httpClient.post('/auth/reset-password/', data)
export const accountActivateApi = (data) => httpClient.post('/auth/register-account-active/', data)
