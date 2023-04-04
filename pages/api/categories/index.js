import { httpClient } from '@/utils/api'
import _ from 'lodash'

export const fetchCategoriesApi = () => httpClient.get('foods/foods-categories-list/')
