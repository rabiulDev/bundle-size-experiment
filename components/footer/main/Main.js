import { FacebookFilled, GoogleOutlined, LinkedinFilled, TwitterOutlined, YoutubeFilled } from '@ant-design/icons'
import { Button, Col, Form, Input, Row, Typography } from 'antd'
import Link from 'next/link'

const { Title } = Typography
const Main = () => {
    const learnMore = [
        {
            id: 1,
            name: 'All about NoshQuad',
            url: '/about-us',
        },
        {
            id: 2,
            name: 'History',
            url: '#',
        },
        {
            id: 3,
            name: 'Contact Us',
            url: '#',
        },
        {
            id: 4,
            name: 'FAQs',
            url: '/faq',
        },
    ]
    const explore = [
        {
            id: 1,
            name: 'Top Cities',
            url: '#',
        },
        {
            id: 2,
            name: 'Top Restaurants',
            url: '#',
        },
        {
            id: 3,
            name: 'Top Food',
            url: '#',
        },
        {
            id: 4,
            name: 'Top Reviewed',
            url: '#',
        },
    ]
    const quickLink = [
        {
            id: 1,
            name: 'Login',
            url: '/signin',
        },
        {
            id: 2,
            name: 'Sign up',
            url: '/signup',
        },
        {
            id: 3,
            name: 'My Account',
            url: '/profile',
        },
        {
            id: 4,
            name: 'Forgot your password?',
            url: '/forgot-password',
        },
    ]
    const additions = [
        {
            id: 1,
            name: 'Add your restaurant',
            url: '/dashboard/restaurants/add-restaurant',
        },
        {
            id: 2,
            name: 'Give Quick Rating',
            url: '#',
        },
        {
            id: 3,
            name: 'Help & Support',
            url: '#',
        },
        {
            id: 5,
            name: 'Blog',
            url: '/blogs',
        },
    ]

    const onFinish = (values) => {
        console.log(values.email)
    }
    return (
        <Row gutter={20} className={'gap-y-5 '}>
            <Col xs={12} md={8} lg={4}>
                <Title level={4} className={'!mt-0'}>
                    LEARN MORE
                </Title>
                {learnMore?.map((el) => (
                    <p key={el.id}>
                        <Link href={el.url} as={el.url}>
                            <a className={'text-white hover:text-blue-400'}>{el.name}</a>
                        </Link>
                    </p>
                ))}
            </Col>
            <Col xs={12} md={8} lg={4}>
                <Title level={4} className={'!mt-0'}>
                    EXPLORE
                </Title>
                {explore?.map((el) => (
                    <p key={el.id}>
                        <Link href={el.url} as={el.url}>
                            <a className={'text-white hover:text-blue-400'}>{el.name}</a>
                        </Link>
                    </p>
                ))}
            </Col>
            <Col xs={12} md={8} lg={4}>
                <Title level={4} className={'!mt-0'}>
                    QUICK LINKS
                </Title>
                {quickLink?.map((el) => (
                    <p key={el.id}>
                        <Link href={el.url} as={el.url}>
                            <a className={'text-white hover:text-blue-400'}>{el.name}</a>
                        </Link>
                    </p>
                ))}
            </Col>
            <Col xs={12} md={8} lg={4}>
                <Title level={4} className={'!mt-0'}>
                    ADDITIONS
                </Title>
                {additions?.map((el) => (
                    <p key={el.id}>
                        <Link href={el.url} as={el.url}>
                            <a className={'text-white hover:text-blue-400'}>{el.name}</a>
                        </Link>
                    </p>
                ))}
            </Col>

            <Col xs={24} md={8}>
                <Typography>
                    <p>Phone Number &#58; 00215-2542</p>
                    <p>Email &#58; contact@noshquad.com</p>
                </Typography>
                <Form requiredMark={false} name='subscribe' layout='vertical' onFinish={onFinish}>
                    <Row className={'!w-full'} align={'middle'}>
                        <Col span={16}>
                            <Form.Item
                                name='email'
                                rules={[{ required: true, message: 'Email is required' }, { type: 'email' }]}
                            >
                                <Input className={'!rounded-r-none'} name='email' placeholder='Enter your email' />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item>
                                <Button className={'!rounded-l-none'} type='primary' htmlType='submit'>
                                    Subscribe
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                <Row className={'w-full gap-4'} align={'middle'}>
                    <a href='https://www.facebook.com/NoshQuad/' target={'_blank'} rel={'noreferrer'}>
                        <Typography className={'text-lg sm:text-2xl'}>
                            <FacebookFilled />
                        </Typography>
                    </a>
                    <a href='#' target={'_blank'} rel={'noreferrer'}>
                        <Typography className={'text-lg sm:text-2xl'}>
                            <GoogleOutlined />
                        </Typography>
                    </a>
                    <a href='https://twitter.com/nosh_quad' target={'_blank'} rel={'noreferrer'}>
                        <Typography className={'text-lg sm:text-2xl'}>
                            <TwitterOutlined />
                        </Typography>
                    </a>
                    <a href='#' target={'_blank'} rel={'noreferrer'}>
                        <Typography className={'text-lg sm:text-2xl'}>
                            <YoutubeFilled />
                        </Typography>
                    </a>
                    <a href='https://www.linkedin.com/company/noshquad/' target={'_blank'} rel={'noreferrer'}>
                        <Typography className={'text-lg sm:text-2xl'}>
                            <LinkedinFilled />
                        </Typography>
                    </a>
                </Row>
            </Col>
        </Row>
    )
}

export default Main
