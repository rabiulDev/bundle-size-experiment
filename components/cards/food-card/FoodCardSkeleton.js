import React from 'react'
import styles from '@/components/cards/food-card/FoodCard.module.scss'
import { Card, Col, Divider, Row, Skeleton, Typography } from 'antd'
import { ClockCircleFilled, CreditCardFilled, EnvironmentFilled, HomeFilled } from '@ant-design/icons'
const { Text, Title } = Typography

const FoodCardSkeleton = () => {
    return (
        <div className={styles.foodCard}>
            <Card bodyStyle={{ padding: '.75rem', height: '100%' }} className={styles.foodCard__main}>
                <Row gutter={16} align={'middle'}>
                    <Col span={24} md={6}>
                        <Skeleton.Image active className={'!w-full !min-h-[240px] !h-full !py-[6px]'} />
                    </Col>
                    <Col span={24} md={18}>
                        <Row align={'middle'} justify={'space-between'}>
                            <Col>
                                <Skeleton
                                    active
                                    title={{
                                        width: 190,
                                        className: '!m-0',
                                    }}
                                    paragraph={{
                                        rows: 0,
                                        className: 'hidden',
                                    }}
                                />
                            </Col>
                            <Col>
                                <Text className={'flex items-center space-x-1 !my-0 text-2xl md:text-3xl font-semibold'}>
                                    <span>$</span>
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
                                </Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Title level={3} className={'!my-2'}>
                                    <Skeleton
                                        active
                                        title={{
                                            width: 110,
                                            className: '!m-0',
                                        }}
                                        paragraph={{
                                            rows: 0,
                                            className: 'hidden',
                                        }}
                                    />
                                </Title>
                            </Col>
                            <Col span={24} className={'mt-1'}>
                                <Typography className={'flex items-center'}>
                                    <HomeFilled className={'text-lg md:text-xl'} />
                                    <span className={'!my-0 text-base ml-2'}>
                                        <Skeleton
                                            active
                                            title={{
                                                width: 110,
                                                className: 'mt-2 mb-0',
                                            }}
                                            paragraph={{
                                                rows: 0,
                                                className: 'hidden',
                                            }}
                                        />
                                    </span>
                                </Typography>
                            </Col>
                            <Col span={24} className={'mt-1'}>
                                <Row gutter={14}>
                                    <Col>
                                        <Typography className={'flex items-center'}>
                                            <ClockCircleFilled className={'text-lg md:text-xl'} />
                                            <span className={'!my-0 text-base ml-2'}>
                                                <Skeleton
                                                    active
                                                    title={{
                                                        width: 90,
                                                        className: 'mt-2 mb-0',
                                                    }}
                                                    paragraph={{
                                                        rows: 0,
                                                        className: 'hidden',
                                                    }}
                                                />
                                            </span>
                                        </Typography>
                                    </Col>

                                    <Col>
                                        <Typography className={'flex items-center'}>
                                            <CreditCardFilled className={'text-lg md:text-xl'} />
                                            <span className={'!my-0 text-base ml-2'}>
                                                <Skeleton
                                                    active
                                                    title={{
                                                        width: 70,
                                                        className: 'mt-2 mb-0',
                                                    }}
                                                    paragraph={{
                                                        rows: 0,
                                                        className: 'hidden',
                                                    }}
                                                />
                                            </span>
                                        </Typography>
                                    </Col>
                                </Row>
                            </Col>

                            <Col span={24}>
                                <Typography>
                                    <Skeleton
                                        active
                                        title={{
                                            width: '100%',
                                            className: '!mt-2'
                                        }}
                                        paragraph={{
                                            rows: 0,
                                            className: 'hidden',
                                        }}
                                    />
                                </Typography>
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
                            <Col span={24} md={15} className={'!mt-2'}>
                                <Text className={'text-base flex item-center'}>
                                    <EnvironmentFilled />
                                    <span className={'w-full !my-0 ml-1 md:ml-2'}>
                                        <Skeleton
                                            active
                                            title={{
                                                width: '100%',
                                                className: '!m-0',
                                            }}
                                            paragraph={{
                                                rows: 0,
                                                className: 'hidden',
                                            }}
                                        />
                                    </span>
                                </Text>
                            </Col>
                            <Col span={24} md={9} className={'!mt-2'}>
                                <Typography className={'w-full text-base flex item-center md:justify-end'}>
                                    <ClockCircleFilled />
                                    <span className={'w-2/3 !my-0 ml-1 md:ml-2'}>
                                        <Skeleton
                                            active
                                            title={{
                                                width: '100%',
                                                className: '!m-0',
                                            }}
                                            paragraph={{
                                                rows: 0,
                                                className: 'hidden',
                                            }}
                                        />
                                    </span>
                                </Typography>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default FoodCardSkeleton
