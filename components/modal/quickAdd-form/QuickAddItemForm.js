import React, { useState } from 'react'
import { Divider, Form, Modal, notification } from 'antd'
import QuickRestaurantAddForm from '@/components/forms/quick-restaurant-add/QuickRestaurantAddForm'
import QuickAddForm from '@/components/forms/quick-add-form/QuickAddForm'
import { createQuickRestaurantApi } from '@/pages/api/restaurants'
import { createQuickFoodApi } from '@/pages/api/foods'
import { httpClient } from '@/utils/api'
import { useRouter } from 'next/router'

const QuickAddItemForm = ({
    stepModal,
    setStepModal,
    currentStep,
    setCurrentStep,
    cardId,
    setOpenItemModal,
    foodButton,
}) => {
    const [QuickAddRestaurantForm] = Form.useForm()
    const [QuickAddFoodForm] = Form.useForm()
    const [restaurantData, setRestaurantData] = useState()
    const [restaurantAvatar, setRestaurantAvatar] = useState(null)
    const [foodAvatar, setFoodAvatar] = useState(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const onFinish = (values) => {
        setLoading(true)
        if (restaurantData !== undefined) {
            const { name, address, country, state, city } = restaurantData
            const restaurantFormData = new FormData()

            restaurantFormData.append('name', name)
            restaurantFormData.append('address', address)
            restaurantFormData.append('country', country)
            restaurantFormData.append('state', state)
            restaurantFormData.append('city', city)
            restaurantFormData.append('image', restaurantAvatar)
            httpClient.defaults.headers['Content-Type'] = 'multipart/form-data'

            createQuickRestaurantApi(restaurantFormData)
                .then((res) => {
                    const foodFormData = new FormData()

                    foodFormData.append('name', values.name)
                    foodFormData.append('restaurant', res.data?.id)
                    foodFormData.append('feature_image', foodAvatar && foodAvatar)
                    httpClient.defaults.headers['Content-Type'] = 'multipart/form-data'

                    createQuickFoodApi(foodFormData)
                        .then((res) => {
                            setLoading(false)
                            setStepModal(false)
                            notification['success']({
                                message: 'Successful!',
                                description: 'Create success. Wait for publishing!',
                                placement: 'topRight',
                            })
                            router.push(`foods/${res?.data?.slug}/review`)
                        })
                        .catch((error) => {
                            setLoading(false)
                            console.log(error)
                        })
                })
                .catch((err) => {
                    setLoading(false)
                    console.log(err)
                })
        } else {
            const foodFormData = new FormData()

            foodFormData.append('name', values.name)
            foodFormData.append('restaurant', cardId)
            foodFormData.append('feature_image', foodAvatar)
            httpClient.defaults.headers['Content-Type'] = 'multipart/form-data'

            createQuickFoodApi(foodFormData)
                .then((res) => {
                    setLoading(false)
                    setStepModal(false)
                    notification['success']({
                        message: 'Successful!',
                        description: 'Create success. Wait for publishing!',
                        placement: 'topRight',
                    })
                    router.push(`foods/${res?.data?.slug}/review`)
                })
                .catch((error) => {
                    setLoading(false)
                    console.log(error)
                })
        }
    }

    const prev = () => {
        if (foodButton === false) {
            setCurrentStep(currentStep - 1)
        }
        if (foodButton === true) {
            setCurrentStep(1)
            setStepModal(false)
            setOpenItemModal(true)
        }
    }

    const steps = [
        {
            content: (
                <QuickRestaurantAddForm
                    formRef={QuickAddRestaurantForm}
                    current={currentStep}
                    setCurrent={setCurrentStep}
                    setRestaurantData={setRestaurantData}
                    setRestaurantAvatar={setRestaurantAvatar}
                />
            ),
        },
        {
            content: (
                <QuickAddForm
                    formRef={QuickAddFoodForm}
                    current={currentStep}
                    setCurrent={setCurrentStep}
                    onFinish={onFinish}
                    prev={prev}
                    setFoodAvatar={setFoodAvatar}
                    loading={loading}
                    foodAvatar={foodAvatar}
                />
            ),
        },
    ]

    const onCancelHandler = () => {
        QuickAddRestaurantForm.resetFields()
        QuickAddFoodForm.resetFields()
        setStepModal(false)
        setOpenItemModal(true)
    }

    return (
        <>
            <Modal
                title={currentStep === 0 ? 'Create a new restaurant' : 'Create a new Food'}
                onCancel={onCancelHandler}
                open={stepModal}
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}
            >
                <Divider className={'!mb-0'} />
                <div>{steps[currentStep].content}</div>
            </Modal>
        </>
    )
}

export default QuickAddItemForm
