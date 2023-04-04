// import React, { useEffect, useRef, useState } from 'react'
// import { Button, Col, Divider, Input, Modal, Row, Typography } from 'antd'
// import styles from './QuickAdd.module.scss'
// import QuickAddItemForm from '@/components/modal/quickAdd-form/QuickAddItemForm'
// import QuickAddSuggestionItem from '@/components/modal/quick-add/suggestion-items/QuickAddSuggestionItem'
// import { useDispatch, useSelector } from 'react-redux'
// // import { fetchSuggestionRestaurantsList, resetSuggestionRestaurantListPage } from '@/stores/restaurants'
// // import { fetchQuickFoodList, resetQuickAddItemListPage } from '@/stores/foods'
// import Link from 'next/link'
// import { SearchOutlined } from '@ant-design/icons'
// const { Title } = Typography
//
// const QuickAdd = ({ openItemModal, setOpenItemModal, setCurrent, current, buttonStep, foodButton, setFoodButton }) => {
//     const dispatch = useDispatch()
//     const foodRefView = useRef(null)
//     const [formStep, setFormStep] = useState(0)
//     const [stepModal, setStepModal] = useState(false)
//     const [cardId, setCardId] = useState(null)
//     const [cardSlug, setCardSlug] = useState(null)
//
//     const { suggestionRestaurantList } = useSelector((state) => state.restaurants)
//     const {
//         quickAddFoodList: { data, total, loading, hasMore, page, quickAddFoodInfiniteLoading },
//     } = useSelector((state) => state.foods)
//
//     const handleCancel = () => {
//         setOpenItemModal(false)
//         setCardId(null)
//     }
//     const createHandler = (step, value) => {
//         setFormStep(step)
//         setOpenItemModal(false)
//         setStepModal(true)
//         setFoodButton(value)
//     }
//     const activeCardHandler = (id, slug) => {
//         current === 0 && dispatch(fetchQuickFoodList(id, { page: 1, pageSize: 10 }))
//         if (current === 0) {
//             setCardId(id)
//             setCurrent(current + 1)
//         } else if (current === 1) {
//             setCardSlug(slug)
//         }
//     }
//
//     const handleSearch = (value, step) => {
//         dispatch(resetQuickAddItemListPage())
//         if (step === 0) {
//             dispatch(fetchSuggestionRestaurantsList({ page: 1, pageSize: 10 }, value))
//         } else if (step === 1) {
//             dispatch(fetchQuickFoodList(cardId, { page: 1, pageSize: 10 }, value))
//         }
//     }
//
//     const prev = () => {
//         setCurrent(current - 1)
//         dispatch(resetSuggestionRestaurantListPage())
//         dispatch(resetQuickAddItemListPage())
//         dispatch(fetchSuggestionRestaurantsList({ page: 1, pageSize: 10 }))
//     }
//
//     const next = () => {
//         if (cardId !== null) {
//             dispatch(fetchQuickFoodList(cardId, { page: 1, pageSize: 10 }))
//         }
//         foodRefView?.current?.scrollIntoView({ behavior: 'smooth' })
//         setCurrent(current + 1)
//     }
//
//     const steps = [
//         {
//             content: (
//                 <QuickAddSuggestionItem
//                     data={suggestionRestaurantList?.data}
//                     count={suggestionRestaurantList?.total}
//                     page={suggestionRestaurantList?.page}
//                     hasMore={suggestionRestaurantList?.hasMore}
//                     infiniteLoading={suggestionRestaurantList?.suggestionRestaurantInfinityLoading}
//                     activeCardHandler={activeCardHandler}
//                     cardId={cardId}
//                     cardSlug={cardSlug}
//                     current={current}
//                     loading={suggestionRestaurantList?.loading}
//                     createHandler={createHandler}
//                 />
//             ),
//         },
//         {
//             content: (
//                 <QuickAddSuggestionItem
//                     ref={foodRefView}
//                     data={data}
//                     page={page}
//                     hasMore={hasMore}
//                     infiniteLoading={quickAddFoodInfiniteLoading}
//                     count={total}
//                     activeCardHandler={activeCardHandler}
//                     cardId={cardId}
//                     cardSlug={cardSlug}
//                     current={current}
//                     loading={loading}
//                     createHandler={createHandler}
//                 />
//             ),
//         },
//     ]
//
//     return (
//         <>
//             <Modal
//                 width={600}
//                 open={openItemModal}
//                 onCancel={handleCancel}
//                 title={
//                     <Title level={2} className={'!my-0'}>
//                         {current > 0 ? 'Select a food' : 'Select a restaurant'}
//                     </Title>
//                 }
//                 footer={[
//                     <Row justify={'space-between'} key={'id'} align={'middle'}>
//                         <Col>
//                             {current === 0 && (
//                                 <div className={styles.QuickAddModal} onClick={() => createHandler(0, false)}>
//                                     Create a new restaurant
//                                 </div>
//                             )}
//
//                             {current === 1 && (
//                                 <div className={styles.QuickAddModal} onClick={() => createHandler(1, true)}>
//                                     Create a new food
//                                 </div>
//                             )}
//                         </Col>
//                         <Col>
//                             <Row>
//                                 <Col>
//                                     {current > 0 && (
//                                         <Button
//                                             style={{
//                                                 margin: '0 8px',
//                                             }}
//                                             onClick={() => prev()}
//                                         >
//                                             Previous
//                                         </Button>
//                                     )}
//                                 </Col>
//                                 <Col>
//                                     {current < 1 && (
//                                         <Button
//                                             key='link'
//                                             type='primary'
//                                             disabled={!cardId && true}
//                                             onClick={() => next()}
//                                         >
//                                             Next
//                                         </Button>
//                                     )}
//                                     {current === steps.length - 1 && (
//                                         <Link
//                                             href={
//                                                 buttonStep === 0
//                                                     ? `/foods/${cardSlug}/review`
//                                                     : `/foods/${cardSlug}/review`
//                                             }
//                                             as={
//                                                 buttonStep === 0
//                                                     ? `/foods/${cardSlug}/review`
//                                                     : `/foods/${cardSlug}/review`
//                                             }
//                                         >
//                                             <Button type='primary' disabled={cardSlug === null && true}>
//                                                 Next
//                                             </Button>
//                                         </Link>
//                                     )}
//                                 </Col>
//                             </Row>
//                         </Col>
//                     </Row>,
//                 ]}
//             >
//                 <Divider />
//                 <Input
//                     onChange={(e) => handleSearch(e.target.value, current)}
//                     prefix={<SearchOutlined />}
//                     size={'large'}
//                     placeholder='Search here..'
//                 />
//                 <div>{steps[current].content}</div>
//                 <Divider />
//             </Modal>
//             <QuickAddItemForm
//                 setOpenItemModal={setOpenItemModal}
//                 stepModal={stepModal}
//                 setStepModal={setStepModal}
//                 currentStep={formStep}
//                 setCurrentStep={setFormStep}
//                 cardId={cardId}
//                 foodButton={foodButton}
//             />
//         </>
//     )
// }
//
// export default QuickAdd
