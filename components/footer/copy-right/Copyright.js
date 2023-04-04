import { Col, Divider, Row, Select, Typography } from 'antd'
import Link from 'next/link'
import React from 'react'

export default function Copyright() {
    const handleChange = (value) => {
        console.log(`selected ${value}`)
    }

    return (
        <Row gutter={10} align={'middle '} className={'mb-6'}>
            <Col span={24} md={6}>
                <Row gutter={10}>
                    <Col className={'mb-3 lg:mb-0 hidden'}>
                        <Select
                            defaultValue='bangladesh'
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'bangladesh',
                                    label: 'Bangladesh',
                                },
                                {
                                    value: 'pakistan',
                                    label: 'Pakistan',
                                },
                                {
                                    value: 'china',
                                    label: 'China',
                                },
                            ]}
                        />
                    </Col>
                    <Col className={'hidden'}>
                        <Select
                            defaultValue='usd'
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'usd',
                                    label: 'USD',
                                },
                                {
                                    value: 'eur',
                                    label: 'EUR',
                                },
                                {
                                    value: 'sar',
                                    label: 'SAR',
                                },
                            ]}
                        />
                    </Col>
                </Row>
            </Col>
            <Col span={24} md={18} className={'text-center md:text-left'}>
                <Row gutter={10} justify={{ xs: 'center', sm: 'start', md: 'end' }}>
                    <Col>
                        <Typography>
                            <Link href={'/terms-of-service'} as={'/terms-of-service'}>
                                <a>Terms and conditions</a>
                            </Link>{' '}
                            -{' '}
                            <Link href={'/privacy-policy'} as={'/privacy-policy'}>
                                <a>Privacy</a>
                            </Link>
                        </Typography>
                    </Col>
                    <Divider type='vertical' className={'h-6 hidden lg:block '} />
                    <Col>
                        <Typography>
                            <span>
                                © 2020 - 2023 NoshQuad. All Rights Reserved. Powered By{' '}
                                <Link href='https://boomdevs.com/' as='https://boomdevs.com/'>
                                    <a className={'text-white hover:text-blue-400'}>BoomDevs.</a>
                                </Link>
                            </span>
                        </Typography>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
