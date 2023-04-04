import { Layout, Spin } from 'antd'
import { useSession } from 'next-auth/react'
import styles from './DashboardLayout.module.scss'
import HeaderComponent from '@/components/layouts/navbar/HeaderComponent'

const { Content, Header } = Layout

const DashboardLayout = ({ children }) => {
      const { data: session } = useSession()
      //
      // if (!session) {
      //       return (
      //             <div className={styles.loaderWrapper}>
      //                   <Spin size='large' />
      //             </div>
      //       )
      // }

      return (
            <Layout
                  style={{
                        minHeight: '100vh',
                  }}
            >
                  <Header className={`${styles.header} custom_border sticky top-0 z-50`}>
                        <HeaderComponent />
                  </Header>
                  <Layout className='site-layout'>

                        <Content>
                              <div
                                    className='site-layout-background'
                                    style={{
                                          padding: 24,
                                    }}
                              >
                                    {children}
                              </div>
                        </Content>

                  </Layout>
            </Layout>
      )
}
export default DashboardLayout
