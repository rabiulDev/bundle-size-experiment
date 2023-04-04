import React from 'react'
import { Badge, Card, Col, Row, Typography } from 'antd'
import Image from 'next/image'
import { CheckCircleFilled, EnvironmentFilled } from '@ant-design/icons'
import styles from './QuickItemCard.module.scss'
import dummy from '@/public/images/food/food-dish.jpg'
import { convertHour } from '@/utils/moment'

const { Title, Paragraph } = Typography

const QuickItemCard = ({ item, activeCardHandler, cardId, cardSlug, current }) => {
    const {
        id,
        image,
        name,
        address,
        rating,
        opening_day,
        closing_day,
        opening_time,
        closing_time,
        city,
        country,
        restaurant_name,
        making_time,
        making_time_type,
        feature_image,
        qty,
        qty_type,
        price,
        slug,
    } = item
    return (
        <>
            <Card
                className={`${styles.QuickItemCard} ${current === 0 && cardId === id && '!bg-[#141414]'} ${
                    current === 1 && cardSlug === slug && '!bg-[#141414]'
                }`}
                bodyStyle={{ padding: '1rem' }}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                onClick={() => activeCardHandler(id, slug)}
            >
                <Row justify={'space-between'} align={'middle'}>
                    <Col span={18}>
                        <Row gutter={10} align={'middle'}>
                            <Col span={6}>
                                <Badge.Ribbon text={rating ? rating.toFixed(1) : 0} placement={'start'} color={'gold'}>
                                    <div className={'!h-20 !w-20'}>
                                        {image && (
                                            <Image
                                                layout={'fill'}
                                                src={image ? image : dummy}
                                                alt={''}
                                                className={styles.QuickItemCard__img}
                                            />
                                        )}
                                        {feature_image && (
                                            <Image
                                                layout={'fill'}
                                                src={feature_image ? feature_image : dummy}
                                                alt={''}
                                                className={styles.QuickItemCard__img}
                                            />
                                        )}
                                    </div>
                                </Badge.Ribbon>
                            </Col>
                            <Col span={16}>
                                <Title className={'!my-0'} ellipsis={{ rows: 1 }} level={5}>
                                    {name}
                                </Title>
                                <Typography className={styles.QuickItemCard__items}>
                                    <span>
                                        <EnvironmentFilled />
                                    </span>
                                    {address ? (
                                        <Paragraph ellipsis={{ rows: 1 }} className={'!my-0'}>
                                            {address}, {city} - {country}
                                        </Paragraph>
                                    ) : (
                                        <Paragraph className={'!my-0'}>{restaurant_name}</Paragraph>
                                    )}
                                </Typography>
                                <Row gutter={30} align={'middle'}>
                                    <Col>
                                        <Typography className={styles.QuickItemCard__items}>
                                            <span>
                                                <CheckCircleFilled />
                                            </span>
                                            {address ? (
                                                <Paragraph ellipsis={{ rows: 1 }} className={'!my-0'}>
                                                    {opening_day ? opening_day : 'Day not set'} -{' '}
                                                    {closing_day ? closing_day : 'Day not set'}
                                                </Paragraph>
                                            ) : (
                                                <Paragraph ellipsis={{ rows: 1 }} className={'!my-0'}>
                                                    {making_time ? making_time : 'Making time not added'}{' '}
                                                    {making_time_type}
                                                </Paragraph>
                                            )}
                                        </Typography>
                                    </Col>
                                    <Col>
                                        <Typography className={styles.QuickItemCard__items}>
                                            <span>
                                                <CheckCircleFilled />
                                            </span>
                                            {opening_time ? (
                                                <Paragraph ellipsis={{ rows: 1 }} className={'!my-0'}>
                                                    {convertHour(opening_time)} - {convertHour(closing_time)}
                                                </Paragraph>
                                            ) : (
                                                <Paragraph ellipsis={{ rows: 1 }} className={'!my-0'}>
                                                    {qty ? qty : 'Qty info not added'} {qty_type}
                                                </Paragraph>
                                            )}
                                        </Typography>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    {price && (
                        <Col span={6} className={'flex justify-end'}>
                            <Title level={4} className={'!my-0'}>
                                $ {price ? price : 0}
                            </Title>
                        </Col>
                    )}
                </Row>
            </Card>
        </>
    )
}

export default QuickItemCard
