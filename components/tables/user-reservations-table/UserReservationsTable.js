import { Table, Tag } from 'antd'
import PropTypes from 'prop-types'
import TablePagination from '../../pagination/table-pagination/TablePagination'
import { convertDatetimeToLocal } from '../../../utils/moment'
import Link from 'next/link'

const UserReservationsTable = ({
      loading,
      data,
      count,
      currentPage,
      onPaginationChange,
      ActionsComponent,
      showUserName = false,
}) => {
      const columns = [
            {
                  title: 'ID',
                  dataIndex: 'id',
                  key: 'id',
            },
            {
                  title: 'Start at',
                  dataIndex: 'start_at',
                  key: 'start_at',
                  render: (_, data) => convertDatetimeToLocal(_),
            },
            {
                  title: 'End at',
                  dataIndex: 'end_at',
                  key: 'end_at',
                  render: (_, data) => convertDatetimeToLocal(_),
            },
            {
                  title: 'Reserved at',
                  dataIndex: 'created_at',
                  key: 'created_at',
                  render: (_, data) => convertDatetimeToLocal(_),
            },
            {
                  title: 'Bike',
                  dataIndex: 'bike',
                  key: 'bike',
                  render: (_, data) => {
                        return (
                              <Link href={`/dashboard/bikes/${_.id}`}>
                                    <a>
                                          <strong>Model: </strong> {_.model}
                                          <br />
                                          <strong>Color: </strong> {_.color}
                                          <br />
                                          <strong>Location: </strong> {_.location}
                                    </a>
                              </Link>
                        )
                  },
            },
            {
                  title: 'Status',
                  dataIndex: 'status',
                  key: 'status',
                  render: (_, data) => {
                        if (_ === 'reserved') {
                              return <Tag color='green'>Reserved</Tag>
                        } else if (_ === 'finished') {
                              return <Tag color='blue'>Finished</Tag>
                        } else {
                              return <Tag color='blue'>Cancelled</Tag>
                        }
                  },
            },
      ]

      if (showUserName) {
            columns.push({
                  title: 'User',
                  dataIndex: 'user',
                  key: 'user',
                  render: (_, data) => (
                        <Link href={`/dashboard/users/${_.id}`}>{_.first_name + ' ' + _.last_name}</Link>
                  ),
            })
      }

      if (ActionsComponent) {
            columns.push({
                  title: 'Action',
                  dataIndex: 'id',
                  key: 'action',
                  render: (_, data) => <ActionsComponent data={data} />,
            })
      }

      return (
            <>
                  <Table columns={columns} dataSource={data} loading={loading} rowKey='id' pagination={false} />
                  <TablePagination count={count} currentPage={currentPage} onChange={onPaginationChange} />
            </>
      )
}

UserReservationsTable.propTypes = {
      loading: PropTypes.bool.isRequired,
      data: PropTypes.array.isRequired,
      count: PropTypes.number.isRequired,
      currentPage: PropTypes.number.isRequired,
      onPaginationChange: PropTypes.func.isRequired,
      showUserName: PropTypes.bool,
}

export default UserReservationsTable
