import React from 'react'
import { CheckCircleOutlined } from '@ant-design/icons'
import { Typography, Row, Col } from 'antd'

const { Text } = Typography

const Achievement = ({ title }) => {
    return (
        <>
            <CheckCircleOutlined style={{ color: '#08c' }} className={'text-xl'} />
            <Text className={'text-lg pl-3'}>{title}</Text>
        </>
    )
}

export default Achievement
