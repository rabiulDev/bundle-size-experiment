import { setCityFilterSet } from '@/stores/locations'

export const setCityFilterOptions = (query, dispatch) => {
      Object.entries(query).map(([key, val]) => {
            if (key === 'subregion') {
                  dispatch(setCityFilterSet({ name: 'region', label: val }))
            } else if (key === 'country_name') {
                  dispatch(setCityFilterSet({ name: 'country', label: val }))
            } else if (key === 'state_name') {
                  dispatch(setCityFilterSet({ name: 'state', label: val }))
            } else if (key === 'price_min') {
                  dispatch(
                        setCityFilterSet({
                              name: 'price',
                              label: `$ ${query.price_min ? query.price_min : ''} - ${
                                    query.price_max ? query.price_max : ''
                              }`,
                        })
                  )
            }
      })
}
