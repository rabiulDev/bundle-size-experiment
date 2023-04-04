import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Button, Col, Empty, Row } from 'antd'
import CityCard from '@/components/home-page/city-card/CityCard'
import CityCardList from '@/components/home-page/city-card-list/CityCardList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCityLists, fetchInitialCityLists } from '@/stores/locations'
import { useRouter } from 'next/router'
import CityCardLoader from '@/components/home-page/city-card/CityCardLoader'
import CityCardListLoader from '@/components/home-page/city-card-list/CityCardListLoader'

const Cities = ({viewType}) => {
    const dispatch = useDispatch()
    const { query } = useRouter()
    const { cityLists } = useSelector((state) => state.locations)
    const { loading, loadMoreLoadingState, totalCount, data, hasMore, page } = cityLists

    const loadMoreHandler = () => {
        if (!loadMoreLoadingState && hasMore) {
            dispatch(
                fetchCityLists({
                    page: page,
                    pageSize: 12,
                    filters: {
                        ...query,
                    },
                })
            )
        }
    }

    return (
        <Col xs={24} lg={16} xl={18}>
            <InfiniteScroll dataLength={data?.length} next={() => {}} hasMore={hasMore} loader={<p></p>}>
                <Row className={'gap-6 lg:gap-12 w-full justify-center lg:justify-start'}>
                    {/*CHECK NO DATA FOUND */}
                    {totalCount === 0 && (
                        <Col span={24} className={'py-10 justify-center'}>
                            <Empty description={<span>No data found</span>} image={Empty.PRESENTED_IMAGE_SIMPLE} />
                        </Col>
                    )}

                    {/*RENDER CITY LIST */}
                    {loading ? (
                        viewType === 'grid' ? (
                            <>
                                <CityCardLoader />
                                <CityCardLoader />
                                <CityCardLoader />
                            </>
                        ) : (
                            <>
                                <CityCardListLoader />
                                <CityCardListLoader />
                                <CityCardListLoader />
                            </>
                        )
                    ) : (
                        data?.map((el, index) => (
                            <Col
                                key={index}
                                xs={24}
                                md={viewType === 'grid' ? 10 : 24}
                                xl={viewType === 'grid' ? 7 : 24}
                            >
                                {viewType === 'grid' ? (
                                    <CityCard
                                        id={index + 1}
                                        state={el.state_or_division}
                                        popular={el.popular}
                                        rising={el.rising}
                                        rating={el.rating}
                                        name={el.name}
                                        country={el.country.name}
                                        pricing={el.pricing}
                                        total_foods={el.total_foods}
                                        total_restaurants={el.total_restaurants}
                                        image={el.image}
                                    />
                                ) : (
                                    <CityCardList
                                        state={el.state_or_division}
                                        rating={el.rating}
                                        name={el.name}
                                        country={el.country.name}
                                        pricing={el.pricing}
                                        total_foods={el.total_foods}
                                        total_restaurants={el.total_restaurants}
                                        image={el.image}
                                    />
                                )}
                            </Col>
                        ))
                    )}
                    {/*SHOW LOADER FOR LOADING MORE DATA */}
                    {loadMoreLoadingState &&
                        (viewType === 'grid' ? (
                            <>
                                <CityCardLoader />
                                <CityCardLoader />
                                <CityCardLoader />
                            </>
                        ) : (
                            <>
                                <CityCardListLoader />
                                <CityCardListLoader />
                                <CityCardListLoader />
                            </>
                        ))}
                </Row>
            </InfiniteScroll>
            <Row className={'mt-12 mb-12 lg:mb-0'} justify={'center'}>
                {hasMore && (
                    <Button onClick={loadMoreHandler} size={'middle'} type='primary'>
                        Load More
                    </Button>
                )}
            </Row>
        </Col>
    )
}

export default Cities
