import React from 'react'
import { Typography, Row, Col, Card, Button } from 'antd'
import styles from './Newsletter.module.scss'
import Image from 'next/image'
import Pizza from '/public/images/food/pizza.jpg'
import Link from 'next/link'

const { Title } = Typography

const Newsletter = () => {
    return (
        <Row className={styles.newsletter}>
            <div className={styles.newsletter__overlay}></div>
            <Image src={Pizza} alt={''} />
            <Card className={styles.newsletter__card} bodyStyle={{ padding: '3rem' }}>
                <Title className={'!my-0 sm:!text-4xl !text-2xl'}>Are you a Restaurant Owner?</Title>
                <Typography>
                    <p className={'!my-4 sm:!text-base !text-sm'}>
                        Join Us to increase your online visibility. You’ll have access to even more customers <br></br>{' '}
                        who are looking to enjoy your tasty dishes at home.
                    </p>
                </Typography>
                <Row justify={'center'}>
                    <Link href={'/signup'} as={'/signup'}>
                        <a>
                            <Button type={'primary'} size={'large'} className={'uppercase mt-2'}>
                                Signup now
                            </Button>
                        </a>
                    </Link>
                </Row>
            </Card>
        </Row>
    )
}

export default Newsletter
