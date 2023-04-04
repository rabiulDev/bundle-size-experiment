import { httpClient } from '@/utils/api'

export const fetchHomePageDataApi = () => httpClient.get(`/ssr_pages/feed/`)