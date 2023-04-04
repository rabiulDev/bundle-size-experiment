import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Typography } from 'antd'
import Image from 'next/image'
import dummy from '@/public/images/food/food-dish.jpg'
import Link from 'next/link'
import User from '@/public/images/dummy.jpg'

const { Title, Paragraph } = Typography

const BlogCard = ({ data }) => {
    const { description, title, pub_date, feature_image, slug, author } = data
    const [blog, setBlog] = useState('')

    useEffect(() => {
        setBlog(description)
    }, [description, setBlog])

    return (
        <>
            <Link href={`blogs/${slug}`} as={`blogs/${slug}`}>
                <a>
                    <Card
                        bodyStyle={{ padding: '0rem' }}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        className={'overflow-hidden relative'}
                    >
                        <Row>
                            <Col className={'w-full h-48'}>
                                <Image
                                    layout={'fill'}
                                    className={'object-cover'}
                                    src={feature_image ? feature_image : dummy}
                                    alt={''}
                                />
                            </Col>
                        </Row>
                        <Row className={'!h-full cursor-pointer py-6 px-4'}>
                            <Col span={24}>
                                <Title ellipsis={{ rows: 2 }} level={3} className={'!m-0'}>
                                    {title}
                                </Title>
                            </Col>
                            <Col span={24}>
                                <Paragraph ellipsis={{ rows: 2 }} className={'!mb-8'}>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: blog ? blog : 'Description not added yet',
                                        }}
                                    />
                                </Paragraph>
                            </Col>
                            <Col span={24} className={'absolute bottom-3 left-4 right-4'}>
                                <div className={'flex items-center justify-between w-full'}>
                                    <div className={'flex items-center gap-1'}>
                                        <Image width={30} height={30} className={'rounded-full'} src={User} alt={''} />
                                        <Typography>
                                            <p className={'text-gray-400 !my-0 !ml-3'}>
                                                {author?.get_full_name ? author?.get_full_name : 'No name'}
                                            </p>
                                        </Typography>
                                    </div>
                                    <Typography>
                                        <p className={'!text-gray-400 !my-0'}>
                                            Pub date
                                        </p>
                                    </Typography>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </a>
            </Link>
        </>
    )
}

export default BlogCard
