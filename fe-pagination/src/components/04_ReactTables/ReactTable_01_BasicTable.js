import React, { useMemo } from 'react';
import { useTable } from "react-table";
import MOCK_DATA from "../../data/MOCK_DATA_CUSTOMERS.json";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import "./BasicTable.css"


const ReactTable_BasicTable = () => {
    const columns = useMemo(() => COLUMNS, []) // COLUMNS GROUPED_COLUMNS
    
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns, // ES6 syntax columns:columns
        data: data,
    })

    // get functions and arrays from reactTable hook
    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        footerGroups,
        rows, 
        prepareRow } = tableInstance;

    return (
        <>
            <div>react-table BasicTable</div>
            <table className="table-bob" {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column, index) => (
                                        <th key={index} {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell, index) => {
                                            return (
                                                <td key={index} {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )

                        })
                    }
                </tbody>
                <tfoot>
                    {
                        footerGroups.map((footerGroup) => (
                            <tr {...footerGroup.getFooterGroupProps()}>
                                {
                                    footerGroup.headers.map(column => (
                                        <td {...column.getFooterProps()}>
                                            {column.render('Footer')}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tfoot>

            </table>
        </>
    )
}

export default ReactTable_BasicTable;
