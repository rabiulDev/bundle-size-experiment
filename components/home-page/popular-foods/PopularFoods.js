import styles from './PopularFoods.module.scss'
import { notification, Skeleton, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import FoodCarouselCard from '@/components/home-page/food-carousel-card/FoodCarouselCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper'
import { fetchPopularFoodListApi } from '@/pages/api/foods'

const PopularFoods = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setLoading(true)
        fetchPopularFoodListApi()
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                notification['error']({
                    message: 'Failed to load qty types',
                    description: error.message,
                    placement: 'topRight',
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }, [setLoading, setData])

    return (
        <div className={styles.popular}>
            <div className={styles.popular__title}>
                <Typography>
                    <p className={'!text-2xl sm:!text-3xl !font-semibold !my-0 pb-2 text-center sm:text-left'}>
                        Craving-worthy foods that everyone loves desperately
                    </p>
                </Typography>
                <Typography>
                    <p className={'!text-base !my-0 text-center sm:text-left'}>
                        Explore the flavors of the world - pick your favorites from our global food selection.
                    </p>
                </Typography>
            </div>
            {loading ? (
                <Skeleton active title paragraph={{ rows: 3 }} />
            ) : (
                <div className={styles.popular__carousel}>
                    <Swiper
                        className={'!pl-2.5'}
                        spaceBetween={24}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        modules={[Autoplay]}
                        loop={true}
                    >
                        {data?.map((el) => (
                            <SwiperSlide key={el.id}>
                                <FoodCarouselCard el={el} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    )
}

export default PopularFoods
