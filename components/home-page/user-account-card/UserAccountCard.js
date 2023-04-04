import styles from './UserAccountCard.module.scss'
import { Card, Row, Typography } from 'antd'
import Image from 'next/image'
import Pizza from '/public/images/food/pizza.jpg'
import { StarFilled } from '@ant-design/icons'
import React from 'react'
import Link from 'next/link'

const UserAccountCard = () => {
    return (
        <div className={'!w-full !cursor-pointer'}>
            <Link href={'/signup'}>
                <a>
                    <Card bodyStyle={{ padding: 0, height: '100%', width: '100%' }} className={styles.account}>
                        <Row className={styles.account__image}>
                            <div className={styles.account__image__overlay}></div>
                            <Image src={Pizza} alt={''} />
                        </Row>
                        <Row justify={'center'} align={'middle'} className={'h-full relative z-20'}>
                            <Row className={'flex-col items-center justify-center'}>
                                <StarFilled style={{ color: 'gold' }} className={'text-3xl'} />
                                <Typography>
                                    <p className={'text-2xl !my-0 text-center pb-3'}>Create an account</p>
                                </Typography>
                                <Typography>
                                    <p className={'text-base !my-0 text-center pb-1'}>Give your feedback</p>
                                </Typography>
                            </Row>
                        </Row>
                    </Card>
                </a>
            </Link>
        </div>
    )
}
export default UserAccountCard
