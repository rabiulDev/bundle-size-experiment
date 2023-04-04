import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from "next/script";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel='icon' href='/favicon.ico' />
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin={'true'} />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
                        rel='stylesheet'
                    />
                    <meta name='google-site-verification' content='IwBo1qL-aiftp1btDSBLY8Zv5h7JH6dH0kUpCww0moQ' />
                    <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-FK2X1Z9R67"/>
                    <Script id='google-analytics' strategy='afterInteractive'>
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){
                                dataLayer.push(arguments);
                            }
                            gtag('js', new Date());
                            gtag('config', 'G-FK2X1Z9R67');
                        `}
                    </Script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
