import React, { useEffect, useLayoutEffect, useState } from 'react'
import styles from './Cities.module.scss'
import { Col, Row } from 'antd'
// import Filter from '@/components/home-page/filter/Filter'
// import PublishCard from '@/components/home-page/publish-card/PublishCard'
// import FeaturedContributors from '@/components/home-page/featured-contributors/FeaturedContributors'
// import UserAccountCard from '@/components/home-page/user-account-card/UserAccountCard'
// import Cities from '@/components/home-page/cities/Cities'
import { fetchInitialCityLists } from '@/stores/locations'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

const Cities = dynamic(() => import('@/components/home-page/cities/Cities'), {
    loading: () => <p>Loading...</p>,
})
const PublishCard = dynamic(() => import('@/components/home-page/publish-card/PublishCard'), {
    loading: () => <p>Loading...</p>,
})


const FeaturedContributors = dynamic(
    () => import('@/components/home-page/featured-contributors/FeaturedContributors'),
    {
        loading: () => <p>Loading...</p>,
    }
)
const UserAccountCard = dynamic(() => import('@/components/home-page/user-account-card/UserAccountCard'), {
    loading: () => <p>Loading...</p>,
})
const CitySection = () => {
    const dispatch = useDispatch()
    const { query } = useRouter()
    const [viewType, setViewType] = useState('grid')

    useEffect(() => {
        dispatch(
            fetchInitialCityLists({
                page: 1,
                pageSize: 12,
                filters: {
                    ...query,
                },
            })
        )
    }, [dispatch])

    useLayoutEffect(() => {
        const scrollPosition = window.scrollY
        window.scrollTo(0, scrollPosition)
    })

    return (
        <div className={styles.cities}>
            <div className={styles.cities__filter}>
                {/*<Filter setViewType={setViewType} viewType={viewType} />*/}
                <Row className={'mt-10'} gutter={{ lg: 48 }}>
                    <Cities viewType={viewType} />
                    <Col xs={24} lg={8} xl={6}>
                        <Row>
                            <PublishCard />
                        </Row>

                        <Row className={'mt-12'}>
                            <FeaturedContributors />
                        </Row>

                        <Row className={'mt-12'}>
                            <UserAccountCard />
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CitySection
