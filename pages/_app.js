import Router from 'next/router';
import { getSession, SessionProvider } from 'next-auth/react'
import store from '@/stores'
import { Provider, useSelector } from 'react-redux'
import AppLayout from '@/components/layouts/app-layout/AppLayout'
import 'nprogress/nprogress.css';
import '@/styles/globals.scss'
import NProgress from 'nprogress';


NProgress.configure({ minimum: 0.2, showSpinner: false })

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export function reportWebVitals(metric) {
      console.log(metric)
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
      return (
            <SessionProvider session={session}>
                  <Provider store={store}>
                        <AppLayout>

                              <Component {...pageProps} />

                        </AppLayout>
                  </Provider>
            </SessionProvider>
      )
}

export default MyApp

