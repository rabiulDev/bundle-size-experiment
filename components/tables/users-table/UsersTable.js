import { Button, Pagination, Space, Table } from 'antd'
import PropTypes from 'prop-types'
import TablePagination from '../../pagination/table-pagination/TablePagination'

const UsersTable = ({ loading, data, count, currentPage, onPaginationChange, ActionsComponent }) => {
      const columns = [
            {
                  title: 'First name',
                  dataIndex: 'first_name',
                  key: 'first_name',
            },
            {
                  title: 'Last name',
                  dataIndex: 'last_name',
                  key: 'last_name',
            },
            {
                  title: 'Email',
                  dataIndex: 'email',
                  key: 'email',
            },
      ]

      if (ActionsComponent) {
            columns.push({
                  title: 'Action',
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

UsersTable.propTypes = {
      loading: PropTypes.bool.isRequired,
      data: PropTypes.array.isRequired,
      count: PropTypes.number.isRequired,
      currentPage: PropTypes.number.isRequired,
      onPaginationChange: PropTypes.func.isRequired,
}

export default UsersTable
