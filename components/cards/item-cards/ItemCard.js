import React from 'react'
import styles from './ItemCard.module.scss'
import Image from 'next/image'
import pizza from '@/public/images/food/food-dish.jpg'
import { Button, Card, Col, Row, Typography } from 'antd'
import { ClockCircleFilled, CreditCardFilled } from '@ant-design/icons'
import { FoodHeartIcon } from '@/components/heart-icon/HeartIcon'
import Link from 'next/link'

const { Title, Paragraph } = Typography

const ItemCard = (props) => {
    const {
        id,
        image,
        name,
        slug,
        description,
        price,
        time,
        time_type,
        qty,
        qty_type,
        favorite,
        item_type = '',
    } = props

    return (
        <>
            <Row>
                <Link href={`/foods/${slug}`} as={`/foods/${slug}`}>
                    <a className={'w-full'}>
                        <Card
                            className={styles.itemCard}
                            bodyStyle={{ padding: '.75rem 1rem' }}
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                        >
                            <Row className={'relative'}>
                                <FoodHeartIcon type={item_type} id={id} slug={slug} isFavorite={favorite} />
                                <div className={'h-48 w-full relative'}>
                                    <Image
                                        className={'rounded object-cover'}
                                        src={image ? image : pizza}
                                        alt={name}
                                        layout={'fill'}
                                    />
                                </div>
                            </Row>
                            <Title ellipsis={{ rows: 1 }} className={`${styles.itemCard__title} !text-2xl !mt-2 !mb-0`}>
                                {name}
                            </Title>
                            <Row justify={'space-between'}>
                                <Col className={styles.itemCard__icon}>
                                    <Typography>
                                        <ClockCircleFilled className={'text-lg'} />
                                        <span className={'my-0 text-lg ml-1'}>{time ? time : ''}</span>
                                        <span className={'my-0 text-lg ml-1'}>
                                            {time_type ? time_type : 'Not added'}
                                        </span>
                                    </Typography>
                                </Col>
                                <Col className={styles.itemCard__icon}>
                                    <Typography>
                                        <CreditCardFilled className={'text-lg'} />
                                        <span className={'my-0 text-lg ml-2'}>{qty ? qty : ''}</span>
                                        <span className={'my-0 text-lg ml-1'}>{qty_type ? qty_type : 'No added'}</span>
                                    </Typography>
                                </Col>
                            </Row>
                            <Paragraph ellipsis={{ rows: 2 }} className={'!mt-0'}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: description !== 'null' ? description : `<p>No description added</p>`,
                                    }}
                                />
                            </Paragraph>
                            <Row
                                justify={'space-between'}
                                align={'bottom'}
                                className={'!mt-3 !absolute !bottom-3  !right-3 !left-3'}
                            >
                                <Col>
                                    <Title className={'!my-0 !text-xl'}>$ {price ? price : '0'}</Title>
                                </Col>
                                <Col>
                                    <Link href={`/foods/${slug}`} as={`/foods/${slug}`}>
                                        <a>
                                            <Button type='primary'>Details</Button>
                                        </a>
                                    </Link>
                                </Col>
                            </Row>
                        </Card>
                    </a>
                </Link>
            </Row>
        </>
    )
}

export default ItemCard
