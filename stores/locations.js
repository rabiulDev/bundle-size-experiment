import {createSlice} from '@reduxjs/toolkit'
import {notification} from 'antd'
import {fetchCitiesListApi,} from '@/pages/api/locations'

const initialState = {
    cityLists: {
        data: [],
        hasMore: true,
        loading: true,
        loadMoreLoadingState: false,
        totalCount: 0,
        page: 1,
    },
    regionList: {
        loading: true,
        data: [],
    },
    stateList: {
        loading: false,
        count: 0,
        data: [],
    },
    cityFilterSet: {
        filters: [],
    },
}

export const locationsSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {

        setCityListsLoading: (state, action) => {
            state.cityLists.loading = action.payload
        },
        setLoadMoreLoadingState: (state, action) => {
            state.cityLists.loadMoreLoadingState = action.payload
        },
        setCityLists: (state, action) => {
            const {count, next, results} = action.payload
            state.cityLists.data = [...state.cityLists.data, ...results]
            state.cityLists.hasMore = next !== null
            state.cityLists.page += 1
            state.cityLists.totalCount = count
        },
        setFilterAndSortCityLists: (state, action) => {
            const {count, next, results} = action.payload
            state.cityLists.data = results
            state.cityLists.hasMore = next !== null
            state.cityLists.page += 1
            state.cityLists.totalCount = count
        },
        resetCityPage: (state, action) => {
            state.cityLists.page = 1
        },
        setRegionListLoading: (state, action) => {
            state.regionList.loading = action.payload
        },
        setRegionList: (state, action) => {
            state.regionList.data = action.payload
        },

        setCityFilterSet: (state, action) => {
            state.cityFilterSet.filters.push(action.payload)
        },
        resetCityFilterSet: (state, action) => {
            state.cityFilterSet.filters = []
        },
        removeCityFilterSet: (state, action) => {
            state.cityFilterSet.filters = state.cityFilterSet.filters.filter((item) => item.name !== action.payload)
        },
    },
})


export const fetchCityLists =
    ({page, pageSize, filters = {}}) =>
        (dispatch) => {
            dispatch(setLoadMoreLoadingState(true))

            fetchCitiesListApi({page, pageSize, filters}).then(
                (response) => {
                    dispatch(setCityLists(response.data))
                    dispatch(setLoadMoreLoadingState(false))
                },
                (error) => {
                    dispatch(setLoadMoreLoadingState(false))
                    notification['error']({
                        message: 'Failed to load cities',
                        description: error.message,
                        placement: 'topRight',
                    })
                    console.log(error)
                }
            )
        }
export const fetchInitialCityLists =
    ({page, pageSize, filters = {}}) =>
        (dispatch) => {
            dispatch(setCityListsLoading(true))

            fetchCitiesListApi({page, pageSize, filters}).then(
                (response) => {
                    dispatch(setCityLists(response.data))
                    dispatch(setCityListsLoading(false))
                },
                (error) => {
                    dispatch(setCityListsLoading(false))
                    notification['error']({
                        message: 'Failed to load cities',
                        description: error.message,
                        placement: 'topRight',
                    })
                    console.log(error)
                }
            )
        }

export const {
    setCityListsLoading,
    setLoadMoreLoadingState,
    setCityLists,
    resetCityPage,
    setCityFilterSet,
    removeCityFilterSet,
    resetCityFilterSet,
    setRegionCountries,

} = locationsSlice.actions

export default locationsSlice.reducer
