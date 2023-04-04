import React, { useState } from 'react'
import { Pagination, Row, Table } from 'antd'
import { useDispatch } from 'react-redux'
import { fetchRestaurantDeleteList } from '@/stores/restaurants'

const DeletedRestaurantsTable = ({ data, loading, count, currentPage, setCurrentPage, status, searchValue }) => {
    const dispatch = useDispatch()

    const [sortOrderRaw, setSortOrderRaw] = useState('')

    const onPaginationChange = (page) => {
        if (status === 'delete') {
            setCurrentPage(page)
            dispatch(
                fetchRestaurantDeleteList({ page: page, pageSize: 10, search: searchValue, ordering: sortOrderRaw })
            )
        }
    }

    const handleSort = (e) => {
        if (e.order === 'descend') {
            setSortOrderRaw(e.column?.title === 'Name' ? '-restaurant__name' : '-restaurant__city__name')
            dispatch(
                fetchRestaurantDeleteList({
                    page: 1,
                    pageSize: 10,
                    status: status && status,
                    ordering: e.column?.title === 'Name' ? '-restaurant__name' : '-restaurant__city__name',
                })
            )
        } else if (e.order === 'ascend') {
            setSortOrderRaw(e.column?.title === 'Name' ? 'restaurant__name' : 'restaurant__city__name')
            dispatch(
                fetchRestaurantDeleteList({
                    page: 1,
                    pageSize: 10,
                    status: status && status,
                    ordering: e.column?.title === 'Name' ? 'restaurant__name' : 'restaurant__city__name',
                })
            )
        } else if (e.order === undefined) {
            setSortOrderRaw('')
            dispatch(
                fetchRestaurantDeleteList({
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
            ellipsis: true,
            sorter: true,
            render: (_, { restaurant }) => (
                <>
                    <span>{restaurant?.name ? restaurant?.name : 'Not added'}</span>
                </>
            ),
        },
        {
            title: 'Address',
            ellipsis: true,
            render: (_, { restaurant }) => (
                <>
                    <span>{restaurant?.address ? restaurant?.address : 'Not added'}</span>
                </>
            ),
        },
        {
            title: 'City',
            ellipsis: true,
            sorter: true,
            render: (_, { restaurant }) => (
                <>
                    <span>{restaurant?.city?.name ? restaurant?.city?.name : 'Not added'}</span>
                </>
            ),
        },
        {
            title: 'Country',
            ellipsis: true,
            render: (_, { restaurant }) => (
                <>
                    <span>{restaurant?.country?.name ? restaurant?.country?.name : 'Not added'}</span>
                </>
            ),
        },
        // {
        //     title: 'Status',
        //     dataIndex: 'status',
        //     ellipsis: true,
        //     render: (_, { status }) => (
        //         <>
        //             <Tag color={status !== 'pending' ? 'green' : 'blue'}>{status?.toUpperCase()}</Tag>
        //         </>
        //     ),
        // },
        // {
        //     title: 'View',
        //     dataIndex: 'view',
        //     render: (_, data) => (
        //         <>
        //             <Row gutter={12} justify={'start'}>
        //                 <Col>
        //                     <Link href={`/restaurants/${data.slug}`} as={`/restaurants/${data.slug}`}>
        //                         <a>
        //                             <EyeFilled className={'!text-xl'} />
        //                         </a>
        //                     </Link>
        //                 </Col>
        //             </Row>
        //         </>
        //     ),
        // },
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

export default DeletedRestaurantsTable
