import { Divider } from 'antd'
import React from 'react'
import Copyright from './copy-right/Copyright'
import Main from './main/Main'

const NoshQuadFooter = () => {
    return (
        <>
            <Divider />
            <div className={'max-w-[90rem] mx-auto w-full !px-6 sm:!px-12'}>
                <Main />
            </div>
            <Divider />
            <div className={'max-w-[90rem] mx-auto w-full !px-6 sm:!px-12'}>
                <Copyright />
            </div>
        </>
    )
}
export default NoshQuadFooter
