import { Layout } from 'antd'
import { useRouter } from 'next/router'
import styles from './HomeLayout.module.scss'
import { useDispatch, useSelector } from 'react-redux'
// import { toggleTheme } from '@/stores/ui'
import { useEffect, useState } from 'react'
import NoshQuadFooter from '@/components/footer/Footer'
import HeaderComponent from '@/components/layouts/navbar/HeaderComponent'

const { Content, Header, Footer } = Layout

const HomeLayout = ({ children }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    // const { theme } = useSelector((state) => state.ui)

    const footerLessRoutes = [
        '/dashboard/foods',
        '/dashboard/foods/add-food',
        '/dashboard/foods/[id]/edit',
        '/dashboard/restaurants',
        '/dashboard/restaurants/add-restaurant',
        '/dashboard/restaurants/[id]/edit',
    ]
    useEffect(() => {
        setLoading(false)
    }, [])

    const changeTheme = () => {
        // dispatch(toggleTheme())
    }

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Header className={`${styles.header} custom_border sticky top-0 z-50`}>
                <HeaderComponent />
            </Header>
            {router.pathname === '/' ? (

                    <Content>
                        <div className={styles.layout}>{children}</div>
                    </Content>

            ) : (

                    <Content>
                        <div className={styles.layout}>{children}</div>
                    </Content>

            )}
            <Footer className={'!p-0'}>
                {footerLessRoutes?.some((path) => router.pathname === path) ? <></> : <NoshQuadFooter />}
            </Footer>
        </Layout>
    )
}
export default HomeLayout
