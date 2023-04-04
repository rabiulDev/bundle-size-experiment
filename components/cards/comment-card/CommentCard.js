import React, { useState } from 'react'
import moment from 'moment'
import { Button, Card, Col, Divider, Form, Input, notification, Rate, Row, Typography } from 'antd'
import Image from 'next/image'
import User from '@/public/images/dummy.jpg'
import { useSession } from 'next-auth/react'
import { setFoodReplyComment } from '@/stores/foods'
import displayFormError from '@/utils/form'
import { useDispatch } from 'react-redux'
import { SendOutlined } from '@ant-design/icons'
import { setRestaurantReviewReplyComment } from '@/stores/restaurants'

const { TextArea } = Input
const CommentCard = ({
    avatar,
    first_name,
    last_name,
    ratings,
    comment,
    created_at,
    id,
    replies,
    slug,
    api,
    comment_by,
}) => {
    const { data: session } = useSession()
    const [form] = Form.useForm()
    const [showForm, setShowForm] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const handleReply = (id) => {
        setShowForm(!showForm)
    }

    const onFinish = (value) => {
        const replyComment = {
            user: session?.user.user,
            reply: value.reply,
        }
        if (session) {
            if (comment_by === 'food') {
                dispatch(setFoodReplyComment({ parentId: id, reply: replyComment }))
            } else if (comment_by === 'restaurant') {
                dispatch(setRestaurantReviewReplyComment({ parentId: id, reply: replyComment }))
            }

            api(id, value)
                .then((response) => {
                    notification['success']({
                        message: 'Successful!',
                        description: 'Your review has been submitted.',
                        placement: 'topRight',
                    })
                    form.resetFields()
                })
                .catch((error) => {
                    displayFormError(form, error)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
            notification['warning']({
                message: 'Warning!',
                description: 'Please SignIn first',
                placement: 'topRight',
            })
        }
    }
    return (
        <>
            <Row>
                <Col span={24} className={' overflow-hidden px-2'}>
                    <Row justify={'space-between'} align={'middle'} gutter={10}>
                        <div className={'flex gap-3 '}>
                            <div className={'!w-16 !h-16 mt-1'}>
                                <Image
                                    className={'rounded-sm object-cover '}
                                    width={64}
                                    height={64}
                                    src={avatar ? avatar : User}
                                    alt={''}
                                />
                            </div>
                            <div className={'w-full'}>
                                <div className={'flex items-start gap-2'}>
                                    <div>
                                        <Typography className={'!text-base leading-none font-semibold text-blue-500'}>
                                            {first_name} {last_name}
                                        </Typography>
                                        <Rate
                                            className={'text-xs leading-none mt-0 p-0 m-0'}
                                            disabled
                                            value={ratings}
                                            allowHalf
                                        />
                                    </div>
                                    <div className={'h-1 w-1 bg-gray-500 rounded-full mt-3'}></div>
                                    <Typography className={'!text-[11px] leading-3 mt-2'}>
                                        {moment(created_at).startOf('minute').fromNow()}
                                    </Typography>
                                </div>
                                <Typography className={'!text-sm mb-3 mt-2'}>{comment}</Typography>
                            </div>
                        </div>
                    </Row>
                    <Row justify={'start'} className={'pl-14'}>
                        <div className={'text-sm '}>
                            <a onClick={() => handleReply(id)}>{!showForm ? 'Reply' : 'Hide'}</a>
                        </div>
                    </Row>

                    <Row className={'pl-14 w-full'}>
                        {showForm != false && (
                            <Form
                                className={'mt-3 w-full'}
                                name='basic'
                                onFinish={onFinish}
                                form={form}
                                autoComplete='off'
                            >
                                <Row
                                    gutter={15}
                                    justify={'center'}
                                    className={'w-full'}
                                >
                                    <Col span={22}>
                                        <Form.Item className={'mb-0'} name='reply'>
                                            <TextArea
                                                className={'!resize-none relative overflow-hidden rounded-3xl p-2 pl-3'}
                                                rows={1}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={2} className={''}>
                                        <Button
                                            className={'border-none p-0 m-0  bg-transparent shadow-none '}
                                            htmlType='submit'
                                            loading={isLoading}
                                        >
                                            <SendOutlined className={'text-2xl mt-2'} />
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        )}

                        {showForm != false && (
                            <Row justify={'end'} className={'mt-3'}>
                                {replies?.map((el, index) => (
                                    <Row className={'w-full mb-4'} key={index}>
                                        <div className={'flex gap-2 w-full'}>
                                            <div className={'mt-1'}>
                                                <Image
                                                    className={'rounded-sm object-cover'}
                                                    width={40}
                                                    height={40}
                                                    src={el.user?.avatar ? el.user?.avatar : User}
                                                    alt={'user'}
                                                />
                                            </div>
                                            <Col span={20}>
                                                <div className={'flex items-center gap-2'}>
                                                    <Typography className={'!text-sm font-semibold text-blue-500'}>
                                                        {el.user?.first_name} {el.user?.last_name}
                                                    </Typography>
                                                    <div className={'h-1 w-1 bg-gray-500 rounded-full'}></div>
                                                    <Typography className={'!text-[11px] leading-3'}>
                                                        {moment(el.created_at).startOf('minute').fromNow()}
                                                    </Typography>
                                                </div>
                                                <Typography className={'!text-sm'}>{el.reply}</Typography>
                                            </Col>
                                        </div>
                                    </Row>
                                ))}
                            </Row>
                        )}
                    </Row>
                </Col>
            </Row>
            <Divider />
        </>
    )
}

export default CommentCard
