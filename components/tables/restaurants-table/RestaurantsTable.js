import React, { useState } from 'react'
import {
    Button,
    Col,
    Divider,
    Form,
    Input,
    Modal,
    notification,
    Pagination,
    Row,
    Table,
    Tag,
    Tooltip,
    Typography,
} from 'antd'
import { DeleteOutlined, EyeFilled } from '@ant-design/icons'
import Link from 'next/link'
import { fetchOwnerRestaurants } from '@/stores/restaurants'
import { useDispatch } from 'react-redux'
import { deleteRestaurantRequestApi } from '@/pages/api/restaurants'
import displayFormError from '@/utils/form'

const RestaurantsTable = ({ data, loading, count, currentPage, setCurrentPage, status, searchValue, sortedInfo, setSortedInfo }) => {
    const dispatch = useDispatch()
    const [form] = Form.useForm()

    const [id, setId] = useState(null)
    const [buttonLoading, setButtonLoading] = useState(false)
    const [sortOrderRaw, setSortOrderRaw] = useState('')

    const [isModalOpen, setIsModalOpen] = useState(false)

    const onPaginationChange = (page) => {
        if (status !== 'delete') {
            setCurrentPage(page)
            dispatch(
                fetchOwnerRestaurants({
                    page: page,
                    pageSize: 10,
                    status: status && status,
                    search: searchValue,
                    ordering: sortOrderRaw,
                })
            )
        }
    }
    const showModal = (id) => {
        setId(id)
        setIsModalOpen(true)
        form.resetFields()
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const onFinish = (value) => {
        setButtonLoading(true)
        if (id !== null) {
            deleteRestaurantRequestApi(id, value)
                .then((response) => {
                    setButtonLoading(false)
                    setIsModalOpen(false)
                    notification['success']({
                        message: 'Successfully',
                        placement: 'topRight',
                    })
                    form.resetFields()
                })
                .catch((error) => {
                    setButtonLoading(false)
                    displayFormError(form, error)
                })
        }
    }

    const handleSort = (e) => {
        setSortedInfo(e)
        if (e.order === 'descend') {
            setSortOrderRaw(e.field === 'name' ? '-name' : '-city__name')
            dispatch(
                fetchOwnerRestaurants({
                    page: 1,
                    pageSize: 10,
                    status: status && status,
                    ordering: e.field === 'name' ? '-name' : '-city__name',
                })
            )
        } else if (e.order === 'ascend') {
            setSortOrderRaw(e.field === 'name' ? 'name' : 'city__name')
            dispatch(
                fetchOwnerRestaurants({
                    page: 1,
                    pageSize: 10,
                    status: status && status,
                    ordering: e.field === 'name' ? 'name' : 'city__name',
                })
            )
        } else if (e.order === undefined) {
            setSortOrderRaw('')
            dispatch(
                fetchOwnerRestaurants({
                    page: 1,
                    pageSize: 10,
                    status: status && status,
                    ordering: '',
                })
            )
        }
    }

    const columns = [
        {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
            ellipsis: true,
            sorter: true,
            sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null
        },
        {
            title: 'Address',
            key: 'address',
            dataIndex: 'address',
            ellipsis: true,
        },
        {
            title: 'City',
            key: 'city',
            ellipsis: true,
            sorter: true,
            sortOrder: sortedInfo.columnKey === 'city' ? sortedInfo.order : null,
            render: (_, { city }) => (
                <>
                    <span>{city?.name ? city?.name : 'Not added'}</span>
                </>
            ),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            ellipsis: true,
            render: (_, { status }) => (
                <>
                    <Tag color={status !== 'pending' ? 'green' : 'blue'}>{status?.toUpperCase()}</Tag>
                </>
            ),
        },
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (_, data) => (
        //         <Row gutter={12} justify={'space-between'}>
        //             <Col>
        //                 <Link
        //                     href={`/dashboard/restaurants/${data.slug}/edit`}
        //                     as={`/dashboard/restaurants/${data.slug}/edit`}
        //                 >
        //                     <a>
        //                         {' '}
        //                         <EditOutlined className={'!text-xl cursor-pointer'} />
        //                     </a>
        //                 </Link>
        //             </Col>
        //         </Row>
        //     ),
        // },
        {
            title: 'Actions',
            dataIndex: 'actions',
            render: (_, data) => (
                <>
                    <Row gutter={12} justify={'start'}>
                        {/* <Col>
                            <Link href={`/dashboard/foods/${data.slug}/edit`} as={`/dashboard/foods/${data.slug}/edit`}>
                                <a>
                                    <EditOutlined className={'!text-xl'} />
                                </a>
                            </Link>
                        </Col> */}
                        <Col>
                            <Link href={`/restaurants/${data.slug}`} as={`/restaurants/${data.slug}`}>
                                <a>
                                    <Tooltip placement={'top'} title={'View'}>
                                        <EyeFilled className={'!text-xl text-white'} />
                                    </Tooltip>
                                </a>
                            </Link>
                        </Col>
                        <Col className={'sm:ml-5'}>
                            <Tooltip placement={'top'} title={'Request for delete'}>
                                <DeleteOutlined
                                    onClick={() => showModal(data?.slug)}
                                    className={'text-base text-red-700'}
                                />
                            </Tooltip>
                        </Col>
                    </Row>
                </>
            ),
        },
    ]

    return (
        <>
            <Table
                rowKey='id'
                columns={columns}
                xs={{ direction: '' }}
                dataSource={data}
                pagination={false}
                loading={loading}
                onChange={(pagination, record, sorter) => {
                    handleSort(sorter)
                }}
            />
            <Row justify={'center'}>
                <Pagination
                    total={count}
                    current={currentPage}
                    onChange={onPaginationChange}
                    defaultPageSize={10}
                    className={'my-5'}
                    showSizeChanger={false}
                />
            </Row>
            <Modal
                title={<span className={'text-xl'}>Confirmation !</span>}
                open={isModalOpen}
                onCancel={handleCancel}
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}
            >
                <Typography>
                    <Divider />
                    <p>Why do you want to delete this restaurant :</p>
                    <Row>
                        <Col span={24}>
                            <Form name='delete-reason' onFinish={onFinish} form={form}>
                                <Col span={24}>
                                    <Form.Item name={'delete_reason'} rules={[{ required: false }]}>
                                        <Input.TextArea className={'!resize-none !h-20'} />
                                    </Form.Item>
                                </Col>
                                <Col className={'flex justify-end'}>
                                    <Button type={'primary'} htmlType={'submit'} loading={buttonLoading}>
                                        Submit
                                    </Button>
                                </Col>
                            </Form>
                        </Col>
                    </Row>
                </Typography>
            </Modal>
        </>
    )
}

export default RestaurantsTable
