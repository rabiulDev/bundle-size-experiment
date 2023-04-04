import { createSlice } from '@reduxjs/toolkit'
import { notification } from 'antd'
import { profileApi } from '@/pages/api/auth'

const initialState = {
      authProfile: {
            loading: true,
            data: {},
      },
}

export const authSlice = createSlice({
      name: 'auth',
      initialState,
      reducers: {
            setProfileLoading: (state, action) => {
                  state.authProfile.loading = action.payload
            },
            setProfile: (state, action) => {
                  state.authProfile.data = action.payload
            },
      },
})

export const fetchProfile = () => (dispatch) => {
      dispatch(setProfileLoading(true))

      profileApi().then(
            (response) => {
                  dispatch(setProfile(response.data))
                  dispatch(setProfileLoading(false))
            },
            (error) => {
                  dispatch(setProfileLoading(false))
                  notification['error']({
                        message: 'Failed to load profile data',
                        description: error.message,
                        placement: 'topRight',
                  })
                  console.log(error)
            }
      )
}

export const { setProfileLoading, setProfile } = authSlice.actions

export default authSlice.reducer
