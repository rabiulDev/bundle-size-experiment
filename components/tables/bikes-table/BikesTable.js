import { Button, Pagination, Rate, Space, Table } from 'antd'
import PropTypes from 'prop-types'
import TablePagination from '../../pagination/table-pagination/TablePagination'

const BikesTableDeleteButton = () => {
      return (
            <Button type='primary' danger ghost>
                  Delete
            </Button>
      )
}

const BikesTable = ({ loading, data, count, currentPage, onPaginationChange, ActionsComponent }) => {
      const columns = [
            {
                  title: 'Model',
                  dataIndex: 'model',
                  key: 'model',
            },
            {
                  title: 'Color',
                  dataIndex: 'color',
                  key: 'color',
            },
            {
                  title: 'Location',
                  dataIndex: 'location',
                  key: 'location',
            },
            {
                  title: 'Rating',
                  dataIndex: 'rating',
                  key: 'rating',
                  render: (_, data) => <Rate disabled allowHalf value={_} />,
            },
            {
                  title: 'Status',
                  key: 'is_available',
                  dataIndex: 'is_available',
                  render: (_, { is_available }) => {
                        if (is_available) {
                              return 'Available'
                        }

                        return 'Not available'
                  },
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

BikesTable.propTypes = {
      loading: PropTypes.bool.isRequired,
      data: PropTypes.array.isRequired,
      count: PropTypes.number.isRequired,
      currentPage: PropTypes.number.isRequired,
      onPaginationChange: PropTypes.func.isRequired,
}

export default BikesTable
