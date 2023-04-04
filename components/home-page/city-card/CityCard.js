import React from 'react'
import styles from './CityCard.module.scss'
import { Card, Col, Row, Tag, Tooltip, Typography } from 'antd'
import { MenuOutlined, ShopOutlined, StarFilled } from '@ant-design/icons'
import Link from 'next/link'
import Image from 'next/image'
import DummyCity from '/public/images/dummy-city.jpg'

const { Text, Title } = Typography
const CityCard = ({
    id,
    name,
    state,
    country,
    popular,
    rising,
    pricing,
    total_foods,
    total_restaurants,
    rating,
    image,
}) => {
    return (
        <div className={`${styles.cityCard} group`}>
            <Link href={`/states/${state?.name}/cities/${name}`} as={`/states/${state?.name}/cities/${name}`}>
                <a>
                    <Card bodyStyle={{ padding: '.75rem', height: '100%', position: 'relative' }} className={styles.cityCard__main}>
                        <div className={'absolute top-0 left-0 h-full w-full bg-black/20 group-hover:bg-black/60 group-hover:duration-200 z-20'}></div>
                        <span className={'w-full h-full absolute top-0 left-0 z-10'}>
                            <Image
                                layout={'fill'}
                                className={'rounded object-cover'}
                                src={image ? image : DummyCity}
                                alt={''}
                            />
                        </span>
                        <Row align={'middle'} justify={'space-between'} className={styles.cityCard__main__topRow}>
                            <Tag color='blue' className={'uppercase'}>
                                {rising === true ? 'rising' : popular === true ? 'Popular' : 'standard'}
                            </Tag>
                            <Col>
                                <StarFilled style={{ color: 'gold' }} />
                                <Text className={'pl-2 font-medium'}>{rating ? rating.toFixed(1) : 0}</Text>
                            </Col>
                        </Row>

                        <Row align={'middle'} justify={'center'} className={`${styles.cityCard__main__content} relative z-30`}>
                            <Typography>
                                <p className={'text-3xl !mt-0 !mb-3 card_text__shadow'}>{id}</p>
                            </Typography>
                            <Title level={3} className={'!my-0 text-center card_text__shadow'}>
                                {name}
                            </Title>
                            <Text className={'!my-0 text-base card_text__shadow'}>{country}</Text>
                            <Title level={2} className={'!mb-0 !mt-3 card_text__shadow'}>
                                &#36;{Math.round(pricing?.min_price)} - &#36;{Math.round(pricing?.max_price)}
                            </Title>
                        </Row>

                        <Row align={'middle'} className={styles.cityCard__main__bottomRow} gutter={16}>
                            <Col>
                                <Tooltip placement={'topLeft'} title={'Restaurants'}>
                                    <Typography className={'flex gap-2 items-center'}>
                                        <ShopOutlined className={'text-xl card_text__shadow'} />
                                        <p className={'text-xl !my-0 !mb-0 card_text__shadow'}>{total_restaurants}</p>
                                    </Typography>
                                </Tooltip>
                            </Col>
                            <Col>
                                <Tooltip placement={'topLeft'} title={'Foods'}>
                                    <Typography className={'flex gap-2 items-center'}>
                                        <MenuOutlined className={'text-xl card_text__shadow'} />
                                        <p className={'text-xl !my-0 !mb-0 card_text__shadow'}>{total_foods}</p>
                                    </Typography>
                                </Tooltip>
                            </Col>
                        </Row>
                    </Card>
                </a>
            </Link>
        </div>
    )
}

export default CityCard
