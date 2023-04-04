import React, { useEffect, useState } from 'react'
import { Button, Col, Empty, notification, Row, Typography } from 'antd'
import BlogCard from '@/components/cards/blog-card/BlogCard'
import Link from 'next/link'
import { fetchHomePageBlogsApi } from '@/pages/api/blog'

const HomePageBlog = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setLoading(true)
        fetchHomePageBlogsApi()
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                notification['error']({
                    message: 'Failed to load blogs',
                    description: error.message,
                    placement: 'topRight',
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }, [setLoading, setData])

    const LoadingCards = () => (
        <Row gutter={30} className={'w-full'}>
            <Col lg={6} sm={12} xs={24}>

            </Col>
            <Col lg={6} sm={12} xs={24}>

            </Col>
            <Col lg={6} sm={12} xs={24}>

            </Col>
            <Col lg={6} sm={12} xs={24}>

            </Col>
        </Row>
    )

    return (
        <div className={'mt-20 lg:mt-32'}>
            <Row justify={'space-between'} className={'space-y-8 md:space-y-0'}>
                <Col xs={24} md={18}>
                    <Typography>
                        <p className={'!text-2xl sm:!text-3xl !font-semibold !my-0 pb-2 text-center sm:text-left'}>
                            From the Blog
                        </p>
                    </Typography>
                    <Typography>
                        <p className={'!text-base !my-0 text-center sm:text-left'}>
                            Discover the latest in food trends, recipes, and more from our blog.
                        </p>
                    </Typography>
                </Col>
                <Col className={'hidden md:block'}>
                    <Link href={'/blogs'}>
                        <a>
                            <Button size={'middle'} type='primary'>
                                Read More Blogs
                            </Button>
                        </a>
                    </Link>
                </Col>
            </Row>

            <div className={'mt-8 w-full'}>
                <Row gutter={[24, 24]} className={'!w-full !mx-0'}>
                    {loading ? (
                        <LoadingCards />
                    ) : data?.length === 0 ? (
                        <Col className={'w-full flex justify-center'}>
                            <Typography>
                                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                            </Typography>
                        </Col>
                    ) : (
                        data?.slice(0, 4).map((el) => (
                            <Col key={el.id} lg={6} sm={12} xs={24}>
                                <BlogCard data={el} />
                            </Col>
                        ))
                    )}
                </Row>
                <Row justify={'center'} align={'middle'} className={'my-12 md:hidden'}>
                    <Col>
                        <Link href={'/blogs'}>
                            <a>
                                <Button size={'middle'} type='primary'>
                                    Read More Blogs
                                </Button>
                            </a>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default HomePageBlog
