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
import { convertDatetimeToLocal } from '@/utils/moment'
import { useDispatch } from 'react-redux'
import { fetchDraftFoodsList, fetchOwnerFoodsList, fetchPublishedFoods } from '@/stores/foods'
import { deleteFoodRequestApi } from '@/pages/api/foods'
import displayFormError from '@/utils/form'

const FoodsTable = ({
    data,
    loading,
    count,
    currentPage,
    setCurrentPage,
    currentRestaurant,
    searchValue,
    viewType,
    sortOrder,
    setSortedInfo,
    sortedInfo,
}) => {
    const dispatch = useDispatch()
    const [form] = Form.useForm()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [id, setId] = useState(null)
    const [buttonLoading, setButtonLoading] = useState(false)
    const [order, setOrder] = useState('')

    const getOrder = (event) => {
        switch (event.field) {
            case 'name':
                if (event.order === 'ascend') {
                    setOrder('name')
                    return 'name'
                } else if (event.order === 'descend') {
                    setOrder('-name')
                    return '-name'
                } else {
                    setOrder('')
                    return ''
                }
            case 'qty':
                if (event.order === 'ascend') {
                    setOrder('qty')
                    return 'qty'
                } else if (event.order === 'descend') {
                    setOrder('-qty')
                    return '-qty'
                } else {
                    setOrder('')
                    return ''
                }
            case 'created_at':
                if (event.order === 'ascend') {
                    setOrder('created_at')
                    return 'created_at'
                } else if (event.order === 'descend') {
                    setOrder('-created_at')
                    return '-created_at'
                } else {
                    setOrder('')
                    return ''
                }
            case 'making_time':
                if (event.order === 'ascend') {
                    setOrder('making_time')
                    return 'making_time'
                } else if (event.order === 'descend') {
                    setOrder('-making_time')
                    return '-making_time'
                } else {
                    setOrder('')
                    return ''
                }
            default:
                return ''
        }
    }

    const onPaginationChange = (page) => {
        setCurrentPage(page)
        if (viewType === 'all-food') {
            dispatch(
                fetchOwnerFoodsList({
                    page: page,
                    pageSize: 10,
                    filters: currentRestaurant
                        ? { restaurant: currentRestaurant && currentRestaurant, name: searchValue }
                        : { name: searchValue },
                    ordering: order,
                })
            )
        } else if (viewType === 'published') {
            dispatch(
                fetchPublishedFoods({
                    page: page,
                    pageSize: 10,
                    status: 'published',
                    ordering: order,
                })
            )
        } else if (viewType === 'pending') {
            dispatch(
                fetchPublishedFoods({
                    page: page,
                    pageSize: 10,
                    status: 'pending',
                    ordering: order,
                })
            )
        } else if (viewType === 'draft') {
            dispatch(
                fetchDraftFoodsList({
                    page: 1,
                    pageSize: 10,
                })
            )
        }
    }

    const showModal = (id) => {
        setIsModalOpen(true)
        setId(id)
    }
    const onFinish = (value) => {
        setButtonLoading(true)
        if (id !== null) {
            deleteFoodRequestApi(id, value)
                .then((response) => {
                    setButtonLoading(false)
                    setIsModalOpen(false)
                    notification['success']({
                        message: 'Successfully added on delete list',
                        placement: 'topRight',
                    })
                    form.resetFields()
                })
                .catch((error) => {
                    setButtonLoading(false)
                    setIsModalOpen(false)
                    displayFormError(form, error)
                    form.resetFields()
                })
        } else {
            notification['error']({
                message: 'Sorry, This not a valid food ',
                placement: 'topRight',
            })
            form.resetFields()
            setIsModalOpen(false)
        }
    }
    const handleCancel = () => {
        setIsModalOpen(false)
        form.resetFields()
    }
    const handleSort = (pagination, filters, sorter) => {
        setSortedInfo(sorter)
        dispatch(
            fetchOwnerFoodsList({
                page: currentPage,
                pageSize: 10,
                filters: currentRestaurant
                    ? { restaurant: currentRestaurant && currentRestaurant, name: searchValue }
                    : { name: searchValue },
                ordering: getOrder(sorter),
            })
        )
    }

    const columns = [
        {
            key: 'name',
            title: 'Name',
            dataIndex: 'name',
            ellipsis: true,
            sorter: true,
            sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
            // sortOrder: ['descend', 'ascend', null],
        },
        {
            title: 'Type',
            dataIndex: 'type',
            ellipsis: true,
            render: (_, { type }) => (
                <>
                    {type.length > 0
                        ? type.map((el, index) => (
                              <span key={el.id}>
                                  {el.name}
                                  {index !== type.length - 1 && <span>,</span>}
                              </span>
                          ))
                        : '--'}
                </>
            ),
        },
        {
            key: 'created_at',
            title: 'Date',
            dataIndex: 'created_at',
            ellipsis: true,
            render: (_, { created_at }) => (
                <>
                    <span>{created_at ? convertDatetimeToLocal(created_at) : '--'}</span>
                </>
            ),
            sorter: true,
            sortOrder: sortedInfo.columnKey === 'created_at' ? sortedInfo.order : null,
        },
        {
            key: 'qty',
            title: 'Quantity',
            dataIndex: 'qty',
            ellipsis: true,
            render: (_, { qty }) => (
                <>
                    <span>{qty ? qty : '--'}</span>
                </>
            ),
            sorter: true,
            sortOrder: sortedInfo.columnKey === 'qty' ? sortedInfo.order : null,
        },
        {
            key: 'making_time',
            title: 'Cooking time',
            dataIndex: 'making_time',
            ellipsis: true,
            render: (_, { making_time, making_time_type }) => (
                <>
                    <span>{making_time}</span> <span>{making_time_type ? making_time_type : '--'}</span>
                </>
            ),
            sorter: true,
            sortOrder: sortedInfo.columnKey === 'making_time' ? sortedInfo.order : null,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            ellipsis: false,
            render: (_, { status }) => (
                <>
                    <Tag color={status != 'pending' ? 'green' : 'blue'}>{status?.toUpperCase()}</Tag>
                </>
            ),
        },
        {
            title: 'Actions',
            dataIndex: 'action',
            ellipsis: true,
            render: (_, data) => (
                <>
                    <Row gutter={12}>
                        {/* <Col>
                            <Link href={`/dashboard/foods/${data.slug}/edit`} as={`/dashboard/foods/${data.slug}/edit`}>
                                <a>
                                    <EditOutlined className={'!text-xl'} />
                                </a>
                            </Link>
                        </Col> */}
                        <Col className={'mr-0 md:mr-5'}>
                            <Link href={`/foods/${data.slug}`} as={`/foods/${data.slug}`}>
                                <a>
                                    <Tooltip title='View'>
                                        <EyeFilled className={'!text-xl text-white'} />
                                    </Tooltip>
                                </a>
                            </Link>
                        </Col>
                        <Col>
                            <Tooltip title='Want to delete'>
                                <DeleteOutlined
                                    onClick={() => showModal(data.slug)}
                                    className={'text-base text-red-700'}
                                />
                            </Tooltip>
                        </Col>
                    </Row>
                </>
            ),
        },
    ]
    // const getSortOrder = (column) => {
    //     console.log(column)
    //     if (!sortOrder[column]) {
    //         return null
    //     }
    //     return sortOrder[column]
    // }

    // const columnsWithSort = columns.map((column) => ({
    //     ...column,
    //     sortOrder: getSortOrder(column.key),
    //     //  onHeaderCell: () => ({

    //     //      onClick: (e) => console.log(e),
    //     //      style: { cursor: 'pointer', backgroundColor: sortOrder[column.key] ? '#e6f7ff' : '' },
    //     //  }),
    // }))

    return (
        <>
            <Table
                rowKey='id'
                columns={columns}
                xs={{ direction: '' }}
                dataSource={data}
                pagination={false}
                loading={loading}
                onChange={handleSort}
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
                title='Confirmation!'
                open={isModalOpen}
                onCancel={handleCancel}
                cancelButtonProps={{ style: { display: 'none' } }}
                okButtonProps={{ style: { display: 'none' } }}
            >
                <Typography>
                    <Divider />
                    <p>Why do you want to delete this food:</p>
                </Typography>
                <Row>
                    <Col span={24}>
                        <Form name='delete_reason' onFinish={onFinish} form={form}>
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
            </Modal>
        </>
    )
}

export default FoodsTable
