import styles from './FeaturedContributors.module.scss'
import { Button, Card, Col, Row, Skeleton, Tooltip, Typography } from 'antd'
import Image from 'next/image'
import Man from '/public/images/dummy.jpg'
import Link from 'next/link'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const { Title } = Typography

const FeaturedContributors = () => {

    const AvatarSkeleton = () => (
        <div className={'flex items-center'}>
            <Skeleton active avatar paragraph={{ className: 'hidden' }} title={{ className: 'hidden' }} />
            <Skeleton active avatar paragraph={{ className: 'hidden' }} title={{ className: 'hidden' }} />
            <Skeleton active avatar paragraph={{ className: 'hidden' }} title={{ className: 'hidden' }} />
            <Skeleton active avatar paragraph={{ className: 'hidden' }} title={{ className: 'hidden' }} />
            <Skeleton active avatar paragraph={{ className: 'hidden' }} title={{ className: 'hidden' }} />
        </div>
    )



    return (
        <Card
            title={
                <Title level={5} className={'text-center !my-0'}>
                    Featured Contributors
                </Title>
            }
            bodyStyle={{ padding: '1.5rem 1rem' }}
            className={styles.contributors}
        >
            {/*// <Row className={'w-full gap-2'}>*/}
            {/*//     {featuredContributors.loading ? (*/}
            {/*//         <AvatarSkeleton />*/}
            {/*//     ) : (*/}
            {/*//         featuredContributors.data?.map((el) => (*/}
            {/*//             <Tooltip placement='topRight' title={el.get_full_name} key={el.id}>*/}
            {/*//                 <div className={styles.contributors__image}>*/}
            {/*//                     <Link href={`/members/${el.id}`} as={`/members/${el.id}`}>*/}
            {/*//                         <a>*/}
            {/*//                             <Image*/}
            {/*//                                 width={40}*/}
            {/*//                                 height={40}*/}
            {/*//                                 src={el.avatar ? el.avatar : Man}*/}
            {/*//                                 alt={''}*/}
            {/*//                                 className={'cursor-pointer rounded-full'}*/}
            {/*//                             />*/}
            {/*/!*                        </a>*!/*/}
            {/*/!*                    </Link>*!/*/}
            {/*/!*                </div>*!/*/}
            {/*/!*            </Tooltip>*!/*/}
            {/*/!*        ))*!/*/}
            {/*/!*    )}*!/*/}
            {/*/!*</Row>*!/*/}
        </Card>
    )
}
export default FeaturedContributors
