import React, { useState } from 'react'
import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import styles from './HeartIcon.module.scss'
import { addOrRemoveFavoriteApi } from '@/pages/api/foods'
import { Button, notification, Typography } from 'antd'
import { addOrRemoveFavoriteRestaurantApi } from '@/pages/api/restaurants'
import { useDispatch } from 'react-redux'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export const FoodHeartIcon = ({ id, slug, isFavorite, type, withButton = false, buttonTxt }) => {
    const { data: session } = useSession()
    const [favorite, setFavorite] = useState({ id: id, favorite: isFavorite })
    const dispatch = useDispatch()
    const { query } = useRouter()
    const handleFavoriteClick = (event, slug, id) => {
        event.stopPropagation()
        if (session?.user?.user?.email) {
            setFavorite({ id: id, favorite: !favorite.favorite })
            addOrRemoveFavoriteApi(slug).then((response) => {
                if (response.data?.favorite && withButton) {
                    notification['success']({
                        message: 'Added to wishlist',
                        placement: 'topRight',
                    })
                }else if(!response.data?.favorite && withButton) {
                    notification['success']({
                        message: 'Remove from wishlist',
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
        <>
            {withButton ? (
                <Button
                    type={'primary'}
                    className={'overflow-hidden flex right-4 group !duration-300 px-2 w-[36px] lg:hover:w-[132px]'}
                    onClick={(event) => handleFavoriteClick(event, slug, id)}
                    icon={
                        favorite.id === id && favorite.favorite === true ? (
                            <HeartFilled className={'text-lg'} />
                        ) : (
                            <HeartOutlined className={'text-lg'} />
                        )
                    }
                >
                    <p className={'ml-2 my-0 hidden lg:group-hover:block'}>{buttonTxt}</p>
                </Button>
            ) : (
                <span onClick={(event) => handleFavoriteClick(event, slug, id)} className={styles.heartIconContainer}>
                    {favorite.id === id && favorite.favorite === true ? (
                        <Typography>
                            <HeartFilled className={styles.heartIconContainer__heartIcon} />
                        </Typography>
                    ) : (
                        <Typography>
                            <HeartOutlined className={styles.heartIconContainer__heartIcon} />
                        </Typography>
                    )}
                </span>
            )}
        </>
    )
}

export const RestaurantHeartIcon = ({ id, slug, isFavorite }) => {
    const { data: session } = useSession()
    const [favorite, setFavorite] = useState({ id: id, favorite: isFavorite })

    const handleFavoriteClick = (id, slug, event) => {
        event.stopPropagation()
        if (session?.user?.user?.email) {
            setFavorite({ id: id, favorite: !favorite.favorite })
            addOrRemoveFavoriteRestaurantApi(slug).then((response) => {})
        } else {
            notification['error']({
                message: 'Please login first.',
                placement: 'topRight',
            })
        }
    }

    return (
        <span onClick={(event) => handleFavoriteClick(id, slug, event)} className={styles.heartIconContainer}>
            {favorite.id === id && favorite.favorite === true ? (
                <Typography>
                    <HeartFilled className={styles.heartIconContainer__heartIcon} />
                </Typography>
            ) : (
                <Typography>
                    <HeartOutlined className={styles.heartIconContainer__heartIcon} />
                </Typography>
            )}
        </span>
    )
}
