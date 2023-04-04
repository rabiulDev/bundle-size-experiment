import styles from './FoodCarouselCard.module.scss'
import { Button, Card, Col, Rate, Row, Typography, Badge } from 'antd'
import Dummy from '/public/images/food/food-dish.jpg'
import Image from 'next/image'
import { EnvironmentFilled } from '@ant-design/icons'
import Link from 'next/link'
import { FoodHeartIcon } from '@/components/heart-icon/HeartIcon'

const { Title } = Typography
const { Ribbon } = Badge

const FoodCarouselCard = ({ el }) => {
    return (
        <Ribbon text={el.price ? `$ ${Math.round(el.price)}`: '$0' } placement={'start'} color={'gold'}>
            <Row justify={'end'}>
                <FoodHeartIcon id={el.id} slug={el.slug} isFavorite={el?.favorite} />
            </Row>
            <Link href={`/foods/${el.slug}`} as={`/foods/${el.slug}`}>
                <a>
                    <Card className={`${styles.singleCarousel}`} bodyStyle={{ padding: '.75rem 1rem' }}>
                        <Row type={'flex'} align={'middle'} gutter={12}>
                            <Col xs={7} lg={6} className={styles.singleCarousel__img}>
                                <Image
                                    className={'rounded'}
                                    layout={'fill'}
                                    src={el.feature_image ? el.feature_image : Dummy}
                                    alt=''
                                />
                            </Col>
                            <Col xs={17} lg={18} flex={'auto'} className={'!pl-4'}>
                                <Rate allowClear={false} defaultValue={el.rating} disabled />
                                <Title level={5} className={`${styles.lineClamp} !my-0`}>
                                    {el.name}
                                </Title>
                                <Typography>
                                    <p className={`${styles.lineClamp} !my-1 !text-sm`}>
                                        Restaurant Name : {el.restaurant_name}
                                    </p>
                                </Typography>
                                <Row align={'middle'} justify={'space-between'} className={'mt-4 flex-nowrap gap-2'}>
                                    <Typography className={'flex text-ellipsis overflow-hidden'}>
                                        <EnvironmentFilled />
                                        <span className={`${styles.lineClamp} pl-1.5`}>
                                            {el.city ? el. city : "No city added"}, {el.country ? el.country : "No country added"}{' '}
                                        </span>
                                    </Typography>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </a>
            </Link>
        </Ribbon>
    )
}

export default FoodCarouselCard
