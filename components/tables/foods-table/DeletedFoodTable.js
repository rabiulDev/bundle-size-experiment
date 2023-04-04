import React, { useState } from 'react'
import { Pagination, Row, Table, Tag } from 'antd'
import { useDispatch } from 'react-redux'
import { convertDatetimeToLocal } from '@/utils/moment'
import { fetchDeletedFoodList } from '@/stores/foods'

const DeletedFoodTable = ({ data, loading, count, currentPage, setCurrentPage, status }) => {
    const dispatch = useDispatch()
    const [order, setOrder] = useState('')

    const onPaginationChange = (page) => {
        if (status === 'delete') {
            setCurrentPage(page)
            dispatch(fetchDeletedFoodList({ page: page, pageSize: 10, ordering: order }))
        }
    }

    const columns = [
        {
            title: 'Name',
            ellipsis: true,
            sorter: true,
            dataIndex: 'food__name',
            render: (_, { food }) => (
                <>
                    <span>{food?.name ? food.name : '--'}</span>
                </>
            ),
        },
        {
            title: 'Type',
            ellipsis: true,
            render: (_, { food }) => (
                <>
                    {food.type?.length > 0
                        ? food.type?.map((el, index) => (
                              <span key={el.id}>
                                  {el.name}
                                  {index !== food.type?.length - 1 && <span>,</span>}
                              </span>
                          ))
                        : '--'}
                </>
            ),
        },
        {
            title: 'Date',
            ellipsis: true,
            dataIndex: 'food__created_at',
            sorter: true,
            render: (_, { food }) => (
                <>
                    <span>{food?.created_at ? convertDatetimeToLocal(food.created_at) : '--'}</span>
                </>
            ),
        },
        {
            title: 'Quantity',
            dataIndex: 'food__qty',
            sorter: true,
            render: (_, { food }) => (
                <>
                    <span>{food?.qty ? food?.qty : '--'}</span>
                </>
            ),
        },
        {
            title: 'Cooking time',
            ellipsis: true,
            dataIndex: 'food__making_time',
            sorter: true,
            render: (_, { food }) => (
                <>
                    <span>{food.making_time}</span>{' '}
                    <span>{food?.making_time_type ? food?.making_time_type : '--'}</span>
                </>
            ),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            ellipsis: false,
            render: (_, { food }) => (
                <>
                    <Tag color={food?.status != 'pending' ? 'green' : 'blue'}>{food?.status?.toUpperCase()}</Tag>
                </>
            ),
        },
    ]
    const getOrder = (event) => {
        switch (event.field) {
            case 'food__name':
                if (event.order === 'ascend') {
                    setOrder('food__name')
                    return 'food__name'
                } else if (event.order === 'descend') {
                    setOrder('-food__name')
                    return '-food__name'
                } else {
                    setOrder('')
                    return ''
                }
            case 'food__qty':
                if (event.order === 'ascend') {
                    setOrder('food__qty')
                    return 'food__qty'
                } else if (event.order === 'descend') {
                    setOrder('-food__qty')
                    return '-food__qty'
                } else {
                    setOrder('')
                    return ''
                }
            case 'food__created_at':
                if (event.order === 'ascend') {
                    setOrder('food__created_at')
                    return 'food__created_at'
                } else if (event.order === 'descend') {
                    setOrder('-food__created_at')
                    return '-food__created_at'
                } else {
                    setOrder('')
                    return ''
                }
            case 'food__making_time':
                if (event.order === 'ascend') {
                    setOrder('food__making_time')
                    return 'food__making_time'
                } else if (event.order === 'descend') {
                    setOrder('-food__making_time')
                    return '-food__making_time'
                } else {
                    setOrder('')
                    return ''
                }
            default:
                return ''
        }
    }
    const handleSort = (e) => {
        dispatch(
            fetchDeletedFoodList({
                page: currentPage,
                pageSize: 10,
                ordering: getOrder(e),
            })
        )
    }
    return (
        <>
            <Table
                rowKey='id'
                columns={columns}
                xs={{ direction: '' }}
                dataSource={data}
                pagination={false}
                loading={loading}
                onChange={(sorter, extra, e) => {
                    handleSort(e)
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
        </>
    )
}

export default DeletedFoodTable
