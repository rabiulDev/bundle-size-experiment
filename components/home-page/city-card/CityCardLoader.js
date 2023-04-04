import React from 'react'
import styles from '@/components/home-page/city-card/CityCard.module.scss'
import { Card, Col, Row, Skeleton, Tag, Tooltip, Typography } from 'antd'
import { MenuOutlined, ShopOutlined, StarFilled } from '@ant-design/icons'
const { Text, Title } = Typography
const CityCardLoader = () => {
    return (
        <Col xs={24} md={10} xl={7}>
            <div className={styles.cityCard}>
                <Card bodyStyle={{ padding: '.75rem', height: '100%' }} className={styles.cityCard__main}>
                    <Row align={'middle'} justify={'space-between'} className={styles.cityCard__main__topRow}>
                        <Col>
                            <Skeleton
                                active
                                title={{
                                    width: 75,
                                    className: '!m-0',
                                }}
                                paragraph={{
                                    rows: 0,
                                    className: 'hidden',
                                }}
                            />
                        </Col>
                        <Col>
                            <Skeleton
                                active
                                title={{
                                    width: 30,
                                    className: '!m-0',
                                }}
                                paragraph={{
                                    rows: 0,
                                    className: 'hidden',
                                }}
                            />
                        </Col>
                    </Row>

                    <Row align={'middle'} justify={'center'} className={styles.cityCard__main__content}>
                        <Text className={'!my-2'}>
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
                        <Text className={'!my-0'}>
                            <Skeleton
                                active
                                title={{
                                    width: 100,
                                    className: '!m-0',
                                }}
                                paragraph={{
                                    rows: 0,
                                    className: 'hidden',
                                }}
                            />
                        </Text>
                        <Text className={'!my-4'}>
                            <Skeleton
                                active
                                title={{
                                    width: 120,
                                    className: '!m-0',
                                }}
                                paragraph={{
                                    rows: 0,
                                    className: 'hidden',
                                }}
                            />
                        </Text>
                    </Row>

                    <Row align={'middle'} className={styles.cityCard__main__bottomRow} gutter={12}>
                        <Col>
                            <ShopOutlined className={'text-xl'} />
                        </Col>
                        <Col>
                            <MenuOutlined className={'text-xl'} />
                        </Col>
                    </Row>
                </Card>
            </div>
        </Col>
    )
}

export default CityCardLoader
