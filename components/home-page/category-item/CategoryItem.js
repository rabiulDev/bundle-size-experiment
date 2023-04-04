import React from 'react'
import styles from './CategoryItem.module.scss'
import { Typography } from 'antd'
import { TagOutlined } from '@ant-design/icons'

const { Text } = Typography

const CategoryItem = ({ title }) => {
      return (
            <div className={styles.item}>
                  <TagOutlined style={{ color: '#08c' }} />
                  <Text className={'text-center'}>{title}</Text>
            </div>
      )
}

export default CategoryItem
