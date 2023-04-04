import React from 'react'
import styles from './FoodCard.module.scss'
import { Card, Col, Divider, Rate, Row, Typography } from 'antd'
import {
    WarningOutlined,
    VideoCameraOutlined,
    ClockCircleFilled,
    CreditCardFilled,
    HomeFilled,
    WifiOutlined,
    CarFilled,
    EnvironmentFilled,
} from '@ant-design/icons'
import Link from 'next/link'
import Image from 'next/image'
import FoodDish from '/public/images/food/food-dish.jpg'
import { convertHour } from '@/utils/moment'
import { FoodHeartIcon } from '@/components/heart-icon/HeartIcon'

const { Text, Title } = Typography

const FoodCard = ({ food }) => {
    const {
        id,
        name,
        slug,
        rating,
        price,
        favorite,
        feature_image,
        making_time,
        making_time_type,
        qty,
        qty_type,
        description,
        restaurant_info,
    } = food
    // const facilities = [
    //     {
    //         id: 1,
    //         icon: <WifiOutlined />,
    //     },
    //     {
    //         id: 2,
    //         icon: <HomeFilled />,
    //     },
    //     {
    //         id: 3,
    //         icon: <WarningOutlined />,
    //     },
    //     {
    //         id: 4,
    //         icon: <CarFilled />,
    //     },
    //     {
    //         id: 5,
    //         icon: <VideoCameraOutlined />,
    //     },
    // ]
    return (
        <div className={styles.foodCard}>
            <Link href={`/foods/${slug}`} as={`/foods/${slug}`}>
                <a>
                    <div className={'absolute w-full h-full z-10'}></div>
                </a>
            </Link>
            <Card bodyStyle={{ padding: '.75rem', height: '100%' }} className={styles.foodCard__main}>
                <Row gutter={16} align={'middle'}>
                    <Col span={24} md={6}>
                        <Row className={styles.foodImage}>
                            <FoodHeartIcon id={id} slug={slug} isFavorite={favorite} />
                            <Image src={feature_image ? feature_image : FoodDish} alt={name} layout={'fill'} />
                        </Row>
                    </Col>
                    <Col className={'mt-4 md:mt-0'} span={24} md={18}>
                        <Row align={'middle'} justify={'space-between'}>
                            <Col>
                                <Rate defaultValue={rating} allowHalf allowClear={false} disabled />
                                <Text className={'!my-0 font-semibold text-lg pl-4'}>{rating.toFixed(1)}</Text>
                            </Col>
                            <Col>
                                <Text className={'!my-0 text-2xl md:text-3xl font-semibold'}>
                                    ${price ? price : '0'}
                                </Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Title level={3} className={'!my-2'}>
                                    {name}
                                </Title>
                            </Col>
                            <Col span={24} className={'mt-1'}>
                                <Typography>
                                    <HomeFilled className={'text-lg md:text-xl'} />
                                    <span className={'!my-0 text-base ml-2'}>{restaurant_info.name}</span>
                                </Typography>
                            </Col>
                            <Col span={24} className={'mt-1'}>
                                <Row gutter={14}>
                                    <Col>
                                        <Typography>
                                            <ClockCircleFilled className={'text-lg md:text-xl'} />
                                            <span className={'!my-0 text-base ml-2'}>
                                                {making_time ? making_time : ''}{' '}
                                                {making_time_type ? making_time_type : ''}{' '}
                                                {making_time ? 'approx' : 'Not added'}
                                            </span>
                                        </Typography>
                                    </Col>

                                    <Col>
                                        <Typography>
                                            <CreditCardFilled className={'text-lg md:text-xl'} />
                                            <span className={'!my-0 text-base ml-2'}>
                                                {qty ? qty : ''} {qty_type ? qty_type : 'Not added'}
                                            </span>
                                        </Typography>
                                    </Col>
                                </Row>
                            </Col>

                            <Col>
                                <Title className={'!my-0'} ellipsis={{ rows: 1 }}>
                                    <span className={`${styles.lineClamp} !my-0 text-base flex`}
                                    dangerouslySetInnerHTML={{
                                                __html: description ? description : '<p>Description not added yet</p>',
                                            }}
                                    />
                                </Title>
                            </Col>
                        </Row>
                        <Divider className={'!my-3'} />
                        <Row align={'middle'} justify={'space-between'}>
                            {/* <Col className={'!mt-2'}>
                                      <Row gutter={10} align={'middle'}>
                                          {facilities?.map((item) => (
                                              <Col key={item.id}>
                                                  <Typography className={'text-base md:text-lg'}>
                                                      {item.icon}
                                                  </Typography>
                                              </Col>
                                          ))}
                                      </Row>
                                  </Col> */}
                            <Col md={15} className={'!mt-2'}>
                                <Text className={'text-base'} ellipsis={true}>
                                    <EnvironmentFilled />
                                    <span className={'!my-0 ml-1 md:ml-2'}>
                                        {restaurant_info?.address ? restaurant_info.address : ''},{' '}
                                        {restaurant_info ? restaurant_info?.city : ''} -{' '}
                                        {restaurant_info ? restaurant_info?.country : 'Not added'}
                                    </span>
                                </Text>
                            </Col>
                            <Col md={9} className={'!mt-2 flex justify-end'}>
                                {restaurant_info.opening_time ? (
                                    <Typography className={'text-base'}>
                                        <ClockCircleFilled />
                                        <span className={'!my-0 ml-1 md:ml-2'}>
                                            {convertHour(restaurant_info.opening_time)} -{' '}
                                            {convertHour(restaurant_info.closing_time)}
                                        </span>
                                    </Typography>
                                ) : (
                                    'Not added'
                                )}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default FoodCard
