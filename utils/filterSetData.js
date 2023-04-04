import _ from 'lodash'
import { setSearchFoodFilterSet } from '@/stores/foods'

const reloadFilterSet = (restaurantPaymentMethod, restaurantFeatures, dispatch, query) => {
    for (const property in query) {
        if (property === 'country' && query[property]) {
            dispatch(
                setSearchFoodFilterSet({
                    id: query.country,
                    category: 'country',
                    name: query.country_name,
                })
            )
        } else if (property === 'city' && query[property]) {
            dispatch(
                setSearchFoodFilterSet({
                    id: query.city,
                    category: 'city',
                    name: query.city_name,
                })
            )
        } else if (property === 'payment_system' && query[property]) {
            const paymentId = query[property].split(',')
            !restaurantPaymentMethod.loading &&
                restaurantPaymentMethod.data.map((method) => {
                    paymentId.map((id) => {
                        if (Number(method.id) === Number(id)) {
                            dispatch(
                                setSearchFoodFilterSet({
                                    id: method.id,
                                    category: 'payment',
                                    name: method.name,
                                })
                            )
                        }
                    })
                })
        } else if (property === 'rating' && Number(query[property]) !== 0) {
            dispatch(
                setSearchFoodFilterSet({
                    id: query[property],
                    category: 'rating',
                    name: 'Rating',
                })
            )
        } else if (property === 'restaurant_facility' && query[property]) {
            const FeatureId = query[property].split(',')
            !restaurantFeatures.loading &&
                restaurantFeatures.data.map((feature) => {
                    FeatureId?.map((id) => {
                        if (Number(feature.id) === Number(id)) {
                            dispatch(
                                setSearchFoodFilterSet({
                                    id: feature.id,
                                    category: 'feature',
                                    name: feature.name,
                                })
                            )
                        }
                    })
                })
        }
    }
}

export default reloadFilterSet
