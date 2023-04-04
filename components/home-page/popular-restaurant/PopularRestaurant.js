import styles from './PopularRestaurant.module.scss'
import {notification, Typography} from 'antd'
import React, { useEffect, useState } from 'react'
import RestaurantCarouselCard from '@/components/home-page/restaurant-carousel-card/RestaurantCarouselCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper'
import {fetchPopularRestaurantListApi} from "@/pages/api/restaurants";

const PopularRestaurant = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setLoading(true)
        fetchPopularRestaurantListApi()
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
                    <p className={'!text-2xl sm:!text-3xl !font-semibold !my-0 pb-2 text-center sm:text-left'}>Most loved restaurant around</p>
                </Typography>
                <Typography>
                    <p className={'!text-base !my-0 text-center sm:text-left'}>
                        Discover the ultimate dining experience at everyone&apos;s favorite restaurant.
                    </p>
                </Typography>
            </div>
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
                                <RestaurantCarouselCard
                                    id={el.id}
                                    city={el.city}
                                    country={el.country}
                                    favorite={el.favorite}
                                    food_categories={el.food_categories}
                                    image={el.image}
                                    min_price={el.min_price}
                                    max_price={el.max_price}
                                    rating={el.rating}
                                    name={el.name}
                                    slug={el.slug}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )
            </div>
        </div>
    )
}

export default PopularRestaurant
