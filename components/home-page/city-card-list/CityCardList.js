import React from 'react'
import styles from './CityCardList.module.scss'
import { Card, Col, Divider, Rate, Row, Tooltip, Typography } from 'antd'
import { MenuOutlined, ShopOutlined } from '@ant-design/icons'
import Link from 'next/link'
import Image from 'next/image'
import DummyCity from '/public/images/dummy-city.jpg'

const { Text, Title } = Typography
const CityCardList = ({ state, rating, name, country, pricing, total_foods, total_restaurants, image }) => {
    return (
        <div className={styles.cityListCard}>
            <Link href={`/states/${state?.name}/cities/${name}`} as={`/states/${state?.name}/cities/${name}`}>
                <a>
                    <Card bodyStyle={{ padding: '.75rem', height: '100%' }} className={styles.cityListCard__main}>
                        <Row>
                            <Col span={24} md={6}>
                                <Row className={styles.cityImage}>
                                    <Image layout={'fill'} src={image ? image : DummyCity} alt={''} />
                                </Row>
                            </Col>
                            <Col span={24} md={18} className={'pt-5 md:pl-4 md:pt-0'}>
                                <Row align={'middle'}>
                                    <Rate
                                        defaultValue={rating ? rating.toFixed(1) : 0}
                                        allowHalf
                                        allowClear={false}
                                        disabled
                                    />{' '}
                                    <Text className={'!my-0 font-semibold text-lg pl-4'}>
                                        {rating ? rating.toFixed(1) : 0.0}
                                    </Text>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <Title level={3} className={'!my-1'}>
                                            {name}
                                        </Title>
                                    </Col>
                                    <Col span={24}>
                                        <Text className={'!my-0 font-medium text-lg'}>{country}</Text>
                                    </Col>
                                    <Col>
                                        <Typography>
                                            <p className={'!my-2 text-base'}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloremque
                                                et id maiores modi molestiae molestias nam numquam placeat sint.
                                            </p>
                                        </Typography>
                                    </Col>
                                </Row>
                                <Divider className={'!mt-3 !mb-4'} />
                                <Row align={'middle'} justify={'space-between'}>
                                    <Col>
                                        <Row gutter={16} align={'middle'}>
                                            <Col>
                                                <Tooltip placement={'topLeft'} title={'Restaurants'}>
                                                    <Typography className={'flex gap-2 items-center'}>
                                                        <ShopOutlined className={'text-xl'} />
                                                        <p className={'text-xl !my-0 !mb-0'}>{total_restaurants}</p>
                                                    </Typography>
                                                </Tooltip>
                                            </Col>

                                            <Col>
                                                <Tooltip placement={'topLeft'} title={'Foods'}>
                                                    <Typography className={'flex gap-2 items-center'}>
                                                        <MenuOutlined className={'text-xl'} />
                                                        <p className={'text-xl !my-0 !mb-0'}>{total_foods}</p>
                                                    </Typography>
                                                </Tooltip>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Text className={'!my-0 text-3xl font-semibold'}>
                                            &#36;{Math.round(pricing.min_price)} - &#36;{Math.round(pricing.max_price)}
                                        </Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </a>
            </Link>
        </div>
    )
}

export default CityCardList
