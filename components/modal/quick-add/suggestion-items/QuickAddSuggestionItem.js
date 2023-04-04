// import React from 'react'
// import styles from './SuggestionItems.module.scss'
// import QuickItemCard from '@/components/cards/quick-card/QuickItemCard'
// import { Button, Empty, Row } from 'antd'
// import { PlusOutlined } from '@ant-design/icons'
// import { useDispatch } from 'react-redux'
// import { fetchSuggestionRestaurantsInfinityList } from '@/stores/restaurants'
// import { fetchQuickFoodListInfinity } from '@/stores/foods'
// import InfiniteScroll from 'react-infinite-scroll-component'
// import QuickItemCardLoading from '@/components/cards/quick-card/QuickItemCardLoading'
//
// const QuickAddSuggestionItem = ({
//     data,
//     count,
//     activeCardHandler,
//     cardId,
//     hasMore,
//     page,
//     infiniteLoading,
//     current,
//     loading,
//     createHandler,
//     cardSlug,
// }) => {
//     const dispatch = useDispatch()
//
//     const fetchNextData = () => {
//         if (!infiniteLoading && hasMore) {
//             current === 0 && dispatch(fetchSuggestionRestaurantsInfinityList({ page: page, pageSize: 10 }))
//             current === 1 && dispatch(fetchQuickFoodListInfinity(cardId, { page: page, pageSize: 10 }))
//         }
//     }
//
//     return (
//         <>
//             <Row className={`${styles.QuickAddModalCard} custom_scroller`}>
//                 <div className={'w-full'}>
//                     <InfiniteScroll
//                         className={'custom_scroller'}
//                         next={fetchNextData}
//                         hasMore={hasMore}
//                         loader={<></>}
//                         dataLength={data?.length}
//                         height={370}
//                     >
//                         <Row>
//                             {loading ? (
//                                 <>
//                                     <QuickItemCardLoading />
//                                     <QuickItemCardLoading />
//                                     <QuickItemCardLoading />
//                                 </>
//                             ) : (
//                                 data.map((item, index) => (
//                                     <QuickItemCard
//                                         key={index}
//                                         item={item}
//                                         activeCardHandler={activeCardHandler}
//                                         cardId={cardId}
//                                         current={current}
//                                         cardSlug={cardSlug}
//                                     />
//                                 ))
//                             )}
//                             {infiniteLoading && <QuickItemCardLoading />}
//                         </Row>
//                         {!loading && count === 0 && (
//                             <Row align={'middle'} justify={'center'} className={'w-full h-full'}>
//                                 <div className={'flex justify-center items-center'}>
//                                     <Empty
//                                         image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
//                                         imageStyle={{
//                                             height: 60,
//                                         }}
//                                         description={<span>{current === 0 ? 'No Restaurant Found' : 'No Food Found'}</span>}
//                                     >
//                                         {current === 0 && (
//                                             <Button size={'large'} type='primary' onClick={() => createHandler(0, false)}>
//                                                 <PlusOutlined /> Create New Restaurant
//                                             </Button>
//                                         )}
//                                         {current === 1 && (
//                                             <Button size={'large'} type='primary' onClick={() => createHandler(1, true)}>
//                                                 <PlusOutlined /> Create New Food
//                                             </Button>
//                                         )}
//                                     </Empty>
//                                 </div>
//                             </Row>
//                         )}
//                     </InfiniteScroll>
//                 </div>
//             </Row>
//         </>
//     )
// }
//
// export default QuickAddSuggestionItem
