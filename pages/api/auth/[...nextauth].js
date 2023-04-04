import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import { httpClient } from '@/utils/api'
import { notification } from 'antd'

export default NextAuth({
    providers: [
        CredentialProvider({
            name: 'credentials',
            async authorize(credentials) {
                try {
                    const { data } = await httpClient.post('auth/login/', credentials)
                    return data
                } catch (error) {
                    if ('response' in error) {
                        const { data: errors } = error.response
                        const fieldsErrors = []

                        Object.entries(errors).forEach((entry) => {
                            const [key, value] = entry
                            fieldsErrors.push({
                                name: key,
                                errors: value,
                            })
                        })

                        throw new Error(JSON.stringify(fieldsErrors))
                    } else {
                        notification['error']({
                            message: 'Operation unsuccessful',
                            description: error.message,
                            placement: 'topRight',
                        })
                    }
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        jwt: async ({ token, user, account }) => {
            if (account?.provider === 'google' || account?.provider === 'facebook') {
                const { access_token, id_token } = account

                let socialAuthUrl = '';

                if(account?.provider === 'google') {
                    socialAuthUrl = 'auth-social-login/google/'
                } else if(account?.provider === 'facebook') {
                    socialAuthUrl = 'auth-social-login/facebook/'
                }

                    const { data } = await httpClient.post(socialAuthUrl, {
                        access_token: access_token,
                        id_token: id_token,
                    })

                const user = {
                    access: data.access,
                    refresh: data.refresh,
                    user: {
                        ...data,
                    },
                }
                token = { ...user }
                return token
            } else {
                user && (token.user = user)
                return token
            }
        },
        session: async ({ session, token }) => {
            token && (session.user = token.user) // Setting token in session
            return session
        },
    },
    pages: {
        signIn: '/signin',
    },
    secret: process.env.NEXTAUTH_SECRET,
})
