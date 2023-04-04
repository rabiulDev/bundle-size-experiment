import React, { useState } from 'react'
import { Button, Col, Form, Input, notification, Row, Select, Typography } from 'antd'
import { PlusOutlined, SearchOutlined, StarFilled } from '@ant-design/icons'
import styles from './Hero.module.scss'
import Achievement from '@/components/home-page/achievement/Achievement'
import { useRouter } from 'next/router'
import { selectOptions } from '@/utils/options'
import QuickAdd from '@/components/modal/quick-add/QuickAdd'
import { useSession } from 'next-auth/react'
// import { fetchSuggestionRestaurantsList } from '@/stores/restaurants'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchCountries } from '@/stores/locations'

const { Title, Text } = Typography
const Hero = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { data: session } = useSession()
    // const { suggestionRestaurantList } = useSelector((state) => state.restaurants)
    // const isExistRstrntList = suggestionRestaurantList.data?.length
    // const {
    //     countries: { loading, data },
    // } = useSelector((state) => state.locations)

    const [current, setCurrent] = useState(0)
    const [buttonStep, setButtonStep] = useState(0)
    const [addItem, setAddItem] = useState(false)
    const [addRating, setAddRating] = useState(false)
    const [openItemModal, setOpenItemModal] = useState(false)
    const [countryName, setCountryName] = useState('')
    const [foodButton, setFoodButton] = useState(false)

    // const countries = data.length > 0 && selectOptions(data)

    const achievements = [
        {
            title: '1.5K Foods Available',
        },
        {
            title: '200 Contributors',
        },
        {
            title: '500 Registered Users',
        },
    ]

    const handleSubmit = ({ search, country }) => {
        void router.push(`/foods/search/${search?.toLowerCase()}?country=${country}&country_name=${countryName}`)
    }

    const showModal = () => {
        if (session) {
            setButtonStep(0)
            setCurrent(0)
            setAddItem(true)
            setOpenItemModal(true)
            setFoodButton(false)
            // if (!isExistRstrntList) {
            //     dispatch(fetchSuggestionRestaurantsList({ page: 1, pageSize: 10 }))
            // }
        } else {
            notification['warning']({
                message: 'Warning!',
                description: 'Please SignIn first',
                placement: 'topRight',
            })
        }
    }
    const ratingModalHandle = () => {
        if (session) {
            setButtonStep(1)
            setCurrent(0)
            setAddRating(true)
            setOpenItemModal(true)
            setFoodButton(false)
            // if (!isExistRstrntList) {
            //     dispatch(fetchSuggestionRestaurantsList({ page: 1, pageSize: 10 }))
            // }
        } else {
            notification['warning']({
                message: 'Warning!',
                description: 'Please SignIn first',
                placement: 'topRight',
            })
        }
    }
    const handleFocus = () => {
        // if (!data?.length) {
        //     dispatch(fetchCountries({ page: 1, pageSize: 250 }))
        // }
    }
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.hero__inner}>
                    <Text className={'text-lg'}>With NoshQuad, discover the</Text>
                    <Title className={'!my-5 text-center !text-3xl md:!text-5xl'}>
                        Best Food and Restaurants Near You
                    </Title>
                    <Typography>
                        <p className={'text-lg text-center !my-0 md:!text-xl'}>
                            Join the foodie revolution and discover the best dishes and restaurants globally.
                        </p>
                    </Typography>
                    <Form onFinish={handleSubmit} name='food_search' className={'w-full'}>
                        <Row className={styles.hero__search} gutter={{ md: 6 }}>
                            <Col xs={24} md={20}>
                                <Row className={'gap-3 md:gap-0'} gutter={{ md: 6 }}>
                                    <Col xs={24} md={17} lg={18}>
                                        <Form.Item
                                            name='search'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '',
                                                },
                                            ]}
                                            className={'!m-0'}
                                        >
                                            <Input size={'large'} placeholder='Search' prefix={<SearchOutlined />} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={7} lg={6}>
                                        <Form.Item
                                            name='country'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '',
                                                },
                                            ]}
                                            className={'!m-0'}
                                        >
                                            <Select
                                                className={'w-full md:w-40'}
                                                size={'large'}
                                                showSearch
                                                placeholder='Select a country'
                                                optionFilterProp='children'
                                                filterOption={(input, option) =>
                                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                                }


                                                onChange={(id, option) => setCountryName(option?.label)}

                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={24} md={4}>
                                <Button
                                    size={'large'}
                                    type={'primary'}
                                    htmlType='submit'
                                    className={'w-full'}
                                    loading={false}
                                >
                                    Find Food
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <Row
                        className={styles.hero__inner__achievement}
                        justify={{ xs: 'start', md: 'center' }}
                        align={'middle'}
                    >
                        {achievements?.map((el, index) => (
                            <Col key={index} flex={1} xs={24} className={'text-start md:text-center '}>
                                <Achievement title={el.title} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
            <Row className={'fixed top-[90vh] z-[99] !right-4'}>
                <Col>
                    <span className={'mr-2'}>
                        <Button onClick={showModal} size={'large'} type={'primary'}>
                            <PlusOutlined /> Add
                        </Button>
                    </span>
                    <span>
                        <Button size={'large'} type={'primary'} onClick={ratingModalHandle}>
                            <StarFilled /> Quick Rating
                        </Button>
                    </span>
                </Col>

                {/*<QuickAdd*/}
                {/*    openItemModal={openItemModal}*/}
                {/*    setOpenItemModal={setOpenItemModal}*/}
                {/*    addItem={addItem}*/}
                {/*    addRating={addRating}*/}
                {/*    setCurrent={setCurrent}*/}
                {/*    current={current}*/}
                {/*    buttonStep={buttonStep}*/}
                {/*    foodButton={foodButton}*/}
                {/*    setFoodButton={setFoodButton}*/}
                {/*/>*/}
            </Row>
        </>
    )
}

export default Hero
