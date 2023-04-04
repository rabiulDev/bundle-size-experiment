import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { SafetyCertificateFilled, SafetyCertificateOutlined } from '@ant-design/icons'
import { addOrRemoveTastedFoodApi } from '@/pages/api/foods'
import { Button, notification } from 'antd'

const TastedIcon = ({ id, slug, isTasted }) => {
    const { data: session } = useSession()
    const [tasted, setTasted] = useState({ id: id, tasted: isTasted })
    const handleTastedClick = (id, slug) => {
        if (session?.user?.user?.email) {
            setTasted({ id: id, tasted: !tasted.tasted })
            addOrRemoveTastedFoodApi(slug).then((res)=>{
                if (res.data?.tasted) {
                    notification['success']({
                        message: 'Added to tested list',
                        placement: 'topRight',
                    })
                }else {
                    notification['success']({
                        message: 'Remove from tested list',
                        placement: 'topRight',
                    })
                }

            })
        } else {
            notification['error']({
                message: 'Please login first.',
                placement: 'topRight',
            })
        }
    }
    return (
        <Button
            type={'primary'}
            className={'overflow-hidden flex right-4 group duration-300 px-2 w-[36px] lg:hover:w-[139px]'}
            onClick={() => handleTastedClick(id, slug)}
            icon={
                tasted.id === id && tasted.tasted ? (
                    <SafetyCertificateFilled className={'text-lg'} />
                ) : (
                    <SafetyCertificateOutlined className={'text-lg'} />
                )
            }
        >
            <p className={'ml-2 my-0 hidden lg:group-hover:block'}>Mark as tasted</p>
        </Button>
    )
}

export default TastedIcon
