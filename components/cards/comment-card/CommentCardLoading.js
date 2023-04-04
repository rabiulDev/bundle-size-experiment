import React from 'react'
import { Col, Divider, Row, Skeleton } from 'antd'

const CommentCardLoading = () => {
    return (
        <>
            <Row gutter={30} className={'!w-full'} align={'middle'}>
                <Col xl={4} lg={5} sm={6} xs={8}>
                    <Skeleton.Image className={'w-full h-full'} active={true} />
                </Col>
                <Col xl={20} lg={19} sm={18} xs={14} className={'w-full'}>
                    <Skeleton active paragraph={{ rows: 2 }} />
                </Col>
            </Row>
            <Divider />
        </>
    )
}

export default CommentCardLoading
