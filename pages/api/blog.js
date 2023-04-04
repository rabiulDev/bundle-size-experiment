import { httpClient } from '@/utils/api'

export const fetchBlogsApi = (page, pageSize) => httpClient.get(`/blogs/?page=${page}&page_size=${pageSize}`)
export const fetchHomePageBlogsApi = () => httpClient.get(`blogs/home-page-blog/`)
export const fetchSingleBlogApi = (id) => httpClient.get(`/blogs/${id}/`)