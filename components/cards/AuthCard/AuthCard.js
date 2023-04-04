import PropTypes from 'prop-types'
import { Card } from 'antd'
import styles from './AuthCard.module.css'

const AuthCard = ({ title, extra, children }) => {
      return (
            <Card title={title} extra={extra} className={styles.card}>
                  {children}
            </Card>
      )
}

export default AuthCard
