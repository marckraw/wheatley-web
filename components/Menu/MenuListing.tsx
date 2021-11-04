import { GetMenuResponse } from '../../interfaces'
import { FC, useMemo } from 'react'
import { useTable } from 'react-table'
import styles from './table.module.scss'

interface MenusListingProps {
    items: GetMenuResponse
}

const MenusListing: FC<MenusListingProps> = (props) => {
    const { items } = props
    const data = useMemo(
        () => Object.entries(items).map(([id, item]) => item),
        [items]
    )
    const columns = useMemo(
        () => [
            {
                Header: 'title',
                accessor: 'title',
            },
        ],
        []
    )
    const tableInstance = useTable({ columns, data })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance

    return (
        <div>
            <table className={styles.tableContainer} {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr
                            {...headerGroup.getHeaderGroupProps()}
                            key={headerGroup.getHeaderGroupProps().key}
                        >
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps()}
                                    key={column.getHeaderProps().key}
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr
                                {...row.getRowProps()}
                                key={row.getRowProps().key}
                            >
                                {row.cells.map((cell) => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            key={cell.getCellProps().key}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default MenusListing
