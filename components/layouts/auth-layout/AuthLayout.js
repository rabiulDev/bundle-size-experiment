import styles from './AuthLayout.module.scss'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { Layout } from 'antd'
import HeaderComponent from '@/components/layouts/navbar/HeaderComponent'

const { Content, Header } = Layout
const AuthLayout = ({ children }) => {
      const router = useRouter()
      const { status } = useSession()

      useEffect(() => {
            if (status === 'authenticated') {
                  void router.push('/')
            }
      }, [status, router])

      return (
            <Layout style={{ minHeight: '100vh' }}>
                  <Header className={`${styles.header} custom_border sticky top-0 z-50`}>
                        <HeaderComponent />
                  </Header>

                  <Content>
                        <div className='site-layout-background px-6 !pb-20'>{children}</div>
                  </Content>

            </Layout>
      )
}

export default AuthLayout
