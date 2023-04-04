import React from 'react'
import { Card, Col, Row, Skeleton, Typography } from 'antd'
import styles from './QuickItemCard.module.scss'

const { Title, Paragraph } = Typography

const QuickItemCard = () => {
    return (
        <>
            <Card
                className={styles.QuickItemCard}
                bodyStyle={{ padding: '1rem' }}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <Row justify={'space-between'} align={'middle'}>
                    <Col span={24}>
                        <Row gutter={10} align={'middle'}>
                            <Col sm={5} xs={8}>
                                <Skeleton.Image active />
                            </Col>
                            <Col sm={16} xs={16}>
                                <Title className={'!my-0 !w-full'}>
                                    <Skeleton className={'w-full'} title={false} paragraph={{ rows: 1 }} active />
                                </Title>
                                <Typography className={styles.QuickItemCard__items}>
                                    <Paragraph className={'!my-0 w-full'}>
                                        <Skeleton title={false} paragraph={{ rows: 1 }} active />
                                    </Paragraph>
                                </Typography>
                                <Row gutter={30} align={'middle'}>
                                    <Col span={8}>
                                        <Typography className={styles.QuickItemCard__items}>
                                            <Paragraph className={'!my-0 w-full'}>
                                                <Skeleton title={false} paragraph={{ rows: 1 }} active />
                                            </Paragraph>
                                        </Typography>
                                    </Col>
                                    <Col span={8}>
                                        <Typography className={styles.QuickItemCard__items}>
                                            <Paragraph className={'!my-0 w-full'}>
                                                <Skeleton
                                                    className={'!my-0'}
                                                    title={false}
                                                    paragraph={{ rows: 1 }}
                                                    active
                                                />
                                            </Paragraph>
                                        </Typography>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default QuickItemCard
