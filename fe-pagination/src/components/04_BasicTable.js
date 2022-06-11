import React, { useMemo } from  'react';
import { useTable } from "react-table";
import MOCK_DATA from "../data/MOCK_DATA_CUSTOMERS.json";
import { COLUMNS } from "./columns";
import "./04_BasicTable.css"


const BasicTable = () => {
  const columns = useMemo(() => COLUMNS,[])
  const data = useMemo(() => MOCK_DATA,[])

  const tableInstance =  useTable({
      columns, // ES6 syntax columns:columns
      data: data,
  })  

  // get functions and arrays from reactTable hook
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance;

  return (
    <>
    <div>BasicTable</div>
    <table {...getTableProps()}>
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
                            row.cells.map((cell, index)=>{
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

    </table>
    </>
    )
}

export default BasicTable;
