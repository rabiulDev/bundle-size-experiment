import { useSession } from 'next-auth/react'
import { createContext, useEffect, useState } from 'react'
import { httpClient } from '@/utils/api'
import { useRouter } from 'next/router'
import DashboardLayout from '@/components/layouts/dashboard-layout/DashboardLayout'
import AuthLayout from '@/components/layouts/auth-layout/AuthLayout'
import HomeLayout from '@/components/layouts/home-layout/HomeLayout'
import BlankLayout from '@/components/layouts/blank-layout/BlankLayout'
import { ConfigProvider, theme } from 'antd'
import { useSelector } from 'react-redux'
import styles from '@/components/layouts/home-layout/HomeLayout.module.scss'
import { LoadingOutlined } from '@ant-design/icons'
import Head from 'next/head'

const { defaultAlgorithm, darkAlgorithm } = theme

export const TokenContext = createContext('undefined')

const AppLayout = ({ children }) => {
    const [loading, setLoading] = useState(true)
    // const { theme } = useSelector((state) => state.ui)
    const [tokenStatus, setTokenStatus] = useState('undefined')
    const { data: session } = useSession()
    const router = useRouter()
    const paths = [
        '/profile',
        '/restaurant',
        '/foods',
        '/dashboard/foods/add-food',
        '/wishlist',
        '/tasted-food',
        '/members',
        '/blogs',
        '/states/[stateName]/cities/[cityName]',
        '/terms-of-service',
        '/privacy-policy',
        '/about-us',
        '/faq',
    ]

    const authRoutes = ['/signin', '/signup']

    useEffect(() => {
        if (session) {
            httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + session.user.access
            setTokenStatus('added')
        } else {
            httpClient.defaults.headers.common['Authorization'] = ''
            setTokenStatus('removed')
        }
    }, [session])

    useEffect(() => {
        setLoading(false)
    }, [])

    const CustomTheme = {
        algorithm: darkAlgorithm,
        token: {
            fontFamily: `'Nunito', sans-serif`,
            fontWeightStrong: 700,
        },
    }

    return (
        <>
            <ConfigProvider theme={CustomTheme} SeedToken>
                {loading && (
                    <div className={styles.loaderWrapper}>
                        <LoadingOutlined style={{ fontSize: '64px', color: '#08c' }} />
                    </div>
                )}
                {router.pathname === '/dashboard' ? (
                    <TokenContext.Provider value={tokenStatus}>
                        <DashboardLayout>
                            <main>{children}</main>
                        </DashboardLayout>
                    </TokenContext.Provider>
                ) : router.pathname === '/' || paths.some((path) => router.pathname.includes(path)) ? (
                    <TokenContext.Provider value={tokenStatus}>
                        <HomeLayout>
                            <main>{children}</main>
                        </HomeLayout>
                    </TokenContext.Provider>
                ) : authRoutes.some((path) => router.pathname.includes(path)) ? (
                    <AuthLayout>
                        <main>{children}</main>
                    </AuthLayout>
                ) : (
                    <BlankLayout>
                        <main>{children}</main>
                    </BlankLayout>
                )}
            </ConfigProvider>
        </>
    )
}

export default AppLayout
