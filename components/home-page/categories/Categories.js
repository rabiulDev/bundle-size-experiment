import React, { useEffect, useState } from 'react'
import styles from './Categories.module.scss'
import { Card, Col, notification, Row, Typography } from 'antd'
import CategoryItem from '@/components/home-page/category-item/CategoryItem'
import Link from 'next/link'
import { fetchFoodTimeTypesApi } from '@/pages/api/foods'

const Categories = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setLoading(true)
        fetchFoodTimeTypesApi()
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
        <div className={styles.category}>
            <>
                <Typography>
                    <p className={'!text-2xl sm:!text-3xl !font-semibold !my-0 pb-2 text-center sm:text-left'}>
                        Browse by cuisine
                    </p>
                </Typography>
                <Typography>
                    <p className={'!text-base !my-0 text-center sm:text-left'}>
                        From breakfast to dessert, we&apos;ve got you covered - discover restaurants by type of meal.{' '}
                    </p>
                </Typography>
            </>
            <Card className={styles.category__card}>
                <Row className={styles.category__card__items} align={'middle'}>
                    {!loading &&
                        data?.slice(0, 5).map((el) => (
                            <Col
                                key={el.id}
                                xs={10}
                                md={4}
                                lg={4.5}
                                className={'flex flex-col lg:flex-row justify-center'}
                            >
                                <Link
                                    href={`/foods/category/${el.name?.toLowerCase()}`}
                                    as={`/foods/category/${el.name?.toLowerCase()}`}
                                >
                                    <a>
                                        <CategoryItem title={el.name} />
                                    </a>
                                </Link>
                            </Col>
                        ))}
                </Row>
            </Card>
        </div>
    )
}

export default Categories
