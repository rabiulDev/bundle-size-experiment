import React from 'react'
import { Button, Card, Col, Row, Skeleton, Typography } from 'antd'
import styles from '@/components/cards/item-cards/ItemCard.module.scss'
import { ClockCircleFilled, CreditCardFilled } from '@ant-design/icons'
const { Title, Paragraph } = Typography

const ItemCardSkeleton = () => {
    return (
        <>
            <Row className={'w-full'}>
                <Card
                    className={styles.itemCard}
                    bodyStyle={{ padding: '.75rem 1rem' }}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Row>
                        <div className={'h-48 w-full'}>
                            <Skeleton.Image active className={'!w-full !h-full'} />
                        </div>
                    </Row>
                    <Title className={`${styles.itemCard__title} !text-2xl !mt-2 !mb-0`}>
                        <Skeleton
                            active
                            title={{
                                width: '70%',
                                className: 'mt-2 mb-0',
                            }}
                            paragraph={{
                                rows: 0,
                                className: 'hidden',
                            }}
                        />
                    </Title>
                    <Row justify={'space-between'}>
                        <Col className={styles.itemCard__icon}>
                            <Typography className={'flex items-center'}>
                                <ClockCircleFilled className={'text-lg'} />
                                <span className={' my-0 text-lg ml-2'}>
                                    <Skeleton
                                        active
                                        title={{
                                            width: 60,
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
                        <Col className={styles.itemCard__icon}>
                            <Typography className={'flex items-center'}>
                                <CreditCardFilled className={'text-lg'} />
                                <span className={' my-0 text-lg ml-2'}>
                                    <Skeleton
                                        active
                                        title={{
                                            width: 60,
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
                    <Paragraph className={'!mt-0'}>
                        <Skeleton
                            active
                            title={{
                                className: 'hidden',
                            }}
                            paragraph={{
                                rows: 2,
                                className: '!m-0 overflow-hidden',
                            }}
                        />
                    </Paragraph>
                    <Row
                        justify={'space-between'}
                        align={'bottom'}
                        className={'!mt-3 !absolute !bottom-3  !right-3 !left-3'}
                    >
                        <Col>
                            <Title className={'!my-0 !text-xl flex items-center space-x-2'}>
                                <span>$</span>
                                <Skeleton
                                    active
                                    title={{
                                        width: 50,
                                        className: '!m-0',
                                    }}
                                    paragraph={{
                                        rows: 0,
                                        className: 'hidden',
                                    }}
                                />
                            </Title>
                        </Col>
                        <Col>
                            <Skeleton
                                active
                                title={{
                                    width: 70,
                                    className: '!m-0 !h-[30px]',
                                }}
                                paragraph={{
                                    rows: 0,
                                    className: 'hidden',
                                }}
                            />
                        </Col>
                    </Row>
                </Card>
            </Row>
        </>
    )
}

export default ItemCardSkeleton
