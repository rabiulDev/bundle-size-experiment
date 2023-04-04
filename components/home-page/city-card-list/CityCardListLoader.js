import React from 'react'
import styles from '@/components/home-page/city-card-list/CityCardList.module.scss'
import Link from 'next/link'
import { Card, Col, Divider, Rate, Row, Skeleton, Tooltip, Typography } from 'antd'
import Image from 'next/image'
import DummyCity from '@/public/images/dummy-city.jpg'
import { MenuOutlined, ShopOutlined } from '@ant-design/icons'
const { Text, Title } = Typography
const CityCardListLoader = () => {
    return (
        <Col span={24}>
            <div className={styles.cityListCard}>
                <Card bodyStyle={{ padding: '.75rem', height: '100%' }} className={styles.cityListCard__main}>
                    <Row gutter={[12, 12]}>
                        <Col span={24} md={6}>
                            <Row className={styles.cityImage}>
                                <Skeleton.Image active className={'!w-full !h-full '} />
                            </Row>
                        </Col>
                        <Col span={24} md={18}>
                            <Row align={'middle'}>
                                <Skeleton
                                    active
                                    title={{
                                        width: 160,
                                        className: '!mt-2 !mb-1',
                                    }}
                                    paragraph={{
                                        rows: 0,
                                        className: 'hidden',
                                    }}
                                />
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Skeleton
                                        active
                                        title={{
                                            width: 120,
                                            className: '!mb-2',
                                        }}
                                        paragraph={{
                                            rows: 0,
                                            className: 'hidden',
                                        }}
                                    />
                                </Col>
                                <Col span={24}>
                                    <Skeleton
                                        active
                                        title={{
                                            width: 90,
                                            className: '!m-0',
                                        }}
                                        paragraph={{
                                            rows: 0,
                                            className: 'hidden',
                                        }}
                                    />
                                </Col>
                                <Col span={24}>
                                    <Skeleton
                                        active
                                        title={{
                                            width: '100%',
                                            className: '!m-0 hidden',
                                        }}
                                        paragraph={{
                                            rows: 2,
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Divider className={'!mt-3 !mb-4'} />
                            <Row align={'middle'} justify={'space-between'}>
                                <Col>
                                    <Row gutter={16} align={'middle'}>
                                        <Col>
                                            <ShopOutlined className={'text-xl'} />
                                        </Col>

                                        <Col>
                                            <MenuOutlined className={'text-xl'} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Text className={'!my-0'}>
                                        <Skeleton
                                            active
                                            title={{
                                                width: 140,
                                                className: '!m-0',
                                            }}
                                            paragraph={{
                                                rows: 0,
                                                className: 'hidden',
                                            }}
                                        />
                                    </Text>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </div>
        </Col>
    )
}

export default CityCardListLoader
