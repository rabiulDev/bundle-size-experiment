import { Layout } from 'antd'
import styles from '@/components/layouts/auth-layout/AuthLayout.module.scss'
import HeaderComponent from '@/components/layouts/navbar/HeaderComponent'

const { Content, Header } = Layout

const BlankLayout = ({ children }) => {
      return (
            <Layout style={{ minHeight: '100vh' }}>
                  <Header className={`${styles.header} custom_border sticky top-0 z-50`}>
                        <HeaderComponent />
                  </Header>
                  <Content>
                        <div className='px-6'>{children}</div>
                  </Content>
            </Layout>
      )
}

export default BlankLayout
