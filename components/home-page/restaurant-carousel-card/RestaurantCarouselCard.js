import styles from './RestaurantCarouselCard.module.scss'
import { Button, Card, Col, Rate, Row, Typography, Badge } from 'antd'
import Dummy from '/public/images/food/food-dish.jpg'
import Image from 'next/image'
import { EnvironmentFilled } from '@ant-design/icons'
import { RestaurantHeartIcon } from '@/components/heart-icon/HeartIcon'
import Link from 'next/link'

const { Title } = Typography
const { Ribbon } = Badge

const RestaurantCarouselCard = ({
    id,
    city,
    country,
    favorite,
    food_categories,
    image,
    max_price,
    min_price,
    name,
    slug,
    rating,
}) => {
    return (
        <Ribbon
            text={`$ ${min_price ? Math.round(min_price) : 0} - $ ${max_price ? Math.round(max_price) : 0}`}
            placement={'start'}
            color={'gold'}
        >
            <Row justify={'end'}>
                <RestaurantHeartIcon id={id} slug={slug} isFavorite={favorite} />
            </Row>
            <Link href={`/restaurants/${slug}`} as={`/restaurants/${slug}`}>
                <a>
                    <Card className={`${styles.singleCarousel}`} bodyStyle={{ padding: '.75rem 1rem' }}>
                        <Row type={'flex'} align={'middle'} gutter={12}>
                            <Col span={6} className={styles.singleCarousel__img}>
                                <Image className={'rounded'} layout={'fill'} src={image ? image : Dummy} alt='pizza' />
                            </Col>
                            <Col span={18} flex={'auto'} className={'!pl-4'}>
                                <Rate allowClear={false} defaultValue={rating ? rating : 0} disabled />
                                <Title level={5} className={`${styles.lineClamp} !my-0`}>
                                    {name}
                                </Title>
                                <Typography>
                                    <p className={`${styles.lineClamp} !my-1 !text-sm`}>
                                        Type of food :{' '}
                                        {food_categories.length > 0
                                            ? food_categories.map((el) => <span key={el.id}> {el.name},</span>)
                                            : 'No food categories'}
                                    </p>
                                </Typography>
                                <Row align={'middle'} justify={'space-between'} className={'mt-4 flex-nowrap'}>
                                    <Typography className={'flex text-ellipsis overflow-hidden pr-1'}>
                                        <EnvironmentFilled />
                                        <span className={`${styles.lineClamp} pl-1.5`}>
                                            {city}, {country}
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

export default RestaurantCarouselCard
